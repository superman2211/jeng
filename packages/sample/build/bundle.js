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
/*! export Bounds [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Bounds */
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
/*! export Bounds [provided] [unused] [could be renamed] -> ../geom/dist/bounds.js .Bounds */
/*! export ColorTransform [provided] [used in main] [could be renamed] -> ../geom/dist/color-transform.js .ColorTransform */
/*! export Matrix [provided] [used in main] [could be renamed] -> ../geom/dist/matrix.js .Matrix */
/*! export Rectangle [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../geom/dist/point.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform,
/* harmony export */   "Matrix": () => /* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix,
/* harmony export */   "Rectangle": () => /* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle
/* harmony export */ });
/* harmony import */ var _color_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-transform */ "../geom/dist/color-transform.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "../geom/dist/bounds.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "../geom/dist/matrix.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "../geom/dist/point.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_point__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_point__WEBPACK_IMPORTED_MODULE_3__, "Rectangle")) __webpack_require__.d(__webpack_exports__, { "Rectangle": function() { return _point__WEBPACK_IMPORTED_MODULE_3__.Rectangle; } });
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



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

/***/ "../image/dist/image-canvas.js":
/*!*************************************!*\
  !*** ../image/dist/image-canvas.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyCanvasImageExtension [provided] [used in main] [could be renamed] */
/*! export renderCanvas [provided] [unused] [could be renamed] */
/*! export renderCanvasWithColorTransform [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasImageExtension": () => /* binding */ applyCanvasImageExtension
/* harmony export */ });
/* unused harmony exports renderCanvas, renderCanvasWithColorTransform */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");



var tempContext;
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

function renderCanvasWithColorTransform(image, context) {
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
  var _resource$image2 = resource.image,
      width = _resource$image2.width,
      height = _resource$image2.height;
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
function applyCanvasImageExtension(support, options) {
  (0,_image__WEBPACK_IMPORTED_MODULE_2__.applyImageExtension)(support);

  if (options === null || options === void 0 ? void 0 : options.colorTransform) {
    support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_2__.IMAGE, renderCanvasWithColorTransform);
  } else {
    support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_2__.IMAGE, renderCanvas);
  }
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
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources */ "../image/dist/resources.js");



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
  support.resources.resolvers.add(_resources__WEBPACK_IMPORTED_MODULE_2__.resolveImage);
}

/***/ }),

/***/ "../image/dist/index.js":
/*!******************************!*\
  !*** ../image/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] -> ../image/dist/image.js .IMAGE */
/*! export Image [provided] [unused] [could be renamed] -> ../image/dist/image.js .Image */
/*! export applyCanvasImageExtension [provided] [used in main] [could be renamed] -> ../image/dist/image-canvas.js .applyCanvasImageExtension */
/*! export applyImageExtension [provided] [used in main] [could be renamed] -> ../image/dist/image.js .applyImageExtension */
/*! export hitTest [provided] [unused] [could be renamed] -> ../image/dist/image.js .hitTest */
/*! export renderCanvas [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .renderCanvas */
/*! export renderCanvasWithColorTransform [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .renderCanvasWithColorTransform */
/*! export resolveImage [provided] [used in main] [could be renamed] -> ../image/dist/resources.js .resolveImage */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE,
/* harmony export */   "applyImageExtension": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.applyImageExtension,
/* harmony export */   "resolveImage": () => /* reexport safe */ _resources__WEBPACK_IMPORTED_MODULE_1__.resolveImage,
/* harmony export */   "applyCanvasImageExtension": () => /* reexport safe */ _image_canvas__WEBPACK_IMPORTED_MODULE_2__.applyCanvasImageExtension
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources */ "../image/dist/resources.js");
/* harmony import */ var _image_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-canvas */ "../image/dist/image-canvas.js");




/***/ }),

/***/ "../image/dist/resources.js":
/*!**********************************!*\
  !*** ../image/dist/resources.js ***!
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
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");


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
                        resource = (0,_e2d_image__WEBPACK_IMPORTED_MODULE_1__.resolveImage)(url);
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
                    fill: 0xff00ff,
                    stroke: {
                        thickness: 2,
                        fill: 0x00ff00,
                    },
                    path: {
                        type: 'rect', x: 0, y: 0, width: 100, height: 100,
                    },
                },
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
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _engine_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/support */ "./src/engine/support.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");









