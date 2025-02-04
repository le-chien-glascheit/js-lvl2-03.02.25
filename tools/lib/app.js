"use strict";

require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.dot-all.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
var _lib = require("./lib");
function _wrapRegExp() { _wrapRegExp = function (e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) { var t = o[r]; return "$" + (Array.isArray(t) ? t.join("$") : t); })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// 1. syntax
function save(filename = function (e) {
  throw e;
}(new TypeError("Argument required"))) {}
const re = /*#__PURE__*/_wrapRegExp(/(\d{4})-\d{2}|\d{2}-(\d{4})/, {
  year: [1, 2]
});
// 2. method
Promise.resolve().finally();
console.log((0, _lib.sum)(1, 2));