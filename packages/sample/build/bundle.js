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
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/pointer */ "../engine/dist/extensions/pointer.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensions/transform */ "../engine/dist/extensions/transform.js");
/* harmony import */ var _resources_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/resources */ "../engine/dist/resources/resources.js");
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
    this.resources = new _resources_resources__WEBPACK_IMPORTED_MODULE_4__.Resources();
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

      if (!_extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      var handler = this.hitTestHandlers.get(component.type);

      if (handler) {
        var _context$local = context.local,
            x = _context$local.x,
            y = _context$local.y;
        var result = handler(component, context);

        if (result) {
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, context.type, x, y, context.id);
        }

        if (context.type === 'pointerMove') {
          if (result && !component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', x, y, context.id);
          } else if (!result && component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, context.id);
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
      var matrix = _extensions_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
      var colorTransform = _extensions_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getColorTransform(component);
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
      var matrix = _extensions_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
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

/***/ "../engine/dist/extensions/pivot.js":
/*!******************************************!*\
  !*** ../engine/dist/extensions/pivot.js ***!
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

/***/ "../engine/dist/extensions/pointer.js":
/*!********************************************!*\
  !*** ../engine/dist/extensions/pointer.js ***!
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

/***/ "../engine/dist/extensions/source.js":
/*!*******************************************!*\
  !*** ../engine/dist/extensions/source.js ***!
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

/***/ "../engine/dist/extensions/transform.js":
/*!**********************************************!*\
  !*** ../engine/dist/extensions/transform.js ***!
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
/* harmony export */   "Source": () => /* reexport safe */ _extensions_source__WEBPACK_IMPORTED_MODULE_6__.Source,
/* harmony export */   "Pivot": () => /* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_7__.Pivot,
/* harmony export */   "applyMouseSupportExtension": () => /* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_11__.applyMouseSupportExtension,
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
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/pointer */ "../engine/dist/extensions/pointer.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/transform */ "../engine/dist/extensions/transform.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extensions/source */ "../engine/dist/extensions/source.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensions/pivot */ "../engine/dist/extensions/pivot.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/component */ "../engine/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/container */ "../engine/dist/components/container.js");
/* harmony import */ var _input_keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/keyboard */ "../engine/dist/input/keyboard.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/mouse */ "../engine/dist/input/mouse.js");
/* harmony import */ var _input_touch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/touch */ "../engine/dist/input/touch.js");
/* harmony import */ var _resources_resources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resources/resources */ "../engine/dist/resources/resources.js");
















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

/***/ "../engine/dist/resources/resources.js":
/*!*********************************************!*\
  !*** ../engine/dist/resources/resources.js ***!
  \*********************************************/
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
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/unit.ts");



