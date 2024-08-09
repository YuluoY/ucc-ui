var O = typeof global == "object" && global && global.Object === Object && global, B = typeof self == "object" && self && self.Object === Object && self, x = O || B || Function("return this")(), p = x.Symbol, w = Object.prototype, U = w.hasOwnProperty, M = w.toString, s = p ? p.toStringTag : void 0;
function R(r) {
  var t = U.call(r, s), e = r[s];
  try {
    r[s] = void 0;
    var o = !0;
  } catch {
  }
  var i = M.call(r);
  return o && (t ? r[s] = e : delete r[s]), i;
}
var G = Object.prototype, L = G.toString;
function N(r) {
  return L.call(r);
}
var _ = "[object Null]", C = "[object Undefined]", d = p ? p.toStringTag : void 0;
function j(r) {
  return r == null ? r === void 0 ? C : _ : d && d in Object(r) ? R(r) : N(r);
}
function l(r) {
  return r != null && typeof r == "object";
}
var E = Array.isArray;
function K(r) {
  var t = typeof r;
  return r != null && (t == "object" || t == "function");
}
function q(r) {
  return r;
}
var D = "[object AsyncFunction]", V = "[object Function]", X = "[object GeneratorFunction]", W = "[object Proxy]";
function k(r) {
  if (!K(r))
    return !1;
  var t = j(r);
  return t == V || t == X || t == D || t == W;
}
function z(r, t) {
  for (var e = -1, o = r == null ? 0 : r.length; ++e < o && t(r[e], e, r) !== !1; )
    ;
  return r;
}
var H = 9007199254740991, J = /^(?:0|[1-9]\d*)$/;
function Q(r, t) {
  var e = typeof r;
  return t = t ?? H, !!t && (e == "number" || e != "symbol" && J.test(r)) && r > -1 && r % 1 == 0 && r < t;
}
var Y = 9007199254740991;
function $(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Y;
}
function P(r) {
  return r != null && $(r.length) && !k(r);
}
var Z = Object.prototype;
function rr(r) {
  var t = r && r.constructor, e = typeof t == "function" && t.prototype || Z;
  return r === e;
}
function tr(r, t) {
  for (var e = -1, o = Array(r); ++e < r; )
    o[e] = t(e);
  return o;
}
var er = "[object Arguments]";
function T(r) {
  return l(r) && j(r) == er;
}
var S = Object.prototype, nr = S.hasOwnProperty, or = S.propertyIsEnumerable, ar = T(/* @__PURE__ */ function() {
  return arguments;
}()) ? T : function(r) {
  return l(r) && nr.call(r, "callee") && !or.call(r, "callee");
};
function ir() {
  return !1;
}
var F = typeof exports == "object" && exports && !exports.nodeType && exports, h = F && typeof module == "object" && module && !module.nodeType && module, cr = h && h.exports === F, v = cr ? x.Buffer : void 0, fr = v ? v.isBuffer : void 0, ur = fr || ir, sr = "[object Arguments]", br = "[object Array]", gr = "[object Boolean]", pr = "[object Date]", yr = "[object Error]", jr = "[object Function]", lr = "[object Map]", dr = "[object Number]", Tr = "[object Object]", hr = "[object RegExp]", vr = "[object Set]", Ar = "[object String]", mr = "[object WeakMap]", Or = "[object ArrayBuffer]", xr = "[object DataView]", wr = "[object Float32Array]", Er = "[object Float64Array]", $r = "[object Int8Array]", Pr = "[object Int16Array]", Sr = "[object Int32Array]", Fr = "[object Uint8Array]", Ir = "[object Uint8ClampedArray]", Br = "[object Uint16Array]", Ur = "[object Uint32Array]", n = {};
n[wr] = n[Er] = n[$r] = n[Pr] = n[Sr] = n[Fr] = n[Ir] = n[Br] = n[Ur] = !0;
n[sr] = n[br] = n[Or] = n[gr] = n[xr] = n[pr] = n[yr] = n[jr] = n[lr] = n[dr] = n[Tr] = n[hr] = n[vr] = n[Ar] = n[mr] = !1;
function Mr(r) {
  return l(r) && $(r.length) && !!n[j(r)];
}
function Rr(r) {
  return function(t) {
    return r(t);
  };
}
var I = typeof exports == "object" && exports && !exports.nodeType && exports, b = I && typeof module == "object" && module && !module.nodeType && module, Gr = b && b.exports === I, y = Gr && O.process, A = function() {
  try {
    var r = b && b.require && b.require("util").types;
    return r || y && y.binding && y.binding("util");
  } catch {
  }
}(), m = A && A.isTypedArray, Lr = m ? Rr(m) : Mr, Nr = Object.prototype, _r = Nr.hasOwnProperty;
function Cr(r, t) {
  var e = E(r), o = !e && ar(r), i = !e && !o && ur(r), a = !e && !o && !i && Lr(r), f = e || o || i || a, u = f ? tr(r.length, String) : [], g = u.length;
  for (var c in r)
    _r.call(r, c) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Q(c, g))) && u.push(c);
  return u;
}
function Kr(r, t) {
  return function(e) {
    return r(t(e));
  };
}
var qr = Kr(Object.keys, Object), Dr = Object.prototype, Vr = Dr.hasOwnProperty;
function Xr(r) {
  if (!rr(r))
    return qr(r);
  var t = [];
  for (var e in Object(r))
    Vr.call(r, e) && e != "constructor" && t.push(e);
  return t;
}
function Wr(r) {
  return P(r) ? Cr(r) : Xr(r);
}
function kr(r) {
  return function(t, e, o) {
    for (var i = -1, a = Object(t), f = o(t), u = f.length; u--; ) {
      var g = f[++i];
      if (e(a[g], g, a) === !1)
        break;
    }
    return t;
  };
}
var zr = kr();
function Hr(r, t) {
  return r && zr(r, t, Wr);
}
function Jr(r, t) {
  return function(e, o) {
    if (e == null)
      return e;
    if (!P(e))
      return r(e, o);
    for (var i = e.length, a = -1, f = Object(e); ++a < i && o(f[a], a, f) !== !1; )
      ;
    return e;
  };
}
var Qr = Jr(Hr);
function Yr(r) {
  return typeof r == "function" ? r : q;
}
function Zr(r, t) {
  var e = E(r) ? z : Qr;
  return e(r, Yr(t));
}
export {
  Zr as f
};
