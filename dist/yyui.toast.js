(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.toast = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);

    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }

    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);

    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  var toastStyle = "/**\r\n * toast.component\r\n */\r\n\r\n:host {\r\n  width: auto;\r\n  height: auto;\r\n  color: #fff;\r\n  max-width: 95%;\r\n  min-height: 0;\r\n  line-height: 48px;\r\n  font-size: 24px;\r\n  overflow-wrap: break-word;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  box-sizing: border-box;\r\n  display: table;\r\n  margin: 0;\r\n  padding: 16px 16px;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\n:host(.toast-top) {\r\n  top: 10%;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n:host(.toast-center) {\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n:host(.toast-bottom) {\r\n  top: auto;\r\n  bottom: 12%;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n:host([animation=\"default\"]) {\r\n  animation-duration: 500ms;\r\n  animation-direction: normal;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-out;\r\n  animation-fill-mode: forwards;\r\n  animation-name: default-create;\r\n}\r\n\r\n:host([animation=\"default\"][animation-route=\"create\"]) {\r\n  animation-name: default-create;\r\n}\r\n\r\n:host([animation=\"default\"][animation-route=\"remove\"]) {\r\n  animation-name: default-remove;\r\n}\r\n\r\n@keyframes default-create {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes default-remove {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n";

  var toastTemplate = "<div class=\"content\">\r\n  <slot></slot>\r\n</div>";

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var _window = new WeakMap();

  var _document = new WeakMap();

  var _createStyles = new WeakMap();

  var _createElements = new WeakMap();

  var ToastComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(ToastComponent, _HTMLElement);

    var _super = _createSuper(ToastComponent);

    function ToastComponent() {
      var _this;

      _classCallCheck(this, ToastComponent);

      _this = _super.call(this);

      _window.set(_assertThisInitialized(_this), {
        writable: true,
        value: window
      });

      _document.set(_assertThisInitialized(_this), {
        writable: true,
        value: _classPrivateFieldGet(_assertThisInitialized(_this), _window).document
      });

      _createStyles.set(_assertThisInitialized(_this), {
        writable: true,
        value: function value(css) {
          var style = _classPrivateFieldGet(_assertThisInitialized(_this), _document).createElement("style");

          style.textContent = css;
          return style;
        }
      });

      _createElements.set(_assertThisInitialized(_this), {
        writable: true,
        value: function value(html) {
          var wrapper = _classPrivateFieldGet(_assertThisInitialized(_this), _document).createElement("template");

          wrapper.innerHTML = html;
          return wrapper.content.cloneNode(true);
        }
      });

      var shadow = _this.attachShadow({
        mode: "open"
      });

      var styles = _classPrivateFieldGet(_assertThisInitialized(_this), _createStyles).call(_assertThisInitialized(_this), toastStyle);

      var elements = _classPrivateFieldGet(_assertThisInitialized(_this), _createElements).call(_assertThisInitialized(_this), toastTemplate);

      shadow.appendChild(styles);
      shadow.appendChild(elements);
      return _this;
    }

    _createClass(ToastComponent, [{
      key: "self",
      value: function self() {
        return this;
      }
    }, {
      key: "parent",
      value: function parent() {
        return this.parentNode;
      }
    }, {
      key: "getValue",
      value: function getValue(name) {
        name = "#__".concat(name);
        return this[name];
      }
    }, {
      key: "setValue",
      value: function setValue(name, value) {
        name = "#__".concat(name);
        this[name] = value;
      }
    }]);

    return ToastComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (!window.customElements.get("yyui-toast-component")) {
    window.customElements.define("yyui-toast-component", ToastComponent);
  }

  var toastOverlayStyle = "/*\r\n    spinner.overlay.component\r\n*/\r\n:host {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\n:host(.toast-overlay-default) {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n:host([animation=\"default\"]) {\r\n  animation-duration: 500ms;\r\n  animation-direction: normal;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-out;\r\n  animation-fill-mode: forwards;\r\n  animation-name: default-create;\r\n}\r\n\r\n:host([animation=\"default\"][animation-route=\"create\"]) {\r\n  animation-name: default-create;\r\n}\r\n\r\n:host([animation=\"default\"][animation-route=\"remove\"]) {\r\n  animation-name: default-remove;\r\n}\r\n\r\n@keyframes default-create {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes default-remove {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n";

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var _window$1 = new WeakMap();

  var _document$1 = new WeakMap();

  var _createStyles$1 = new WeakMap();

  var ToastOverlayComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(ToastOverlayComponent, _HTMLElement);

    var _super = _createSuper$1(ToastOverlayComponent);

    function ToastOverlayComponent() {
      var _this;

      _classCallCheck(this, ToastOverlayComponent);

      _this = _super.call(this);

      _window$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: window
      });

      _document$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: _classPrivateFieldGet(_assertThisInitialized(_this), _window$1).document
      });

      _createStyles$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: function value(css) {
          var style = _classPrivateFieldGet(_assertThisInitialized(_this), _document$1).createElement("style");

          style.textContent = css;
          return style;
        }
      });

      var shadow = _this.attachShadow({
        mode: "open"
      });

      var styles = _classPrivateFieldGet(_assertThisInitialized(_this), _createStyles$1).call(_assertThisInitialized(_this), toastOverlayStyle);

      var slotElement = _classPrivateFieldGet(_assertThisInitialized(_this), _document$1).createElement("slot");

      shadow.appendChild(styles);
      shadow.appendChild(slotElement);
      return _this;
    }

    _createClass(ToastOverlayComponent, [{
      key: "self",
      value: function self() {
        return this;
      }
    }, {
      key: "parent",
      value: function parent() {
        return this.parentNode;
      }
    }, {
      key: "getValue",
      value: function getValue(name) {
        name = "#__".concat(name);
        return this[name];
      }
    }, {
      key: "setValue",
      value: function setValue(name, value) {
        name = "#__".concat(name);
        this[name] = value;
      }
    }]);

    return ToastOverlayComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (!window.customElements.get("yyui-toast-overlay-component")) {
    window.customElements.define("yyui-toast-overlay-component", ToastOverlayComponent);
  }

  var _window$2 = new WeakMap();

  var _document$2 = new WeakMap();

  var _components = new WeakMap();

  var _addComponents = new WeakMap();

  var _options = new WeakMap();

  var Toast = /*#__PURE__*/function () {
    function Toast() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Toast);

      _window$2.set(this, {
        writable: true,
        value: window
      });

      _document$2.set(this, {
        writable: true,
        value: _classPrivateFieldGet(this, _window$2).document
      });

      _components.set(this, {
        writable: true,
        value: []
      });

      _addComponents.set(this, {
        writable: true,
        value: function value(component) {
          _classPrivateFieldGet(_this, _components).push(component);
        }
      });

      _options.set(this, {
        writable: true,
        value: {
          duration: 3000,
          position: "center",
          animation: "default",
          overlay: false
        }
      });

      _defineProperty(this, "components", _classPrivateFieldGet(this, _components));

      _classPrivateFieldSet(this, _options, Object.assign(_classPrivateFieldGet(this, _options), Toast.options, options));

      Toast.instanceAll.push(this);
    }

    _createClass(Toast, [{
      key: "clear",
      value: function clear() {
        var components = _classPrivateFieldGet(this, _components);

        while (components.length > 0) {
          this.unmount(components[0]);
          components.splice(0, 1);
        }
      }
    }, {
      key: "create",
      value: function create() {
        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            mounted = _ref.mounted,
            unmounted = _ref.unmounted,
            beforeMount = _ref.beforeMount;

        var toastElement = new ToastComponent();

        var animationName = _classPrivateFieldGet(this, _options).animation;

        var positionClassName = "toast-".concat(_classPrivateFieldGet(this, _options).position);
        mounted || (mounted = function mounted() {});
        unmounted || (unmounted = function unmounted() {});
        beforeMount || (beforeMount = function beforeMount() {});
        toastElement.innerHTML = content;
        toastElement.setAttribute("class", positionClassName);

        if (_classPrivateFieldGet(this, _options).overlay) {
          var overlayName = _classPrivateFieldGet(this, _options).overlay;

          var toastOverlayElement = new ToastOverlayComponent();

          if ({}.toString.call(overlayName) !== "[object String]") {
            overlayName = "default";
          }

          toastOverlayElement.setValue("mounted", mounted);
          toastOverlayElement.setValue("unmounted", unmounted);
          toastOverlayElement.setValue("beforeMount", beforeMount);
          toastOverlayElement.setAttribute("class", "toast-overlay-".concat(overlayName));
          animationName && toastOverlayElement.setAttribute("animation", animationName);
          toastOverlayElement.appendChild(toastElement);

          _classPrivateFieldGet(this, _addComponents).call(this, toastOverlayElement);

          return toastOverlayElement;
        } else {
          toastElement.setValue("mounted", mounted);
          toastElement.setValue("unmounted", unmounted);
          toastElement.setValue("beforeMount", beforeMount);
          animationName && toastElement.setAttribute("animation", animationName);

          _classPrivateFieldGet(this, _addComponents).call(this, toastElement);

          return toastElement;
        }
      }
    }, {
      key: "mount",
      value: function mount(toastElement) {
        var _this2 = this;

        if (!toastElement.parent()) {
          var animationName = _classPrivateFieldGet(this, _options).animation;

          toastElement.getValue("beforeMount")();

          if (animationName) {
            toastElement.setAttribute("animation-route", "create");
            toastElement.addEventListener("animationend", function () {
              toastElement.getValue("mounted")();
            }, {
              once: true
            });

            _classPrivateFieldGet(this, _document$2).body.appendChild(toastElement);
          } else {
            _classPrivateFieldGet(this, _document$2).body.appendChild(toastElement);

            toastElement.getValue("mounted")();
          }

          if (_classPrivateFieldGet(this, _options).duration > 0) {
            var timestamp = setTimeout(function () {
              clearTimeout(timestamp);

              _this2.unmount(toastElement);
            }, _classPrivateFieldGet(this, _options).duration);
          }
        }
      }
    }, {
      key: "unmount",
      value: function unmount(toastElement) {
        if (toastElement.parent()) {
          var animationName = _classPrivateFieldGet(this, _options).animation;

          if (animationName) {
            toastElement.setAttribute("animation-route", "remove");
            toastElement.addEventListener("animationend", function () {
              toastElement.parent().removeChild(toastElement);
              toastElement.getValue("unmounted")();
            }, {
              once: true
            });
          } else {
            toastElement.parent().removeChild(toastElement);
            toastElement.getValue("unmounted")();
          }
        }
      }
    }, {
      key: "isMount",
      value: function isMount(toastElement) {
        return !!toastElement.parent();
      }
    }]);

    return Toast;
  }();

  _defineProperty(Toast, "options", {
    duration: 3000,
    position: "center",
    animation: "default",
    overlay: false
  });

  _defineProperty(Toast, "clear", function () {
    var instanceAll = Toast.instanceAll;

    while (instanceAll.length > 0) {
      instanceAll[0].clear();
      instanceAll.splice(0, 1);
    }
  });

  _defineProperty(Toast, "instanceAll", []);

  exports.Toast = Toast;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