function main() {
    function onUnitClick(data) {
        console.log('onUnitClick', data.title);
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
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({ title: 'Archer!\nHealth: 100%', image: _assets__WEBPACK_IMPORTED_MODULE_0__.ARCHER, onClick: onUnitClick }),
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({ title: 'Animalist!\nHealth: 100%', image: _assets__WEBPACK_IMPORTED_MODULE_0__.ANIMALIST, onClick: onUnitClick }),
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
    return {
        type: 'container',
        x: 50 + Math.random() * 400,
        y: 200,
        rotation: 0,
        onUpdate(time) {
            this.x += this.children.image.scaleX * time * SPEED;
            if (this.x < 50) {
                this.children.image.scaleX = 1;
            }
            else if (this.x > 400) {
                this.children.image.scaleX = -1;
            }
        },
        children: {
            text: {
                type: 'text',
                text: props.title,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQvdG91Y2guanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvcmVzb3VyY2VzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMtY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiQ2FudmFzU3VwcG9ydCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQyZCIsImdldENvbnRleHQiLCJzZXRUcmFuc2Zvcm0iLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJTdXBwb3J0IiwiQ29tcG9uZW50IiwiaXNFbmFibGVkIiwiY29tcG9uZW50IiwiZW5hYmxlZCIsImlzVmlzaWJsZSIsInZpc2libGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkIiwiY2hpbGRyZW4iLCJjb3VudCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImtleXMiLCJPYmplY3QiLCJyZW5kZXIiLCJjb250ZXh0Iiwic3VwcG9ydCIsImNoaWxkQ29udGV4dCIsImdldFJlbmRlckNvbnRleHQiLCJpIiwiY29tcG9uZW50Q29udGV4dCIsInVwZGF0ZSIsImdldFVwZGF0ZUNvbnRleHQiLCJoaXRUZXN0IiwiZ2V0UG9pbnRlckNvbnRleHQiLCJyZXN1bHQiLCJhcHBseUNvbnRhaW5lckV4dGVuc2lvbiIsInVwZGF0ZUhhbmRsZXJzIiwic2V0IiwicmVuZGVySGFuZGxlcnMiLCJoaXRUZXN0SGFuZGxlcnMiLCJFTVBUWV9NQVRSSVgiLCJNYXRyaXgiLCJFbmdpbmUiLCJmdWxsc2NyZWVuIiwidXBkYXRlRW5hYmxlZCIsInJlbmRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsInBhdXNlZCIsInRpbWUiLCJtYXRyaXgiLCJpbnRlcm5hbFVwZGF0ZSIsImRlbHRhVGltZSIsInVwZGF0ZUZyYW1lIiwicm9vdCIsImJhc2UiLCJkZXB0aCIsImNsZWFyIiwiY29sb3JUcmFuc2Zvcm0iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkIiwic2V0U2l6ZSIsInVwZGF0ZVNpemUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJldmVudCIsInR5cGUiLCJpZCIsIngiLCJ5IiwibG9jYWwiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlRGVwdGgiLCJNYXAiLCJwcm9wZXJ0eUhhbmRsZXJzIiwicmVzb3VyY2VzIiwiUmVzb3VyY2VzIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcm9wZXJ0eSIsIm9uVXBkYXRlIiwiZ2V0IiwiUG9pbnRlciIsInBvaW50ZXJPdmVyIiwicGFyZW50IiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtZWRNYXRyaXgiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlck5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiRGVidWciLCJTb3VyY2UiLCJnZXRSZXNvdXJjZSIsInNvdXJjZSIsInNyYyIsImlzTG9hZGVkIiwicmVzb3VyY2UiLCJsb2FkZWQiLCJnZXRNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJjIiwidHgiLCJ0eSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJhcHBseUtleWJvYXJkU3VwcG9ydEV4dGVuc2lvbiIsImVuZ2luZSIsImVsZW1lbnQiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoUG9pbnRlckV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsImFwcGx5VG91Y2hTdXBwb3J0RXh0ZW5zaW9uIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJhcmdzIiwiU3RyaW5nIiwiZXJyb3JzIiwiZXJyb3IiLCJ3YXJuaW5ncyIsIndhcm4iLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJpc0VtcHR5IiwiYm91bmRzIiwidG9SZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiY29uY2F0IiwiY3QxIiwiY3QwIiwiaXNEZWZhdWx0IiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwiUG9pbnQiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsInJlY3RhbmdsZSIsInRlbXBDb250ZXh0IiwiaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0iLCJ1cGRhdGVUZW1wQ29udGV4dCIsInJlbmRlckNhbnZhc0NvbG9yIiwiaW1hZ2UiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwiYXBwbHlJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwicmVuZGVyQ2FudmFzIiwiYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiZ2V0Qm91bmRzIiwidW5kZWZpbmVkIiwiYWRkIiwicmVzb2x2ZUltYWdlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsIlJlY3RhbmdsZURhdGEiLCJjYWxjdWxhdGVCb3VuZHMiLCJFbGxpcHNlRGF0YSIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiY29tbWFuZCIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwicGF0aCIsIm1vdmVUbyIsImN1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwic3giLCJzeSIsIlRFU1RfQ09NTUFORCIsIlRFU1RfU1BBQ0UiLCJURVNUX05VTUJFUiIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwicG9zaXRpb24iLCJidWZmZXIiLCJzaXplIiwicmVhZENvbW1hbmQiLCJyZWFkTnVtYmVycyIsIm51bWJlciIsImNoYXIiLCJwYXJzZUZsb2F0IiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsInNldFBhdGgiLCJoYXNEYXRhIiwicmVhZE5leHQiLCJwYXJzZSIsImdldENvbW1hbmQiLCJnZXRCdWZmZXIiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJsaW5lVG8iLCJyZWFkZXIiLCJHcmFwaGljcyIsInNoYXBlIiwiZmlsbCIsInJlcGVhdCIsInNtb290aCIsInJhdGlvIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInRoaWNrbmVzcyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImNhcHMiLCJqb2ludHMiLCJtaXRlckxpbWl0Iiwic3Ryb2tlIiwiYmVnaW5QYXRoIiwicHVzaCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImgiLCJrIiwib3giLCJveSIsInhlIiwieWUiLCJ4bSIsInltIiwiZHgiLCJkeSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJyZW5kZXJTaGFwZSIsImFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24iLCJhcHBseVNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJTaGFwZSIsImdldEdyYXBoaWNzIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHQiLCJnZXRDaGFyV2lkdGgiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsImZpcnN0Iiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwibGluZSIsImFkdmFuY2UiLCJsZXR0ZXJTcGFjaW5nIiwiZ2V0VGV4dFdpZHRoIiwibGluZXMiLCJsaW5lV2lkdGgiLCJnZXRUZXh0SGVpZ2h0IiwibGVhZGluZyIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImdldFZhbGlkVGV4dEZvcm1hdCIsInRleHRGb3JtYXQiLCJnZXRBbGluZ1ZhbHVlIiwiZ2V0VmVydGljYWxBbGluZ1ZhbHVlIiwicmVuZGVyQ2FudmFzVGV4dCIsImJvcmRlciIsImJhY2tncm91bmQiLCJmb3JtYXRTaXplIiwiZm9ybWF0TGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJyZWN0IiwidGV4dEJhc2VsaW5lIiwiYWxpZ25WYWx1ZSIsImoiLCJmaWxsVGV4dCIsImFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiIsImFwcGx5VGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJUZXh0IiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsIlBJIiwicG93Iiwic3FydCIsInMiLCJUV0VFTiIsInVwZGF0ZVR3ZWVtIiwidHdlZW4iLCJwaGFzZXMiLCJvZmZzZXQiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwidG8iLCJmcm9tIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiLCJhcHBseVR3ZWVuRXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLFNBQVNBLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQ0MsS0FBbkMsRUFBMENDLEVBQTFDLEVBQThDO0FBQ2pELE1BQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLE1BQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLE1BQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsTUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsTUFBSSxDQUFDTSwrREFBQSxDQUF5QkwsRUFBekIsQ0FBTCxFQUFtQztBQUMvQkMsS0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxLQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLEtBQUMsR0FBSUEsQ0FBQyxHQUFHSCxFQUFFLENBQUNVLGNBQVAsR0FBd0JWLEVBQUUsQ0FBQ1csVUFBNUIsR0FBMEMsSUFBOUM7QUFDQVAsS0FBQyxHQUFJQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ1ksZUFBUCxHQUF5QlosRUFBRSxDQUFDYSxXQUE3QixHQUE0QyxJQUFoRDtBQUNIOztBQUNELE1BQUlULENBQUMsR0FBRyxJQUFSLEVBQWM7QUFDViwwQkFBZUgsQ0FBZixlQUFxQkMsQ0FBckIsZUFBMkJDLENB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QUFDLEdBQUcsQ0FDakMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0lBQzdCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksc0RBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzU3VwcG9ydCBmcm9tICcuL3N1cHBvcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgeyBDYW52YXNTdXBwb3J0LCB9O1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRGVmYXVsdChjdCkpIHtcbiAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICB9XG4gICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgIH1cbiAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG59XG4iLCJpbXBvcnQgeyBTdXBwb3J0IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzU3VwcG9ydCBleHRlbmRzIFN1cHBvcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHQyZCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMuY29udGV4dDJkLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgICBzZXRTaXplKHdpZHRoLCBoZWlnaHQsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgY29uc3Qgdmlld1dpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXM7XG4gICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IHZpZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB2aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBDb21wb25lbnQ7XG4oZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIENvbXBvbmVudC5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgQ29tcG9uZW50LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKENvbXBvbmVudCB8fCAoQ29tcG9uZW50ID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVIgPSAnY29udGFpbmVyJztcbmV4cG9ydCB2YXIgQ29udGFpbmVyO1xuKGZ1bmN0aW9uIChDb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBudW1DaGlsZHJlbihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgc3VwcG9ydC5yZW5kZXIoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC5yZW5kZXIoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC5yZW5kZXIoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjaGlsZCwgY29udGV4dCk7XG4gICAgICAgIHN1cHBvcnQudXBkYXRlKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQudXBkYXRlKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5ba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQudXBkYXRlKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5ba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBwb3J0LmhpdFRlc3QoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjaGlsZCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LnVwZGF0ZUhhbmRsZXJzLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBhcHBseUNvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmNvbnN0IEVNUFRZX01BVFJJWCA9IE1hdHJpeC5lbXB0eSgpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvaW50ZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAtMTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aGlzLnRpbWUgPT09IC0xID8gMCA6IHRpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGcmFtZShkZWx0YVRpbWUgLyAxMDAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdXBwb3J0ID0gc3VwcG9ydDtcbiAgICAgICAgYXBwbHlDb250YWluZXJFeHRlbnNpb24odGhpcy5zdXBwb3J0KTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUgPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC51cGRhdGUodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jbGVhcigpO1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBtYXRyaXg6IHRoaXMubWF0cml4LFxuICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQucmVuZGVyKHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmdWxsc2NyZWVuIH0gPSB0aGlzO1xuICAgICAgICBsZXQgdGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICAgICAgbGV0IHRhcmdldEhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcbiAgICAgICAgaWYgKGZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRhcmdldFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc2V0U2l6ZSh0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0LCBwaXhlbFJhdGlvKTtcbiAgICB9XG4gICAgdXBkYXRlRnJhbWUodGltZSA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5pbnRlcm5hbFVwZGF0ZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoUG9pbnRlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wb2ludGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0eXBlLCBpZCwgeCwgeSwgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBtYXRyaXg6IEVNUFRZX01BVFJJWCxcbiAgICAgICAgICAgIGxvY2FsOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIGdsb2JhbDogeyB4LCB5IH0sXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LmhpdFRlc3QodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXknKTtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAtMTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGF1c2UnKTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9yZXNvdXJjZXMvcmVzb3VyY2VzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURlcHRoID0gNjQ7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVySGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByb3BlcnR5SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICAgIH1cbiAgICB1cGRhdGUoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wZXJ0eUhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZShjb250ZXh0LnRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnJlbmRlckhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGl0VGVzdChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGl0VGVzdEhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNvbnRleHQubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgY29udGV4dC50eXBlLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0LnR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lOiBwYXJlbnQudGltZSxcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgc3VwcG9ydDogcGFyZW50LnN1cHBvcnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBjb2xvclRyYW5zZm9ybSA9IFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBtYXRyaXgpLFxuICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbG9yVHJhbnNmb3JtKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZE1hdHJpeCA9IE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgdHlwZTogcGFyZW50LnR5cGUsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIGdsb2JhbDogcGFyZW50Lmdsb2JhbCxcbiAgICAgICAgICAgIG1hdHJpeDogdHJhbnNmb3JtZWRNYXRyaXgsXG4gICAgICAgICAgICBsb2NhbDogTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCh0cmFuc2Zvcm1lZE1hdHJpeCwgcGFyZW50Lmdsb2JhbCksXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnLi4vdXRpbHMvZGVidWcnO1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3R5cGUuc2xpY2UoMSl9YDtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBEZWJ1Zy53YXJuaW5nKGBQb2ludGVyIGV2ZW50IHdpdGggdHlwZTogJHt0eXBlfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFNvdXJjZTtcbihmdW5jdGlvbiAoU291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UmVzb3VyY2Uoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzb3VyY2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5zdXBwb3J0LnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICB9XG4gICAgU291cmNlLmdldFJlc291cmNlID0gZ2V0UmVzb3VyY2U7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZ2V0UmVzb3VyY2Uoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuICEhcmVzb3VyY2U/LmxvYWRlZDtcbiAgICB9XG4gICAgU291cmNlLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG59KShTb3VyY2UgfHwgKFNvdXJjZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGE6IG1hdHJpeC5hID8/IDEsXG4gICAgICAgICAgICAgICAgYjogbWF0cml4LmIgPz8gMCxcbiAgICAgICAgICAgICAgICBjOiBtYXRyaXguYyA/PyAwLFxuICAgICAgICAgICAgICAgIGQ6IG1hdHJpeC5kID8/IDEsXG4gICAgICAgICAgICAgICAgdHg6IG1hdHJpeC50eCA/PyAwLFxuICAgICAgICAgICAgICAgIHR5OiBtYXRyaXgudHkgPz8gMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCB0eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIGNvbnN0IHR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGE6IGNvcyAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBiOiBzaW4gKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgYzogLXNpbiAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBkOiBjb3MgKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgdHgsXG4gICAgICAgICAgICAgICAgdHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiBzY2FsZVgsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IHNjYWxlWSxcbiAgICAgICAgICAgIHR4LFxuICAgICAgICAgICAgdHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgcmVkT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICBncmVlbk9mZnNldDogY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICBibHVlT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogdHJhbnNmb3JtLmFscGhhID8/IDEsXG4gICAgICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgcmVkT2Zmc2V0OiByICogdmFsdWUsXG4gICAgICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGcgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBibHVlT2Zmc2V0OiBiICogdmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IHRyYW5zZm9ybS5hbHBoYSA/PyAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9lbmdpbmUvc3VwcG9ydCc7XG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5pbXBvcnQgRGVidWcgZnJvbSAnLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQva2V5Ym9hcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L3RvdWNoJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL3Jlc291cmNlcyc7XG5leHBvcnQgeyBTdXBwb3J0LCBFbmdpbmUsIERlYnVnLCB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5S2V5Ym9hcmRTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xufVxuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gZWxlbWVudC5jbGllbnRUb3A7XG4gICAgZW5naW5lLmRpc3BhdGNoUG9pbnRlckV2ZW50KHtcbiAgICAgICAgdHlwZSwgeCwgeSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICB9KTtcbn1cbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgICAgICBjb25zdCBpZCA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICAgIGVuZ2luZS5kaXNwYXRjaFBvaW50ZXJFdmVudCh7XG4gICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnLi4vdXRpbHMvZGVidWcnO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgYWRkKGFzc2V0LCByZXNvdXJjZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICB9XG4gICAgcmVtb3ZlKGFzc2V0KSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmRlbGV0ZShhc3NldCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5jbGVhcigpO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIERlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWcge1xuICAgIHN0YXRpYyBsb2coLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHN0YXRpYyB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuRGVidWcuZXJyb3JzID0gbmV3IE1hcCgpO1xuRGVidWcud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJldHVybiBtaW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBtaW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBtYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBtYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IG1pblgsXG4gICAgICAgICAgICB5OiBtaW5ZLFxuICAgICAgICAgICAgd2lkdGg6IG1heFggLSBtaW5YLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXhZIC0gbWluWSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXIsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcixcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXIsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MC5hbHBoYU9mZnNldCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QwLnJlZE9mZnNldCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QwLmdyZWVuT2Zmc2V0LFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDAuYmx1ZU9mZnNldCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGlzRGVmYXVsdChjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmMsXG4gICAgICAgICAgICBiOiBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQsXG4gICAgICAgICAgICBjOiBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmMsXG4gICAgICAgICAgICBkOiBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQsXG4gICAgICAgICAgICB0eDogbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4LFxuICAgICAgICAgICAgdHk6IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgbWF0cml4LmEgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmQgPSAwO1xuICAgICAgICAgICAgbWF0cml4LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIG1hdHJpeC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCBhID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5hID0gZDtcbiAgICAgICAgICAgIG1hdHJpeC5iICo9IC1kZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5jICo9IC1kZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5kID0gYTtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gLW1hdHJpeC5hICogbWF0cml4LnR4IC0gbWF0cml4LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICBjb25zdCB0eSA9IC1tYXRyaXguYiAqIG1hdHJpeC50eCAtIG1hdHJpeC5kICogbWF0cml4LnR5O1xuICAgICAgICAgICAgbWF0cml4LnR4ID0gdHg7XG4gICAgICAgICAgICBtYXRyaXgudHkgPSB0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eCxcbiAgICAgICAgICAgIHk6IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IC1tYXRyaXgudHgsXG4gICAgICAgICAgICAgICAgeTogLW1hdHJpeC50eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKSxcbiAgICAgICAgICAgIHk6IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICB5OiB0b3AsXG4gICAgICAgICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiAhcmVjdGFuZ2xlLndpZHRoIHx8ICFyZWN0YW5nbGUuaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlLCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGFwcGx5SW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5sZXQgdGVtcENvbnRleHQ7XG5mdW5jdGlvbiBpc0RlZmF1bHRDb2xvclRyYW5zZm9ybShjdCkge1xuICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRlbXBDb250ZXh0KGNvbnRleHQpIHtcbiAgICBpZiAoIXRlbXBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0ZW1wQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBpZiAodGVtcENvbnRleHQuY2FudmFzLndpZHRoICE9PSBjb250ZXh0LmNhbnZhcy53aWR0aCkge1xuICAgICAgICB0ZW1wQ29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKHRlbXBDb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGNvbnRleHQuY2FudmFzLmhlaWdodCkge1xuICAgICAgICB0ZW1wQ29udGV4dC5jYW52YXMuaGVpZ2h0ID0gY29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYW52YXNDb2xvcihpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBjb250ZXh0KTtcbiAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzdXBwb3J0LCBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQ7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgIGlmIChpc0RlZmF1bHRDb2xvclRyYW5zZm9ybShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGVtcENvbnRleHQoY29udGV4dDJkKTtcbiAgICAgICAgY29uc3QgYm91bmRzID0gTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIHRlbXBDb250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZSh0ZW1wQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVyQ2FudmFzQ29sb3IpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhcyhpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBjb250ZXh0KTtcbiAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzSW1hZ2VFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckNhbnZhcyk7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHN1cHBvcnQucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEltYWdlLmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gSW1hZ2UuZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gISFib3VuZHMgJiYgUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlSW1hZ2UpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLWNhbnZhcyc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLWNhbnZhcy1jb2xvcic7XG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW1hZ2UoYXNzZXQpIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IERlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzLCByYWRpdXNYID0gMCwgcmFkaXVzWSA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1cyA/PyByYWRpdXNYO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1cyA/PyByYWRpdXNZO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgVEVTVF9DT01NQU5EID0gL1tNbUxsSGhWdkNjU3NRcVR0QWFael0vO1xuY29uc3QgVEVTVF9TUEFDRSA9IC9bXFxzLF0vO1xuY29uc3QgVEVTVF9OVU1CRVIgPSAvWy0rLlxcZF0vO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnJlYWRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMucmVhZE51bWJlcnMoKTtcbiAgICB9XG4gICAgcmVhZENvbW1hbmQoKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX0NPTU1BTkQudGVzdChjb21tYW5kKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVhZE51bWJlcnMoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIGxldCBudW1iZXIgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24gPCB0aGlzLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5wYXRoW3RoaXMucG9zaXRpb25dO1xuICAgICAgICAgICAgaWYgKFRFU1RfTlVNQkVSLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfU1BBQ0UudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfQ09NTUFORC50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5zaXplKytdID0gcGFyc2VGbG9hdChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmhhc0RhdGEoKTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLF0gPSBidWZmZXI7XG4gICAgICAgIGxldCBjeCA9IDA7XG4gICAgICAgIGxldCBjeSA9IDA7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTI7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTIgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIuaGFzRGF0YSgpKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZE5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlLWNhbnZhcyc7XG4iLCJpbXBvcnQgeyBhcHBseVNoYXBlRXh0ZW5zaW9uLCBTSEFQRSB9IGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoYXBlKHNoYXBlLCBjb250ZXh0KSB7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlTaGFwZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChTSEFQRSwgcmVuZGVyU2hhcGUpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhpY3Moc2hhcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljcyhzaGFwZSk7XG4gICAgfVxuICAgIFNoYXBlLmdldEdyYXBoaWNzID0gZ2V0R3JhcGhpY3M7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKHNoYXBlKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBTaGFwZS5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IFNoYXBlLmdldEJvdW5kcyhzaGFwZSk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNoYXBlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoU0hBUEUsIGhpdFRlc3QpO1xuICAgIHN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZUltYWdlKTtcbn1cbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlRm9udChmb250LCBzaXplKSB7XG4gICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlRm9udChmb250LCBzaXplKTtcbiAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgY2hhcik7XG4gICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgfVxuICAgIHJldHVybiBrZXJuaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICB9XG4gICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250KG5hbWUpIHtcbiAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgIH07XG4gICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICB9XG4gICAgcmV0dXJuIGZvbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSkge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaSk7XG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0LnNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmxldHRlclNwYWNpbmcgJiYgbGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHdpZHRoICs9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nICogKGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcykge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBpZiAod2lkdGggPCBsaW5lV2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpIHtcbiAgICBsZXQgaGVpZ2h0ID0gZm9ybWF0LnNpemUgKiBsaW5lcy5sZW5ndGg7XG4gICAgaWYgKGZvcm1hdC5sZWFkaW5nICYmIGxpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaGVpZ2h0ICs9IGZvcm1hdC5sZWFkaW5nICogKGxpbmVzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgc2l6ZTogMTUsXG4gICAgY29sb3I6IDAsXG4gICAgYWxwaGE6IDEsXG4gICAgYm9sZDogZmFsc2UsXG4gICAgaXRhbGljOiBmYWxzZSxcbiAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgbGVhZGluZzogMCxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxufTtcbmNvbnN0IGZvcm1hdCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0KSB7XG4gICAgZm9ybWF0LmZvbnQgPSB0ZXh0Rm9ybWF0Py5mb250ID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQ7XG4gICAgZm9ybWF0LnNpemUgPSB0ZXh0Rm9ybWF0Py5zaXplID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgZm9ybWF0LmNvbG9yID0gdGV4dEZvcm1hdD8uY29sb3IgPz8gZGVmYXVsdFRleHRGb3JtYXQuY29sb3I7XG4gICAgZm9ybWF0LmFscGhhID0gdGV4dEZvcm1hdD8uYWxwaGEgPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxwaGE7XG4gICAgZm9ybWF0LmJvbGQgPSB0ZXh0Rm9ybWF0Py5ib2xkID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmJvbGQ7XG4gICAgZm9ybWF0Lml0YWxpYyA9IHRleHRGb3JtYXQ/Lml0YWxpYyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5pdGFsaWM7XG4gICAgZm9ybWF0LnVuZGVybGluZSA9IHRleHRGb3JtYXQ/LnVuZGVybGluZSA/PyBkZWZhdWx0VGV4dEZvcm1hdC51bmRlcmxpbmU7XG4gICAgZm9ybWF0LmxldHRlclNwYWNpbmcgPSB0ZXh0Rm9ybWF0Py5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgZm9ybWF0LmxlYWRpbmcgPSB0ZXh0Rm9ybWF0Py5sZWFkaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgZm9ybWF0LmFsaWduID0gdGV4dEZvcm1hdD8uYWxpZ24gPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxpZ247XG4gICAgZm9ybWF0LnZlcnRpY2FsQWxpZ24gPSB0ZXh0Rm9ybWF0Py52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGluZ1ZhbHVlKGFsaWduKSB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoYWxpZ24pIHtcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQtY2FudmFzJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQYXR0ZXJuIH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBnZXRBZHZhbmNlLCBnZXRGb250LCBnZXRMaW5lV2lkdGgsIGdldFN0eWxlRm9udCwgZ2V0VGV4dEhlaWdodCwgZ2V0VGV4dFdpZHRoLCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBhcHBseVRleHRFeHRlbnNpb24sIFRFWFQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgZ2V0QWxpbmdWYWx1ZSwgZ2V0VmVydGljYWxBbGluZ1ZhbHVlLCBnZXRWYWxpZFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzVGV4dChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHRGb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgY29uc3QgZm9ybWF0U2l6ZSA9IGZvcm1hdC5zaXplO1xuICAgIGNvbnN0IGZvcm1hdExldHRlclNwYWNpbmcgPSBmb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICBjb25zdCBmb3JtYXRMZWFkaW5nID0gZm9ybWF0LmxlYWRpbmc7XG4gICAgY29uc3QgZm9udCA9IGdldEZvbnQoZm9ybWF0LmZvbnQpO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgdGV4dEhlaWdodCA9IGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gdGV4dFdpZHRoO1xuICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gdGV4dEhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICBsZXQgeSA9IDA7XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoZm9ybWF0LnZlcnRpY2FsQWxpZ24pO1xuICAgICAgICB5ID0gKGhlaWdodCAtIHRleHRIZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIGNvbnRleHQyZC5mb250ID0gZ2V0U3R5bGVGb250KGZvcm1hdC5mb250LCBmb3JtYXRTaXplKTtcbiAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oZm9ybWF0LmNvbG9yLCBmb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB5ICs9IG9mZnNldFk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gZ2V0QWxpbmdWYWx1ZShmb3JtYXQuYWxpZ24pO1xuICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lV2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGogKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdFNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KGZpcnN0LCB4LCB5ICsgZm9ybWF0U2l6ZSk7XG4gICAgICAgICAgICB4ICs9IGFkdmFuY2UgKyBmb3JtYXRMZXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIHkgKz0gZm9ybWF0U2l6ZSArIGZvcm1hdExlYWRpbmc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KFRFWFQsIHJlbmRlckNhbnZhc1RleHQpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGdldFZhbGlkVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IGdldEZvbnQsIGdldFRleHRXaWR0aCwgZ2V0VGV4dEhlaWdodCB9IGZyb20gJy4vZm9udCc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgdGV4dEZvcm1hdCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBnZXRGb250KGZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIHdpZHRoID0gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0LmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gVGV4dC5nZXRCb3VuZHModGV4dCk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRleHRFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChURVhULCBoaXRUZXN0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUd2VlbShjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG4gICAgdHdlZW4udGltZSArPSBjb250ZXh0LnRpbWU7XG4gICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUd2VlbkV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5wcm9wZXJ0eUhhbmRsZXJzLnNldChUV0VFTiwgdXBkYXRlVHdlZW0pO1xufVxuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZDoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGQuY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBJTUFHRV9BU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtJTUFHRV9BU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IFBpdm90LCBSZW5kZXJDb250ZXh0LCBTdXBwb3J0IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHtcblx0YXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlLFxufSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckltYWdlKGltYWdlOiBJbWFnZSwgY29udGV4dDogUmVuZGVyQ29udGV4dCk6IHZvaWQge1xuXHRpZiAoIWltYWdlLnNyYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcblxuXHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uc3QgcmVzb3VyY2UgPSBzdXBwb3J0LnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0IGFzIENhbnZhc1N1cHBvcnQ7XG5cblx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRtYXRyaXguYSxcblx0XHRtYXRyaXguYixcblx0XHRtYXRyaXguYyxcblx0XHRtYXRyaXguZCxcblx0XHRtYXRyaXgudHgsXG5cdFx0bWF0cml4LnR5LFxuXHQpO1xuXG5cdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuXHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q3VzdG9tSW1hZ2VFeHRlbnNpb24oc3VwcG9ydDogU3VwcG9ydCkge1xuXHRhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuXHRzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVySW1hZ2UpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlLCByZXNvbHZlSW1hZ2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gcmVzb2x2ZUltYWdlKHVybCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHREZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IGFwcGx5Q3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU3VwcG9ydCBleHRlbmRzIENhbnZhc1N1cHBvcnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbih0aGlzKTtcblx0XHRhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uKHRoaXMpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgeyBjb250ZXh0MmQgfSA9IHRoaXM7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLnRpdGxlKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0Jyxcblx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0XHRcdHRoaWNrbmVzczogMixcblx0XHRcdFx0XHRcdGZpbGw6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnY2lyY2xlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTAgMTAgSCA5MCBWIDkwIEggMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHsgdGl0bGU6ICdBcmNoZXIhXFxuSGVhbHRoOiAxMDAlJywgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2sgfSksXG5cdFx0XHRcdFx0dW5pdCh7IHRpdGxlOiAnQW5pbWFsaXN0IVxcbkhlYWx0aDogMTAwJScsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrIH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IFthcnRpZmFjdCgpXSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0dGl0bGU6IHN0cmluZyxcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IHByb3BzLnRpdGxlLFxuXHRcdFx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbmdpbmUsIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgYXBwbHlUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdHdlZW4nO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgQ3VzdG9tU3VwcG9ydCBmcm9tICcuL2VuZ2luZS9zdXBwb3J0JztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4oKTtcbmFwcC5zdGFydCgpO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUobmV3IENhbnZhc1N1cHBvcnQoKSk7XG5hcHBseUNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uKGVuZ2luZS5zdXBwb3J0KTtcbmFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlUd2VlbkV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbmVuZ2luZS5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgRW5naW5lKG5ldyBDdXN0b21TdXBwb3J0KCkpO1xuY3VzdG9tRW5naW5lLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlRW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS5wbGF5KCk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50KTtcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGxheSgpLCAxMDAwMCk7XG5cbi8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==