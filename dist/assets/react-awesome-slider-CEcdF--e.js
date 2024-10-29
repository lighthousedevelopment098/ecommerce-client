import { c as commonjsGlobal, a as getDefaultExportFromCjs } from "./@floating-ui-4Y5N-uvO.js";
import { p as propTypesExports } from "./prop-types-C9IysjhM.js";
import { r as reactExports } from "./react-Co2L6_bH.js";
var dist = { exports: {} };
(function(module, exports) {
  !function webpackUniversalModuleDefinition(e, t) {
    module.exports = t(propTypesExports, reactExports);
  }(commonjsGlobal, function(e, t) {
    return function(e2) {
      var t2 = {};
      function __webpack_require__(n) {
        if (t2[n]) return t2[n].exports;
        var o = t2[n] = { i: n, l: false, exports: {} };
        return e2[n].call(o.exports, o, o.exports, __webpack_require__), o.l = true, o.exports;
      }
      return __webpack_require__.m = e2, __webpack_require__.c = t2, __webpack_require__.d = function(e3, t3, n) {
        __webpack_require__.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n });
      }, __webpack_require__.r = function(e3) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
      }, __webpack_require__.t = function(e3, t3) {
        if (1 & t3 && (e3 = __webpack_require__(e3)), 8 & t3) return e3;
        if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
        var n = /* @__PURE__ */ Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var o in e3) __webpack_require__.d(n, o, (function(t4) {
          return e3[t4];
        }).bind(null, o));
        return n;
      }, __webpack_require__.n = function(e3) {
        var t3 = e3 && e3.__esModule ? function getDefault() {
          return e3.default;
        } : function getModuleExports() {
          return e3;
        };
        return __webpack_require__.d(t3, "a", t3), t3;
      }, __webpack_require__.o = function(e3, t3) {
        return Object.prototype.hasOwnProperty.call(e3, t3);
      }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
    }([function(e2, t2, n) {
      function _defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var o2 = t3[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      n.d(t2, "a", function() {
        return o;
      }), n.d(t2, "b", function() {
        return classToModules;
      }), n.d(t2, "c", function() {
        return getClassName;
      });
      var o = function() {
        function MediaLoader() {
          !function _classCallCheck(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }(this, MediaLoader), "undefined" != typeof window && (this.image = new Image(), this.resolve = null, this.video = document.createElement("video"), this.events());
        }
        return function _createClass(e3, t3, n2) {
          return t3 && _defineProperties(e3.prototype, t3), e3;
        }(MediaLoader, [{ key: "events", value: function events() {
          var e3 = this;
          this.video.addEventListener("loadeddata", function() {
            return e3.resolve && e3.resolve(true);
          }), this.video.addEventListener("loadeddata", function() {
            return e3.resolve && e3.resolve(false);
          }), this.image.onload = function() {
            return e3.resolve && e3.resolve(true);
          }, this.image.onerror = function() {
            return e3.resolve && e3.resolve(false);
          };
        } }, { key: "load", value: function load(e3) {
          var t3 = this;
          return new Promise(function(n2) {
            e3 || n2(true), t3.resolve = n2, t3.loading = true, t3.ended = false, e3.match(/\.(mp4|webm)/i) && t3.video.setAttribute("src", e3), e3.match(/\.(png|jp(e)?g|gif|webp)/i) && (t3.image.src = e3, (t3.image.width > 0 || t3.image.height > 0) && n2(true));
          });
        } }, { key: "loadImage", value: function loadImage(e3) {
          var t3 = this, n2 = new Image(), o2 = false;
          n2.onload = function() {
            o2 || t3.pumpLoaded();
          }, n2.onerror = function() {
            o2 || t3.pumpLoaded();
          }, n2.src = e3, false === o2 && (n2.width > 0 || n2.height > 0) && (o2 = true, this.pumpLoaded());
        } }, { key: "loadVideo", value: function loadVideo(e3) {
          var t3 = this, n2 = document.createElement("video");
          n2.addEventListener("loadeddata", function() {
            t3.pumpLoaded();
          }), n2.addEventListener("error", function() {
            t3.pumpLoaded();
          }), n2.setAttribute("src", e3);
        } }, { key: "pumpLoaded", value: function pumpLoaded() {
          this.loaded += 1, this.loaded === this.toLoad && this.resolver(true);
        } }, { key: "startLoad", value: function startLoad(e3) {
          e3.match(/\.(mp4|webm)/i) && this.loadVideo(e3), e3.match(/\.(png|jp(e)?g|gif|webp)/i) && this.loadImage(e3);
        } }, { key: "loadMultiple", value: function loadMultiple(e3) {
          var t3 = this;
          return this.loaded = 0, this.toLoad = e3.length, new Promise(function(n2) {
            t3.resolver = n2, e3.forEach(function(e4) {
              t3.startLoad(e4);
            });
          });
        } }]), MediaLoader;
      }();
      function classToModules() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 ? arguments[1] : void 0;
        if (!t3) return e3.join(" ").trim();
        for (var n2 = [], o2 = e3.length; o2--; ) t3[e3[o2]] && n2.push(t3[e3[o2]]);
        return n2;
      }
      function getClassName() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = arguments.length > 1 ? arguments[1] : void 0;
        return t3 && t3[e3] || e3;
      }
    }, function(e2, t2, n) {
      n.d(t2, "a", function() {
        return r;
      }), n.d(t2, "b", function() {
        return i;
      }), n.d(t2, "c", function() {
        return a;
      }), n.d(t2, "e", function() {
        return s;
      }), n.d(t2, "d", function() {
        return getRootClassName;
      }), n.d(t2, "g", function() {
        return transformChildren;
      }), n.d(t2, "f", function() {
        return setupClassNames;
      });
      var o = n(0);
      function _toConsumableArray(e3) {
        return function _arrayWithoutHoles(e4) {
          if (Array.isArray(e4)) {
            for (var t3 = 0, n2 = new Array(e4.length); t3 < e4.length; t3++) n2[t3] = e4[t3];
            return n2;
          }
        }(e3) || function _iterableToArray(e4) {
          if (Symbol.iterator in Object(e4) || "[object Arguments]" === Object.prototype.toString.call(e4)) return Array.from(e4);
        }(e3) || function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function ownKeys(e3, t3) {
        var n2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e3);
          t3 && (o2 = o2.filter(function(t4) {
            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
          })), n2.push.apply(n2, o2);
        }
        return n2;
      }
      function _objectSpread(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n2 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? ownKeys(Object(n2), true).forEach(function(t4) {
            _defineProperty(e3, t4, n2[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : ownKeys(Object(n2)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
          });
        }
        return e3;
      }
      function _defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      var r = function classListAdd(e3, t3) {
        "string" == typeof t3 && e3 && t3.split(" ").forEach(function(t4) {
          e3.classList.add(t4);
        });
      }, i = function classListRemove(e3, t3) {
        "string" == typeof t3 && e3 && t3.split(" ").forEach(function(t4) {
          e3.classList.remove(t4);
        });
      }, a = function getAnyClassName(e3) {
        return "string" == typeof e3 && e3.split(" ")[0] || "";
      }, s = function mergeStyles(e3) {
        var t3 = Array.isArray(e3) ? e3 : [e3];
        if (1 === t3.length) return t3[0];
        for (var n2 = _objectSpread({}, t3[0]), o2 = 1; o2 < t3.length; o2 += 1) {
          for (var r2 in n2) t3[o2][r2] && (n2[r2] = [n2[r2], t3[o2][r2]].join(" "));
          for (var i2 in t3[o2]) n2[i2] || (n2[i2] = t3[o2][i2]);
        }
        return n2;
      };
      function getRootClassName(e3) {
        var t3, n2 = e3.rootElement, r2 = e3.cssModule, i2 = e3.disabled, a2 = e3.organicArrows, s2 = e3.className, c = e3.total, l = e3.current, u = e3.infinite, d = e3.animation, f = e3.fillParent, p = [n2];
        (d && p.push("".concat(n2, "--").concat(d)), true === a2 && p.push("".concat(n2, "--organic-arrows")), true === i2 && p.push("".concat(n2, "--disabled")), f && p.push("".concat(n2, "--fill-parent")), false === u && (0 === l && p.push("".concat(n2, "--first")), l === c - 1 && p.push("".concat(n2, "--last"))), r2 && r2[n2] && (p = Object(o.b)(p, r2)), s2) && (t3 = p).push.apply(t3, _toConsumableArray(s2.split(" ")));
        return p.join(" ").trim().replace(/[\s]+/gi, " ");
      }
      function transformChildren(e3) {
        var t3 = [];
        return (e3.constructor === Array ? e3 : [e3]).forEach(function(e4) {
          var n2 = _objectSpread({}, e4.props);
          e4.props["data-src"] && (n2.source = e4.props["data-src"]), e4.props["data-slug"] && (n2.slug = e4.props["data-slug"]), t3.push(n2);
        }), t3;
      }
      function setupClassNames(e3, t3) {
        return { boxA: Object(o.c)("".concat(e3, "__boxA"), t3), boxB: Object(o.c)("".concat(e3, "__boxB"), t3), box: Object(o.c)("".concat(e3, "__box"), t3), container: Object(o.c)("".concat(e3, "__container"), t3), wrapper: Object(o.c)("".concat(e3, "__wrapper"), t3), bar: Object(o.c)("".concat(e3, "__bar"), t3), barActive: Object(o.c)("".concat(e3, "__bar--active"), t3), barEnd: Object(o.c)("".concat(e3, "__bar--end"), t3), content: Object(o.c)("".concat(e3, "__content"), t3), contentStatic: Object(o.c)("".concat(e3, "__content--static"), t3), contentMoveLeft: Object(o.c)("".concat(e3, "__content--moveLeft"), t3), contentMoveRight: Object(o.c)("".concat(e3, "__content--moveRight"), t3), controlsHidden: Object(o.c)("".concat(e3, "__controls--hidden"), t3), controlsActive: Object(o.c)("".concat(e3, "__controls--active"), t3), animated: Object(o.c)("".concat(e3, "--animated"), t3), animatedMobile: Object(o.c)("".concat(e3, "--animated-mobile"), t3), contentExit: Object(o.c)("".concat(e3, "__content--exit"), t3), exit: Object(o.c)("".concat(e3, "--exit"), t3), active: Object(o.c)("".concat(e3, "--active"), t3), moveLeft: Object(o.c)("".concat(e3, "--moveLeft"), t3), moveRight: Object(o.c)("".concat(e3, "--moveRight"), t3), startUp: Object(o.c)("".concat(e3, "__startUp"), t3), bulletsLoading: Object(o.c)("".concat(e3, "__bullets--loading"), t3) };
      }
    }, function(t2, n) {
      t2.exports = e;
    }, function(e2, n) {
      e2.exports = t;
    }, function(e2, t2, n) {
      e2.exports = function(e3) {
        var n2 = {};
        function t3(o) {
          if (n2[o]) return n2[o].exports;
          var r = n2[o] = { i: o, l: false, exports: {} };
          return e3[o].call(r.exports, r, r.exports, t3), r.l = true, r.exports;
        }
        return t3.m = e3, t3.c = n2, t3.d = function(e4, n3, o) {
          t3.o(e4, n3) || Object.defineProperty(e4, n3, { enumerable: true, get: o });
        }, t3.r = function(e4) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
        }, t3.t = function(e4, n3) {
          if (1 & n3 && (e4 = t3(e4)), 8 & n3) return e4;
          if (4 & n3 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
          var o = /* @__PURE__ */ Object.create(null);
          if (t3.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e4 }), 2 & n3 && "string" != typeof e4) for (var r in e4) t3.d(o, r, (function(t4) {
            return e4[t4];
          }).bind(null, r));
          return o;
        }, t3.n = function(e4) {
          var n3 = e4 && e4.__esModule ? function() {
            return e4.default;
          } : function() {
            return e4;
          };
          return t3.d(n3, "a", n3), n3;
        }, t3.o = function(e4, t4) {
          return Object.prototype.hasOwnProperty.call(e4, t4);
        }, t3.p = "", t3(t3.s = 0);
      }([function(e3, t3, n2) {
        function o(e4, t4) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = n3.tolerance, r2 = void 0 === o2 ? 0 : o2, i = n3.propertyName;
          return new Promise(function(n4) {
            if (e4) {
              var o3 = null, a = t4.charAt(0).toUpperCase() + t4.slice(1), s = 0;
              void 0 !== e4.style["Webkit" + a] && (o3 = "webkit" + a + "End"), void 0 !== e4.style.OTransition && (o3 = "o" + t4 + "End"), void 0 !== e4.style[t4] && (o3 = t4 + "end"), e4.clearCssEndEvent && e4.clearCssEndEvent(), e4.clearCssEndEvent = function() {
                e4.removeEventListener(o3, c);
              }, e4.addEventListener(o3, c);
            } else n4(false);
            function c(t5) {
              if ((t5.srcElement || t5.target) === e4) {
                if (s >= r2) {
                  if (i && i !== t5.propertyName) return;
                  e4.removeEventListener(o3, c), n4(t5);
                }
                s += 1;
              }
            }
          });
        }
        function r(e4) {
          window && window.requestAnimationFrame(function() {
            window.requestAnimationFrame(e4);
          });
        }
        Object.defineProperty(t3, "__esModule", { value: true }), t3.setCssEndEvent = o, t3.beforeCssLayout = function(e4) {
          window && window.requestAnimationFrame(e4);
        }, t3.beforeNextCssLayout = r, t3.beforeFutureCssLayout = function(e4, t4) {
          !function e5(t5, n3) {
            window && t5 && Number.isInteger(t5) && t5 > 0 ? window.requestAnimationFrame(function() {
              e5(t5 - 1, n3);
            }) : n3();
          }(e4 + 1, t4);
        }, t3.onceNextCssLayout = function() {
          return new Promise(function(e4) {
            r(e4);
          });
        }, t3.onceTransitionEnd = function(e4) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(function(n3) {
            o(e4, "transition", t4).then(n3);
          });
        }, t3.onceAnimationEnd = function(e4) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(function(n3) {
            o(e4, "animation", t4).then(n3);
          });
        };
      }]);
    }, function(e2, t2, n) {
      e2.exports = n(13);
    }, , , , , , , , function(e2, t2, n) {
      n.r(t2);
      var o = n(3), r = n.n(o), i = n(2), a = n.n(i), s = n(4), c = n(0), l = n(1);
      function _typeof(e3) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e4) {
          return typeof e4;
        } : function _typeof2(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function _defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var o2 = t3[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      function _getPrototypeOf(e3) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function _assertThisInitialized(e3) {
        if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }
      function _setPrototypeOf(e3, t3) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e4, t4) {
          return e4.__proto__ = t4, e4;
        })(e3, t3);
      }
      function _defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      var u = function(e3) {
        function Bullets(e4) {
          var t3;
          return function _classCallCheck(e5, t4) {
            if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
          }(this, Bullets), t3 = function _possibleConstructorReturn(e5, t4) {
            return !t4 || "object" !== _typeof(t4) && "function" != typeof t4 ? _assertThisInitialized(e5) : t4;
          }(this, _getPrototypeOf(Bullets).call(this, e4)), _defineProperty(_assertThisInitialized(t3), "bulletClick", function(e5) {
            var n2 = e5.currentTarget;
            n2.classList.add(Object(c.c)("".concat(t3.rootElement, "__bullets--loading"), t3.props.cssModule));
            var o2 = parseInt(n2.getAttribute("data-index"), 10), r2 = !(t3.props.selected > o2);
            t3.props.onClick({ index: o2, direction: r2 });
          }), t3.rootElement = e4.rootElement, t3;
        }
        return function _inherits(e4, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
          e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && _setPrototypeOf(e4, t3);
        }(Bullets, e3), function _createClass(e4, t3, n2) {
          return t3 && _defineProperties(e4.prototype, t3), e4;
        }(Bullets, [{ key: "renderBullets", value: function renderBullets() {
          var e4 = this, t3 = this.props, n2 = t3.cssModule, o2 = t3.selected, i2 = t3.media;
          return (void 0 === i2 ? [] : i2).map(function(t4, i3) {
            var a2 = i3 === o2 ? Object(c.c)("".concat(e4.rootElement, "__bullets--active"), n2) : null;
            return r.a.createElement("button", { key: "bullet-".concat(i3), "data-index": i3, onClick: e4.bulletClick, className: a2 }, i3);
          });
        } }, { key: "render", value: function render() {
          var e4 = this.props, t3 = e4.cssModule, n2 = e4.rootElement;
          return r.a.createElement("nav", { className: Object(c.c)("".concat(n2, "__bullets"), t3) }, this.renderBullets());
        } }]), Bullets;
      }(r.a.Component);
      function buttons_typeof(e3) {
        return (buttons_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e4) {
          return typeof e4;
        } : function _typeof2(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function buttons_defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var o2 = t3[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      function buttons_possibleConstructorReturn(e3, t3) {
        return !t3 || "object" !== buttons_typeof(t3) && "function" != typeof t3 ? function buttons_assertThisInitialized(e4) {
          if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e4;
        }(e3) : t3;
      }
      function buttons_getPrototypeOf(e3) {
        return (buttons_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function buttons_setPrototypeOf(e3, t3) {
        return (buttons_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e4, t4) {
          return e4.__proto__ = t4, e4;
        })(e3, t3);
      }
      function buttons_defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      _defineProperty(u, "propTypes", { cssModule: a.a.object, rootElement: a.a.string.isRequired, media: a.a.array, onClick: a.a.func, selected: a.a.number }), _defineProperty(u, "defaultProps", { cssModule: null, selected: 0, media: [], onClick: function onClick() {
      } });
      var d = function(e3) {
        function Buttons() {
          return function buttons_classCallCheck(e4, t3) {
            if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }(this, Buttons), buttons_possibleConstructorReturn(this, buttons_getPrototypeOf(Buttons).apply(this, arguments));
        }
        return function buttons_inherits(e4, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
          e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && buttons_setPrototypeOf(e4, t3);
        }(Buttons, e3), function buttons_createClass(e4, t3, n2) {
          return t3 && buttons_defineProperties(e4.prototype, t3), e4;
        }(Buttons, [{ key: "componentDidMount", value: function componentDidMount() {
          this.props.onMount({ element: this.controls, next: this.next, prev: this.prev });
        } }, { key: "render", value: function render() {
          var e4 = this, t3 = this.props, n2 = t3.rootElement, o2 = t3.cssModule, i2 = t3.organicArrows, a2 = t3.buttonContentLeft, s2 = t3.buttonContentRight, l2 = t3.onNext, u2 = t3.onPrev;
          return r.a.createElement("div", { ref: function ref(t4) {
            e4.controls = t4, e4.props.onMount({ element: e4.controls, next: e4.next || null, prev: e4.prev || null });
          }, className: [Object(c.c)("".concat(n2, "__controls"), o2), Object(c.c)("".concat(n2, "__controls--hidden"), o2)].join(" ") }, r.a.createElement("button", { ref: function ref(t4) {
            e4.next = t4;
          }, "aria-label": "next", className: Object(c.c)("".concat(n2, "__next"), o2), onClick: l2 }, i2 ? r.a.createElement("span", { className: Object(c.c)("".concat(n2, "__controls__arrow-right"), o2) }) : s2), r.a.createElement("button", { ref: function ref(t4) {
            e4.prev = t4;
          }, "aria-label": "previous", className: Object(c.c)("".concat(n2, "__prev"), o2), onClick: u2 }, i2 ? r.a.createElement("span", { className: Object(c.c)("".concat(n2, "__controls__arrow-left"), o2) }) : a2));
        } }]), Buttons;
      }(r.a.Component);
      function media_typeof(e3) {
        return (media_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e4) {
          return typeof e4;
        } : function _typeof2(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function _extends() {
        return (_extends = Object.assign || function(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = arguments[t3];
            for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e3[o2] = n2[o2]);
          }
          return e3;
        }).apply(this, arguments);
      }
      function _objectWithoutProperties(e3, t3) {
        if (null == e3) return {};
        var n2, o2, r2 = function _objectWithoutPropertiesLoose(e4, t4) {
          if (null == e4) return {};
          var n3, o3, r3 = {}, i3 = Object.keys(e4);
          for (o3 = 0; o3 < i3.length; o3++) n3 = i3[o3], t4.indexOf(n3) >= 0 || (r3[n3] = e4[n3]);
          return r3;
        }(e3, t3);
        if (Object.getOwnPropertySymbols) {
          var i2 = Object.getOwnPropertySymbols(e3);
          for (o2 = 0; o2 < i2.length; o2++) n2 = i2[o2], t3.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (r2[n2] = e3[n2]);
        }
        return r2;
      }
      function media_defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var o2 = t3[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      function media_getPrototypeOf(e3) {
        return (media_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function media_assertThisInitialized(e3) {
        if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }
      function media_setPrototypeOf(e3, t3) {
        return (media_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e4, t4) {
          return e4.__proto__ = t4, e4;
        })(e3, t3);
      }
      function media_defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      buttons_defineProperty(d, "propTypes", { cssModule: a.a.object, rootElement: a.a.string.isRequired, onMount: a.a.func.isRequired, onNext: a.a.func.isRequired, onPrev: a.a.func.isRequired, buttonContentLeft: a.a.node, buttonContentRight: a.a.node, organicArrows: a.a.bool }), buttons_defineProperty(d, "defaultProps", { cssModule: null, organicArrows: true, buttonContentLeft: null, buttonContentRight: null });
      var f = function(e3) {
        function Media() {
          var e4, t3;
          !function media_classCallCheck(e5, t4) {
            if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
          }(this, Media);
          for (var n2 = arguments.length, o2 = new Array(n2), r2 = 0; r2 < n2; r2++) o2[r2] = arguments[r2];
          return t3 = function media_possibleConstructorReturn(e5, t4) {
            return !t4 || "object" !== media_typeof(t4) && "function" != typeof t4 ? media_assertThisInitialized(e5) : t4;
          }(this, (e4 = media_getPrototypeOf(Media)).call.apply(e4, [this].concat(o2))), media_defineProperty(media_assertThisInitialized(t3), "state", {}), t3;
        }
        return function media_inherits(e4, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
          e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && media_setPrototypeOf(e4, t3);
        }(Media, e3), function media_createClass(e4, t3, n2) {
          return t3 && media_defineProperties(e4.prototype, t3), e4;
        }(Media, [{ key: "render", value: function render() {
          var e4 = this.props, t3 = e4.media, n2 = e4.className, o2 = t3.source, i2 = t3.children, a2 = t3.style, s2 = (t3.loader, t3["data-src"], t3["data-alt"], t3.className), c2 = (t3.onTransitionEnd, t3.onTransitionStartOut, t3.onTransitionStartIn, t3.onTransitionRequestOut, t3.onTransitionRequestIn, _objectWithoutProperties(t3, ["source", "children", "style", "loader", "data-src", "data-alt", "className", "onTransitionEnd", "onTransitionStartOut", "onTransitionStartIn", "onTransitionRequestOut", "onTransitionRequestIn"])), l2 = null;
          return o2 && (l2 = o2.match(/\.(mp4|webm)/) ? r.a.createElement("video", { title: t3.title || t3["data-title"], src: o2, type: "video/mp4", controls: true }) : r.a.createElement("img", { alt: t3.alt || t3.title || t3["data-alt"] || null, src: o2 })), r.a.createElement("div", _extends({ className: n2, style: a2 || null }, c2), l2, i2 && r.a.createElement("div", { className: s2 }, t3.children));
        } }]), Media;
      }(r.a.Component);
      function core_typeof(e3) {
        return (core_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e4) {
          return typeof e4;
        } : function _typeof2(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function core_extends() {
        return (core_extends = Object.assign || function(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = arguments[t3];
            for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e3[o2] = n2[o2]);
          }
          return e3;
        }).apply(this, arguments);
      }
      function _toConsumableArray(e3) {
        return function _arrayWithoutHoles(e4) {
          if (Array.isArray(e4)) {
            for (var t3 = 0, n2 = new Array(e4.length); t3 < e4.length; t3++) n2[t3] = e4[t3];
            return n2;
          }
        }(e3) || function _iterableToArray(e4) {
          if (Symbol.iterator in Object(e4) || "[object Arguments]" === Object.prototype.toString.call(e4)) return Array.from(e4);
        }(e3) || function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function ownKeys(e3, t3) {
        var n2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e3);
          t3 && (o2 = o2.filter(function(t4) {
            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
          })), n2.push.apply(n2, o2);
        }
        return n2;
      }
      function _objectSpread(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n2 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? ownKeys(Object(n2), true).forEach(function(t4) {
            core_defineProperty(e3, t4, n2[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : ownKeys(Object(n2)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
          });
        }
        return e3;
      }
      function core_defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var o2 = t3[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      function core_getPrototypeOf(e3) {
        return (core_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function core_assertThisInitialized(e3) {
        if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }
      function core_setPrototypeOf(e3, t3) {
        return (core_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e4, t4) {
          return e4.__proto__ = t4, e4;
        })(e3, t3);
      }
      function core_defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      media_defineProperty(f, "propTypes", { media: a.a.object.isRequired, className: a.a.string.isRequired });
      var p = "awssld", b = new c.a(), h = function(e3) {
        function AwesomeSlider2(e4) {
          var t3;
          return function core_classCallCheck(e5, t4) {
            if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
          }(this, AwesomeSlider2), t3 = function core_possibleConstructorReturn(e5, t4) {
            return !t4 || "object" !== core_typeof(t4) && "function" != typeof t4 ? core_assertThisInitialized(e5) : t4;
          }(this, core_getPrototypeOf(AwesomeSlider2).call(this, e4)), core_defineProperty(core_assertThisInitialized(t3), "clickNext", function() {
            var e5 = null === t3.index ? 0 : t3.index + 1;
            t3.onTransitionRequest("next", e5), t3.goTo({ index: e5, direction: true });
          }), core_defineProperty(core_assertThisInitialized(t3), "clickPrev", function() {
            var e5 = t3.index - 1;
            t3.onTransitionRequest("prev", e5), t3.goTo({ index: e5, direction: false });
          }), core_defineProperty(core_assertThisInitialized(t3), "touchStart", function(e5) {
            if (!t3.animating && null !== t3.index) {
              var n2 = e5.nativeEvent;
              t3.touchStartPoint = n2.touches[0].clientX;
            }
          }), core_defineProperty(core_assertThisInitialized(t3), "touchMove", function(e5) {
            if (!t3.animating && t3.touchStartPoint) {
              var n2 = e5.nativeEvent, o2 = n2.touches[0].clientX - t3.touchStartPoint, r2 = t3[t3.active], i2 = t3[t3.loader], a2 = !(o2 > 0), s2 = Math.abs(o2);
              false !== t3.touchEnabled ? s2 >= 10 && (false === t3.loading ? t3.goTo({ index: a2 ? t3.index + 1 : t3.index - 1, direction: a2, touch: true }) : true === t3.direction ? (o2 += 10, Math.abs(o2) > r2.offsetWidth ? o2 = -r2.offsetWidth : o2 > 0 && (o2 = 0), r2.style.transform = "translate3d(".concat(o2, "px, 0, 0)"), i2.style.transform = "translate3d(calc(100% + ".concat(o2, "px), 0, 0)")) : (o2 -= 10, Math.abs(o2) > r2.offsetWidth ? o2 = r2.offsetWidth : o2 < 0 && (o2 = 0), r2.style.transform = "translate3d(".concat(o2, "px, 0, 0)"), i2.style.transform = "translate3d(calc(-100% + ".concat(o2, "px), 0, 0)"))) : s2 > 20 && (t3.touchEnabled = true, t3.touchStartPoint = n2.touches[0].clientX);
            }
          }), core_defineProperty(core_assertThisInitialized(t3), "touchEnd", function() {
            !t3.animating && t3.touchStartPoint && t3.loading && (t3.touchStartPoint = null, t3.animating = true, t3.touchEnabled = false, t3.animateMobileEnd(function() {
              t3.index = t3.nextIndex, t3.setState({ index: t3.index }), t3.onTransitionEnd(), t3.animating = false, t3.loading = false, t3.unchargeIndex();
            }));
          }), core_defineProperty(core_assertThisInitialized(t3), "bulletClick", function(e5) {
            var n2 = e5.currentTarget, o2 = parseInt(n2.getAttribute("data-index"), 10);
            t3.goTo({ index: o2, direction: !(t3.index > o2) }, function() {
              Object(s.onceNextCssLayout)().then(function() {
                Object(l.a)(n2, t3.classNames.bulletsLoading);
              });
            });
          }), t3.rootElement = e4.rootElement || p, t3.boxA = null, t3.boxB = null, t3.loaded = [], t3.active = "boxA", t3.loader = "boxB", t3.nextIndex = null, t3.loading = false, t3.media = null, t3.started = false, t3.touchEnabled = false, t3.setupStartup(e4), t3;
        }
        return function core_inherits(e4, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
          e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && core_setPrototypeOf(e4, t3);
        }(AwesomeSlider2, e3), function core_createClass(e4, t3, n2) {
          return t3 && core_defineProperties(e4.prototype, t3), e4;
        }(AwesomeSlider2, [{ key: "componentDidMount", value: function componentDidMount() {
          var e4 = this;
          Object(l.a)(this.boxA, this.classNames.active), this.props.startupScreen && (this.buttons && (Object(l.a)(this.buttons.element, this.classNames.controlsHidden), Object(l.a)(this.buttons.element, this.classNames.controlsActive)), true === this.props.startup && this.media.length > 0 && this.startup()), this.props.onFirstMount && this.props.onFirstMount(_objectSpread({}, this.getInfo())), this.buttons && Object(s.onceNextCssLayout)().then(function() {
            e4.buttons && e4.buttons.element && Object(l.b)(e4.buttons.element, e4.classNames.controlsHidden);
          });
        } }, { key: "UNSAFE_componentWillReceiveProps", value: function UNSAFE_componentWillReceiveProps(e4) {
          if (this.checkChildren(e4), this.setupClassNames(Object(l.e)(e4.cssModule)), e4.name === this.props.name) if (true !== e4.startup || false !== this.started) if (e4.selected === this.props.selected) this.refreshSlider();
          else {
            var t3 = this.getIndex(e4.selected), n2 = true === e4.infinite && 0 === t3 && this.index === this.media.length - 1 || !(this.index > t3);
            this.goTo({ index: t3, direction: n2 });
          }
          else this.startup();
          else this.resetSlider(e4.selected);
        } }, { key: "onTransitionStart", value: function onTransitionStart() {
          var e4 = this.media[this.index], t3 = this.media[this.nextIndex], n2 = _objectSpread({}, this.getInfo(), { nextSlide: this[this.loader], nextIndex: this.nextIndex, nextMedia: t3 });
          this.props.onTransitionStart && this.props.onTransitionStart(n2), e4 && e4.onTransitionStartOut && e4.onTransitionStartOut(n2), t3 && t3.onTransitionStartIn && t3.onTransitionStartIn(n2);
        } }, { key: "onTransitionRequest", value: function onTransitionRequest(e4, t3) {
          var n2 = this.media[this.index], o2 = this.checkIndex(t3), r2 = this.media[o2], i2 = _objectSpread({ eventName: e4 }, this.getInfo(), { nextSlide: null, nextIndex: o2, nextMedia: r2 });
          this.props.onTransitionRequest && this.props.onTransitionRequest(i2), n2 && n2.onTransitionRequestOut && n2.onTransitionRequestOut(i2), r2 && r2.onTransitionRequestIn && r2.onTransitionRequestIn(i2);
        } }, { key: "onTransitionEnd", value: function onTransitionEnd() {
          var e4 = this.media[this.index], t3 = _objectSpread({}, this.getInfo());
          this.props.onTransitionEnd && this.props.onTransitionEnd(t3), e4 && e4.onTransitionEnd && e4.onTransitionEnd(t3);
        } }, { key: "getRootClassName", value: function getRootClassName() {
          var e4 = this.props, t3 = e4.animation, n2 = e4.className, o2 = e4.cssModule, r2 = e4.disabled, i2 = e4.fillParent, a2 = e4.infinite, s2 = e4.organicArrows;
          return Object(l.d)({ animation: t3, className: n2, cssModule: Object(l.e)(o2), current: this.state.index, disabled: r2, fillParent: i2, infinite: a2, organicArrows: s2, rootElement: this.rootElement, total: this.media.length });
        } }, { key: "setupStartup", value: function setupStartup(e4) {
          if (this.checkChildren(e4), this.setupClassNames(Object(l.e)(e4.cssModule)), e4.startupScreen) {
            var t3 = this.getIndex(this.props.selected);
            this.index = null, this.state = { index: this.index, boxA: { className: this.classNames.startUp, children: e4.startupScreen }, boxB: this.media[t3] || null };
          } else this.started = true, this.index = this.getIndex(this.props.selected), this.state = { index: this.index, boxA: this.media[this.index] || null, boxB: null };
        } }, { key: "getInfo", value: function getInfo() {
          return { slides: this.media.length, currentIndex: this.index, currentSlide: this[this.active], currentMedia: this.media[this.index], element: this.slider };
        } }, { key: "getProgressBar", value: function getProgressBar() {
          if (!document) return {};
          var e4 = document.createElement("div");
          return e4.className = this.classNames.bar, e4;
        } }, { key: "setupClassNames", value: function setupClassNames(e4) {
          this.classNames = Object(l.f)(this.rootElement, e4);
        } }, { key: "getIndex", value: function getIndex(e4) {
          var t3 = 0;
          return "number" == typeof e4 ? e4 : ("string" == typeof e4 && this.media.forEach(function(n2, o2) {
            n2.slug === e4 && (t3 = o2);
          }), t3);
        } }, { key: "refreshSlider", value: function refreshSlider() {
          var e4;
          if (true !== this.loading && false !== this.props.startup && null !== this.index) {
            var t3 = this.index;
            this.setState((core_defineProperty(e4 = { index: t3 }, this.active, this.media[this.getIndex(t3)]), core_defineProperty(e4, this.loader, null), e4));
          }
        } }, { key: "startup", value: function startup() {
          var e4 = this;
          this.started = true, setTimeout(function() {
            e4.goTo({ index: e4.props.selected, direction: true, touch: false });
          }, this.props.startupDelay || 75);
        } }, { key: "resetSlider", value: function resetSlider() {
          var e4, t3 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          this.index = n2, this.setState((core_defineProperty(e4 = { index: n2 }, this.active, this.media[this.getIndex(n2)]), core_defineProperty(e4, this.loader, null), e4), function() {
            t3.props.onResetSlider && t3.props.onResetSlider(_objectSpread({}, t3.getInfo()));
          });
        } }, { key: "checkChildren", value: function checkChildren(e4) {
          e4.children && (e4.children !== this.props.children || this.props.children && !this.media) ? this.media = Object(l.g)(e4.children) : e4.media && e4.media.length ? this.media = e4.media : this.media || (this.media = []);
        } }, { key: "startBarAnimation", value: function startBarAnimation(e4) {
          var t3 = this, n2 = e4.active;
          return new Promise(function(e5) {
            t3.bar = t3.getProgressBar(), n2.appendChild(t3.bar), Object(s.onceNextCssLayout)().then(function() {
              Object(s.onceNextCssLayout)().then(function() {
                Object(l.a)(t3.bar, t3.classNames.barActive), e5();
              });
            });
          });
        } }, { key: "endBarAnimation", value: function endBarAnimation(e4) {
          var t3 = this;
          this.bar && Object(s.onceNextCssLayout)().then(function() {
            Object(s.onceTransitionEnd)(t3.bar).then(function() {
              e4();
            }), Object(l.a)(t3.bar, t3.classNames.barEnd);
          });
        } }, { key: "loadContent", value: function loadContent(e4, t3) {
          var n2 = this;
          return new Promise(function(o2, r2) {
            if (n2.props.onLoadStart || t3 && t3.onLoadStart) {
              var i2 = n2.props.onLoadStart || t3 && t3.onLoadStart;
              return n2.startBarAnimation({ active: e4 }), void i2(_objectSpread({ next: function next() {
                n2.endBarAnimation(function() {
                  o2(n2.bar);
                });
              }, error: r2 }, n2.getInfo()));
            }
            if (t3 && (t3.source || t3.preload)) {
              var a2 = t3.preload ? t3.preload : t3.source && [t3.source] || [];
              return true === n2.checkLoadedUrls(a2) ? void o2(null) : (n2.startBarAnimation({ active: e4 }), void b.loadMultiple(a2).then(function() {
                n2.pushLoaded(a2), n2.endBarAnimation(function() {
                  o2(n2.bar);
                });
              }));
            }
            o2(null);
          });
        } }, { key: "pushLoaded", value: function pushLoaded(e4) {
          this.loaded = [].concat(_toConsumableArray(this.loaded), _toConsumableArray(e4));
        } }, { key: "checkLoadedUrls", value: function checkLoadedUrls(e4) {
          var t3 = this, n2 = true;
          return e4.forEach(function(e5) {
            t3.loaded.includes(e5) || (n2 = false);
          }), n2;
        } }, { key: "startAnimationMobile", value: function startAnimationMobile() {
          var e4 = this.direction, t3 = this[this.active], n2 = this[this.loader], o2 = e4 ? this.classNames.contentMoveRight : this.classNames.contentMoveLeft, r2 = e4 ? this.classNames.contentMoveLeft : this.classNames.contentMoveRight;
          this.props.onTransitionStart && this.props.onTransitionStart(_objectSpread({}, this.getInfo(), { nextSlide: this[this.loader], nextIndex: this.nextIndex, nextMedia: this.media[this.nextIndex] }));
          var i2 = t3.querySelector(".".concat(Object(l.c)(this.classNames.content)));
          Object(l.a)(i2, r2), Object(l.a)(i2, this.classNames.contentExit);
          var a2 = n2.querySelector(".".concat(Object(l.c)(this.classNames.content)));
          Object(l.a)(a2, o2), Object(l.a)(a2, this.classNames.contentStatic), Object(l.a)(t3, this.classNames.animated), Object(l.a)(n2, this.classNames.animated);
        } }, { key: "animateMobileEnd", value: function animateMobileEnd(e4) {
          var t3 = this, n2 = this.direction, o2 = this[this.active], r2 = this[this.loader], i2 = n2 ? this.classNames.moveLeft : this.classNames.moveRight, a2 = n2 ? this.classNames.contentMoveRight : this.classNames.contentMoveLeft, c2 = n2 ? this.classNames.contentMoveLeft : this.classNames.contentMoveRight, u2 = r2.querySelector(".".concat(Object(l.c)(this.classNames.content))), d2 = o2.querySelector(".".concat(Object(l.c)(this.classNames.content)));
          Object(l.b)(u2, this.classNames.contentStatic), Object(l.a)(r2, this.classNames.animatedMobile), Object(l.a)(o2, this.classNames.animatedMobile), Object(s.onceNextCssLayout)().then(function() {
            r2.style.transform = "translate3d(0, 0, 0)", o2.style.transform = "translate3d(".concat(t3.direction ? "-" : "", "100%, 0, 0)"), Object(s.onceTransitionEnd)(o2).then(function() {
              t3.loading && (Object(l.b)(o2, t3.classNames.animated), Object(l.b)(r2, t3.classNames.animated), Object(l.a)(r2, t3.classNames.active), Object(l.b)(o2, t3.classNames.active), Object(l.b)(o2, i2), Object(l.b)(r2, t3.classNames.animatedMobile), Object(l.b)(o2, t3.classNames.animatedMobile), Object(l.b)(d2, c2), Object(l.b)(d2, t3.classNames.contentExit), Object(l.b)(u2, a2), t3.buttons && setTimeout(function() {
                t3.buttons && Object(l.b)(t3.buttons.element, t3.classNames.controlsActive);
              }, t3.props.controlsReturnDelay), t3.activeArrow && (Object(l.b)(t3.activeArrow, t3.activeArrowClass), t3.activeArrow = null, t3.activeArrowClass = null), t3.active = "boxA" === t3.active ? "boxB" : "boxA", t3.loader = "boxA" === t3.active ? "boxB" : "boxA", e4 && e4());
            });
          });
        } }, { key: "runAnimation", value: function runAnimation(e4) {
          var t3 = this, n2 = e4.active, o2 = e4.media, r2 = e4.contentExitMoveClass, i2 = e4.contentEnterMoveClass, a2 = e4.activeContentElement, c2 = e4.loaderContentElement, u2 = e4.loader, d2 = e4.loaderPosition, f2 = e4.exitPosition, p2 = e4.callback, b2 = e4.transitionDelay;
          this.loadContent(n2, o2).then(function(e5) {
            Object(l.a)(a2, r2), Object(l.a)(a2, t3.classNames.contentExit), Object(l.a)(c2, i2), Object(l.a)(c2, t3.classNames.contentStatic), setTimeout(function() {
              Object(s.onceNextCssLayout)().then(function() {
                Object(l.a)(n2, t3.classNames.animated), Object(l.a)(u2, t3.classNames.animated), Object(l.b)(c2, t3.classNames.contentStatic), Object(l.a)(n2, t3.classNames.exit), Object(l.a)(u2, d2), Object(l.a)(n2, f2), Object(s.onceAnimationEnd)(n2).then(function() {
                  Object(l.a)(u2, t3.classNames.active), Object(l.b)(u2, d2), Object(l.b)(u2, t3.classNames.animated), Object(l.b)(n2, t3.classNames.animated), Object(l.b)(n2, t3.classNames.active), Object(l.b)(n2, f2), Object(l.b)(n2, t3.classNames.exit), Object(l.b)(a2, r2), Object(l.b)(a2, t3.classNames.contentExit), Object(l.b)(c2, i2), e5 && n2.removeChild(e5), t3.buttons && setTimeout(function() {
                    t3.buttons && Object(l.b)(t3.buttons.element, t3.classNames.controlsActive);
                  }, t3.props.controlsReturnDelay), t3.active = "boxA" === t3.active ? "boxB" : "boxA", t3.loader = "boxA" === t3.active ? "boxB" : "boxA";
                  var o3 = !t3.activeArrow;
                  t3.activeArrow && (Object(s.onceTransitionEnd)(t3.activeArrow, { tolerance: null === t3.index ? 0 : 2 }).then(function() {
                    t3.releaseTransition();
                  }), Object(l.b)(t3.activeArrow, t3.activeArrowClass), t3.activeArrow = null, t3.activeArrowClass = null), p2({ release: o3 });
                });
              });
            }, b2);
          });
        } }, { key: "releaseTransition", value: function releaseTransition() {
          this.loading = false;
        } }, { key: "startAnimation", value: function startAnimation(e4, t3, n2) {
          var o2 = this.props.transitionDelay, r2 = this[this.active], i2 = this[this.loader], a2 = e4 ? this.classNames.moveRight : this.classNames.moveLeft, s2 = e4 ? this.classNames.moveLeft : this.classNames.moveRight, c2 = e4 ? this.classNames.contentMoveRight : this.classNames.contentMoveLeft, u2 = e4 ? this.classNames.contentMoveLeft : this.classNames.contentMoveRight, d2 = r2.querySelector(".".concat(Object(l.c)(this.classNames.content))), f2 = i2.querySelector(".".concat(Object(l.c)(this.classNames.content)));
          r2.style.removeProperty("transform"), i2.style.removeProperty("transform"), this.onTransitionStart();
          var p2 = { active: r2, media: t3, contentExitMoveClass: u2, contentEnterMoveClass: c2, activeContentElement: d2, loaderContentElement: f2, loader: i2, loaderPosition: a2, exitPosition: s2, callback: n2, transitionDelay: o2 };
          this.runAnimation(p2);
        } }, { key: "goTo", value: function goTo(e4) {
          var t3 = this, n2 = e4.index, o2 = e4.direction, r2 = e4.touch, i2 = void 0 !== r2 && r2, a2 = this.getIndex(n2);
          true !== this.loading && n2 !== this.index ? (this.loading = true, this.direction = o2, true !== i2 ? this.activateArrows(o2, function() {
            t3.chargeIndex(a2, function(e5) {
              t3.renderedLoader = true, t3.startAnimation(o2, e5, function(e6) {
                var n3 = e6.release, o3 = void 0 === n3 || n3;
                t3.index = t3.nextIndex, t3.setState({ index: t3.index }, function() {
                  t3.onTransitionEnd(), true === o3 && t3.releaseTransition();
                });
              });
            });
          }) : this.chargeIndex(a2, function() {
            t3.activateArrows(o2), t3.startAnimationMobile();
          })) : this.props.onTransitionReject && this.props.onTransitionReject(_objectSpread({}, this.getInfo(), { forceTransition: function forceTransition() {
            t3.goTo({ index: n2, direction: o2, touch: i2 });
          } }));
        } }, { key: "checkIndex", value: function checkIndex(e4) {
          return e4 > this.media.length - 1 ? 0 : e4 < 0 ? this.media.length - 1 : e4;
        } }, { key: "chargeIndex", value: function chargeIndex(e4, t3) {
          this.nextIndex = this.checkIndex(e4);
          var n2 = {}, o2 = this.media[this.nextIndex];
          n2[this.loader] = _objectSpread({ loader: true }, o2), this.setState(n2, function() {
            t3(o2);
          });
        } }, { key: "unchargeIndex", value: function unchargeIndex() {
          var e4 = {};
          e4[this.loader] = null, this.setState(e4, function() {
          });
        } }, { key: "activateArrows", value: function activateArrows(e4, t3) {
          var n2 = e4 ? "right" : "left", o2 = Object(l.e)(this.props.cssModule), r2 = Object(l.c)(Object(c.c)("".concat(this.rootElement, "__controls__arrow-").concat(n2), o2));
          if (this.buttons) {
            var i2 = e4 ? this.buttons.next : this.buttons.prev;
            this.activeArrow = i2.querySelector(".".concat(r2));
          }
          !this.activeArrow || this.buttons && this.buttons.element && this.buttons.element.classList.contains(this.classNames.controlsActive) ? t3 && t3() : (this.activeArrowClass = Object(c.c)("".concat(this.rootElement, "__controls__arrow-").concat(n2, "--active"), o2), Object(s.onceTransitionEnd)(this.activeArrow, { tolerance: null === this.index ? 0 : 2 }).then(function() {
            t3 && t3();
          }), this.buttons && this.buttons.element && (Object(l.a)(this.buttons.element, this.classNames.controlsActive), Object(l.a)(this.activeArrow, this.activeArrowClass)));
        } }, { key: "renderBox", value: function renderBox(e4) {
          var t3 = this, n2 = {};
          return this.props.mobileTouch && (n2.onTouchStart = this.touchStart, n2.onTouchMove = this.touchMove, n2.onTouchEnd = this.touchEnd), r.a.createElement("div", core_extends({ ref: function ref(n3) {
            t3["box".concat(e4)] = n3;
          }, className: this.classNames.box }, n2), this.state["box".concat(e4)] && r.a.createElement(f, { media: this.state["box".concat(e4)], className: this.classNames.content }));
        } }, { key: "render", value: function render() {
          var e4 = this, t3 = this.props, n2 = t3.cssModule, o2 = t3.organicArrows, i2 = t3.bullets, a2 = t3.style, s2 = t3.customContent, c2 = t3.buttons, f2 = t3.buttonContentLeft, p2 = t3.buttonContentRight, b2 = this.rootElement;
          return r.a.createElement("div", { ref: function ref(t4) {
            e4.slider = t4;
          }, className: this.getRootClassName(), style: a2 }, r.a.createElement("div", { ref: function ref(t4) {
            e4.wrapper = t4;
          }, className: this.classNames.wrapper }, r.a.createElement("div", { ref: function ref(t4) {
            e4.container = t4;
          }, className: this.classNames.container }, this.renderBox("A"), this.renderBox("B")), c2 && r.a.createElement(d, { rootElement: b2, cssModule: Object(l.e)(n2), onMount: function onMount(t4) {
            e4.buttons = t4;
          }, onNext: this.clickNext, onPrev: this.clickPrev, organicArrows: o2, buttonContentLeft: f2, buttonContentRight: p2 }), s2), i2 && r.a.createElement(u, { cssModule: Object(l.e)(n2), rootElement: b2, media: this.media, selected: this.state.index, onClick: function onClick(t4) {
            e4.onTransitionRequest("bullet", t4.index), e4.goTo(t4);
          } }));
        } }]), AwesomeSlider2;
      }(r.a.Component);
      core_defineProperty(h, "propTypes", { animation: a.a.string, bullets: a.a.bool, buttonContentLeft: a.a.node, buttonContentRight: a.a.node, buttons: a.a.bool, children: a.a.node, className: a.a.string, controlsReturnDelay: a.a.number, cssModule: a.a.any, customContent: a.a.node, onLoadStart: a.a.func, disabled: a.a.bool, fillParent: a.a.bool, infinite: a.a.bool, media: a.a.array, name: a.a.string, onFirstMount: a.a.func, onResetSlider: a.a.func, onStartupRelease: a.a.func, onTransitionEnd: a.a.func, onTransitionRequest: a.a.func, onTransitionStart: a.a.func, organicArrows: a.a.bool, rootElement: a.a.string, selected: a.a.any, startup: a.a.bool, startupDelay: a.a.number, startupScreen: a.a.object, style: a.a.object, transitionDelay: a.a.number, mobileTouch: a.a.bool }), core_defineProperty(h, "defaultProps", { animation: null, bullets: true, buttonContentLeft: null, buttonContentRight: null, buttons: true, children: null, className: null, controlsReturnDelay: 0, cssModule: null, customContent: null, onLoadStart: null, disabled: false, fillParent: false, infinite: true, media: [], name: "awesome-slider", onFirstMount: null, onResetSlider: null, onStartupRelease: null, onTransitionEnd: null, onTransitionRequest: null, onTransitionStart: null, organicArrows: true, rootElement: p, selected: 0, startup: true, startupDelay: 0, startupScreen: null, style: {}, transitionDelay: 0, mobileTouch: true });
      t2.default = h;
    }]);
  });
})(dist);
var distExports = dist.exports;
const AwesomeSlider = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
var autoplay = { exports: {} };
(function(module, exports) {
  !function webpackUniversalModuleDefinition(e, t) {
    module.exports = t(propTypesExports, reactExports);
  }(commonjsGlobal, function(e, t) {
    return function(e2) {
      var t2 = {};
      function __webpack_require__(n) {
        if (t2[n]) return t2[n].exports;
        var r = t2[n] = { i: n, l: false, exports: {} };
        return e2[n].call(r.exports, r, r.exports, __webpack_require__), r.l = true, r.exports;
      }
      return __webpack_require__.m = e2, __webpack_require__.c = t2, __webpack_require__.d = function(e3, t3, n) {
        __webpack_require__.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n });
      }, __webpack_require__.r = function(e3) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
      }, __webpack_require__.t = function(e3, t3) {
        if (1 & t3 && (e3 = __webpack_require__(e3)), 8 & t3) return e3;
        if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
        var n = /* @__PURE__ */ Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var r in e3) __webpack_require__.d(n, r, (function(t4) {
          return e3[t4];
        }).bind(null, r));
        return n;
      }, __webpack_require__.n = function(e3) {
        var t3 = e3 && e3.__esModule ? function getDefault() {
          return e3.default;
        } : function getModuleExports() {
          return e3;
        };
        return __webpack_require__.d(t3, "a", t3), t3;
      }, __webpack_require__.o = function(e3, t3) {
        return Object.prototype.hasOwnProperty.call(e3, t3);
      }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 6);
    }([function(e2, t2, n) {
      function _defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var r2 = t3[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
        }
      }
      n.d(t2, "a", function() {
        return r;
      }), n.d(t2, "b", function() {
        return classToModules;
      }), n.d(t2, "c", function() {
        return getClassName;
      });
      var r = function() {
        function MediaLoader() {
          !function _classCallCheck(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }(this, MediaLoader), "undefined" != typeof window && (this.image = new Image(), this.resolve = null, this.video = document.createElement("video"), this.events());
        }
        return function _createClass(e3, t3, n2) {
          return t3 && _defineProperties(e3.prototype, t3), e3;
        }(MediaLoader, [{ key: "events", value: function events() {
          var e3 = this;
          this.video.addEventListener("loadeddata", function() {
            return e3.resolve && e3.resolve(true);
          }), this.video.addEventListener("loadeddata", function() {
            return e3.resolve && e3.resolve(false);
          }), this.image.onload = function() {
            return e3.resolve && e3.resolve(true);
          }, this.image.onerror = function() {
            return e3.resolve && e3.resolve(false);
          };
        } }, { key: "load", value: function load(e3) {
          var t3 = this;
          return new Promise(function(n2) {
            e3 || n2(true), t3.resolve = n2, t3.loading = true, t3.ended = false, e3.match(/\.(mp4|webm)/i) && t3.video.setAttribute("src", e3), e3.match(/\.(png|jp(e)?g|gif|webp)/i) && (t3.image.src = e3, (t3.image.width > 0 || t3.image.height > 0) && n2(true));
          });
        } }, { key: "loadImage", value: function loadImage(e3) {
          var t3 = this, n2 = new Image(), r2 = false;
          n2.onload = function() {
            r2 || t3.pumpLoaded();
          }, n2.onerror = function() {
            r2 || t3.pumpLoaded();
          }, n2.src = e3, false === r2 && (n2.width > 0 || n2.height > 0) && (r2 = true, this.pumpLoaded());
        } }, { key: "loadVideo", value: function loadVideo(e3) {
          var t3 = this, n2 = document.createElement("video");
          n2.addEventListener("loadeddata", function() {
            t3.pumpLoaded();
          }), n2.addEventListener("error", function() {
            t3.pumpLoaded();
          }), n2.setAttribute("src", e3);
        } }, { key: "pumpLoaded", value: function pumpLoaded() {
          this.loaded += 1, this.loaded === this.toLoad && this.resolver(true);
        } }, { key: "startLoad", value: function startLoad(e3) {
          e3.match(/\.(mp4|webm)/i) && this.loadVideo(e3), e3.match(/\.(png|jp(e)?g|gif|webp)/i) && this.loadImage(e3);
        } }, { key: "loadMultiple", value: function loadMultiple(e3) {
          var t3 = this;
          return this.loaded = 0, this.toLoad = e3.length, new Promise(function(n2) {
            t3.resolver = n2, e3.forEach(function(e4) {
              t3.startLoad(e4);
            });
          });
        } }]), MediaLoader;
      }();
      function classToModules() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 ? arguments[1] : void 0;
        if (!t3) return e3.join(" ").trim();
        for (var n2 = [], r2 = e3.length; r2--; ) t3[e3[r2]] && n2.push(t3[e3[r2]]);
        return n2;
      }
      function getClassName() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = arguments.length > 1 ? arguments[1] : void 0;
        return t3 && t3[e3] || e3;
      }
    }, function(e2, t2, n) {
      n.d(t2, "a", function() {
        return o;
      }), n.d(t2, "b", function() {
        return i;
      }), n.d(t2, "c", function() {
        return c;
      }), n.d(t2, "e", function() {
        return a;
      }), n.d(t2, "d", function() {
        return getRootClassName;
      }), n.d(t2, "g", function() {
        return transformChildren;
      }), n.d(t2, "f", function() {
        return setupClassNames;
      });
      var r = n(0);
      function _toConsumableArray(e3) {
        return function _arrayWithoutHoles(e4) {
          if (Array.isArray(e4)) {
            for (var t3 = 0, n2 = new Array(e4.length); t3 < e4.length; t3++) n2[t3] = e4[t3];
            return n2;
          }
        }(e3) || function _iterableToArray(e4) {
          if (Symbol.iterator in Object(e4) || "[object Arguments]" === Object.prototype.toString.call(e4)) return Array.from(e4);
        }(e3) || function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function ownKeys(e3, t3) {
        var n2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e3);
          t3 && (r2 = r2.filter(function(t4) {
            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function _objectSpread(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n2 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? ownKeys(Object(n2), true).forEach(function(t4) {
            _defineProperty(e3, t4, n2[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : ownKeys(Object(n2)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
          });
        }
        return e3;
      }
      function _defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      var o = function classListAdd(e3, t3) {
        "string" == typeof t3 && e3 && t3.split(" ").forEach(function(t4) {
          e3.classList.add(t4);
        });
      }, i = function classListRemove(e3, t3) {
        "string" == typeof t3 && e3 && t3.split(" ").forEach(function(t4) {
          e3.classList.remove(t4);
        });
      }, c = function getAnyClassName(e3) {
        return "string" == typeof e3 && e3.split(" ")[0] || "";
      }, a = function mergeStyles(e3) {
        var t3 = Array.isArray(e3) ? e3 : [e3];
        if (1 === t3.length) return t3[0];
        for (var n2 = _objectSpread({}, t3[0]), r2 = 1; r2 < t3.length; r2 += 1) {
          for (var o2 in n2) t3[r2][o2] && (n2[o2] = [n2[o2], t3[r2][o2]].join(" "));
          for (var i2 in t3[r2]) n2[i2] || (n2[i2] = t3[r2][i2]);
        }
        return n2;
      };
      function getRootClassName(e3) {
        var t3, n2 = e3.rootElement, o2 = e3.cssModule, i2 = e3.disabled, c2 = e3.organicArrows, a2 = e3.className, s = e3.total, u = e3.current, l = e3.infinite, f = e3.animation, d = e3.fillParent, p = [n2];
        (f && p.push("".concat(n2, "--").concat(f)), true === c2 && p.push("".concat(n2, "--organic-arrows")), true === i2 && p.push("".concat(n2, "--disabled")), d && p.push("".concat(n2, "--fill-parent")), false === l && (0 === u && p.push("".concat(n2, "--first")), u === s - 1 && p.push("".concat(n2, "--last"))), o2 && o2[n2] && (p = Object(r.b)(p, o2)), a2) && (t3 = p).push.apply(t3, _toConsumableArray(a2.split(" ")));
        return p.join(" ").trim().replace(/[\s]+/gi, " ");
      }
      function transformChildren(e3) {
        var t3 = [];
        return (e3.constructor === Array ? e3 : [e3]).forEach(function(e4) {
          var n2 = _objectSpread({}, e4.props);
          e4.props["data-src"] && (n2.source = e4.props["data-src"]), e4.props["data-slug"] && (n2.slug = e4.props["data-slug"]), t3.push(n2);
        }), t3;
      }
      function setupClassNames(e3, t3) {
        return { boxA: Object(r.c)("".concat(e3, "__boxA"), t3), boxB: Object(r.c)("".concat(e3, "__boxB"), t3), box: Object(r.c)("".concat(e3, "__box"), t3), container: Object(r.c)("".concat(e3, "__container"), t3), wrapper: Object(r.c)("".concat(e3, "__wrapper"), t3), bar: Object(r.c)("".concat(e3, "__bar"), t3), barActive: Object(r.c)("".concat(e3, "__bar--active"), t3), barEnd: Object(r.c)("".concat(e3, "__bar--end"), t3), content: Object(r.c)("".concat(e3, "__content"), t3), contentStatic: Object(r.c)("".concat(e3, "__content--static"), t3), contentMoveLeft: Object(r.c)("".concat(e3, "__content--moveLeft"), t3), contentMoveRight: Object(r.c)("".concat(e3, "__content--moveRight"), t3), controlsHidden: Object(r.c)("".concat(e3, "__controls--hidden"), t3), controlsActive: Object(r.c)("".concat(e3, "__controls--active"), t3), animated: Object(r.c)("".concat(e3, "--animated"), t3), animatedMobile: Object(r.c)("".concat(e3, "--animated-mobile"), t3), contentExit: Object(r.c)("".concat(e3, "__content--exit"), t3), exit: Object(r.c)("".concat(e3, "--exit"), t3), active: Object(r.c)("".concat(e3, "--active"), t3), moveLeft: Object(r.c)("".concat(e3, "--moveLeft"), t3), moveRight: Object(r.c)("".concat(e3, "--moveRight"), t3), startUp: Object(r.c)("".concat(e3, "__startUp"), t3), bulletsLoading: Object(r.c)("".concat(e3, "__bullets--loading"), t3) };
      }
    }, function(t2, n) {
      t2.exports = e;
    }, function(e2, n) {
      e2.exports = t;
    }, function(e2, t2, n) {
      e2.exports = function(e3) {
        var n2 = {};
        function t3(r) {
          if (n2[r]) return n2[r].exports;
          var o = n2[r] = { i: r, l: false, exports: {} };
          return e3[r].call(o.exports, o, o.exports, t3), o.l = true, o.exports;
        }
        return t3.m = e3, t3.c = n2, t3.d = function(e4, n3, r) {
          t3.o(e4, n3) || Object.defineProperty(e4, n3, { enumerable: true, get: r });
        }, t3.r = function(e4) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
        }, t3.t = function(e4, n3) {
          if (1 & n3 && (e4 = t3(e4)), 8 & n3) return e4;
          if (4 & n3 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
          var r = /* @__PURE__ */ Object.create(null);
          if (t3.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e4 }), 2 & n3 && "string" != typeof e4) for (var o in e4) t3.d(r, o, (function(t4) {
            return e4[t4];
          }).bind(null, o));
          return r;
        }, t3.n = function(e4) {
          var n3 = e4 && e4.__esModule ? function() {
            return e4.default;
          } : function() {
            return e4;
          };
          return t3.d(n3, "a", n3), n3;
        }, t3.o = function(e4, t4) {
          return Object.prototype.hasOwnProperty.call(e4, t4);
        }, t3.p = "", t3(t3.s = 0);
      }([function(e3, t3, n2) {
        function o(e4, t4) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = n3.tolerance, o2 = void 0 === r2 ? 0 : r2, i = n3.propertyName;
          return new Promise(function(n4) {
            if (e4) {
              var r3 = null, a = t4.charAt(0).toUpperCase() + t4.slice(1), s = 0;
              void 0 !== e4.style["Webkit" + a] && (r3 = "webkit" + a + "End"), void 0 !== e4.style.OTransition && (r3 = "o" + t4 + "End"), void 0 !== e4.style[t4] && (r3 = t4 + "end"), e4.clearCssEndEvent && e4.clearCssEndEvent(), e4.clearCssEndEvent = function() {
                e4.removeEventListener(r3, c);
              }, e4.addEventListener(r3, c);
            } else n4(false);
            function c(t5) {
              if ((t5.srcElement || t5.target) === e4) {
                if (s >= o2) {
                  if (i && i !== t5.propertyName) return;
                  e4.removeEventListener(r3, c), n4(t5);
                }
                s += 1;
              }
            }
          });
        }
        function r(e4) {
          window && window.requestAnimationFrame(function() {
            window.requestAnimationFrame(e4);
          });
        }
        Object.defineProperty(t3, "__esModule", { value: true }), t3.setCssEndEvent = o, t3.beforeCssLayout = function(e4) {
          window && window.requestAnimationFrame(e4);
        }, t3.beforeNextCssLayout = r, t3.beforeFutureCssLayout = function(e4, t4) {
          !function e5(t5, n3) {
            window && t5 && Number.isInteger(t5) && t5 > 0 ? window.requestAnimationFrame(function() {
              e5(t5 - 1, n3);
            }) : n3();
          }(e4 + 1, t4);
        }, t3.onceNextCssLayout = function() {
          return new Promise(function(e4) {
            r(e4);
          });
        }, t3.onceTransitionEnd = function(e4) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(function(n3) {
            o(e4, "transition", t4).then(n3);
          });
        }, t3.onceAnimationEnd = function(e4) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(function(n3) {
            o(e4, "animation", t4).then(n3);
          });
        };
      }]);
    }, , function(e2, t2, n) {
      e2.exports = n(7);
    }, function(e2, t2, n) {
      n.r(t2), n.d(t2, "default", function() {
        return AutoplayHoc;
      });
      var r = n(3), o = n.n(r), i = n(4), c = n(2), a = n.n(c), s = n(0), u = n(1);
      function _typeof(e3) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e4) {
          return typeof e4;
        } : function _typeof2(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function _extends() {
        return (_extends = Object.assign || function(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = arguments[t3];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
          }
          return e3;
        }).apply(this, arguments);
      }
      function _objectWithoutProperties(e3, t3) {
        if (null == e3) return {};
        var n2, r2, o2 = function _objectWithoutPropertiesLoose(e4, t4) {
          if (null == e4) return {};
          var n3, r3, o3 = {}, i3 = Object.keys(e4);
          for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t4.indexOf(n3) >= 0 || (o3[n3] = e4[n3]);
          return o3;
        }(e3, t3);
        if (Object.getOwnPropertySymbols) {
          var i2 = Object.getOwnPropertySymbols(e3);
          for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t3.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (o2[n2] = e3[n2]);
        }
        return o2;
      }
      function _defineProperties(e3, t3) {
        for (var n2 = 0; n2 < t3.length; n2++) {
          var r2 = t3[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
        }
      }
      function _possibleConstructorReturn(e3, t3) {
        return !t3 || "object" !== _typeof(t3) && "function" != typeof t3 ? function _assertThisInitialized(e4) {
          if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e4;
        }(e3) : t3;
      }
      function _getPrototypeOf(e3) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function _setPrototypeOf(e3, t3) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e4, t4) {
          return e4.__proto__ = t4, e4;
        })(e3, t3);
      }
      function _defineProperty(e3, t3, n2) {
        return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
      }
      var l = "awssld";
      function AutoplayHoc(e3) {
        var t3, n2;
        return n2 = t3 = function(t4) {
          function _class(e4) {
            var t5;
            return function _classCallCheck(e5, t6) {
              if (!(e5 instanceof t6)) throw new TypeError("Cannot call a class as a function");
            }(this, _class), (t5 = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, e4))).forceStop = false, t5.rootElement = e4.rootElement || l, t5.mergedStyles = Object(u.e)(e4.cssModule), t5.state = { selected: 0 }, t5;
          }
          return function _inherits(e4, t5) {
            if ("function" != typeof t5 && null !== t5) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t5 && t5.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t5 && _setPrototypeOf(e4, t5);
          }(_class, t4), function _createClass(e4, t5, n3) {
            return t5 && _defineProperties(e4.prototype, t5), e4;
          }(_class, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(e4) {
            this.mergedStyles = Object(u.e)(e4.cssModule), this.checkStartStatus(e4);
          } }, { key: "setInfo", value: function setInfo(e4) {
            this.currentInfo = e4, e4.currentIndex !== this.state.selected && this.setState({ selected: e4.currentIndex });
          } }, { key: "setTimer", value: function setTimer(e4) {
            var t5 = this;
            if (true !== this.forceStop) {
              var n3 = e4.querySelector(".".concat(Object(u.c)(Object(s.c)("".concat(this.rootElement, "__timer"), this.mergedStyles)))), r2 = e4.querySelector("div");
              r2 && (n3 || (n3 = this.createBarElement(), r2.appendChild(n3)), n3.classList.remove(Object(s.c)("".concat(this.rootElement, "__timer--animated"), this.mergedStyles)), Object(i.onceNextCssLayout)().then(function() {
                n3.classList.remove(Object(s.c)("".concat(t5.rootElement, "__timer--run"), t5.mergedStyles)), n3.classList.remove(Object(s.c)("".concat(t5.rootElement, "__timer--fast"), t5.mergedStyles)), Object(i.onceNextCssLayout)().then(function() {
                  n3.classList.add(Object(s.c)("".concat(t5.rootElement, "__timer--animated"), t5.mergedStyles)), Object(i.onceNextCssLayout)().then(function() {
                    n3.classList.add(Object(s.c)("".concat(t5.rootElement, "__timer--run"), t5.mergedStyles)), Object(i.onceTransitionEnd)(n3).then(function() {
                      t5.clearBarAnimation(n3), true !== t5.forceStop && false !== t5.props.play && t5.goTonext();
                    });
                  });
                });
              }));
            }
          } }, { key: "getBarFromSlide", value: function getBarFromSlide(e4) {
            return e4.querySelector(".".concat(Object(u.c)(Object(s.c)("".concat(this.rootElement, "__timer"), this.mergedStyles)))) || null;
          } }, { key: "checkStartStatus", value: function checkStartStatus(e4) {
            this.currentInfo && this.props.play !== e4.play && (true === e4.play && this.currentInfo && this.setTimer(this.currentInfo.currentSlide), false === e4.play && this.forceClearBar(this.currentInfo));
          } }, { key: "createBarElement", value: function createBarElement() {
            var e4 = document.createElement("div");
            return e4.classList.add(Object(s.c)("".concat(this.rootElement, "__timer"), this.mergedStyles)), e4.style.setProperty("--timer-delay", "".concat(this.props.interval, "ms")), e4.style.setProperty("--timer-height", this.props.timerHeight), e4.style.setProperty("--timer-background-color", this.props.timerBackgroundColor), e4;
          } }, { key: "clearBar", value: function clearBar(e4) {
            var t5 = this, n3 = this.getBarFromSlide(e4.currentSlide);
            n3 && (n3.clearCssEndEvent && n3.clearCssEndEvent(), n3.classList.add(Object(s.c)("".concat(this.rootElement, "__timer--fast"), this.mergedStyles)), Object(i.onceTransitionEnd)(n3).then(function() {
              t5.clearBarAnimation(n3);
            }));
          } }, { key: "clearBarAnimation", value: function clearBarAnimation(e4) {
            e4.classList.remove(Object(s.c)("".concat(this.rootElement, "__timer--animated"), this.mergedStyles));
          } }, { key: "restartBarAnimation", value: function restartBarAnimation(e4) {
            e4.classList.remove(Object(s.c)("".concat(this.rootElement, "__timer--run"), this.mergedStyles)), e4.classList.remove(Object(s.c)("".concat(this.rootElement, "__timer--fast"), this.mergedStyles));
          } }, { key: "forceClearBar", value: function forceClearBar(e4) {
            var t5 = this.getBarFromSlide(e4.currentSlide);
            this.restartBarAnimation(t5);
          } }, { key: "goTonext", value: function goTonext() {
            var e4 = this.currentInfo, t5 = e4.currentIndex + 1, n3 = t5 > e4.slides - 1 ? 0 : t5;
            n3 !== this.state.selected ? this.setState({ selected: n3 }) : this.forceClearBar(this.currentInfo);
          } }, { key: "render", value: function render() {
            var t5 = this, n3 = this.props, r2 = (n3.inverval, n3.play), i2 = n3.cancelOnInteraction, c2 = (n3.showTimer, n3.onTransitionStart), a2 = n3.onTransitionEnd, s2 = n3.onFirstMount, u2 = n3.onTransitionRequest, l2 = _objectWithoutProperties(n3, ["inverval", "play", "cancelOnInteraction", "showTimer", "onTransitionStart", "onTransitionEnd", "onFirstMount", "onTransitionRequest"]);
            return o.a.createElement(e3, _extends({}, l2, { selected: this.state.selected, onFirstMount: function onFirstMount(e4) {
              s2 && s2(e4), l2.startupScreen || (t5.setInfo(e4), true === r2 && t5.setTimer(e4.currentSlide));
            }, onTransitionStart: function onTransitionStart(e4) {
              var n4 = t5.getBarFromSlide(e4.nextSlide);
              n4 && t5.restartBarAnimation(n4), c2 && c2(e4);
            }, onTransitionRequest: function onTransitionRequest(e4) {
              t5.clearBar(e4), t5.currentInfo = e4, true === i2 && (t5.forceStop = true), u2 && u2(e4);
            }, onTransitionEnd: function onTransitionEnd(e4) {
              t5.setInfo(e4), true === r2 && t5.setTimer(e4.currentSlide), a2 && a2(e4);
            } }));
          } }]), _class;
        }(r.Component), _defineProperty(t3, "propTypes", { interval: a.a.number, cssModule: a.a.any, play: a.a.bool, cancelOnInteraction: a.a.bool, timerHeight: a.a.string, timerBackgroundColor: a.a.string, showTimer: a.a.bool, onTransitionStart: a.a.func, onTransitionEnd: a.a.func, onTransitionRequest: a.a.func, rootElement: a.a.string }), _defineProperty(t3, "defaultProps", { interval: 2e3, play: false, cancelOnInteraction: false, timerHeight: "6px", cssModule: null, timerBackgroundColor: "rgba(0, 0, 0, 0.15)", showTimer: true, onTransitionStart: null, onTransitionEnd: null, onTransitionRequest: null, rootElement: l }), n2;
      }
    }]);
  });
})(autoplay);
var autoplayExports = autoplay.exports;
const withAutoplay = /* @__PURE__ */ getDefaultExportFromCjs(autoplayExports);
export {
  AwesomeSlider as A,
  withAutoplay as w
};