const app = (0,_main__WEBPACK_IMPORTED_MODULE_5__.default)();
app.start();
const engine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_4__.CanvasSupport());
(0,_e2d_image__WEBPACK_IMPORTED_MODULE_3__.applyCanvasImageExtension)(engine.support, { colorTransform: true });
(0,_e2d_text__WEBPACK_IMPORTED_MODULE_2__.applyCanvasTextExtension)(engine.support);
(0,_e2d_tween__WEBPACK_IMPORTED_MODULE_1__.applyTweenExtension)(engine.support);
(0,_e2d_engine__WEBPACK_IMPORTED_MODULE_0__.applyMouseSupportExtension)(engine);
engine.root = app;
engine.play();
document.body.appendChild(engine.support.element);
const customEngine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _engine_support__WEBPACK_IMPORTED_MODULE_6__.default());
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
engine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_7__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_7__.TEST_CANVAS,
    image: customEngine.support.element,
    loaded: true,
});
customEngine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_7__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_7__.TEST_CANVAS,
    image: engine.support.element,
    loaded: true,
});
const resourceManager = new _engine_resources__WEBPACK_IMPORTED_MODULE_8__.default();
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_7__.ARCHER.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_7__.ARCHER_IMAGE);
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_7__.ANIMALIST.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_7__.ANIMALIST_IMAGE);
engine.support.resources.resolvers.add(resourceManager.resolve);
customEngine.support.resources.resolvers.add(resourceManager.resolve);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZXh0ZW5zaW9ucy90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvaW5wdXQvdG91Y2guanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvcmVzb3VyY2VzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2ltYWdlLWNhbnZhcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiQ2FudmFzU3VwcG9ydCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQyZCIsImdldENvbnRleHQiLCJzZXRUcmFuc2Zvcm0iLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJTdXBwb3J0IiwiQ29tcG9uZW50IiwiaXNFbmFibGVkIiwiY29tcG9uZW50IiwiZW5hYmxlZCIsImlzVmlzaWJsZSIsInZpc2libGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkIiwiY2hpbGRyZW4iLCJjb3VudCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImtleXMiLCJPYmplY3QiLCJyZW5kZXIiLCJjb250ZXh0Iiwic3VwcG9ydCIsImNoaWxkQ29udGV4dCIsImdldFJlbmRlckNvbnRleHQiLCJpIiwiY29tcG9uZW50Q29udGV4dCIsInVwZGF0ZSIsImdldFVwZGF0ZUNvbnRleHQiLCJoaXRUZXN0IiwiZ2V0UG9pbnRlckNvbnRleHQiLCJyZXN1bHQiLCJhcHBseUNvbnRhaW5lckV4dGVuc2lvbiIsInVwZGF0ZUhhbmRsZXJzIiwic2V0IiwicmVuZGVySGFuZGxlcnMiLCJoaXRUZXN0SGFuZGxlcnMiLCJFTVBUWV9NQVRSSVgiLCJNYXRyaXgiLCJFbmdpbmUiLCJmdWxsc2NyZWVuIiwidXBkYXRlRW5hYmxlZCIsInJlbmRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsInBhdXNlZCIsInRpbWUiLCJtYXRyaXgiLCJpbnRlcm5hbFVwZGF0ZSIsImRlbHRhVGltZSIsInVwZGF0ZUZyYW1lIiwicm9vdCIsImJhc2UiLCJkZXB0aCIsImNsZWFyIiwiY29sb3JUcmFuc2Zvcm0iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkIiwic2V0U2l6ZSIsInVwZGF0ZVNpemUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJldmVudCIsInR5cGUiLCJpZCIsIngiLCJ5IiwibG9jYWwiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlRGVwdGgiLCJNYXAiLCJwcm9wZXJ0eUhhbmRsZXJzIiwicmVzb3VyY2VzIiwiUmVzb3VyY2VzIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcm9wZXJ0eSIsIm9uVXBkYXRlIiwiZ2V0IiwiUG9pbnRlciIsInBvaW50ZXJPdmVyIiwicGFyZW50IiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtZWRNYXRyaXgiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlck5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiRGVidWciLCJTb3VyY2UiLCJnZXRSZXNvdXJjZSIsInNvdXJjZSIsInNyYyIsImlzTG9hZGVkIiwicmVzb3VyY2UiLCJsb2FkZWQiLCJnZXRNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJjIiwidHgiLCJ0eSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJhcHBseUtleWJvYXJkU3VwcG9ydEV4dGVuc2lvbiIsImVuZ2luZSIsImVsZW1lbnQiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoUG9pbnRlckV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsImFwcGx5VG91Y2hTdXBwb3J0RXh0ZW5zaW9uIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJhcmdzIiwiU3RyaW5nIiwiZXJyb3JzIiwiZXJyb3IiLCJ3YXJuaW5ncyIsIndhcm4iLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJpc0VtcHR5IiwiYm91bmRzIiwidG9SZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiY29uY2F0IiwiY3QxIiwiY3QwIiwiaXNEZWZhdWx0IiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwiUmVjdGFuZ2xlIiwiY29udGFpbnMiLCJyZWN0YW5nbGUiLCJ0ZW1wQ29udGV4dCIsInJlbmRlckNhbnZhcyIsImltYWdlIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJpc0RlZmF1bHRDb2xvclRyYW5zZm9ybSIsInVwZGF0ZVRlbXBDb250ZXh0IiwicmVuZGVyQ2FudmFzV2l0aENvbG9yVHJhbnNmb3JtIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJhcHBseUNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwib3B0aW9ucyIsImFwcGx5SW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkltYWdlIiwiZ2V0Qm91bmRzIiwidW5kZWZpbmVkIiwiYWRkIiwicmVzb2x2ZUltYWdlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJmb250Iiwic2l6ZSIsIm1lYXN1cmVUZXh0IiwidGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsImZpcnN0Iiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwibGluZSIsImFkdmFuY2UiLCJsZXR0ZXJTcGFjaW5nIiwiZ2V0VGV4dFdpZHRoIiwibGluZXMiLCJsaW5lV2lkdGgiLCJnZXRUZXh0SGVpZ2h0IiwibGVhZGluZyIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImdldFZhbGlkVGV4dEZvcm1hdCIsInRleHRGb3JtYXQiLCJnZXRBbGluZ1ZhbHVlIiwiZ2V0VmVydGljYWxBbGluZ1ZhbHVlIiwicmVuZGVyQ2FudmFzVGV4dCIsImJvcmRlciIsImJhY2tncm91bmQiLCJmb3JtYXRTaXplIiwiZm9ybWF0TGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbCIsInN0cm9rZSIsInRleHRCYXNlbGluZSIsImFsaWduVmFsdWUiLCJqIiwiZmlsbFRleHQiLCJhcHBseUNhbnZhc1RleHRFeHRlbnNpb24iLCJhcHBseVRleHRFeHRlbnNpb24iLCJURVhUIiwiVGV4dCIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJQSSIsInBvdyIsInNxcnQiLCJzIiwiVFdFRU4iLCJ1cGRhdGVUd2VlbSIsInR3ZWVuIiwicGhhc2VzIiwib2Zmc2V0IiwicGhhc2UiLCJlYXNpbmdOYW1lIiwidG9Mb3dlckNhc2UiLCJlYXNpbmdNZXRob2QiLCJlYXNpbmdWYWx1ZSIsInRvIiwiZnJvbSIsInN0YXRlIiwia2V5IiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsInN0YXRlVmFsdWUiLCJsb29wIiwiYXBwbHlUd2VlbkV4dGVuc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxFQUExQyxFQUE4QztBQUNqRCxNQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxNQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxNQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLE1BQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLE1BQUksQ0FBQ00sK0RBQUEsQ0FB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ZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNTdXBwb3J0IGZyb20gJy4vc3VwcG9ydCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCB7IENhbnZhc1N1cHBvcnQsIH07XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNEZWZhdWx0KGN0KSkge1xuICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgIH1cbiAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgfVxuICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbn1cbiIsImltcG9ydCB7IFN1cHBvcnQgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNTdXBwb3J0IGV4dGVuZHMgU3VwcG9ydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dDJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgdGhpcy5jb250ZXh0MmQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCwgcGl4ZWxSYXRpbykge1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIENvbXBvbmVudDtcbihmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgQ29tcG9uZW50LmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBDb21wb25lbnQuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoQ29tcG9uZW50IHx8IChDb21wb25lbnQgPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgQ29udGFpbmVyLm51bUNoaWxkcmVuID0gbnVtQ2hpbGRyZW47XG59KShDb250YWluZXIgfHwgKENvbnRhaW5lciA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgICBzdXBwb3J0LnJlbmRlcihjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnJlbmRlcihjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnJlbmRlcihjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgc3VwcG9ydC51cGRhdGUoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC51cGRhdGUoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC51cGRhdGUoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDb250YWluZXJFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQudXBkYXRlSGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuY29uc3QgRU1QVFlfTUFUUklYID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKHN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9pbnRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmludGVybmFsVXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRoaXMudGltZSA9PT0gLTEgPyAwIDogdGltZSAtIHRoaXMudGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lKGRlbHRhVGltZSAvIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1cHBvcnQgPSBzdXBwb3J0O1xuICAgICAgICBhcHBseUNvbnRhaW5lckV4dGVuc2lvbih0aGlzLnN1cHBvcnQpO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnVwZGF0ZSh0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXBwb3J0LmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG1hdHJpeDogdGhpcy5tYXRyaXgsXG4gICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5yZW5kZXIodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGZ1bGxzY3JlZW4gfSA9IHRoaXM7XG4gICAgICAgIGxldCB0YXJnZXRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xuICAgICAgICBsZXQgdGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuICAgICAgICBpZiAoZnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGFyZ2V0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRhcmdldEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zZXRTaXplKHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQsIHBpeGVsUmF0aW8pO1xuICAgIH1cbiAgICB1cGRhdGVGcmFtZSh0aW1lID0gMCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmludGVybmFsVXBkYXRlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hQb2ludGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBvaW50ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHR5cGUsIGlkLCB4LCB5LCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG1hdHJpeDogRU1QVFlfTUFUUklYLFxuICAgICAgICAgICAgbG9jYWw6IHsgeCwgeSB9LFxuICAgICAgICAgICAgZ2xvYmFsOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuaGl0VGVzdCh0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGxheScpO1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZScpO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL3Jlc291cmNlcy9yZXNvdXJjZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9ydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGVwdGggPSA2NDtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJvcGVydHlIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gICAgfVxuICAgIHVwZGF0ZShjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKGNvbnRleHQudGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMucmVuZGVySGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaXRUZXN0KGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oaXRUZXN0SGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gY29udGV4dC5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCBjb250ZXh0LnR5cGUsIHgsIHksIGNvbnRleHQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbnRleHQudHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWU6IHBhcmVudC50aW1lLFxuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGNvbG9yVHJhbnNmb3JtID0gVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXB0aDogcGFyZW50LmRlcHRoICsgMSxcbiAgICAgICAgICAgIHN1cHBvcnQ6IHBhcmVudC5zdXBwb3J0LFxuICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIG1hdHJpeCksXG4gICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29sb3JUcmFuc2Zvcm0pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkTWF0cml4ID0gTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICB0eXBlOiBwYXJlbnQudHlwZSxcbiAgICAgICAgICAgIHN1cHBvcnQ6IHBhcmVudC5zdXBwb3J0LFxuICAgICAgICAgICAgZ2xvYmFsOiBwYXJlbnQuZ2xvYmFsLFxuICAgICAgICAgICAgbWF0cml4OiB0cmFuc2Zvcm1lZE1hdHJpeCxcbiAgICAgICAgICAgIGxvY2FsOiBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KHRyYW5zZm9ybWVkTWF0cml4LCBwYXJlbnQuZ2xvYmFsKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICcuLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gYG9uJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dHlwZS5zbGljZSgxKX1gO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIERlYnVnLndhcm5pbmcoYFBvaW50ZXIgZXZlbnQgd2l0aCB0eXBlOiAke3R5cGV9IG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgU291cmNlO1xuKGZ1bmN0aW9uIChTb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNvdXJjZShzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNvdXJjZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnN1cHBvcnQucmVzb3VyY2VzLmdldChzcmMpO1xuICAgIH1cbiAgICBTb3VyY2UuZ2V0UmVzb3VyY2UgPSBnZXRSZXNvdXJjZTtcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBnZXRSZXNvdXJjZShzb3VyY2UsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gISFyZXNvdXJjZT8ubG9hZGVkO1xuICAgIH1cbiAgICBTb3VyY2UuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbn0pKFNvdXJjZSB8fCAoU291cmNlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYTogbWF0cml4LmEgPz8gMSxcbiAgICAgICAgICAgICAgICBiOiBtYXRyaXguYiA/PyAwLFxuICAgICAgICAgICAgICAgIGM6IG1hdHJpeC5jID8/IDAsXG4gICAgICAgICAgICAgICAgZDogbWF0cml4LmQgPz8gMSxcbiAgICAgICAgICAgICAgICB0eDogbWF0cml4LnR4ID8/IDAsXG4gICAgICAgICAgICAgICAgdHk6IG1hdHJpeC50eSA/PyAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgY29uc3QgdHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYTogY29zICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIGI6IHNpbiAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBjOiAtc2luICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIGQ6IGNvcyAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICB0eCxcbiAgICAgICAgICAgICAgICB0eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHNjYWxlWCxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogc2NhbGVZLFxuICAgICAgICAgICAgdHgsXG4gICAgICAgICAgICB0eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICByZWRNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBibHVlTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBhbHBoYU9mZnNldDogY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICByZWRPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiB0cmFuc2Zvcm0uYWxwaGEgPz8gMSxcbiAgICAgICAgICAgICAgICByZWRNdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBibHVlTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICByZWRPZmZzZXQ6IHIgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBncmVlbk9mZnNldDogZyAqIHZhbHVlLFxuICAgICAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGIgKiB2YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogdHJhbnNmb3JtLmFscGhhID8/IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJpbXBvcnQgU3VwcG9ydCBmcm9tICcuL2VuZ2luZS9zdXBwb3J0JztcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBEZWJ1ZyBmcm9tICcuL3V0aWxzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3BvaW50ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9rZXlib2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvdG91Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvcmVzb3VyY2VzJztcbmV4cG9ydCB7IFN1cHBvcnQsIEVuZ2luZSwgRGVidWcsIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlLZXlib2FyZFN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG59XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSBlbGVtZW50LmNsaWVudFRvcDtcbiAgICBlbmdpbmUuZGlzcGF0Y2hQb2ludGVyRXZlbnQoe1xuICAgICAgICB0eXBlLCB4LCB5LFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgIH0pO1xufVxuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIGNvbnN0IHggPSB0b3VjaC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgICAgICBjb25zdCB5ID0gdG91Y2guY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gZWxlbWVudC5jbGllbnRUb3A7XG4gICAgICAgIGNvbnN0IGlkID0gdG91Y2guaWRlbnRpZmllcjtcbiAgICAgICAgZW5naW5lLmRpc3BhdGNoUG9pbnRlckV2ZW50KHtcbiAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRvdWNoU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICcuLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICBhZGQoYXNzZXQsIHJlc291cmNlKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgIH1cbiAgICByZW1vdmUoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMuZGVsZXRlKGFzc2V0KTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmNsZWFyKCk7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgRGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgc3RhdGljIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBzdGF0aWMgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgc3RhdGljIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG5EZWJ1Zy5lcnJvcnMgPSBuZXcgTWFwKCk7XG5EZWJ1Zy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmV0dXJuIG1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIG1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIG1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIG1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbWluWCxcbiAgICAgICAgICAgIHk6IG1pblksXG4gICAgICAgICAgICB3aWR0aDogbWF4WCAtIG1pblgsXG4gICAgICAgICAgICBoZWlnaHQ6IG1heFkgLSBtaW5ZLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcixcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXIsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcixcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QwLmFscGhhT2Zmc2V0LFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDAucmVkT2Zmc2V0LFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDAuZ3JlZW5PZmZzZXQsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MC5ibHVlT2Zmc2V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gaXNEZWZhdWx0KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYyxcbiAgICAgICAgICAgIGI6IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZCxcbiAgICAgICAgICAgIGM6IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYyxcbiAgICAgICAgICAgIGQ6IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZCxcbiAgICAgICAgICAgIHR4OiBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHgsXG4gICAgICAgICAgICB0eTogbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICBtYXRyaXguYSA9IDA7XG4gICAgICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgICAgICBtYXRyaXguZCA9IDA7XG4gICAgICAgICAgICBtYXRyaXgudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgbWF0cml4LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCBkID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmEgPSBkO1xuICAgICAgICAgICAgbWF0cml4LmIgKj0gLWRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmMgKj0gLWRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmQgPSBhO1xuICAgICAgICAgICAgY29uc3QgdHggPSAtbWF0cml4LmEgKiBtYXRyaXgudHggLSBtYXRyaXguYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gLW1hdHJpeC5iICogbWF0cml4LnR4IC0gbWF0cml4LmQgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICBtYXRyaXgudHggPSB0eDtcbiAgICAgICAgICAgIG1hdHJpeC50eSA9IHR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4LFxuICAgICAgICAgICAgeTogeCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogLW1hdHJpeC50eCxcbiAgICAgICAgICAgICAgICB5OiAtbWF0cml4LnR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpLFxuICAgICAgICAgICAgeTogZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgIHdpZHRoOiByaWdodCAtIGxlZnQsXG4gICAgICAgICAgICBoZWlnaHQ6IGJvdHRvbSAtIHRvcCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gIXJlY3RhbmdsZS53aWR0aCB8fCAhcmVjdGFuZ2xlLmhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xubGV0IHRlbXBDb250ZXh0O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhcyhpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBjb250ZXh0KTtcbiAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xufVxuZnVuY3Rpb24gaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0oY3QpIHtcbiAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG59XG5mdW5jdGlvbiB1cGRhdGVUZW1wQ29udGV4dChjb250ZXh0KSB7XG4gICAgaWYgKCF0ZW1wQ29udGV4dCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGVtcENvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBDb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gY29udGV4dC5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLndpZHRoID0gY29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0ZW1wQ29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBjb250ZXh0LmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLmhlaWdodCA9IGNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzV2l0aENvbG9yVHJhbnNmb3JtKGltYWdlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGNvbnRleHQpO1xuICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHN1cHBvcnQsIG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgaWYgKGlzRGVmYXVsdENvbG9yVHJhbnNmb3JtKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cGRhdGVUZW1wQ29udGV4dChjb250ZXh0MmQpO1xuICAgICAgICBjb25zdCBib3VuZHMgPSBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgdGVtcENvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHRlbXBDb250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbihzdXBwb3J0LCBvcHRpb25zKSB7XG4gICAgYXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBpZiAob3B0aW9ucz8uY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckNhbnZhc1dpdGhDb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVyQ2FudmFzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgcmVzb2x2ZUltYWdlIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHN1cHBvcnQucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEltYWdlLmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gSW1hZ2UuZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gISFib3VuZHMgJiYgUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlSW1hZ2UpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLWNhbnZhcyc7XG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW1hZ2UoYXNzZXQpIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IERlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlRm9udChmb250LCBzaXplKSB7XG4gICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlRm9udChmb250LCBzaXplKTtcbiAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgY2hhcik7XG4gICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgfVxuICAgIHJldHVybiBrZXJuaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICB9XG4gICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250KG5hbWUpIHtcbiAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgIH07XG4gICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICB9XG4gICAgcmV0dXJuIGZvbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSkge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaSk7XG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0LnNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmxldHRlclNwYWNpbmcgJiYgbGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHdpZHRoICs9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nICogKGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcykge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBpZiAod2lkdGggPCBsaW5lV2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpIHtcbiAgICBsZXQgaGVpZ2h0ID0gZm9ybWF0LnNpemUgKiBsaW5lcy5sZW5ndGg7XG4gICAgaWYgKGZvcm1hdC5sZWFkaW5nICYmIGxpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaGVpZ2h0ICs9IGZvcm1hdC5sZWFkaW5nICogKGxpbmVzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgc2l6ZTogMTUsXG4gICAgY29sb3I6IDAsXG4gICAgYWxwaGE6IDEsXG4gICAgYm9sZDogZmFsc2UsXG4gICAgaXRhbGljOiBmYWxzZSxcbiAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgbGVhZGluZzogMCxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxufTtcbmNvbnN0IGZvcm1hdCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0KSB7XG4gICAgZm9ybWF0LmZvbnQgPSB0ZXh0Rm9ybWF0Py5mb250ID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQ7XG4gICAgZm9ybWF0LnNpemUgPSB0ZXh0Rm9ybWF0Py5zaXplID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgZm9ybWF0LmNvbG9yID0gdGV4dEZvcm1hdD8uY29sb3IgPz8gZGVmYXVsdFRleHRGb3JtYXQuY29sb3I7XG4gICAgZm9ybWF0LmFscGhhID0gdGV4dEZvcm1hdD8uYWxwaGEgPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxwaGE7XG4gICAgZm9ybWF0LmJvbGQgPSB0ZXh0Rm9ybWF0Py5ib2xkID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmJvbGQ7XG4gICAgZm9ybWF0Lml0YWxpYyA9IHRleHRGb3JtYXQ/Lml0YWxpYyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5pdGFsaWM7XG4gICAgZm9ybWF0LnVuZGVybGluZSA9IHRleHRGb3JtYXQ/LnVuZGVybGluZSA/PyBkZWZhdWx0VGV4dEZvcm1hdC51bmRlcmxpbmU7XG4gICAgZm9ybWF0LmxldHRlclNwYWNpbmcgPSB0ZXh0Rm9ybWF0Py5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgZm9ybWF0LmxlYWRpbmcgPSB0ZXh0Rm9ybWF0Py5sZWFkaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgZm9ybWF0LmFsaWduID0gdGV4dEZvcm1hdD8uYWxpZ24gPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxpZ247XG4gICAgZm9ybWF0LnZlcnRpY2FsQWxpZ24gPSB0ZXh0Rm9ybWF0Py52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGluZ1ZhbHVlKGFsaWduKSB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoYWxpZ24pIHtcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQtY2FudmFzJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQYXR0ZXJuIH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBnZXRBZHZhbmNlLCBnZXRGb250LCBnZXRMaW5lV2lkdGgsIGdldFN0eWxlRm9udCwgZ2V0VGV4dEhlaWdodCwgZ2V0VGV4dFdpZHRoLCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBhcHBseVRleHRFeHRlbnNpb24sIFRFWFQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgZ2V0QWxpbmdWYWx1ZSwgZ2V0VmVydGljYWxBbGluZ1ZhbHVlLCBnZXRWYWxpZFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzVGV4dChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHRGb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgY29uc3QgZm9ybWF0U2l6ZSA9IGZvcm1hdC5zaXplO1xuICAgIGNvbnN0IGZvcm1hdExldHRlclNwYWNpbmcgPSBmb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICBjb25zdCBmb3JtYXRMZWFkaW5nID0gZm9ybWF0LmxlYWRpbmc7XG4gICAgY29uc3QgZm9udCA9IGdldEZvbnQoZm9ybWF0LmZvbnQpO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgdGV4dEhlaWdodCA9IGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gdGV4dFdpZHRoO1xuICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gdGV4dEhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICBsZXQgeSA9IDA7XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoZm9ybWF0LnZlcnRpY2FsQWxpZ24pO1xuICAgICAgICB5ID0gKGhlaWdodCAtIHRleHRIZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIGNvbnRleHQyZC5mb250ID0gZ2V0U3R5bGVGb250KGZvcm1hdC5mb250LCBmb3JtYXRTaXplKTtcbiAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oZm9ybWF0LmNvbG9yLCBmb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB5ICs9IG9mZnNldFk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gZ2V0QWxpbmdWYWx1ZShmb3JtYXQuYWxpZ24pO1xuICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lV2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGogKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdFNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KGZpcnN0LCB4LCB5ICsgZm9ybWF0U2l6ZSk7XG4gICAgICAgICAgICB4ICs9IGFkdmFuY2UgKyBmb3JtYXRMZXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIHkgKz0gZm9ybWF0U2l6ZSArIGZvcm1hdExlYWRpbmc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KFRFWFQsIHJlbmRlckNhbnZhc1RleHQpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGdldFZhbGlkVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IGdldEZvbnQsIGdldFRleHRXaWR0aCwgZ2V0VGV4dEhlaWdodCB9IGZyb20gJy4vZm9udCc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgdGV4dEZvcm1hdCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBnZXRGb250KGZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIHdpZHRoID0gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0LmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gVGV4dC5nZXRCb3VuZHModGV4dCk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRleHRFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChURVhULCBoaXRUZXN0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUd2VlbShjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG4gICAgdHdlZW4udGltZSArPSBjb250ZXh0LnRpbWU7XG4gICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUd2VlbkV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5wcm9wZXJ0eUhhbmRsZXJzLnNldChUV0VFTiwgdXBkYXRlVHdlZW0pO1xufVxuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZDoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGQuY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBJTUFHRV9BU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtJTUFHRV9BU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IFBpdm90LCBSZW5kZXJDb250ZXh0LCBTdXBwb3J0IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHtcblx0YXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlLCBJbWFnZVJlc291cmNlLFxufSBmcm9tICdAZTJkL2ltYWdlJztcblxuZnVuY3Rpb24gcmVuZGVySW1hZ2UoaW1hZ2U6IEltYWdlLCBjb250ZXh0OiBSZW5kZXJDb250ZXh0KTogdm9pZCB7XG5cdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuXG5cdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcblxuXHRjb25zdCByZXNvdXJjZSA9IHN1cHBvcnQucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQgYXMgQ2FudmFzU3VwcG9ydDtcblxuXHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdG1hdHJpeC5hLFxuXHRcdG1hdHJpeC5iLFxuXHRcdG1hdHJpeC5jLFxuXHRcdG1hdHJpeC5kLFxuXHRcdG1hdHJpeC50eCxcblx0XHRtYXRyaXgudHksXG5cdCk7XG5cblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG5cdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbihzdXBwb3J0OiBTdXBwb3J0KSB7XG5cdGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG5cdHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KElNQUdFLCByZW5kZXJJbWFnZSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UsIHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IHJlc29sdmVJbWFnZSh1cmwpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0RGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdGV4dCc7XG5pbXBvcnQgeyBhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVN1cHBvcnQgZXh0ZW5kcyBDYW52YXNTdXBwb3J0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRhcHBseUNhbnZhc1RleHRFeHRlbnNpb24odGhpcyk7XG5cdFx0YXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbih0aGlzKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IHsgY29udGV4dDJkIH0gPSB0aGlzO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHtcblx0QUJJTElUWV9GT1gsIEFCSUxJVFlfV09MRiwgQU5JTUFMSVNULCBBUkNIRVIsIEJBQ0tHUk9VTkQsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS50aXRsZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0XHRcdHRoaWNrbmVzczogMixcblx0XHRcdFx0XHRcdGZpbGw6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cGF0aDoge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3JlY3QnLCB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoeyB0aXRsZTogJ0FyY2hlciFcXG5IZWFsdGg6IDEwMCUnLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayB9KSxcblx0XHRcdFx0XHR1bml0KHsgdGl0bGU6ICdBbmltYWxpc3QhXFxuSGVhbHRoOiAxMDAlJywgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2sgfSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogW2FydGlmYWN0KCldLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHR0aXRsZTogc3RyaW5nLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogcHJvcHMudGl0bGUsXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVuZ2luZSwgYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24gfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBhcHBseVR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbiwgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBDdXN0b21TdXBwb3J0IGZyb20gJy4vZW5naW5lL3N1cHBvcnQnO1xuaW1wb3J0IHtcblx0QU5JTUFMSVNULCBBTklNQUxJU1RfSU1BR0UsIEFSQ0hFUiwgQVJDSEVSX0lNQUdFLCBURVNUX0NBTlZBUyxcbn0gZnJvbSAnLi9hc3NldHMnO1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbigpO1xuYXBwLnN0YXJ0KCk7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShuZXcgQ2FudmFzU3VwcG9ydCgpKTtcbmFwcGx5Q2FudmFzSW1hZ2VFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQsIHsgY29sb3JUcmFuc2Zvcm06IHRydWUgfSk7XG5hcHBseUNhbnZhc1RleHRFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlUd2VlbkV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbmVuZ2luZS5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgRW5naW5lKG5ldyBDdXN0b21TdXBwb3J0KCkpO1xuY3VzdG9tRW5naW5lLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlRW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS5wbGF5KCk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50KTtcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGxheSgpLCAxMDAwMCk7XG5cbi8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==