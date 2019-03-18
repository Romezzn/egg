! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(i, s, o) {
        for (var a, l, c, u = 0, d = []; u < i.length; u++) l = i[u], r[l] && d.push(r[l][0]), r[l] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
        for (n && n(i, s, o); d.length;) d.shift()();
        if (o)
            for (u = 0; u < o.length; u++) c = e(e.s = o[u]);
        return c
    };
    var i = {},
        r = {
            8: 0
        };
    e.m = t, e.c = i, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e.oe = function(t) {
        throw console.error(t), t
    }, e(e.s = 29)
}([function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = e;
        if ("." === n[0] && (n = e.substr(1)), t.classList) return t.classList.add(n);
        t.className += " " + n
    }

    function r(t, e, n) {
        return document.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }

    function s(t, e, n) {
        function i() {
            n.apply(this, arguments), W(t, e, i)
        }
        return r(t, e, i)
    }

    function o(t) {
        var e = document.createElement("div");
        return function(n) {
            for (e.innerHTML = n; e.children.length > 0;) t.appendChild(e.children[0]);
            e.innerHTML = ""
        }
    }

    function a(t) {
        return new Promise(function(e, n) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function(t) {
                4 === i.readyState && (i.onreadystatechange = null, 200 === i.status ? e({
                    event: t,
                    request: i
                }) : n({
                    event: t,
                    request: i
                }))
            }, i.open("GET", t.url), i.setRequestHeader("rollbar-referrer", document.location.href), i.send(null)
        })
    }

    function l(t) {
        for (var e = 0, n = arguments.length, i = null, r = ""; ++e < n;)
            if (i = arguments[e], D(i))
                for (r in i) k(i, r) && (t[r] = i[r]);
        return t
    }

    function c(t, e, n) {
        return 3 === arguments.length ? n < t ? t : n > e ? e : n : function(n) {
            return n < t ? t : n > e ? e : n
        }
    }

    function u(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function d(t) {
        for (var e = t.length, n = new Array(e), i = null; e--;) i = t[e], null === i || void 0 === i || P(i) ? n[e] = i : R(i) ? n[e] = d(i) : M(i) ? n[e] = f(i) : n[e] = i;
        return n
    }

    function h(t) {
        var e = {},
            n = "";
        for (n in t) k(t, n) && (e[n] = t[n]);
        return e
    }

    function f(t) {
        var e = {},
            n = "",
            i = null;
        for (n in t) k(t, n) && (i = t[n], null === i || void 0 === i || P(i) ? e[n] = i : R(i) ? e[n] = d(i) : M(i) ? e[n] = f(i) : e[n] = i);
        return e
    }

    function p(t, e, n) {
        var i = {
            bubbles: !1,
            target: e,
            timeStamp: Date.now(),
            type: t
        };
        if (n)
            for (var r in n) k(n, r) && (i[r] = n[r]);
        return i
    }

    function b(t, e, n, i) {
        var r;
        return function() {
            var s = n || this,
                o = arguments,
                a = i && !r,
                l = function() {
                    r = null, i || t.apply(s, o)
                };
            clearTimeout(r), r = setTimeout(l, e), a && t.apply(s, o)
        }
    }

    function g(t, e, n) {
        return function(i) {
            var r = w(i),
                s = null;
            r && (r.matches(t) || (r = A(r, t)), r && (s = n || r, i.delegateTarget = r, e.apply(s, arguments)))
        }
    }

    function m(t, e, n, i) {
        var r = null;
        if (document.createEventObject) return r = document.createEventObject(), t.fireEvent("on" + e, r);
        var s = !!D(n) && n,
            o = !D(i) || i;
        return r = document.createEvent("HTMLEvents"), r.initEvent(e, s, o), !t.dispatchEvent(r)
    }

    function v(t) {
        if (t.getBoundingClientRect) return t.getBoundingClientRect();
        var e = t.innerHeight,
            n = t.innerWidth;
        return {
            bottom: e,
            height: e,
            left: 0,
            right: n,
            top: 0,
            width: n
        }
    }

    function _(t) {
        for (var e = document.cookie.split(";"), n = e.length, i = t + "=", r = null; n--;)
            if (r = e[n].trim(), 0 === r.indexOf(i)) return decodeURIComponent(r.substring(i.length, r.length));
        return null
    }

    function y(t) {
        var e = v(t),
            n = t.ownerDocument || t.document,
            i = n.body,
            r = n.documentElement,
            s = r.clientTop || i.clientTop || 0,
            o = r.clientLeft || i.clientLeft || 0,
            a = (window.pageYOffset || it.g && r.scrollTop || i.scrollTop) - s,
            l = (window.pageXOffset || it.g && r.scrollLeft || i.scrollLeft) - o,
            c = e.top + a,
            u = e.left + l,
            d = e.bottom + a,
            h = e.right + l;
        return {
            bottom: d,
            height: e.height,
            left: u,
            right: h,
            top: c,
            width: e.width
        }
    }

    function w(t) {
        var e = t || window.event;
        return e.target || e.srcElement
    }

    function E(t) {
        var e;
        try {
            e = t.frameElement || t.ownerDocument.defaultView.frameElement
        } catch (t) {
            return !1
        }
        return e
    }

    function O(t, e) {
        var n = e;
        D(n) || (n = Object.keys(t));
        for (var i = n.length, r = new Array(i); i--;) r[i] = t[n[i]];
        return r
    }

    function A(t, e) {
        if (t !== document && t.matches(e)) return t;
        var n = S(t, e);
        return !(!n || n === document || !n.matches(e)) && n
    }

    function S(t, e) {
        var n = t.parentNode;
        do {
            if (n.matches(e)) return n
        } while ((n = n.parentNode) && 1 === n.nodeType);
        return n
    }

    function T(t) {
        return t && t !== window ? t.scrollLeft : I()
    }

    function L(t) {
        return t && t !== window ? t.scrollTop : C()
    }

    function j(t) {
        return "cnd_" + t
    }

    function I() {
        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0)
    }

    function C() {
        return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    }

    function N(t, e) {
        var n = e;
        return "." === n[0] && (n = n.substr(1)), t.classList ? t.classList.contains(n) : !!t.className.match(new RegExp("(\\s|^)" + n + "(\\s|$)"))
    }

    function k(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function x(t, e) {
        var n = Object.create(t);
        if (e)
            for (var i in e) k(e, i) && (n[i] = e[i]);
        return n
    }

    function z(t, e) {
        return e.parentNode.insertBefore(t, e)
    }

    function R(t) {
        return Array.isArray(t)
    }

    function D(t) {
        return null !== t && void 0 !== t
    }

    function P(t) {
        return null !== t && "object" == typeof t && 1 === t.nodeType
    }

    function M(t) {
        var e = typeof t;
        return "object" === e || "function" === e
    }

    function B(t) {
        return t.self === t
    }

    function H(t, e) {
        return new Promise(function(n, i) {
            var r = null;
            r = e && e.node ? e.node : document.head || document.getElementsByTagName("head")[0];
            var s = document.createElement("script");
            s.async = !0, s.type = "text/javascript", s.src = t, s.onload = function() {
                this.onload = this.onerror = null, n(s)
            }, s.onerror = function() {
                this.onload = this.onerror = null, i(new Error("Error loading script: " + t))
            }, r.appendChild(s)
        })
    }

    function U() {
        var t = null,
            e = null,
            n = null,
            i = null,
            r = null,
            s = null;
        return t = "twttr" in window ? Promise.resolve() : H("//platform.twitter.com/widgets.js"), e = "VINE_EMBEDS" in window ? Promise.resolve() : H("https://platform.vine.co/static/scripts/embed.js"), n = "FB" in window ? Promise.resolve() : H("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3"), i = "instgrm" in window ? Promise.resolve() : H("//platform.instagram.com/en_US/embeds.js"), r = "imgurEmbed" in window ? Promise.resolve() : H("//s.imgur.com/min/embed.js"), s = "skyscanner" in window ? Promise.resolve() : H("https://widgets.skyscanner.net/widget-server/js/loader.js"), Promise.all([t, e, n, i, r, s])
    }

    function G(t) {
        return "function" == typeof t ? function() {
            for (var e = arguments.length, n = new Array(e); e--;) n[e] = arguments[e];
            return !t.apply(null, n)
        } : !t
    }

    function q(t) {
        function e() {
            for (var t = null; t = q._fns.shift();) t()
        }
        "complete" === document.readyState ? t() : (q._fns.push(t), 1 === q._fns.length && s(window, "load", e))
    }

    function F(t) {
        function e() {
            for (var t = null; t = F._fns.shift();) t()
        }
        "complete" === document.readyState || "interactive" === document.readyState ? t() : (F._fns.push(t), 1 === F._fns.length && s(window, "DOMContentLoaded", e))
    }

    function Y() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function V(t, e) {
        var n = e;
        if ("." === n[0] && (n = e.substr(1)), t.classList) return t.classList.remove(n);
        if (N(t, n)) {
            var i = new RegExp("(\\s|^)" + n + "(\\s|$)");
            t.className = t.className.replace(i, " ")
        }
    }

    function K(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function W(t, e, n) {
        return document.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function J(t, e, n) {
        var i = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString()
        }
        document.cookie = t + "=" + e + i + "; path=/"
    }

    function X(t, e, n) {
        void 0 === e && (e = 250);
        var i, r;
        return function() {
            var s = n || this,
                o = (new Date).getTime(),
                a = arguments;
            i && o < i + e ? (clearTimeout(r), r = setTimeout(function() {
                i = o, t.apply(s, a)
            }, e)) : (i = o, t.apply(s, a))
        }
    }

    function Z(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var n = e.textContent;
        return e = null, n
    }

    function $(t) {
        var e = t.indexOf("?");
        return -1 === e ? t : t.substring(0, e)
    }

    function Q(t) {
        var e = t.indexOf("?"),
            n = {};
        if (-1 === e) return n;
        for (var i = t.substr(e + 1), r = i.split("&"), s = r.length, o = null, a = null, l = 0; l < s; l++) o = r[l].split("="), a = decodeURIComponent(o[0]), n.hasOwnProperty(a) || (n[a] = []), o.length > 1 && n[a].push(decodeURIComponent(o[1]));
        return n
    }

    function tt(t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && t[n].forEach(function(t) {
            e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t)
        });
        return e.substr(1)
    }

    function et(t, e) {
        var n = Q(t);
        for (var i in e) e.hasOwnProperty(i) && (Array.isArray(e[i]) ? n[i] = e[i] : n[i] = [e[i]]);
        return $(t) + "?" + tt(n)
    }

    function nt(t) {
        var e = $(t),
            n = location.href.split("?");
        return n.length > 1 && (n.shift(), e = e + "?" + n.join("&")), e
    }
    e.a = i, e.b = r, e.c = s, e.d = o, e.e = a, e.f = l, e.g = c, e.h = u, e.i = h, e.j = f, e.k = p, e.l = b, e.m = g, e.n = m, e.o = v, e.p = _, e.q = y, e.r = E, e.t = O, e.u = A, e.x = T, e.y = L, e.s = j, e.A = C, e.B = N, e.C = k, e.D = x, e.E = z, e.F = D, e.G = B, e.H = H, e.I = U, e.J = G, e.K = q, e.L = F, e.M = Y, e.N = V, e.O = K, e.P = W, e.Q = J, e.R = X, e.T = Z, e.z = $, e.v = Q, e.w = tt, e.U = et, e.S = nt;
    var it = n(4);
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector, q._fns = [], F._fns = []
}, function(t, e, n) {
    (function(i) {
        var r;
        ! function(s) {
            function o() {
                this._events = {}, this._conf && a.call(this, this._conf)
            }

            function a(t) {
                t ? (this._conf = t, t.delimiter && (this.delimiter = t.delimiter), this._maxListeners = t.maxListeners !== s ? t.maxListeners : f, t.wildcard && (this.wildcard = t.wildcard), t.newListener && (this.newListener = t.newListener), t.verboseMemoryLeak && (this.verboseMemoryLeak = t.verboseMemoryLeak), this.wildcard && (this.listenerTree = {})) : this._maxListeners = f
            }

            function l(t, e) {
                var n = "(node) warning: possible EventEmitter memory leak detected. " + t + " listeners added. Use emitter.setMaxListeners() to increase limit.";
                if (this.verboseMemoryLeak && (n += " Event name: " + e + "."), void 0 !== i && i.emitWarning) {
                    var r = new Error(n);
                    r.name = "MaxListenersExceededWarning", r.emitter = this, r.count = t, i.emitWarning(r)
                } else console.error(n), console.trace && console.trace()
            }

            function c(t) {
                this._events = {}, this.newListener = !1, this.verboseMemoryLeak = !1, a.call(this, t)
            }

            function u(t, e, n, i) {
                if (!n) return [];
                var r, s, o, a, l, c, d, h = [],
                    f = e.length,
                    p = e[i],
                    b = e[i + 1];
                if (i === f && n._listeners) {
                    if ("function" == typeof n._listeners) return t && t.push(n._listeners), [n];
                    for (r = 0, s = n._listeners.length; r < s; r++) t && t.push(n._listeners[r]);
                    return [n]
                }
                if ("*" === p || "**" === p || n[p]) {
                    if ("*" === p) {
                        for (o in n) "_listeners" !== o && n.hasOwnProperty(o) && (h = h.concat(u(t, e, n[o], i + 1)));
                        return h
                    }
                    if ("**" === p) {
                        d = i + 1 === f || i + 2 === f && "*" === b, d && n._listeners && (h = h.concat(u(t, e, n, f)));
                        for (o in n) "_listeners" !== o && n.hasOwnProperty(o) && ("*" === o || "**" === o ? (n[o]._listeners && !d && (h = h.concat(u(t, e, n[o], f))), h = h.concat(u(t, e, n[o], i))) : h = o === b ? h.concat(u(t, e, n[o], i + 2)) : h.concat(u(t, e, n[o], i)));
                        return h
                    }
                    h = h.concat(u(t, e, n[p], i + 1))
                }
                if (a = n["*"], a && u(t, e, a, i + 1), l = n["**"])
                    if (i < f) {
                        l._listeners && u(t, e, l, f);
                        for (o in l) "_listeners" !== o && l.hasOwnProperty(o) && (o === b ? u(t, e, l[o], i + 2) : o === p ? u(t, e, l[o], i + 1) : (c = {}, c[o] = l[o], u(t, e, {
                            "**": c
                        }, i + 1)))
                    } else l._listeners ? u(t, e, l, f) : l["*"] && l["*"]._listeners && u(t, e, l["*"], f);
                return h
            }

            function d(t, e) {
                t = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                for (var n = 0, i = t.length; n + 1 < i; n++)
                    if ("**" === t[n] && "**" === t[n + 1]) return;
                for (var r = this.listenerTree, o = t.shift(); o !== s;) {
                    if (r[o] || (r[o] = {}), r = r[o], 0 === t.length) return r._listeners ? ("function" == typeof r._listeners && (r._listeners = [r._listeners]), r._listeners.push(e), !r._listeners.warned && this._maxListeners > 0 && r._listeners.length > this._maxListeners && (r._listeners.warned = !0, l.call(this, r._listeners.length, o))) : r._listeners = e, !0;
                    o = t.shift()
                }
                return !0
            }
            var h = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                f = 10;
            c.EventEmitter2 = c, c.prototype.delimiter = ".", c.prototype.setMaxListeners = function(t) {
                t !== s && (this._maxListeners = t, this._conf || (this._conf = {}), this._conf.maxListeners = t)
            }, c.prototype.event = "", c.prototype.once = function(t, e) {
                return this._once(t, e, !1)
            }, c.prototype.prependOnceListener = function(t, e) {
                return this._once(t, e, !0)
            }, c.prototype._once = function(t, e, n) {
                return this._many(t, 1, e, n), this
            }, c.prototype.many = function(t, e, n) {
                return this._many(t, e, n, !1)
            }, c.prototype.prependMany = function(t, e, n) {
                return this._many(t, e, n, !0)
            }, c.prototype._many = function(t, e, n, i) {
                function r() {
                    return 0 == --e && s.off(t, r), n.apply(this, arguments)
                }
                var s = this;
                if ("function" != typeof n) throw new Error("many only accepts instances of Function");
                return r._origin = n, this._on(t, r, i), s
            }, c.prototype.emit = function() {
                this._events || o.call(this);
                var t = arguments[0];
                if ("newListener" === t && !this.newListener && !this._events.newListener) return !1;
                var e, n, i, r, s, a = arguments.length;
                if (this._all && this._all.length) {
                    if (s = this._all.slice(), a > 3)
                        for (e = new Array(a), r = 0; r < a; r++) e[r] = arguments[r];
                    for (i = 0, n = s.length; i < n; i++) switch (this.event = t, a) {
                        case 1:
                            s[i].call(this, t);
                            break;
                        case 2:
                            s[i].call(this, t, arguments[1]);
                            break;
                        case 3:
                            s[i].call(this, t, arguments[1], arguments[2]);
                            break;
                        default:
                            s[i].apply(this, e)
                    }
                }
                if (this.wildcard) {
                    s = [];
                    var l = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    u.call(this, s, l, this.listenerTree, 0)
                } else {
                    if ("function" == typeof(s = this._events[t])) {
                        switch (this.event = t, a) {
                            case 1:
                                s.call(this);
                                break;
                            case 2:
                                s.call(this, arguments[1]);
                                break;
                            case 3:
                                s.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (e = new Array(a - 1), r = 1; r < a; r++) e[r - 1] = arguments[r];
                                s.apply(this, e)
                        }
                        return !0
                    }
                    s && (s = s.slice())
                }
                if (s && s.length) {
                    if (a > 3)
                        for (e = new Array(a - 1), r = 1; r < a; r++) e[r - 1] = arguments[r];
                    for (i = 0, n = s.length; i < n; i++) switch (this.event = t, a) {
                        case 1:
                            s[i].call(this);
                            break;
                        case 2:
                            s[i].call(this, arguments[1]);
                            break;
                        case 3:
                            s[i].call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            s[i].apply(this, e)
                    }
                    return !0
                }
                if (!this._all && "error" === t) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                return !!this._all
            }, c.prototype.emitAsync = function() {
                this._events || o.call(this);
                var t = arguments[0];
                if ("newListener" === t && !this.newListener && !this._events.newListener) return Promise.resolve([!1]);
                var e, n, i, r, s, a = [],
                    l = arguments.length;
                if (this._all) {
                    if (l > 3)
                        for (e = new Array(l), r = 1; r < l; r++) e[r] = arguments[r];
                    for (i = 0, n = this._all.length; i < n; i++) switch (this.event = t, l) {
                        case 1:
                            a.push(this._all[i].call(this, t));
                            break;
                        case 2:
                            a.push(this._all[i].call(this, t, arguments[1]));
                            break;
                        case 3:
                            a.push(this._all[i].call(this, t, arguments[1], arguments[2]));
                            break;
                        default:
                            a.push(this._all[i].apply(this, e))
                    }
                }
                if (this.wildcard) {
                    s = [];
                    var c = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    u.call(this, s, c, this.listenerTree, 0)
                } else s = this._events[t];
                if ("function" == typeof s) switch (this.event = t, l) {
                    case 1:
                        a.push(s.call(this));
                        break;
                    case 2:
                        a.push(s.call(this, arguments[1]));
                        break;
                    case 3:
                        a.push(s.call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        for (e = new Array(l - 1), r = 1; r < l; r++) e[r - 1] = arguments[r];
                        a.push(s.apply(this, e))
                } else if (s && s.length) {
                    if (s = s.slice(), l > 3)
                        for (e = new Array(l - 1), r = 1; r < l; r++) e[r - 1] = arguments[r];
                    for (i = 0, n = s.length; i < n; i++) switch (this.event = t, l) {
                        case 1:
                            a.push(s[i].call(this));
                            break;
                        case 2:
                            a.push(s[i].call(this, arguments[1]));
                            break;
                        case 3:
                            a.push(s[i].call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            a.push(s[i].apply(this, e))
                    }
                } else if (!this._all && "error" === t) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                return Promise.all(a)
            }, c.prototype.on = function(t, e) {
                return this._on(t, e, !1)
            }, c.prototype.prependListener = function(t, e) {
                return this._on(t, e, !0)
            }, c.prototype.onAny = function(t) {
                return this._onAny(t, !1)
            }, c.prototype.prependAny = function(t) {
                return this._onAny(t, !0)
            }, c.prototype.addListener = c.prototype.on, c.prototype._onAny = function(t, e) {
                if ("function" != typeof t) throw new Error("onAny only accepts instances of Function");
                return this._all || (this._all = []), e ? this._all.unshift(t) : this._all.push(t), this
            }, c.prototype._on = function(t, e, n) {
                if ("function" == typeof t) return this._onAny(t, e), this;
                if ("function" != typeof e) throw new Error("on only accepts instances of Function");
                return this._events || o.call(this), this.emit("newListener", t, e), this.wildcard ? (d.call(this, t, e), this) : (this._events[t] ? ("function" == typeof this._events[t] && (this._events[t] = [this._events[t]]), n ? this._events[t].unshift(e) : this._events[t].push(e), !this._events[t].warned && this._maxListeners > 0 && this._events[t].length > this._maxListeners && (this._events[t].warned = !0, l.call(this, this._events[t].length, t))) : this._events[t] = e, this)
            }, c.prototype.off = function(t, e) {
                function n(t) {
                    if (t !== s) {
                        var e = Object.keys(t);
                        for (var i in e) {
                            var r = e[i],
                                o = t[r];
                            o instanceof Function || "object" != typeof o || null === o || (Object.keys(o).length > 0 && n(t[r]), 0 === Object.keys(o).length && delete t[r])
                        }
                    }
                }
                if ("function" != typeof e) throw new Error("removeListener only takes instances of Function");
                var i, r = [];
                if (this.wildcard) {
                    var o = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    r = u.call(this, null, o, this.listenerTree, 0)
                } else {
                    if (!this._events[t]) return this;
                    i = this._events[t], r.push({
                        _listeners: i
                    })
                }
                for (var a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (i = l._listeners, h(i)) {
                        for (var c = -1, d = 0, f = i.length; d < f; d++)
                            if (i[d] === e || i[d].listener && i[d].listener === e || i[d]._origin && i[d]._origin === e) {
                                c = d;
                                break
                            }
                        if (c < 0) continue;
                        return this.wildcard ? l._listeners.splice(c, 1) : this._events[t].splice(c, 1), 0 === i.length && (this.wildcard ? delete l._listeners : delete this._events[t]), this.emit("removeListener", t, e), this
                    }(i === e || i.listener && i.listener === e || i._origin && i._origin === e) && (this.wildcard ? delete l._listeners : delete this._events[t], this.emit("removeListener", t, e))
                }
                return n(this.listenerTree), this
            }, c.prototype.offAny = function(t) {
                var e, n = 0,
                    i = 0;
                if (t && this._all && this._all.length > 0) {
                    for (e = this._all, n = 0, i = e.length; n < i; n++)
                        if (t === e[n]) return e.splice(n, 1), this.emit("removeListenerAny", t), this
                } else {
                    for (e = this._all, n = 0, i = e.length; n < i; n++) this.emit("removeListenerAny", e[n]);
                    this._all = []
                }
                return this
            }, c.prototype.removeListener = c.prototype.off, c.prototype.removeAllListeners = function(t) {
                if (0 === arguments.length) return !this._events || o.call(this), this;
                if (this.wildcard)
                    for (var e = "string" == typeof t ? t.split(this.delimiter) : t.slice(), n = u.call(this, null, e, this.listenerTree, 0), i = 0; i < n.length; i++) {
                        var r = n[i];
                        r._listeners = null
                    } else this._events && (this._events[t] = null);
                return this
            }, c.prototype.listeners = function(t) {
                if (this.wildcard) {
                    var e = [],
                        n = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    return u.call(this, e, n, this.listenerTree, 0), e
                }
                return this._events || o.call(this), this._events[t] || (this._events[t] = []), h(this._events[t]) || (this._events[t] = [this._events[t]]), this._events[t]
            }, c.prototype.eventNames = function() {
                return Object.keys(this._events)
            }, c.prototype.listenerCount = function(t) {
                return this.listeners(t).length
            }, c.prototype.listenersAny = function() {
                return this._all ? this._all : []
            }, (r = function() {
                return c
            }.call(e, n, e, t)) !== s && (t.exports = r)
        }()
    }).call(e, n(27))
}, function(t, e, n) {
    "use strict";

    function i() {
        return function() {}
    }

    function r() {
        setTimeout(this.destroy.bind(this), 2e3)
    }

    function s() {
        this.el.innerHTML = ""
    }

    function o(t, e) {
        nt.a.SendAll(nt.a.SEND_HITTYPES.EVENT, {
            eventCategory: "Gallery",
            eventAction: t,
            eventLabel: e
        })
    }

    function a(t) {
        var e = "";
        if (t && t.length) {
            var n = Math.random() + "=" + Math.random();
            e = -1 !== t.indexOf("?") ? t.replace(/\?/, "?" + n + "&") : -1 !== t.indexOf("#") ? t.replace(/#/, "?" + n + "#") : t + "?" + n
        }
        return e
    }

    function l(t, e) {
        return e && "" !== t.hiImgSrc ? t.hiImgSrc : "" === t.lowImgSrc ? t.hiImgSrc : t.lowImgSrc
    }

    function c(t) {
        return {
            button: t.querySelector("." + at),
            video: t.querySelector("." + lt)
        }
    }

    function u(t, e) {
        var n = !1;
        return function(i) {
            if (!n) {
                n = !0;
                var r = document.createElement("source");
                r.setAttribute("src", e), r.setAttribute("type", "video/mp4"), r.setAttribute("webkit-playsinline", "true"), r.setAttribute("autoplay", i), t.appendChild(r)
            }
        }
    }

    function d(t, e) {
        return h(t) && ("" !== e.hiImgSrc || "" !== e.lowImgSrc || "" !== e.videoSrcMp4)
    }

    function h(t) {
        return t.offsetHeight >= st && t.offsetWidth >= ot + it
    }

    function f(t, e) {
        window.open(e), b(t)
    }

    function p(t) {
        var e = c(t.el);
        Object($.a)(e.button, "global__hidden"), e.video.play()
    }

    function b(t) {
        var e = c(t.el);
        Object($.N)(e.button, "global__hidden"), e.video.pause(), e.video.currentTime = 0, e.video.load()
    }

    function g(t, e, n) {
        var i = l(e, n),
            r = "<img src='" + a(i) + "' style='display:block;width:100%;' />";
        e.linkUrl && (r = "<a href='" + e.linkUrl + "' target='_top'>" + r + "</a>"), t.el.innerHTML = r
    }

    function m(t, e) {
        var n = document.createDocumentFragment(),
            i = document.createElement("video"),
            r = u(i, e.videoSrcMp4);
        _(i, {
            width: "100%"
        }), i.className = lt;
        var s = l(e);
        "" !== s ? i.setAttribute("poster", s) : r(!1), n.appendChild(i);
        var o = new Image;
        if (o.src = "https://cnda.condenast.co.uk/co/ads/adbuilder/playbutton.png", o.className = at, _(o, {
                left: "50%",
                margin: "-35px 0 0 -35px",
                position: "absolute",
                top: "50%"
            }), n.appendChild(o), t.el.innerHTML = "", t.el.appendChild(n), _(t.el, {
                position: "relative"
            }), "" !== e.linkUrl) {
            var a = c(t.el);
            Object($.b)(a.video, "click", function() {
                a.video.paused ? (r(!0), p(t)) : f(t, e.linkUrl)
            }), Object($.b)(a.video, "ended", function() {
                b(t)
            }), Object($.b)(a.button, "click", function() {
                r(!0), p(t)
            })
        }
    }

    function v() {
        throw new Error("Not sure what this is supposed to render")
    }

    function _(t, e) {
        for (var n in e) Object($.C)(e, n) && (t.style[n] = e[n])
    }

    function y(t) {
        switch (t.get("position")) {
            case "promotion-large":
                return dt.LARGE;
            case "promotion-medium":
                return dt.MEDIUM;
            case "promotion-small":
                return dt.SMALL;
            case "promotion-recommended":
                return dt.RECOMMENDED;
            default:
                return dt.UNKNOWN
        }
    }

    function w(t) {
        switch (t) {
            case dt.UNKNOWN:
                return "unknown";
            case dt.SMALL:
                return "small";
            case dt.MEDIUM:
                return "medium";
            case dt.LARGE:
                return "large";
            case dt.RECOMMENDED:
                return "recommended"
        }
    }

    function E(t, e, n) {
        return ht + "/" + t + O({
            title: n.Title,
            brand: n.Brand,
            teaser_short: n.Teaser,
            image_uid: n.ImageUID,
            style: e
        })
    }

    function O(t) {
        var e = [],
            n = "";
        for (n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + function(t) {
            return "object" == typeof t ? encodeURIComponent(JSON.stringify(t)) : encodeURIComponent(t)
        }(t[n]));
        return "?" + e.join("&")
    }

    function A(t) {
        if (!t) throw new TypeError("defaults must be set");
        this._properties = Object($.j)(t)
    }

    function S(t, e) {
        if (!t._properties.hasOwnProperty(e)) throw new ReferenceError(e + " is not a valid property");
        return !0
    }

    function T(t, e, n) {
        mt.a.call(this, {
            wildcard: !0
        }), bt.call(this, vt), this.el = t, this.id = t.getAttribute("id"), this.group = null, this.manager = e, this.renderedSize = null, this.slot = null, this.state = Q.AD_STATES.UNINITIALISED, this.type = Q.AD_SIZES.UNKNOWN, this.el.setAttribute("data-ad-initialised", !0), this.set(n), this.manager.slots[this.id] = this
    }

    function L(t) {
        t.manager.slots[t.id] = null, t.el = null, t.id = null, t.group && t.group.remove(t), t.manager = null, t.renderedSize = null, t.slot = null, t.state = null
    }

    function j(t, e) {
        mt.a.call(this, {
            wildcard: !0
        });
        var n = Object($.f)({
            id: "batch-" + Object($.M)(),
            maxSlots: wt
        }, e);
        this._bounds = {
            bottom: -1 / 0,
            top: 1 / 0
        }, this.id = n.id, this.lazyload = !1, this.manager = t, this.maxSlots = n.maxSlots, this.size = 0, this.slots = {}, this.manager.groups[this.id] = this
    }

    function I() {
        this.manager = null, this.slots = null
    }

    function C(t) {
        return t.register()
    }

    function N() {
        this.group.remove(this)
    }

    function k() {
        mt.a.call(this, {
            wildcard: !0
        }), this._hooks = {}, this._lazyloadGroups = [], this.groups = {}, this.initialised = !1, this.slots = {}
    }

    function x(t) {
        var e = t || document,
            n = this.getSlots({
                el: e,
                filter: Object($.J)(Q.isElInitialised)
            }),
            i = n.map(Q.parseAdAttributes);
        if (0 !== n.length) {
            var r = n.map(function(t, e) {
                    return t.setAttribute("id", "ad_" + Object($.M)()), this.createAd(t, i[e])
                }.bind(this)),
                s = R(this, r),
                o = Promise.resolve().then(function() {
                    return Promise.all(s.map(B))
                }),
                a = V(s, function(t) {
                    return !1 === t.lazyload
                });
            a[1].length > 0 && (this._lazyloadGroups = this._lazyloadGroups.concat(a[1].slice(0))), o.then(function() {
                return Promise.all(a[0].map(H))
            }).then(function() {
                return Promise.all(a[0].map(M))
            }), this._lazyloadGroups.length > 0 && (D.call(this), o.then(this.update.bind(this)))
        }
    }

    function z() {
        jt && (jt = !1, Object($.P)(window, "resize", this._hooks.resize), Object($.P)(window, "scroll", this._hooks.scroll), this._hooks.resize = null, this._hooks.scroll = null)
    }

    function R(t, e) {
        function n(e, n) {
            return i.hasOwnProperty(e) ? i[e].group : (i[e] = {
                group: new Et(t, {
                    id: e
                }),
                order: n
            }, i[e].group)
        }
        var i = {},
            r = [],
            s = "",
            o = 0;
        e.forEach(function(t) {
            o = t.get("order"), s = t.get("group"), s ? n(s, o).add(t) : n(Object($.M)(), o).add(t)
        });
        for (s in i) i.hasOwnProperty(s) && r.push(i[s]);
        return r.sort(function(t, e) {
            return t.order - e.order
        }), r.map(function(t) {
            return t.group
        })
    }

    function D() {
        jt || (jt = !0, this._hooks.resize = Object($.R)(Y, 500, this), this._hooks.scroll = Object($.R)(this.update, 300, this), Object($.b)(window, "resize", this._hooks.resize), Object($.b)(window, "scroll", this._hooks.scroll), Object($.L)(Y.bind(this)), Object($.K)(Y.bind(this)))
    }

    function P(t) {
        var e = this.slots[t.slot.getSlotElementId()],
            n = "error";
        null !== e && (t.isEmpty || e.state === Q.AD_STATES.STOPPED ? (Object(Q.setAdStateToStopped)(e, t), n = "stop") : (Object(Q.setAdStateToRendered)(e, t), e.set("creativeId", t.creativeId), e.set("lineItemId", t.lineItemId), e.renderedSize = t.size.slice(0), e.type = Object(Q.getAdTypeBySize)(t.size[0], t.size[1]), Object($.N)(e.el.parentNode.parentNode, "is-hidden"), n = "render"), e.emit(n, Object($.k)(n, e, {
            originalEvent: t
        })), e.manager.emit(n, Object($.k)(n, e.manager, {
            ad: e,
            originalEvent: t
        })))
    }

    function M(t) {
        return t.refresh()
    }

    function B(t) {
        return t.register()
    }

    function H(t) {
        return t.render()
    }

    function U(t) {
        return t.resize()
    }

    function G(t) {
        for (var e in t.slots)
            if (t.slots[e].state < Q.AD_STATES.REGISTERED) return !1;
        return !0
    }

    function q(t, e) {
        var n = e.top - Tt,
            i = e.bottom + Tt;
        return !(n < t.top && i < t.top) && !(n > t.bottom && i > t.bottom)
    }

    function F(t) {
        return Promise.resolve().then(function() {
            return H(t)
        }).then(function() {
            return M(t)
        })
    }

    function Y() {
        this._lazyloadGroups.forEach(U), Lt = window.innerHeight, this.update()
    }

    function V(t, e) {
        var n = new Array(2);
        if (n[0] = [], n[1] = [], t.length < 1) return n;
        for (var i = -1, r = t.length, s = null; ++i < r;) s = t[i], e(s) ? n[0].push(s) : n[1].push(s);
        return s = null, n
    }

    function K(t) {
        var e = document.getElementById(t);
        Object($.u)(e, ".ad__main").style.display = "none"
    }

    function W() {}

    function J(t) {
        t.el.removeAttribute("data-ad-debug");
        var e = t.el.parentNode.querySelector(".ad-debug");
        e.parentNode.removeChild(e)
    }

    function X(t) {
        return t.el.hasAttribute("data-ad-debug")
    }

    function Z(t) {
        t.el.setAttribute("data-ad-debug", "true");
        var e = document.createElement("div"),
            n = t.get("sizemap");
        null !== n && (n = {
            values: n.map(function(t) {
                return {
                    key: t[0].join("x"),
                    values: t[1].map(function(t) {
                        return t.join("x")
                    })
                }
            })
        });
        var i = t.get("values");
        i && (i = JSON.stringify(i)), e.innerHTML = Nt()({
            creativeId: t.get("creativeId"),
            dfp: t.get("dfp"),
            id: t.id,
            lineItemId: t.get("lineItemId"),
            renderedSize: t.renderedSize.join("x"),
            position: t.get("position"),
            sizeMapping: n,
            sizes: t.get("sizes").map(function(t) {
                return t.join("x")
            }),
            values: i
        }), t.el.parentNode.appendChild(e.firstChild)
    }
    var $ = n(0),
        Q = n(7),
        tt = {
            render: function(t, e) {
                var n = Object($.j)(e);
                n.slot = "#" + t.id, n.callbacks = {
                    ad: i(),
                    finish: r.bind(t),
                    skip: i(),
                    mute: i(),
                    unmute: i(),
                    pause: i(),
                    play: i(),
                    loaded: i(),
                    launch: s.bind(t)
                }, window.teads && (window.teads = {}), Object(Q.loadTeadLibrary)(), window._ttf.push(n)
            }
        },
        et = tt,
        nt = n(14),
        it = 12,
        rt = {
            linkUrl: "",
            lowImgSrc: "",
            hiImgSrc: "",
            videoSrcMp4: ""
        },
        st = 600,
        ot = 1e3,
        at = "js-ad-video-btn",
        lt = "js-ad-video-player",
        ct = {
            render: function(t, e, n) {
                var i = Object($.f)({}, rt, e);
                if (null !== i || null !== n) {
                    var r = d(t.el, i),
                        s = "" !== i.videoSrcMp4;
                    null === i && null !== n ? v() : s ? m(t, i) : g(t, i, r), o("InterstitialAdDisplayed", "BespokeRendered")
                }
            }
        },
        ut = ct,
        dt = {
            UNKNOWN: -1,
            SMALL: 0,
            MEDIUM: 1,
            LARGE: 2,
            RECOMMENDED: 3
        },
        ht = location.origin + "/xhr/ads/native",
        ft = {
            inheritFrom: function(t) {
                switch (t._properties.nativeSize = dt.UNKNOWN, t.state) {
                    case Q.AD_STATES.RENDERED:
                        Object(Q.setAdStateToRendered)(t);
                        break;
                    case Q.AD_STATES.DESTROYED:
                        Object(Q.setAdStateToDestroyed)(t);
                        break;
                    case Q.AD_STATES.STOPPED:
                        Object(Q.setAdStateToStopped)(t)
                }
                return t
            },
            render: function(t, e) {
                t.set("nativeSize", y(t)), Object($.e)({
                    url: E(w(t.get("nativeSize")), t.get("nativeStyle"), e)
                }).then(function(t) {
                    var n = null;
                    try {
                        n = JSON.parse(t.request.responseText)
                    } catch (e) {
                        throw new SyntaxError("Error parsing native ads json", t)
                    }
                    this.el.innerHTML = n.template, this.el.querySelector(".c-card__link, .c-feature__link").setAttribute("href", e.LinkUrl), e.ImpressionTrackingUrl ? this.el.querySelector(".js-native-ad__pixel").setAttribute("src", e.ImpressionTrackingUrl) : Object($.O)(this.el.querySelector(".js-native-ad__pixel")), this.emit("render", Object($.k)("render", this))
                }.bind(t))
            }
        },
        pt = ft;
    A.prototype = {
        clear: function() {
            var t = "";
            for (t in this._properties) Object($.C)(this._properties, t) && (this._properties[t] = null);
            this._properties = {}
        },
        constructor: A,
        get: function(t) {
            return 0 === arguments.length ? Object($.j)(this._properties) : (S(this, t), this._properties[t])
        },
        set: function(t, e) {
            if ("string" == typeof t) S(this, t), this._properties[t] = e;
            else
                for (var n in t) Object($.C)(t, n) && this.set(n, t[n])
        }
    };
    var bt = A,
        gt = n(1),
        mt = n.n(gt),
        vt = {
            bidding: !1,
            creativeId: null,
            dfp: null,
            group: null,
            lazyload: !1,
            lineItemId: null,
            nativeStyle: 0,
            order: Number.MAX_VALUE,
            placement: null,
            position: null,
            sizemap: null,
            sizes: null,
            targets: null,
            unit: null,
            values: null,
            zone: null
        },
        _t = Object($.D)(bt.prototype, mt.a.prototype);
    T.prototype = Object($.D)(_t, {
        constructor: T,
        destroy: function() {
            this.clear(), L(this), this.emit("destroy", Object($.k)("destroy", this)), this.removeAllListeners()
        },
        forceSizeChange: function(t, e) {
            this.type = Object(Q.getAdTypeBySize)(t, e)
        },
        register: function() {
            return this.manager.register(this)
        }
    });
    var yt = T,
        wt = 1 / 0;
    j.prototype = Object($.D)(mt.a.prototype, {
        add: function(t) {
            if (Object(Q.hasGroup)(t)) throw new TypeError("Ad is already part of a group");
            if (this.size >= this.maxSlots) throw new RangeError("Group has maxed its slots");
            this.slots[t.id] = t, t.group = this, t.once("destroy", N), this.size++, !this.lazyload && t.get("lazyload") && (this.lazyload = !0), this.emit("add", Object($.k)("add", this, {
                ad: t
            }))
        },
        constructor: j,
        destroy: function() {
            var t = "";
            for (t in this.slots) Object($.C)(this.slots, t) && this.slots[t].destroy();
            I.call(this), this.emit("destroy", Object($.k)("destroy", this)), this.removeAllListeners()
        },
        refresh: function() {
            return this.manager.refresh(Object($.t)(this.slots), !1)
        },
        register: function() {
            return Promise.all(Object($.t)(this.slots).map(C))
        },
        release: function() {
            this.remove(), this.emit("release", Object($.k)("release", this))
        },
        remove: function(t) {
            if (0 === arguments.length) return void Object($.t)(this.slots).forEach(this.remove.bind(this));
            if (Object(Q.hasGroup)(t)) {
                if (t.group !== this) throw new Error("Ad is not part of this group");
                t.off("destroy", N), t.group = null, this.slots[t.id] = null, delete this.slots[t.id], this.size--, this.emit("remove", Object($.k)("remove", this, {
                    ad: t
                }))
            }
        },
        render: function() {
            return this.manager.render(Object($.t)(this.slots))
        },
        resize: function() {
            var t = Object($.t)(this.slots).map(function(t) {
                    return Object($.q)(t.el)
                }),
                e = 1 / 0,
                n = -1 / 0;
            t.forEach(function(t) {
                t.top < e && (e = t.top), t.bottom > n && (n = t.bottom)
            }), this._bounds.bottom = n, this._bounds.top = e
        }
    });
    var Et = j,
        Ot = {
            "728x90": function(t) {
                var e = document.createElement("div");
                e.innerHTML = '<img src="/static/img/adblock-LB.png" />', t.el.appendChild(e)
            },
            "300x250": function(t) {
                var e = document.createElement("div");
                e.innerHTML = '<img src="/static/img/adblock-MPU.png" />', t.el.appendChild(e)
            },
            "300x600": function(t) {
                var e = document.createElement("div");
                e.innerHTML = '<img src="/static/img/adblock-DS.png" />', t.el.appendChild(e)
            }
        },
        At = {
            render: function(t) {
                var e = window.innerWidth,
                    n = window.innerHeight,
                    i = t.get("sizemap"),
                    r = t.get("sizes"),
                    s = null;
                if (null === i) s = Array.isArray(r[0]) ? r[0] : r;
                else
                    for (var o = i.length, a = null; o--;)
                        if (a = i[o], a[0][0] < e && a[0][1] < n) {
                            s = a[1][0];
                            break
                        } var l = s[0] + "x" + s[1],
                    c = "error";
                Ot.hasOwnProperty(l) ? (Ot[l](t), c = "render", Object(Q.setAdStateToRendered)(t), t.set("creativeId", "Custom Ad Block Message"), t.set("lineItemId", "Custom Ad Block Message"), t.renderedSize = s, t.type = Object(Q.getAdTypeBySize)(s[0], s[1]), Object($.N)(t.el.parentNode.parentNode, "is-hidden")) : (Object(Q.setAdStateToStopped)(t), c = "stop"), t.emit(c, Object($.k)(c, t, {
                    originalEvent: null
                })), t.manager.emit(c, Object($.k)(c, t.manager, {
                    ad: t,
                    originalEvent: null
                }))
            }
        },
        St = At,
        Tt = 100,
        Lt = window.innerHeight,
        jt = !1;
    k.prototype = Object($.D)(mt.a.prototype, {
        constructor: k,
        createAd: function(t, e) {
            return new yt(t, this, e || {})
        },
        display: function(t) {
            var e = Object(Q.parseAdAttributes)(t);
            t.setAttribute("id", "ad_" + Object($.M)());
            var n = this.createAd(t, e);
            return this.register(n).then(function() {
                return this.render(n)
            }.bind(this)).then(function() {
                return this.refresh(n)
            }.bind(this))
        },
        getSlots: function(t) {
            var e = Object($.f)({
                    cls: ".da__container",
                    el: document,
                    filter: null
                }, t),
                n = Object($.h)(e.el.querySelectorAll(e.cls));
            return e.filter ? n.filter(e.filter) : n
        },
        init: function() {
            return this.initialised ? Promise.resolve() : (this.initialised = !0, Q.HAS_ADS_BLOCKED ? Promise.resolve() : Object(Q.loadAdLibraries)().then(function() {
                Object(Q.pushToGoogleTag)(function(t) {
                    googletag.pubads().disableInitialLoad(), googletag.pubads().enableSingleRequest(), googletag.pubads().enableAsyncRendering(), googletag.pubads().collapseEmptyDivs(!0);
                    var e = parseInt(Object($.p)("cnd_one_trust_consent"));
                    googletag.pubads().setRequestNonPersonalizedAds(e ? 0 : 1), googletag.enableServices(), googletag.pubads().addEventListener("slotRenderEnded", P.bind(this)), t()
                }.bind(this))
            }.bind(this)))
        },
        lazy: function(t) {
            return x.call(this, t), Promise.resolve()
        },
        refresh: function(t, e) {
            var n = null;
            return n = Q.HAS_ADS_BLOCKED ? new Promise(function(e, n) {
                return Array.isArray(t) || (t = [t]), Promise.all(t.map(function(t) {
                    return new Promise(function(e) {
                        St.render(t), e()
                    })
                })).then(e, n)
            }) : Object(Q.refreshRubicon)(t).then(function() {
                return Object(Q.refreshGPT)(t, e)
            }), n.catch(function(t) {
                throw console.error("There was an error refreshing the ads"), t
            }), n
        },
        register: function(t) {
            var e = null;
            return e = Array.isArray(t) ? Promise.all(t.map(this.register)) : Q.HAS_ADS_BLOCKED ? Object(Q.registerAdBlock)(t) : Object(Q.registerRubicon)(t).then(function() {
                return Object(Q.registerPrebid)(t)
            }).then(function() {
                return Object(Q.registerGPT)(t)
            }), e.catch(function(t) {
                throw console.error("There was an error registering the ads"), t
            }), e
        },
        render: function(t) {
            var e = null;
            return e = Array.isArray(t) ? Promise.all(t.map(this.render)) : Q.HAS_ADS_BLOCKED ? Promise.resolve(t) : Object(Q.renderGPT)(t), e.catch(function(t) {
                throw console.error("There was an error rendering the ads"), t
            }), e
        },
        update: function() {
            for (var t = Object($.A)(), e = {
                    bottom: t + Lt,
                    top: t
                }, n = this._lazyloadGroups.length, i = null; n--;) i = this._lazyloadGroups[n], q(e, i._bounds) && G(i) && (F(i), this._lazyloadGroups.splice(n, 1));
            0 === this._lazyloadGroups.length && z.call(this)
        },
        updateCorrelator: function() {
            return Q.HAS_ADS_BLOCKED ? Promise.resolve() : Object(Q.pushToGoogleTag)(function() {
                googletag.pubads().updateCorrelator()
            })
        }
    });
    var It = new k;
    window.GptAdSlots = {
        setSlotWindowAsBlankAdvert: function(t) {
            var e = null,
                n = null;
            if ((e = Object($.r)(t)) && (n = Object($.u)(e, ".da__container"))) {
                Object($.a)(n.parentNode, "is-hidden");
                var i = It.slots[n.getAttribute("id")];
                Object(Q.setAdStateToStopped)(i), i.emit("stop", Object($.k)("stop", i, {
                    originalEvent: null
                })), i.manager.emit("stop", Object($.k)("stop", i.manager, {
                    ad: i,
                    originalEvent: null
                }))
            }
        }
    }, window.PromotionButtons = {
        add: function(t, e) {
            var n = Object($.r)(e),
                i = Object($.u)(n, ".da__container");
            if (i) {
                var r = i.getAttribute("id"),
                    s = It.slots[r];
                pt.inheritFrom(s), pt.render(s, t)
            }
        }
    }, window.InreadSupport = {
        requestAd: function(t, e) {
            var n = Object($.r)(e),
                i = Object($.u)(n, ".da__container");
            if (i) {
                var r = i.getAttribute("id"),
                    s = It.slots[r];
                et.render(s, t)
            }
        }
    }, Object($.b)(window, "message", function(t) {
        var e = t.data;
        try {
            e = JSON.parse(e)
        } catch (t) {
            e = null
        }
        if (null !== e && e.isConde && e.isTead) switch (e.type) {
            case "close":
                K(e.data.id)
        }
    }), window.INTERSTITIAL_AD = {
        displayInterstitialAd: function(t, e, n) {
            var i = Object($.r)(n),
                r = Object($.u)(i, ".da__container");
            if (r) {
                var s = r.getAttribute("id"),
                    o = It.slots[s];
                ut.render(o, t, e)
            }
        },
        gptInterstitialRenderEndedCallback: function(t) {
            window.INTERSTITIAL_AD.displayInterstitialAd(null, t.sizeInfo)
        }
    }, window.cn_rubicon_resize = function(t, e) {
        var n = e.split("x");
        n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10);
        var i = Object($.u)(document.getElementById(t), ".da__container");
        i && It.slots[i.getAttribute("id")].forceSizeChange(n[0], n[1])
    };
    var Ct = n(34),
        Nt = n.n(Ct);
    W.prototype = {
        clear: function() {
            for (var t in It.slots) It.slots.hasOwnProperty(t) && X(It.slots[t]) && J(It.slots[t])
        },
        constructor: W,
        debug: function(t) {
            for (var e in It.slots) It.slots.hasOwnProperty(e) && It.slots[e] && (!t && X(It.slots[e]) || It.slots[e].state === Q.AD_STATES.RENDERED && (t && J(It.slots[e]), Z(It.slots[e])))
        }
    };
    var kt = new W;
    n.d(e, "c", function() {
        return xt
    }), n.d(e, !1, function() {
        return yt
    }), n.d(e, "b", function() {
        return It
    }), n.d(e, "a", function() {
        return kt
    }), n.d(e, !1, function() {
        return pt
    });
    var xt = Q
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = ["%c", " _    _                             _     _      _             ", "| |  | |                           | |   (_)    (_)            ", "| |  | | ___      __ _ _ __ ___    | |__  _ _ __ _ _ __   __ _ ", "| |/\\| |/ _ \\    / _` | '__/ _ \\   | '_ \\| | '__| | '_ \\ / _` |", "\\  /\\  /  __/   | (_| | | |  __/   | | | | | |  | | | | | (_| |", " \\/  \\/ \\___|    \\__,_|_|  \\___|   |_| |_|_|_|  |_|_| |_|\\__, |", "                                                          __/ |", "                                                         |___/ ", "%c", "Are you an awesome software engineer? Join the team in London", "that builds Wired, Vogue, GQ, Glamour and more.", "", "https://code.condenast.co.uk/jobs", "https://code.condenast.co.uk/home", "", "https://www.condenast.co.uk"];
        console.log(t.join("\n"), "color: #f0f;font-weight:bold;text-shadow:0 0 10px #f0f;", "color: #000;")
    }

    function r(t) {
        var e = Object(h.s)(d.a.abbr),
            n = e + "_",
            i = t;
        return t.substr(0, n.length) !== n && (i = n + i), window[e].Store.get(i)
    }

    function s(t, e) {
        var n = Object(h.s)(d.a.abbr),
            i = n + "_",
            r = t;
        return t.substr(0, i.length) !== i && (r = i + r), window[n].Store.set(r, e)
    }

    function o(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function a(t, e) {
        var n = t.get("sizes"),
            i = n.length;
        if (void 0 !== e && -1 === p.indexOf(e)) throw new Error("Unknown native ad size: " + e);
        if (void 0 !== e) var r = new RegExp("^" + e, "i");
        else var r = new RegExp("^promotion-", "i");
        for (; i--;)
            if (f.c.getAdTypeBySize(n[i][0], n[i][1]) === f.c.AD_SIZES.NATIVE && r.test(t.get("position"))) return !0;
        return !1
    }

    function l() {
        return window[Object(h.s)(d.a.abbr)]
    }

    function c(t) {
        window[Object(h.s)(d.a.abbr)] = t
    }

    function u(t, e) {
        Array.prototype.forEach.call(e, function(e) {
            t.appendChild(e)
        })
    }
    e.b = i, e.d = r, e.g = s, e.h = o, e.e = a, e.c = l, e.f = c, e.a = u;
    var d = n(16),
        h = n(0),
        f = n(2),
        p = ["promotion-small", "promotion-medium", "promotion-large"]
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    }), n.d(e, "c", function() {
        return o
    }), n.d(e, "d", function() {
        return a
    }), n.d(e, "e", function() {
        return l
    }), n.d(e, "f", function() {
        return c
    }), n.d(e, "g", function() {
        return u
    }), n.d(e, "b", function() {
        return d
    });
    var i = navigator.userAgent,
        r = navigator.platform,
        s = function() {
            var t, e = i,
                n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
                name: "IE",
                version: parseFloat(t[1] || "")
            }) : "Chrome" === n[1] && null !== (t = e.match(/\bOPR\/(\d+)/)) ? {
                name: "Opera",
                version: parseFloat(t[1])
            } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]), {
                name: n[0],
                version: parseFloat(n[1])
            })
        }(),
        o = !!("history" in window && "function" == typeof window.history.replaceState),
        a = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
        l = /Android/i.test(i),
        c = /(iPad|iPhone|iPod touch)/i.test(i),
        u = (/Linux/i.test(r), /Mac/i.test(r), /Win/i.test(r), function() {
            var t = document.createElement("div"),
                e = document.getElementsByTagName("body")[0];
            t.style.width = t.style.paddingLeft = "1px", e.appendChild(t);
            var n = 2 === t.offsetWidth;
            return e.removeChild(t), t = null, n
        }()),
        d = (function() {
            var t = document.createElement("video");
            t && t.play
        }(), function() {
            if (navigator.cookieEnabled) return !0;
            document.cookie = "cnd_cookie_detect=1";
            var t = -1 != document.cookie.indexOf("cnd_cookie_detect=");
            return document.cookie = "cnd_cookie_detect=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
        }())
}, , , function(t, e, n) {
    "use strict";

    function i(t) {
        return t.zone + "/" + t.unit
    }

    function r(t) {
        if (t || !1 === nt) {
            nt = {
                AD_UNIT: !1,
                AD_ZONE: !1
            };
            var e = Object(Y.s)(F.a.abbr),
                n = null;
            return n = window[e].Store.get(e + "_" + it), n && (nt.AD_UNIT = n, window[e].Store.remove(e + "_" + it)), n = window[e].Store.get(e + "_" + rt), n && (nt.AD_ZONE = n, window[e].Store.remove(e + "_" + rt)), nt
        }
    }

    function s(t) {
        var e = googletag.sizeMapping();
        return t.forEach(function(t) {
            e.addSize(t[0], t[1])
        }), e
    }

    function o(t) {
        r();
        var e = null,
            n = "",
            i = {};
        for (n in lt) Object(Y.C)(lt, n) && t.hasAttribute("data-ad-" + n) ? (e = t.getAttribute("data-ad-" + n)) && (i[n] = e) : i[n] = lt[n];
        return i
    }

    function a(t, e) {
        var n = t + "x" + e;
        return ot.hasOwnProperty(n) ? ot[n] : st.UNKNOWN
    }

    function l(t) {
        if (null === J || t) {
            var e = Object(Y.s)(F.a.abbr);
            J = window[e].Store.get(e + "_ad_config")
        }
        return J
    }

    function c(t) {
        return rubicontag.getSlot(t.id)
    }

    function u(t) {
        return t.slot
    }

    function d(t) {
        var e = {};
        return t.getTargetingKeys().forEach(function(n) {
            e[n] = t.getTargeting(n)
        }), e
    }

    function h(t) {
        return t.get("bidding")
    }

    function f(t) {
        return null !== t.group
    }

    function p(t) {
        return "ad_network_id" === t || "ad_custom_targeting" === t || "ad_tag_prefix" === t || "ad_unit" === t || "ad_url" === t || "ad_zone" === t || "targeting_doctype" === t || "targeting_tags" === t
    }

    function b(t) {
        return t.state === at.DESTROYED
    }

    function g(t) {
        return t.state === at.INITIALISED
    }

    function m(t) {
        return t.state === at.RENDERED
    }

    function v(t) {
        return t.hasAttribute("data-ad-initialised")
    }

    function _() {
        return window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], Promise.all([O(), w()]).then(function() {
            return y()
        })
    }

    function y() {
        return window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], Object(Y.H)(V)
    }

    function w() {
        return window.rubicontag = window.rubicontag || {}, window.rubicontag.cmd = window.rubicontag.cmd || [], null === K ? (console.warn("Rubicon library has no url specified to load. Ads will continue without Rubicon"), Promise.resolve()) : Object(Y.H)(K).then(function() {
            return W = !0, Promise.resolve()
        }, function() {
            return console.warn("Error loading rubicon library"), W = !1, Promise.resolve()
        }).catch(function() {
            return console.warn("Error loading rubicon library"), W = !1, Promise.resolve()
        })
    }

    function E() {
        return window._ttf = window._ttf || [], Object(Y.H)(X)
    }

    function O() {
        if (null === $) return console.warn("Prebid library has no url specified to load. Ads will continue without Prebid"), Promise.resolve();
        window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], pbjs.que.push(function() {
            pbjs.setConfig({
                enableSendAllBids: !0
            })
        });
        var t = Object(Y.H)($).then(function() {
                return tt = !0, Promise.resolve()
            }, function() {
                return console.warn("Error loading prebid library"), tt = !1, Promise.resolve()
            }).catch(function() {
                return console.warn("Error loading prebid library"), tt = !1, Promise.resolve()
            }),
            e = L(Q);
        return Promise.race([t, e])
    }

    function A(t) {
        if (!Object(Y.F)(t)) return null;
        var e = Object(Y.T)(t);
        return e = JSON.parse(e), "" === e ? null : e
    }

    function S(t) {
        var e = o(t);
        return e = T(e), e.dfp = i(e), e
    }

    function T(t) {
        var e = "";
        for (e in ct)
            if (Object(Y.C)(ct, e)) {
                if (ct[e].required && !Object(Y.C)(t, e)) throw new TypeError(e + " property is required");
                ct[e].map && (t[e] = ct[e].map(t[e], t))
            }
        return t
    }

    function L(t) {
        return new Promise(function(e) {
            setTimeout(e, t)
        })
    }

    function j(t) {
        return new Promise(function(e, n) {
            googletag.cmd.push(function() {
                try {
                    var i = t(e);
                    void 0 !== i && e(i)
                } catch (t) {
                    n(t)
                }
            })
        }).then(function(t) {
            return Promise.resolve(t)
        }, function(t) {
            throw t
        })
    }

    function I(t, e) {
        function n(t) {
            rubicontag.setTargetingForGPTSlot(t)
        }
        return j(function(i) {
            var r = null,
                s = null;
            Array.isArray(t) ? (r = t.map(u), s = t.map(function(t) {
                return t.id
            })) : (r = [u(t)], s = [t.id]), W && r.forEach(n), tt ? pbjs.que.push(function() {
                pbjs.requestBids({
                    timeout: Q,
                    adUnitCodes: s,
                    bidsBackHandler: function() {
                        pbjs.setTargetingForGPTAsync(s), googletag.pubads().refresh(r, {
                            changeCorrelator: !!e
                        }), i()
                    }
                })
            }) : (googletag.pubads().refresh(r, {
                changeCorrelator: !!e
            }), i())
        })
    }

    function C(t) {
        return j(function(e) {
            if (!W) return e();
            var n = null;
            if (n = Array.isArray(t) ? t.filter(h).map(c) : h(t) ? [c(t)] : [null], n = n.filter(function(t) {
                    return null !== t
                }), n.length < 1 && (n = null), null === n) return e();
            rubicontag.run(e, {
                slots: n
            })
        })
    }

    function N(t) {
        return new Promise(function(e) {
            t.slot = null, t.state = at.REGISTERED, t.emit("register", Object(Y.k)("register", t, {
                slot: t.slot
            })), t.manager.emit("register", Object(Y.k)("register", t.manager, {
                ad: t,
                slot: t.slot
            })), e(t)
        })
    }

    function k(t) {
        return j(function() {
            var e = googletag.defineSlot(t.get("dfp"), t.get("sizes"), t.id);
            if (e.addService(googletag.pubads()), null !== t.get("targets")) {
                var n = t.get("targets").filter(function(t) {
                    return "" !== t
                });
                n.length > 0 && e.setTargeting(l().ad_tag_prefix, n)
            }
            if (t.get("position") && e.setTargeting("position", t.get("position")), t.get("values")) {
                var i = "",
                    r = t.get("values");
                for (i in r)
                    if (Object(Y.C)(r, i) && !p(i))
                        if ("ad_keyvalue" === i)
                            for (var o in r[i]) Object(Y.C)(r[i], o) && e.setTargeting(o, r[i][o]);
                        else e.setTargeting(i, r[i])
            }
            return t.get("sizemap") && e.defineSizeMapping(s(t.get("sizemap")).build()), tt && pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync()
            }), t.slot = e, t.state = at.REGISTERED, t.emit("register", Object(Y.k)("register", t, {
                slot: e
            })), t.manager.emit("register", Object(Y.k)("register", t.manager, {
                ad: t,
                slot: e
            })), t
        })
    }

    function x(t) {
        var e = [];
        return t.forEach(function(t) {
            if (h(t)) {
                var n = [];
                if (Z.hasOwnProperty("RUBICON") && Z.RUBICON.zoneId.forEach(function(t) {
                        n.push({
                            bidder: "rubicon",
                            params: {
                                accountId: Z.RUBICON.accountId,
                                siteId: Z.RUBICON.siteId,
                                zoneId: t
                            }
                        })
                    }), 0 !== n.length) {
                    var i = {
                        code: t.id,
                        sizes: t.get("sizes").filter(function(t) {
                            return et.hasOwnProperty(t.join("x"))
                        }),
                        bids: n
                    };
                    if (t.get("sizemap")) {
                        var r = t.get("sizemap").map(function(t) {
                            return {
                                minWidth: t[0][0],
                                sizes: t[1].filter(function(t) {
                                    return et.hasOwnProperty(t.join("x"))
                                }).map(function(t) {
                                    return t[0]
                                })
                            }
                        });
                        r.length > 0 && (i.sizeMapping = r)
                    }
                    e.push(i)
                }
            }
        }), e
    }

    function z(t) {
        return j(function(e) {
            tt && h(t) ? pbjs.que.push(function() {
                var n = x([t]);
                pbjs.addAdUnits(n), e()
            }) : e()
        })
    }

    function R(t) {
        return j(function(e) {
            W && h(t) && rubicontag.defineSlot(t.get("dfp"), t.get("sizes"), t.id), e()
        })
    }

    function D(t) {
        return j(function(e) {
            googletag.display(t.id), e()
        })
    }

    function P(t) {
        for (var e in t)
            if (Object(Y.C)(t, e)) switch (e) {
                case "GPT_URL":
                    V = t[e];
                    break;
                case "RUBICON_URL":
                    K = t[e];
                    break;
                case "TEAD_URL":
                    X = t[e];
                    break;
                case "PREBID_URL":
                    $ = t[e];
                    break;
                case "PREBID_SETTINGS":
                    Z = t[e]
            }
    }

    function M(t) {
        return t.state = at.DESTROYED, t.el.setAttribute("data-ad-destroyed", !0), t
    }

    function B(t) {
        return t.state = at.RENDERED, t.el.setAttribute("data-ad-rendered", !0), t
    }

    function H(t) {
        return t.state = at.STOPPED, t.el.setAttribute("data-ad-stopped", !0), t
    }

    function U(t, e, n) {
        var i = {
                unit: t,
                zone: e,
                sizes: "[[5, 5]]",
                bidding: !1,
                sizemap: null,
                values: JSON.stringify(n),
                placement: "PAGE_IMPRESSION_TRACKER"
            },
            r = document.createElement("div");
        for (var s in i) i.hasOwnProperty(s) && r.setAttribute("data-ad-" + s, i[s]);
        return r
    }

    function G(t, e) {
        var n = t.get("sizes"),
            i = n.length;
        if (void 0 !== e && -1 === dt.indexOf(e)) throw new Error("Unknown native ad size: " + e);
        var r = null;
        r = void 0 !== e ? new RegExp("^" + e, "i") : new RegExp("^promotion-", "i");
        for (; i--;)
            if (a(n[i][0], n[i][1]) === st.NATIVE && r.test(t.get("position"))) return !0;
        return !1
    }

    function q(t) {
        var e = t;
        e || (e = window.location.href);
        var n = Object(Y.v)(e);
        return {
            TestAdKeyValue: n.TestAdKeyValue || null,
            TestAdNetworkId: n.TestAdNetworkId || null,
            TestAdTargeting: n.TestAdTargeting || null,
            TestAdUnit: n.TestAdUnit || null,
            TestAdZone: n.TestAdZone || null
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "GPT_URL", function() {
        return V
    }), n.d(e, "RUBICON_URL", function() {
        return K
    }), n.d(e, "TEAD_URL", function() {
        return X
    }), n.d(e, "PREBID_URL", function() {
        return $
    }), n.d(e, "AD_SIZES", function() {
        return st
    }), n.d(e, "AD_STATES", function() {
        return at
    }), n.d(e, "HAS_ADS_BLOCKED", function() {
        return ut
    }), e.buildDFPUrl = i, e.checkTestAdConfig = r, e.getAdElementAttributes = o, e.getAdTypeBySize = a, e.getPageAdConfig = l, e.getRubiconSlot = c, e.getSlot = u, e.getSlotTargeting = d, e.hasHeaderBidding = h, e.hasGroup = f, e.isAdDestroyed = b, e.isAdInitialised = g, e.isAdRendered = m, e.isElInitialised = v, e.loadAdLibraries = _, e.loadGPTLibrary = y, e.loadRubiconLibrary = w, e.loadTeadLibrary = E, e.loadPrebidLibrary = O, e.parseAdKeyValues = A, e.parseAdAttributes = S, e.mapAdElementAttributes = T, e.promisifyTimeout = L, e.pushToGoogleTag = j, e.refreshGPT = I, e.refreshRubicon = C, e.registerAdBlock = N, e.registerGPT = k, e.registerPrebid = z, e.registerRubicon = R, e.renderGPT = D, e.setAdUrls = P, e.setAdStateToDestroyed = M, e.setAdStateToRendered = B, e.setAdStateToStopped = H, e.createPageImpressionElement = U, e.isAdNative = G, e.getTestAdValues = q;
    var F = n(16),
        Y = n(0),
        V = "//www.googletagservices.com/tag/js/gpt.js",
        K = null,
        W = !1,
        J = null,
        X = null,
        Z = {},
        $ = null,
        Q = 1e3,
        tt = !1,
        et = {
            "728x90": !0,
            "300x600": !0,
            "300x250": !0,
            "970x250": !0,
            "970x90": !0
        },
        nt = !1,
        it = "ad_test_unit",
        rt = "ad_test_zone",
        st = {
            UNKNOWN: -1,
            NATIVE: 0,
            MPU: 1,
            DOUBLESKY: 2,
            LEADERBOARD: 3,
            SUPERLEADER: 4,
            BILLBOARD: 5,
            RESPONSIVE: 6,
            GALLERY_INTERSTITIAL: 7,
            INCONTENT: 8,
            INREAD: 9,
            TRACKING_PIXEL: 10
        },
        ot = {
            "1x1": 0,
            "300x250": 1,
            "300x600": 2,
            "728x90": 3,
            "970x90": 4,
            "970x250": 5,
            "1520x300": 6,
            "700x400": 7,
            "420x160": 8,
            "100x100": 9,
            "5x5": 10
        },
        at = {
            UNINITIALISED: 0,
            INITIALISED: 1,
            REGISTERED: 2,
            RENDERED: 3,
            STOPPED: 4,
            DESTROYED: 5
        },
        lt = {
            bidding: !1,
            group: null,
            lazyload: !1,
            nativeStyle: 0,
            order: Number.MAX_VALUE,
            placement: null,
            position: null,
            sizemap: null,
            sizes: null,
            targets: null,
            unit: null,
            values: null,
            zone: null
        },
        ct = {
            bidding: {
                map: function(t) {
                    return "true" === String(t).toLowerCase()
                },
                required: !0
            },
            group: {
                map: function(t) {
                    return null === t || "null" === t ? null : t.toString()
                },
                required: !1
            },
            lazyload: {
                map: function(t) {
                    return "true" === String(t).toLowerCase()
                },
                required: !1
            },
            nativeStyle: {
                map: Number,
                required: !1
            },
            order: {
                map: Number,
                required: !1
            },
            sizemap: {
                map: JSON.parse,
                required: !1
            },
            sizes: {
                map: JSON.parse,
                required: !0
            },
            targets: {
                map: JSON.parse,
                required: !1
            },
            unit: {
                map: function(t) {
                    return !1 === nt.AD_UNIT ? t : nt.AD_UNIT
                },
                required: !0
            },
            values: {
                map: A,
                required: !1
            },
            zone: {
                map: function(t) {
                    return !1 === nt.AD_ZONE ? t : nt.AD_ZONE
                },
                required: !0
            }
        },
        ut = function() {
            return !window.ads_not_blocked
        }(),
        dt = ["promotion-small", "promotion-medium", "promotion-large", "promotion-recommended"]
}, , , , function(t, e, n) {
    "use strict";
    var i = n(21),
        r = n.n(i),
        s = n(32);
    n.n(s);
    window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.init = !1, window.lazySizesConfig.lazyClass = "c-image--lazyload", window.lazySizesConfig.preloadClass = "c-image--lazypreload", window.lazySizesConfig.loadingClass = "c-image--lazyload-loading", window.lazySizesConfig.loadedClass = "c-image--lazyload-loaded", e.a = {
        init: function() {
            r.a.init()
        }
    }
}, , function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = {
            configHash: t,
            messages: e
        };
        Object(v.Q)(_, JSON.stringify(n), y)
    }

    function r() {
        var t = Object(v.p)(_);
        if (t) try {
            t = JSON.parse(t)
        } catch (e) {
            console.error("Error parsing config!"), console.error(e), t = {
                configHash: null,
                messages: {}
            }
        } else t = {
            configHash: null,
            messages: {}
        };
        return t
    }

    function s(t, e) {
        return new Promise(function(n, i) {
            var r = new XMLHttpRequest;
            r.onreadystatechange = function(t) {
                4 === r.readyState && (r.onreadystatechange = null, 200 === r.status ? n({
                    event: t,
                    request: r
                }) : i({
                    event: t,
                    request: r
                }))
            }, r.open("POST", t), r.setRequestHeader("rollbar-referrer", document.location.href), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.send(JSON.stringify(e))
        })
    }

    function o(t, e) {
        return Object(v.k)("linkClick", t, {
            bubbles: !0,
            linkType: e
        })
    }

    function a(t) {
        return Object(v.k)("disable", t, {
            bubbles: !0
        })
    }

    function l(t) {
        return Object(v.k)("enable", t, {
            bubbles: !0
        })
    }

    function c(t) {
        return Object(v.k)("show", t, {
            bubbles: !0
        })
    }

    function u(t) {
        return Object(v.k)("hide", t, {
            bubbles: !0
        })
    }

    function d(t) {
        return Object(v.k)("fix", t, {
            bubbles: !0
        })
    }

    function h(t) {
        return Object(v.k)("unfix", t, {
            bubbles: !0
        })
    }

    function f(t) {
        return Object(v.k)("load", t, {
            bubbles: !0
        })
    }

    function p(t) {
        if (m.a.call(this), !t) throw new Error("Infobar Element Not Found");
        this.el = t, this.currentConfigHash = null, this.currentMessageHash = null, this.parseConfig(), this.messageEl = t.querySelector(".js-c-infobar__message"), this.buttonEl = t.querySelector(".js-c-infobar__button"), this.closeButtonEl = t.querySelector(".js-c-infobar__close-button"), this.state = {
            isHidden: !1,
            isFixed: !1,
            isEnabled: !1
        }, this._elementListener = null, this._closeButtonListener = null, this.bindListeners(), w.a && (w.a.on("show", this.show.bind(this)), w.a.on("hide", this.hide.bind(this)), w.a.on("fix", this.fix.bind(this)), w.a.on("unfix", this.unfix.bind(this)))
    }

    function b() {
        m.a.call(this, {
            wildcard: !0
        }), this.isLoaded = !1, this.infobar = null
    }
    var g = n(1),
        m = n.n(g),
        v = n(0),
        _ = "cnd_infobar_hash1",
        y = 1,
        w = n(15);
    p.prototype = Object(v.D)(m.a.prototype, {
        bindListeners: function() {
            this._elementListener = this.onClick.bind(this), Object(v.b)(this.el, "click", this._elementListener), this._closeButtonListener = this.disable.bind(this), Object(v.b)(this.closeButtonEl, "click", this._closeButtonListener)
        },
        unbindListeners: function() {
            Object(v.P)(this.el, "click", this._elementListener), this._elementListener = null, Object(v.P)(this.closeButtonEl, "click", this._closeButtonListener), this._closeButtonListener = null
        },
        parseConfig: function() {
            var t = this.el.querySelector(".js-c-infobar-config");
            if (!t) throw new Error("Infobar Config Not Found.");
            try {
                this.config = JSON.parse(t.innerHTML)
            } catch (t) {
                throw console.error("Error parsing infobar config!"), t
            }
            this.currentConfigHash = this.config.config_hash, this.currentMessageHash = this.config.message_hash
        },
        init: function() {
            var t = r();
            t.configHash !== this.currentConfigHash ? (t.messages = {}, t.messages[this.currentMessageHash] = 1, i(this.currentConfigHash, t.messages), this.enable()) : !1 === t.messages[this.currentMessageHash] ? this.disable() : (t.messages[this.currentMessageHash]++, i(this.currentConfigHash, t.messages), this.enable())
        },
        show: function() {
            this.state.isHidden && (this.el.classList.remove("is-hidden"), this.state.isHidden = !1, this.emit("show", c(this)))
        },
        hide: function() {
            this.state.isHidden || (this.el.classList.add("is-hidden"), this.state.isHidden = !0, this.emit("hide", u(this)))
        },
        fix: function() {
            this.state.isFixed || (this.el.classList.add("is-fixed"), this.state.isFixed = !0, this.emit("fix", d(this)))
        },
        unfix: function() {
            this.state.isFixed && (this.el.classList.remove("is-fixed"), this.state.isFixed = !1, this.emit("unfix", h(this)))
        },
        enable: function() {
            this.state.isEnabled || (this.el.classList.remove("is-disabled"), this.state.isEnabled = !0, this.emit("enable", l(this)))
        },
        disable: function() {
            if (this.state.isEnabled) {
                this.el.classList.add("is-disabled"), this.state.isEnabled = !1;
                var t = r();
                t.messages[this.currentMessageHash] = !1, i(this.currentConfigHash, t.messages), this.emit("disable", a(this))
            }
        },
        onClick: function(t) {
            t.target === this.messageEl && this.emit("linkClick", o(t.target, "message")), t.target === this.buttonEl && this.emit("linkClick", o(t.target, "button"))
        }
    });
    var E = p;
    b.prototype = Object(v.D)(m.a.prototype, {
        _handleInfobarEvents: function(t, e) {
            e.bubbles && this.emit(t, e)
        },
        lazyload: function() {
            if (!this.isLoaded) {
                var t = document.querySelector(".js-c-infobar-lazy-load");
                if (!t) return this.isLoaded = !0, void this.emit("load", f(this));
                var e = r(),
                    n = {
                        location: window.location.href,
                        message_history: e.messages
                    };
                document.referrer && (n.referrer = document.referrer), s("/xhr/infobar", n).then(function(e) {
                    this.isLoaded = !0;
                    var n = JSON.parse(e.request.responseText),
                        i = n.data.template;
                    t.innerHTML = i, this.infobar = new E(document.querySelector(".js-c-infobar")), this.infobar.onAny(this._handleInfobarEvents.bind(this)), this.infobar.init(), this.emit("load", f(this))
                }.bind(this), function() {
                    this.isLoaded = !0, this.emit("load", f(this))
                }.bind(this))
            }
        }
    });
    var O = b,
        A = new O;
    e.a = A
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        this._name = e && void 0 !== e.name ? e.name : "TRACKER" + i.TRACKERS.length, this._id = t, this._clientId = null, this.type = e && void 0 !== e.type ? e.type : "brand";
        var n = {
            allowLinker: !(!e || !e.linker),
            cookieDomain: e && void 0 !== e.cookieDomain ? e.cookieDomain : "auto",
            name: this._name,
            trackingId: this._id,
            transport: "beacon"
        };
        ga("create", n), e && !0 === e.displayFeatures && ga(this._name + ".require", "displayfeatures"), e && void 0 !== e.linker && (ga(this._name + ".require", "linker"), ga(this._name + ".linker:autoLink", e.linker)), e && void 0 !== e.optimizeId && ga(this._name + ".require", e.optimizeId), "brand" === this.type && ga(function() {
            this._clientId = ga.getByName(this._name).get("clientId")
        }.bind(this)), i.TRACKERS.push(this)
    }

    function r(t) {
        var e = {},
            n = "";
        for (n in t) t.hasOwnProperty(n) && (l.test(n) || (e[n] = t[n]));
        return e
    }

    function s(t) {
        var e = Object(o.z)(t),
            n = Object(o.v)(t),
            i = {};
        for (var r in n) n.hasOwnProperty(r) && -1 === c.indexOf(r) && (i[r] = n[r]);
        var s = Object(o.w)(i);
        return "" === s ? e : e + "?" + s
    }
    var o = n(0),
        a = n(28),
        l = /^dimension/,
        c = ["TestAdTargeting", "TestAdKeyValue", "TestAdNetworkId", "TestAdUnit", "TestAdZone", "email", "noads", "exclude_uid", "referral_uid"];
    i.TRACKERS = [], i.ResetCustomDimensions = function() {
        i.TRACKERS.forEach(function(t) {
            t.resetCustomDimensions()
        })
    }, i.SendAll = function(t, e) {
        i.TRACKERS.forEach(function(n) {
            n.send(t, e)
        })
    }, i.SetAll = function(t, e) {
        var n = arguments.length;
        i.TRACKERS.forEach(function(i) {
            2 === n ? i.set(t, e) : i.set(t)
        })
    }, i.prototype = {
        constructor: i,
        resetCustomDimensions: function() {
            var t = {};
            for (var e in i.DIMENSION_BY_INDEX) i.DIMENSION_BY_INDEX.hasOwnProperty(e) && (t[e] = null);
            this.set(t)
        },
        send: function(t, e) {
            ga(function() {
                var n = Object(o.f)({
                        comscore: !0
                    }, e, {
                        hitType: t
                    }),
                    r = n.comscore;
                delete n.comscore, null !== this._clientId && this.set(i.getDimensionByIndex("CLIENT_ID"), this._clientId), ga(this._name + ".send", n), t === i.SEND_HITTYPES.PAGEVIEW && r && "brand" === this.type && a.a.sendBeacon(location.href)
            }.bind(this))
        },
        set: function(t, e) {
            var n = arguments.length;
            ga(function() {
                var i = t;
                2 === n && (i = {}, i[t] = e), i.hasOwnProperty("location") && Object(o.F)(i.location) && (i.location = s(i.location)), "brand" !== this.type && (i = r(i)), ga(this._name + ".set", i)
            }.bind(this))
        }
    }, i.getDimensionByIndex = function(t) {
        if (i.INDEX_BY_DIMENSION.hasOwnProperty(t)) return i.INDEX_BY_DIMENSION[t];
        throw new TypeError(t + " is not a valid index")
    }, i.getIndexByDimension = function(t) {
        if (i.DIMENSION_BY_INDEX.hasOwnProperty(t)) return i.DIMENSION_BY_INDEX[t];
        throw new TypeError(t + " is not a valid dimension")
    }, i.INDEX_BY_DIMENSION = {
        AD_BLOCKER: "dimension43",
        ARTICLE_BREAKS: "dimension24",
        AUTHOR: "dimension7",
        BASE_URL: "dimension3",
        CLIENT_ID: "dimension107",
        CONTENT_SOURCE: "dimension52",
        DISPLAY_DATE: "dimension45",
        GALLERY_LENGTH: "dimension13",
        GALLERY_PHOTO_CREDIT: "dimension11",
        GALLERY_POSITION: "dimension12",
        GALLERY_URL: "dimension33",
        MAGAZINE_CONTENT: "dimension19",
        MAGAZINE_ISSUE: "dimension20",
        MERLIN_ID: "dimension36",
        NAME_OF_DAY: "dimension41",
        PAGE_AGE: "dimension9",
        PAGE_TEMPLATE: "dimension1",
        PLATFORM: "dimension5",
        PRIMARY_TAG: "dimension4",
        PUBLISH_DATE: "dimension10",
        PUBLISH_DATE_HOUR: "dimension42",
        SPONSOR: "dimension47",
        SPONSORED: "dimension46",
        SYNDICATED: "dimension48",
        SYNDICATION_ORIGINAL_LANGUAGE: "dimension51",
        SYNDICATION_ORIGINAL_URL: "dimension50",
        SYNDICATION_SOURCE: "dimension49",
        TAGS: "dimension6",
        UMBRACO_ID: "dimension35",
        UPDATE_DATE: "dimension22",
        WORD_COUNT: "dimension8"
    }, i.DIMENSION_BY_INDEX = {
        dimension1: "PAGE_TEMPLATE",
        dimension3: "BASE_URL",
        dimension4: "PRIMARY_TAG",
        dimension5: "PLATFORM",
        dimension6: "TAGS",
        dimension7: "AUTHOR",
        dimension8: "WORD_COUNT",
        dimension9: "PAGE_AGE",
        dimension10: "PUBLISH_DATE",
        dimension11: "GALLERY_PHOTO_CREDIT",
        dimension12: "GALLERY_POSITION",
        dimension13: "GALLERY_LENGTH",
        dimension19: "MAGAZINE_CONTENT",
        dimension20: "MAGAZINE_ISSUE",
        dimension22: "UPDATE_DATE",
        dimension24: "ARTICLE_BREAKS",
        dimension33: "GALLERY_URL",
        dimension35: "UMBRACO_ID",
        dimension36: "MERLIN_ID",
        dimension41: "NAME_OF_DAY",
        dimension42: "PUBLISH_DATE_HOUR",
        dimension43: "AD_BLOCKER",
        dimension45: "DISPLAY_DATE",
        dimension46: "SPONSORED",
        dimension47: "SPONSOR",
        dimension48: "SYNDICATED",
        dimension49: "SYNDICATION_SOURCE",
        dimension50: "SYNDICATION_ORIGINAL_URL",
        dimension51: "SYNDICATION_ORIGINAL_LANGUAGE",
        dimension52: "CONTENT_SOURCE",
        dimension107: "CLIENT_ID"
    }, i.REFERRERS = {
        EXTERNAL: "External",
        HOMEPAGE: "Homepage",
        INCONTENT_LINK: "In-content link",
        INFINITE_SCROLL: "Infinite scroll",
        MAGAZINE_PAGE: "Magazine page",
        RELATED_READING_LIST: "Related reading list",
        TAG_PAGE: "Tag page",
        "TOP STORIES LIST": "Top stories list"
    }, i.SEND_HITTYPES = {
        EVENT: "event",
        EXCEPTION: "exception",
        ITEM: "item",
        PAGEVIEW: "pageview",
        SCREENVIEW: "screenview",
        SOCIAL: "social",
        TIMING: "timing",
        TRANSACTION: "transaction"
    }, i.TRACKING_BRAND_ID = null, i.TRACKING_CONDE_ID = null, e.a = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return Object(p.k)("pause", t)
    }

    function r(t) {
        return Object(p.k)("unpause", t)
    }

    function s(t) {
        return Object(p.k)("show", t)
    }

    function o(t) {
        return Object(p.k)("hide", t)
    }

    function a(t, e) {
        return Object(p.k)("viewchange", t, {
            view: e
        })
    }

    function l(t) {
        return Object(p.k)("fix", t)
    }

    function c(t) {
        return Object(p.k)("unfix", t)
    }

    function u(t) {
        f.a.call(this, {
            wildcard: !0
        }), this.el = t, this.state = {
            isListView: !0,
            isGridView: !1
        }, this.galleryTitleEl = t.querySelector(".js-c-nav__gallery-title"), this.galleryCountEl = t.querySelector(".js-c-nav__gallery-count"), this.galleryCurrentEl = t.querySelector(".js-c-nav__gallery-current"), this.galleryTotalEl = t.querySelector(".js-c-nav__gallery-total"), this.galleryIconEl = t.querySelector(".js-c-nav__gallery-icon"), this.galleryListIconEl = this.galleryIconEl.querySelector(".js-c-nav__list-icon"), this.galleryGridIconEl = this.galleryIconEl.querySelector(".js-c-nav__grid-icon"), this.setTitle = this.setTitle.bind(this), this.setCurrent = this.setCurrent.bind(this), this.setTotal = this.setTotal.bind(this), this.showListView = this.showListView.bind(this), this.hideListView = this.hideListView.bind(this), this.toggleListView = this.toggleListView.bind(this), this.galleryIconEl.addEventListener("click", this.toggleListView)
    }

    function d(t) {
        if (this.el = t, !this.el) throw new Error("Nav Element Not Found");
        this.state = {
            isFixed: !1,
            isOpen: !1,
            isHidden: !1,
            isSearchOpen: !1,
            isGalleryHidden: !0,
            isPaused: !1
        }, this.currentY = 0, this.previousY = 0, this.scrollDirection = null, this.scrollUpCount = 0, this.scrollDownCount = 0, this.elOffsetTop = t.offsetTop, this.searchEl = t.querySelector(".js-c-nav__search"), this.searchIconEl = t.querySelector(".js-c-nav__search-icon"), this.searchOpenIconEl = this.searchIconEl.querySelector(".js-c-nav__open-icon"), this.searchCloseIconEl = this.searchIconEl.querySelector(".js-c-nav__close-icon"), this.toggleIconEl = t.querySelector(".js-c-nav__toggle-icon"), this.toggleOpenIconEl = this.toggleIconEl.querySelector(".js-c-nav__open-icon"), this.toggleCloseIconEl = this.toggleIconEl.querySelector(".js-c-nav__close-icon"), this.galleryEl = t.querySelector(".js-c-nav__gallery"), this.galleryEl && (this.galleryNav = new b(this.galleryEl)), this.logoEl = t.querySelector(".js-c-nav__logo"), this.fix = this.fix.bind(this), this.unfix = this.unfix.bind(this), this.togglefix = this.togglefix.bind(this), this.open = this.open.bind(this), this.close = this.close.bind(this), this.toggleOpen = this.toggleOpen.bind(this), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.toggleShow = this.toggleShow.bind(this), this.openSearch = this.openSearch.bind(this), this.closeSearch = this.closeSearch.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.showGallery = this.showGallery.bind(this), this.hideGalery = this.hideGallery.bind(this), this.toggleGallery = this.toggleGallery.bind(this), this.onScroll = this.onScroll.bind(this), this.onResize = this.onResize.bind(this), window.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onResize), this.toggleIconEl.addEventListener("click", this.toggleOpen), this.searchIconEl.addEventListener("click", this.toggleSearch)
    }
    var h = n(1),
        f = n.n(h),
        p = n(0);
    u.prototype = Object(p.D)(f.a.prototype, {
        setTitle: function(t) {
            this.galleryTitleEl.innerHTML = t, this.galleryTitleEl.setAttribute("title", t)
        },
        setCurrent: function(t) {
            this.galleryCurrentEl.innerHTML = t
        },
        setTotal: function(t) {
            this.galleryTotalEl.innerHTML = t
        },
        toggleListView: function() {
            this.state.isListView ? this.hideListView() : this.showListView()
        },
        showListView: function() {
            this.state.isListView || (this.galleryListIconEl.classList.remove("is-hidden"), this.galleryGridIconEl.classList.add("is-hidden"), this.galleryCountEl.classList.remove("is-hidden"), this.state.isListView = !0, this.state.isGridView = !1, this.emit("viewchange", a(this, "list")))
        },
        hideListView: function() {
            this.state.isGridView || (this.galleryListIconEl.classList.add("is-hidden"), this.galleryGridIconEl.classList.remove("is-hidden"), this.galleryCountEl.classList.add("is-hidden"), this.state.isListView = !1, this.state.isGridView = !0, this.emit("viewchange", a(this, "grid")))
        }
    });
    var b = u;
    d.prototype = Object(p.D)(f.a.prototype, {
        fix: function() {
            this.state.isFixed || (this.el.classList.add("is-fixed"), this.logoEl.classList.remove("is-hidden"), this.state.isFixed = !0, this.emit("fix", l(this)))
        },
        unfix: function() {
            this.state.isFixed && (this.el.classList.remove("is-fixed"), this.logoEl.classList.add("is-hidden"), this.state.isFixed = !1, this.emit("unfix", c(this)))
        },
        togglefix: function() {
            window.scrollY >= this.elOffsetTop ? this.state.isFixed || this.fix() : this.state.isFixed && this.unfix(), this.isScrolling = !1, this.isResizing = !1
        },
        open: function() {
            this.state.isOpen || (document.body.style.overflow = "hidden", this.el.classList.add("is-open"), this.toggleOpenIconEl.classList.add("is-hidden"), this.toggleCloseIconEl.classList.remove("is-hidden"), this.state.isOpen = !0)
        },
        close: function() {
            this.state.isOpen && (document.body.style.overflow = "", this.el.classList.remove("is-open"), this.toggleOpenIconEl.classList.remove("is-hidden"), this.toggleCloseIconEl.classList.add("is-hidden"), this.state.isOpen = !1)
        },
        toggleOpen: function() {
            this.state.isOpen ? this.close() : this.open()
        },
        show: function() {
            this.state.isHidden && (this.el.classList.remove("is-hidden"), this.state.isHidden = !1, this.emit("show", s(this)))
        },
        hide: function() {
            this.state.isHidden || (this.el.classList.add("is-hidden"), this.state.isHidden = !0, this.emit("hide", o(this)))
        },
        toggleShow: function() {
            this.state.isPaused || ("down" == this.scrollDirection && this.scrollDownCount >= 60 && (this.state.isHidden || this.hide()), "up" == this.scrollDirection && this.scrollUpCount >= 1 && this.state.isHidden && this.show(), this.isScrolling = !1, this.isResizing = !1)
        },
        openSearch: function() {
            this.state.isSearchOpen || (this.searchEl.classList.remove("is-hidden"), this.searchOpenIconEl.classList.add("is-hidden"), this.searchCloseIconEl.classList.remove("is-hidden"), this.state.isSearchOpen = !0)
        },
        closeSearch: function() {
            this.state.isSearchOpen && (this.searchEl.classList.add("is-hidden"), this.searchOpenIconEl.classList.remove("is-hidden"), this.searchCloseIconEl.classList.add("is-hidden"), this.state.isSearchOpen = !1)
        },
        toggleSearch: function() {
            this.state.isSearchOpen ? this.closeSearch() : this.openSearch()
        },
        showGallery: function() {
            this.state.isGalleryHidden && (this.el.classList.add("is-gallery-active"), this.galleryEl.classList.remove("is-hidden"), this.state.isGalleryHidden = !1)
        },
        hideGallery: function() {
            this.state.isGalleryHidden || (this.el.classList.remove("is-gallery-active"), this.galleryEl.classList.add("is-hidden"), this.state.isGalleryHidden = !0)
        },
        toggleGallery: function() {
            this.state.isGalleryHidden ? this.showGallery() : this.hideGallery()
        },
        pause: function() {
            this.state.isPaused || (this.state.isPaused = !0, this.emit("pause", i(this)))
        },
        unpause: function() {
            this.state.isPaused && (this.state.isPaused = !1, this.emit("unpause", r(this)))
        },
        onScroll: function() {
            this.isScrolling || (this.isScrolling = !0, this.previousY = this.currentY, this.currentY = window.scrollY, this.currentY > this.previousY ? (this.scrollDirection = "down", this.scrollUpCount = 0, this.scrollDownCount += 1) : this.currentY < this.previousY && (this.scrollDirection = "up", this.scrollUpCount += 1, this.scrollDownCount = 0), requestAnimationFrame(this.togglefix), requestAnimationFrame(this.toggleShow))
        },
        onResize: function() {
            this.isResizing || (this.isResizing = !0, this.unfix(), this.elOffsetTop = this.el.offsetTop, this.show(), requestAnimationFrame(this.togglefix), requestAnimationFrame(this.toggleShow))
        }
    });
    var g, m = d;
    document.querySelector(".js-c-nav") && (g = new m(document.querySelector(".js-c-nav")));
    e.a = g
}, function(t, e, n) {
    "use strict";
    var i = {
        abbr: "vg",
        name: "Vogue",
        promo_name: "vogue"
    };
    e.a = i
}, , function(t, e, n) {
    "use strict";

    function i(t) {
        this.adEls = d(t.querySelectorAll(m)), this._adListeners = new Array(this.adEls.length), this.ads = new Array(this.adEls.length), this.el = t, this.totalAdsFound = 0
    }

    function r() {
        v || (v = !0, b.b.on("register", c))
    }

    function s(t, e) {
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }

    function o(t) {
        return t.querySelectorAll(m).length > 0
    }

    function a(t) {
        return t.hasAttribute("data-card-list-initialised") && "true" === t.getAttribute("data-card-list-initialised")
    }

    function l(t) {
        var e = s(this.ads, t.target),
            n = t.target,
            i = this.adEls[e];
        if ("render" === t.type) {
            var r = this.el.querySelectorAll(g);
            r = r[r.length - 1], r.parentNode.removeChild(r), Object(f.N)(i, "is-hidden")
        } else {
            if ("stop" !== t.type) throw new TypeError("Incorrect event type", t);
            i.parentNode.removeChild(i)
        }
        n.off("render", this._adListeners[e]), n.off("stop", this._adListeners[e]), this.ads.splice(e, 1), this.adEls.splice(e, 1), this._adListeners.splice(e, 1), 0 === --this.totalAdsFound && this.destroy()
    }

    function c(t) {
        for (var e = -1, n = _.length; ++e < n;)
            if (_[e].totalAdsFound !== _[e].ads.length && _[e].el.contains(t.ad.el)) {
                _[e].listenToAd(t.ad);
                break
            }
    }

    function u(t) {
        return t.getAttribute("data-card-list-initialised", "true"), t
    }

    function d(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function h() {
        v = !1, b.b.off("register", c)
    }
    var f = n(0),
        p = n(19),
        b = n(2),
        g = ".js-c-card-section__card-listitem",
        m = ".js-c-card-section__card-listitem-ad",
        v = !1,
        _ = [];
    e.a = {
        init: function() {
            p.a.init();
            for (var t = document.querySelectorAll(".js-c-card-section__card-list"), e = -1, n = t.length; ++e < n;) a(t[e]) || (o(t[e]) && _.push(new i(t[e])), u(t[e]));
            r()
        }
    }, i.prototype = {
        constructor: i,
        destroy: function() {
            this.adEls = null, this._adListeners = null, this.ads = null, this.el = null;
            var t = _.indexOf(this);
            _.splice(t, 1), 0 === _.length && h()
        },
        listenToAd: function(t) {
            for (var e = this.adEls.length; e-- && !this.adEls[e].contains(t.el);); - 1 !== e && (this.ads[e] = t, this._adListeners[e] = l.bind(this), t.once("render", this._adListeners[e]), t.once("stop", this._adListeners[e]), this.totalAdsFound++)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(11);
    e.a = {
        init: function() {
            i.a.init()
        }
    }
}, , function(t, e) {
    ! function(e, n) {
        var i = function(t, e) {
            "use strict";
            if (e.getElementsByClassName) {
                var n, i, r = e.documentElement,
                    s = t.Date,
                    o = t.HTMLPictureElement,
                    a = t.addEventListener,
                    l = t.setTimeout,
                    c = t.requestAnimationFrame || l,
                    u = t.requestIdleCallback,
                    d = /^picture$/i,
                    h = ["load", "error", "lazyincluded", "_lazyloaded"],
                    f = {},
                    p = Array.prototype.forEach,
                    b = function(t, e) {
                        return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t.getAttribute("class") || "") && f[e]
                    },
                    g = function(t, e) {
                        b(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
                    },
                    m = function(t, e) {
                        var n;
                        (n = b(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
                    },
                    v = function(t, e, n) {
                        var i = n ? "addEventListener" : "removeEventListener";
                        n && v(t, e), h.forEach(function(n) {
                            t[i](n, e)
                        })
                    },
                    _ = function(t, i, r, s, o) {
                        var a = e.createEvent("Event");
                        return r || (r = {}), r.instance = n, a.initEvent(i, !s, !o), a.detail = r, t.dispatchEvent(a), a
                    },
                    y = function(e, n) {
                        var r;
                        !o && (r = t.picturefill || i.pf) ? (n && n.src && !e.getAttribute("srcset") && e.setAttribute("srcset", n.src), r({
                            reevaluate: !0,
                            elements: [e]
                        })) : n && n.src && (e.src = n.src)
                    },
                    w = function(t, e) {
                        return (getComputedStyle(t, null) || {})[e]
                    },
                    E = function(t, e, n) {
                        for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode;
                        return n
                    },
                    O = function() {
                        var t, n, i = [],
                            r = [],
                            s = i,
                            o = function() {
                                var e = s;
                                for (s = i.length ? r : i, t = !0, n = !1; e.length;) e.shift()();
                                t = !1
                            },
                            a = function(i, r) {
                                t && !r ? i.apply(this, arguments) : (s.push(i), n || (n = !0, (e.hidden ? l : c)(o)))
                            };
                        return a._lsFlush = o, a
                    }(),
                    A = function(t, e) {
                        return e ? function() {
                            O(t)
                        } : function() {
                            var e = this,
                                n = arguments;
                            O(function() {
                                t.apply(e, n)
                            })
                        }
                    },
                    S = function(t) {
                        var e, n = 0,
                            r = i.throttleDelay,
                            o = i.ricTimeout,
                            a = function() {
                                e = !1, n = s.now(), t()
                            },
                            c = u && o > 49 ? function() {
                                u(a, {
                                    timeout: o
                                }), o !== i.ricTimeout && (o = i.ricTimeout)
                            } : A(function() {
                                l(a)
                            }, !0);
                        return function(t) {
                            var i;
                            (t = !0 === t) && (o = 33), e || (e = !0, i = r - (s.now() - n), i < 0 && (i = 0), t || i < 9 ? c() : l(c, i))
                        }
                    },
                    T = function(t) {
                        var e, n, i = function() {
                                e = null, t()
                            },
                            r = function() {
                                var t = s.now() - n;
                                t < 99 ? l(r, 99 - t) : (u || i)(i)
                            };
                        return function() {
                            n = s.now(), e || (e = l(r, 99))
                        }
                    };
                ! function() {
                    var e, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    i = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (e in n) e in i || (i[e] = n[e]);
                    t.lazySizesConfig = i, l(function() {
                        i.init && I()
                    })
                }();
                var L = function() {
                        var o, c, u, h, f, E, L, I, C, N, k, x, z = /^img$/i,
                            R = /^iframe$/i,
                            D = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                            P = 0,
                            M = 0,
                            B = -1,
                            H = function(t) {
                                M--, t && t.target && v(t.target, H), (!t || M < 0 || !t.target) && (M = 0)
                            },
                            U = function(t) {
                                return null == x && (x = "hidden" == w(e.body, "visibility")), x || "hidden" != w(t.parentNode, "visibility") && "hidden" != w(t, "visibility")
                            },
                            G = function(t, n) {
                                var i, s = t,
                                    o = U(t);
                                for (I -= n, k += n, C -= n, N += n; o && (s = s.offsetParent) && s != e.body && s != r;)(o = (w(s, "opacity") || 1) > 0) && "visible" != w(s, "overflow") && (i = s.getBoundingClientRect(), o = N > i.left && C < i.right && k > i.top - 1 && I < i.bottom + 1);
                                return o
                            },
                            q = function() {
                                var t, s, a, l, u, d, f, p, b, g, m, v, _ = n.elements;
                                if ((h = i.loadMode) && M < 8 && (t = _.length)) {
                                    for (s = 0, B++, g = !i.expand || i.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : i.expand, m = g * i.expFactor, v = i.hFac, x = null, P < m && M < 1 && B > 2 && h > 2 && !e.hidden ? (P = m, B = 0) : P = h > 1 && B > 1 && M < 6 ? g : 0; s < t; s++)
                                        if (_[s] && !_[s]._lazyRace)
                                            if (D)
                                                if ((p = _[s].getAttribute("data-expand")) && (d = 1 * p) || (d = P), b !== d && (E = innerWidth + d * v, L = innerHeight + d, f = -1 * d, b = d), a = _[s].getBoundingClientRect(), (k = a.bottom) >= f && (I = a.top) <= L && (N = a.right) >= f * v && (C = a.left) <= E && (k || N || C || I) && (i.loadHidden || U(_[s])) && (c && M < 3 && !p && (h < 3 || B < 4) || G(_[s], d))) {
                                                    if (Z(_[s]), u = !0, M > 9) break
                                                } else !u && c && !l && M < 4 && B < 4 && h > 2 && (o[0] || i.preloadAfterLoad) && (o[0] || !p && (k || N || C || I || "auto" != _[s].getAttribute(i.sizesAttr))) && (l = o[0] || _[s]);
                                    else Z(_[s]);
                                    l && !u && Z(l)
                                }
                            },
                            F = S(q),
                            Y = function(t) {
                                g(t.target, i.loadedClass), m(t.target, i.loadingClass), v(t.target, K), _(t.target, "lazyloaded")
                            },
                            V = A(Y),
                            K = function(t) {
                                V({
                                    target: t.target
                                })
                            },
                            W = function(t, e) {
                                try {
                                    t.contentWindow.location.replace(e)
                                } catch (n) {
                                    t.src = e
                                }
                            },
                            J = function(t) {
                                var e, n = t.getAttribute(i.srcsetAttr);
                                (e = i.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n)
                            },
                            X = A(function(t, e, n, r, s) {
                                var o, a, c, h, f, b;
                                (f = _(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? g(t, i.autosizesClass) : t.setAttribute("sizes", r)), a = t.getAttribute(i.srcsetAttr), o = t.getAttribute(i.srcAttr), s && (c = t.parentNode, h = c && d.test(c.nodeName || "")), b = e.firesLoad || "src" in t && (a || o || h), f = {
                                    target: t
                                }, b && (v(t, H, !0), clearTimeout(u), u = l(H, 2500), g(t, i.loadingClass), v(t, K, !0)), h && p.call(c.getElementsByTagName("source"), J), a ? t.setAttribute("srcset", a) : o && !h && (R.test(t.nodeName) ? W(t, o) : t.src = o), s && (a || h) && y(t, {
                                    src: o
                                })), t._lazyRace && delete t._lazyRace, m(t, i.lazyClass), O(function() {
                                    (!b || t.complete && t.naturalWidth > 1) && (b ? H(f) : M--, Y(f))
                                }, !0)
                            }),
                            Z = function(t) {
                                var e, n = z.test(t.nodeName),
                                    r = n && (t.getAttribute(i.sizesAttr) || t.getAttribute("sizes")),
                                    s = "auto" == r;
                                (!s && c || !n || !t.getAttribute("src") && !t.srcset || t.complete || b(t, i.errorClass) || !b(t, i.lazyClass)) && (e = _(t, "lazyunveilread").detail, s && j.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, M++, X(t, e, s, r, n))
                            },
                            $ = function() {
                                if (!c) {
                                    if (s.now() - f < 999) return void l($, 999);
                                    var t = T(function() {
                                        i.loadMode = 3, F()
                                    });
                                    c = !0, i.loadMode = 3, F(), a("scroll", function() {
                                        3 == i.loadMode && (i.loadMode = 2), t()
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                f = s.now(), n.elements = e.getElementsByClassName(i.lazyClass), o = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass), a("scroll", F, !0), a("resize", F, !0), t.MutationObserver ? new MutationObserver(F).observe(r, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (r.addEventListener("DOMNodeInserted", F, !0), r.addEventListener("DOMAttrModified", F, !0), setInterval(F, 999)), a("hashchange", F, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                    e.addEventListener(t, F, !0)
                                }), /d$|^c/.test(e.readyState) ? $() : (a("load", $), e.addEventListener("DOMContentLoaded", F), l($, 2e4)), n.elements.length ? (q(), O._lsFlush()) : F()
                            },
                            checkElems: F,
                            unveil: Z
                        }
                    }(),
                    j = function() {
                        var t, n = A(function(t, e, n, i) {
                                var r, s, o;
                                if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), d.test(e.nodeName || ""))
                                    for (r = e.getElementsByTagName("source"), s = 0, o = r.length; s < o; s++) r[s].setAttribute("sizes", i);
                                n.detail.dataAttr || y(t, n.detail)
                            }),
                            r = function(t, e, i) {
                                var r, s = t.parentNode;
                                s && (i = E(t, s, i), r = _(t, "lazybeforesizes", {
                                    width: i,
                                    dataAttr: !!e
                                }), r.defaultPrevented || (i = r.detail.width) && i !== t._lazysizesWidth && n(t, s, r, i))
                            },
                            s = function() {
                                var e, n = t.length;
                                if (n)
                                    for (e = 0; e < n; e++) r(t[e])
                            },
                            o = T(s);
                        return {
                            _: function() {
                                t = e.getElementsByClassName(i.autosizesClass), a("resize", o)
                            },
                            checkElems: o,
                            updateElem: r
                        }
                    }(),
                    I = function() {
                        I.i || (I.i = !0, j._(), L._())
                    };
                return n = {
                    cfg: i,
                    autoSizer: j,
                    loader: L,
                    init: I,
                    uP: y,
                    aC: g,
                    rC: m,
                    hC: b,
                    fire: _,
                    gW: E,
                    rAF: O
                }
            }
        }(e, e.document);
        e.lazySizes = i, "object" == typeof t && t.exports && (t.exports = i)
    }(window)
}, function(t, e, n) {
    var i = n(35);
    i.Template = n(36).Template, i.template = i.Template, t.exports = i
}, , , , , function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function s(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }

    function o() {
        b && f && (b = !1, f.length ? p = f.concat(p) : g = -1, p.length && a())
    }

    function a() {
        if (!b) {
            var t = r(o);
            b = !0;
            for (var e = p.length; e;) {
                for (f = p, p = []; ++g < e;) f && f[g].run();
                g = -1, e = p.length
            }
            f = null, b = !1, s(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var u, d, h = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var f, p = [],
        b = !1,
        g = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || b || r(a)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(t) {
        return []
    }, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function i() {
        s.a.call(this, {
            wildcard: !0
        }), this.COMSCORE_COOKIE = "cnd_comscore_consent", this.COMSCORE_PUBLISHED_ID = 15335235, this._loadingScript = !1, this.consent = null
    }
    var r = n(1),
        s = n.n(r),
        o = n(0),
        a = n(4);
    i.prototype = Object(o.D)(s.a.prototype, {
        constructor: i,
        getConsent: function() {
            var t = Object(o.p)(this.COMSCORE_COOKIE);
            return null !== t && t
        },
        setConsent: function(t) {
            Object(o.Q)(this.COMSCORE_COOKIE, t), this.consent = t
        },
        init: function() {
            var t = this.getConsent();
            return !1 !== t ? void(this.consent = parseInt(t, 10)) : a.b ? void 0 : void this.setConsent(0)
        },
        loadComscoreScript: function() {
            if (!this._loadingScript) {
                this._loadingScript = !0;
                var t = null;
                t = "https:" === document.location.protocol ? "https://sb.scorecardresearch.com/beacon.js" : "http://b.scorecardresearch.com/beacon.js", Object(o.H)(t).then(function() {}, function() {
                    console.warn("Failed to load Comscore script!"), this._loadingScript = !1
                }.bind(this))
            }
        },
        sendBeacon: function(t) {
            null === this.consent && console.warn("User has not consented yet. Beacon will send value missing `cs_ucfr`.");
            var e = {
                c1: "2",
                c2: this.COMSCORE_PUBLISHED_ID,
                cs_ucfr: this.consent
            };
            t && (e.c4 = t), "COMSCORE" in window && null !== window.COMSCORE ? COMSCORE.beacon(e) : (window._comscore = window._comscore || [], window._comscore.push(e), this.loadComscoreScript())
        }
    }), e.a = new i
}, function(t, e, n) {
    "use strict";

    function i(t, e, n) {
        var i = {
            configHash: t,
            converted: !!e,
            viewCount: n,
            viewExceeded: n >= st
        };
        Object(Z.Q)(it, JSON.stringify(i), rt)
    }

    function r() {
        var t = Object(Z.p)(it);
        if (t) try {
            t = JSON.parse(t)
        } catch (e) {
            console.error("Error parsing config!"), console.error(e), t = {
                configHash: null,
                converted: !1,
                viewCount: 0,
                viewExceeded: !1
            }
        } else t = {
            configHash: null,
            converted: !1,
            viewCount: 0,
            viewExceeded: !1
        };
        return t
    }

    function s(t) {
        return Object(Z.k)("disable", t, {
            bubbles: !0
        })
    }

    function o(t) {
        return Object(Z.k)("enable", t, {
            bubbles: !0
        })
    }

    function a(t) {
        return Object(Z.k)("show", t, {
            bubbles: !0
        })
    }

    function l(t) {
        return Object(Z.k)("hide", t, {
            bubbles: !0
        })
    }

    function c(t) {
        return Object(Z.k)("fix", t, {
            bubbles: !0
        })
    }

    function u(t) {
        return Object(Z.k)("unfix", t, {
            bubbles: !0
        })
    }

    function d(t) {
        return Object(Z.k)("load", t, {
            bubbles: !0
        })
    }

    function h(t) {
        return Object(Z.k)("signup", t, {
            bubbles: !0
        })
    }

    function f(t) {
        if (nt.a.call(this), !t) throw new Error("Subscribe Bar Element Not Found");
        this.el = t, this.currentConfigHash = null, this.parseConfig(), this.formEl = t.querySelector(".js-c-subscribe-bar__form"), this.emailEl = t.querySelector(".js-c-subscribe-bar__form-text"), this.contentEl = t.querySelector(".js-c-subscribe-bar__content"), this.statusEl = t.querySelector(".js-c-subscribe-bar__status"), this.spinnerEl = t.querySelector(".js-c-subscribe-bar__spinner"), this.successEl = t.querySelector(".js-c-subscribe-bar__success-message"), this.failureEl = t.querySelector(".js-c-subscribe-bar__failure-message"), this.closeButtonEls = t.querySelectorAll(".js-c-subscribe-bar__close-button"), this.state = {
            isHidden: !1,
            isFixed: !1,
            isEnabled: !1
        }, this._submitListener = null, this._disableListener = null, this._blurListener = null, this.bindListeners(), Q.a && (Q.a.on("show", this.show.bind(this)), Q.a.on("hide", this.hide.bind(this)), Q.a.on("fix", this.fix.bind(this)), Q.a.on("unfix", this.unfix.bind(this)))
    }

    function p() {
        nt.a.call(this, {
            wildcard: !0
        }), this.isLoaded = !1, this.subscribeBar = null
    }

    function b(t) {
        return JSON.stringify(t)
    }

    function g(t, e) {
        if (!t) return e;
        var n = null;
        try {
            n = JSON.parse(t)
        } catch (t) {
            n = e
        }
        return void 0 !== n ? n : e
    }

    function m() {
        nt.a.call(this, {
            wildcard: !0
        }), this.ONETRUST_COOKIE = "cnd_one_trust_consent", this._loadingScript = !1, this.consent = null
    }

    function v() {
        nt.a.call(this, {
            wildcard: !0
        }), this.el = document.querySelector("." + _t), null !== this.el && (this.emit("visibilityChange", y(this, "visible")), w(this))
    }

    function _(t, e) {
        return Object(Z.k)(e, t, {
            country: t.innerText,
            url: t.getAttribute("href")
        })
    }

    function y(t, e) {
        return Object(Z.k)("visibilityChange", t, {
            visibility: e
        })
    }

    function w(t) {
        var e = document.getElementById(wt);
        e._hookChange = E.bind(t), Object(Z.c)(e, "change", e._hookChange), T(t.el.querySelectorAll("." + yt)).forEach(function(e) {
            e._hookClick = O.bind(t), e._hookMouseover = A.bind(t), Object(Z.c)(e, "click", e._hookClick), Object(Z.b)(e, "mouseover", e._hookMouseover)
        })
    }

    function E() {
        this.emit("visibilityChange", y(this, "hidden")), this.destroy()
    }

    function O(t) {
        this.emit("linkClick", _(t.target, "linkClick")), t.target._hookClick = null
    }

    function A(t) {
        this.emit("linkHover", _(t.target, "linkHover"))
    }

    function S(t) {
        var e = document.getElementById(wt);
        Object(Z.P)(e, "change", e._hookChange), e._hookChange = null, T(t.el.querySelectorAll("." + yt)).forEach(function(t) {
            Object(Z.P)(t, "click", t._hookClick), Object(Z.P)(t, "mouseover", t._hookMouseover), t._hookClick = null, t._hookMouseover = null
        })
    }

    function T(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function L(t) {
        return t.replace(/^(https|http)?(:\/\/)?(www\.)?/i, "").split(/[\/?#]/)[0]
    }

    function j(t) {
        return L(t) === L(location.href)
    }

    function I(t) {
        return Object(Z.B)(t, "bb-button")
    }

    function C(t, e) {
        return !("click" !== e.type || "_blank" === t.getAttribute("target") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.which > 1)
    }

    function N(t) {
        var e = t.getAttribute("href"),
            n = I(t),
            i = j(e);
        return {
            eventCategory: "In-content Links",
            eventAction: (n ? "Button" : "Link") + ": " + (i ? "Internal Click" : "Outbound Click"),
            eventLabel: e + " | " + t.innerText
        }
    }

    function k() {
        if (null !== Lt) return Lt;
        var t = pt.a.TRACKERS.filter(function(t) {
            return "brand" === t.type
        })[0];
        return t ? Lt = t : (console.warn("No brand tracker found. Removing link events."), void R())
    }

    function x(t) {
        var e = k();
        if (e) {
            var n = this,
                i = N(n),
                r = C(n, t);
            !At && r && (t.defaultPrevented || t.preventDefault(), i.hitCallback = function() {
                location.href = n.getAttribute("href")
            }), e.send(pt.a.SEND_HITTYPES.EVENT, i)
        }
    }

    function z() {
        null === Tt && (Tt = Object(Z.m)(".bb-button, .bb-a", x), St.forEach(function(t) {
            Object(Z.b)(document, t, Tt)
        }))
    }

    function R() {
        null !== Tt && (St.forEach(function(t) {
            Object(Z.P)(document, t, Tt)
        }), Tt = null)
    }

    function D() {
        null !== tt.a.infobar && tt.a.infobar.addListener("linkClick", function(t) {
            var e = null,
                n = null;
            "message" == t.linkType && (e = "Message Click", n = t.target.href + " | " + t.target.innerText), "button" == t.linkType && (e = "Button Click", n = t.target.href + " | " + t.target.innerText), pt.a.SendAll(pt.a.SEND_HITTYPES.EVENT, {
                eventCategory: "Info Bar",
                eventAction: e,
                eventLabel: n
            })
        })
    }

    function P() {
        tt.a.isLoaded ? D() : tt.a.once("load", D)
    }

    function M(t) {
        var e = t.delegateTarget,
            n = e.href + " | " + e.innerText;
        pt.a.SendAll(pt.a.SEND_HITTYPES.EVENT, {
            eventCategory: "Social",
            eventAction: "Follow",
            eventLabel: n
        })
    }

    function B() {
        Object(Z.b)(document, "click", Object(Z.m)(".c-nav__share-link", M))
    }

    function H() {
        pt.a.SendAll(pt.a.SEND_HITTYPES.EVENT, {
            eventCategory: "slice_newsletter",
            eventAction: "Submit",
            eventLabel: "Continue"
        })
    }

    function U() {
        document.querySelector(".c-newsletter__form") && Object(Z.b)(document, "submit", Object(Z.m)(".c-newsletter__form", H))
    }

    function G() {
        null !== ct.subscribeBar && ct.subscribeBar.addListener("signup", function() {
            pt.a.SendAll(pt.a.SEND_HITTYPES.EVENT, {
                eventCategory: "Subscribe bar",
                eventAction: "Sign up",
                eventLabel: window.location.href
            })
        })
    }

    function q() {
        ct.isLoaded ? G() : ct.once("load", G)
    }

    function F() {
        z(), B(), U()
    }

    function Y() {
        null !== Et.el && (V("Shown", null), Et.on("visibilityChange", function() {
            V("Closed", null)
        }), Et.on("linkClick", function(t) {
            V("Link Click", t.country)
        }), Et.on("linkHover", function(t) {
            V("Link Hover", t.country)
        }))
    }

    function V(t, e) {
        pt.a.SendAll(pt.a.SEND_HITTYPES.EVENT, {
            eventAction: t,
            eventCategory: "CountryBanner",
            eventLabel: e,
            transport: "beacon"
        })
    }

    function K() {
        var t = document.getElementsByTagName("html")[0];
        "MSIE" === $.a.name && $.a.version >= 10 && Object(Z.a)(t, "is-ie" + $.a.version);
        var e = null,
            n = $.a.name;
        n = n.toLowerCase(), -1 !== navigator.appVersion.indexOf("Win") ? e = "windows" : -1 !== navigator.appVersion.indexOf("Mac") ? e = "macos" : -1 !== navigator.appVersion.indexOf("X11") ? e = "unix" : -1 !== navigator.appVersion.indexOf("Linux") && (e = "linux"), Object(Z.a)(t, "is-" + n), null !== e && Object(Z.a)(t, "is-" + e), $.d && Object(Z.a)(t, "has-touch")
    }

    function W() {
        tt.a.once("enable", function() {
            Q.a.state.isFixed && tt.a.infobar.fix()
        }), tt.a.once("load", function() {
            tt.a.infobar && 0 != tt.a.infobar.state.isEnabled || (ct.lazyload(), ct.once("enable", function() {
                Q.a.state.isFixed && ct.subscribeBar.fix()
            }))
        }), tt.a.lazyload()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var J = n(30),
        X = n.n(J),
        Z = n(0),
        $ = n(4),
        Q = n(15),
        tt = n(13),
        et = n(1),
        nt = n.n(et),
        it = "cnd_subscribe_bar_hash",
        rt = 1,
        st = 5;
    f.prototype = Object(Z.D)(nt.a.prototype, {
        bindListeners: function() {
            this._submitListener = this.onSubmit.bind(this), Object(Z.b)(this.formEl, "submit", this._submitListener), this._disableListener = this.disable.bind(this);
            for (var t = 0; t < this.closeButtonEls.length; t++) Object(Z.b)(this.closeButtonEls[t], "click", this._disableListener);
            this._blurListener = this.onBlur.bind(this), Object(Z.b)(this.emailEl, "blur", this._blurListener)
        },
        unbindListeners: function() {
            Object(Z.P)(this.formEl, "submit", this._submitListener), this._submitListener = null;
            for (var t = 0; t < this.closeButtonEls.length; t++) Object(Z.P)(this.closeButtonEls[t], "click", this._disableListener);
            this._disableListener = null, Object(Z.P)(this.emailEl, "blur", this._blurListener), this._blurListener = null
        },
        parseConfig: function() {
            var t = this.el.querySelector(".js-c-subscribe-bar-config");
            if (!t) throw new Error("Subscribe Bar Config Not Found.");
            try {
                this.config = JSON.parse(t.innerHTML)
            } catch (t) {
                throw console.error("Error parsing subscribe bar config!"), t
            }
            this.currentConfigHash = this.config.hash
        },
        init: function() {
            var t = r();
            t.converted ? this.disable() : t.configHash !== this.currentConfigHash ? (i(this.currentConfigHash, !1, 1), this.enable()) : t.viewExceeded ? this.disable() : (i(this.currentConfigHash, !1, t.viewCount + 1), this.enable())
        },
        show: function() {
            this.state.isHidden && (Object(Z.N)(this.el, "is-hidden"), this.state.isHidden = !1, this.emit("show", a(this)))
        },
        hide: function() {
            this.state.isHidden || (Object(Z.a)(this.el, "is-hidden"), this.state.isHidden = !0, this.emit("hide", l(this)))
        },
        fix: function() {
            this.state.isFixed || (Object(Z.a)(this.el, "is-fixed"), this.state.isFixed = !0, this.emit("fix", c(this)))
        },
        unfix: function() {
            this.state.isFixed && (Object(Z.N)(this.el, "is-fixed"), this.state.isFixed = !1, this.emit("unfix", u(this)))
        },
        enable: function() {
            this.state.isEnabled || (Object(Z.N)(this.el, "is-disabled"), this.state.isEnabled = !0, this.emit("enable", o(this)))
        },
        disable: function() {
            if (this.state.isEnabled) {
                Object(Z.a)(this.el, "is-disabled"), this.state.isEnabled = !1;
                var t = r();
                i(t.configHash, t.converted, st), this.emit("disable", s(this))
            }
        },
        onSubmit: function(t) {
            t.preventDefault();
            var e = new FormData(t.target);
            Object(Z.a)(this.contentEl, "is-hidden"), Object(Z.N)(this.statusEl, "is-hidden");
            var n = new XMLHttpRequest;
            n.open("POST", "/xhr/newsletters", !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
                if (n.readyState == XMLHttpRequest.DONE)
                    if (Object(Z.a)(this.spinnerEl, "is-hidden"), 200 === n.status) {
                        Object(Z.N)(this.successEl, "is-hidden");
                        var t = r();
                        i(t.configHash, !0, t.viewCount), this.emit("signup", h(this))
                    } else Object(Z.N)(this.failureEl, "is-hidden")
            }.bind(this), n.send("email=" + e.get("email") + "&newsletter=" + e.get("newsletter"))
        },
        onBlur: function(t) {
            t.target.checkValidity() ? Object(Z.N)(t.target, "has-error") : Object(Z.a)(t.target, "has-error")
        }
    });
    var ot = f;
    p.prototype = Object(Z.D)(nt.a.prototype, {
        _handleSubscribeBarEvents: function(t, e) {
            e.bubbles && this.emit(t, e)
        },
        lazyload: function() {
            if (!this.isLoaded) {
                var t = document.querySelector(".js-c-subscribe-bar-lazy-load");
                if (!t) return this.isLoaded = !0, void this.emit("load", d(this));
                var e = r();
                if (e.viewExceeded || e.converted) return this.isLoaded = !0, void this.emit("load", d(this));
                Object(Z.e)({
                    url: "/xhr/subscribe-bar"
                }).then(function(e) {
                    this.isLoaded = !0;
                    var n = JSON.parse(e.request.responseText),
                        i = n.data.template;
                    t.innerHTML = i, this.subscribeBar = new ot(document.querySelector(".js-c-subscribe-bar")), this.subscribeBar.onAny(this._handleSubscribeBarEvents.bind(this)), this.subscribeBar.init(), this.emit("load", d(this))
                }.bind(this), function() {
                    this.isLoaded = !0, this.emit("load", d(this))
                }.bind(this))
            }
        }
    });
    var at = p,
        lt = new at,
        ct = lt,
        ut = n(11),
        dt = {},
        ht = {
            clear: function() {
                dt = {}
            },
            forEach: function(t) {
                for (var e in dt) dt.hasOwnProperty(e) && t(e, this.get(e))
            },
            get: function(t, e) {
                return g(dt[t], e)
            },
            getAll: function() {
                var t = {};
                for (var e in dt) dt.hasOwnProperty(e) && (t[e] = g(dt[e]));
                return t
            },
            remove: function(t) {
                dt[t] = null, delete dt[t]
            },
            set: function(t, e) {
                return void 0 === e ? this.remove(t) : (dt[t] = b(e), e)
            }
        },
        ft = ht,
        pt = n(14),
        bt = n(28);
    m.prototype = Object(Z.D)(nt.a.prototype, {
        constructor: m,
        getConsent: function() {
            var t = Object(Z.p)(this.ONETRUST_COOKIE);
            return null !== t && t
        },
        setConsent: function(t) {
            Object(Z.Q)(this.ONETRUST_COOKIE, t), this.consent = t
        },
        init: function(t) {
            if (!t.hasOwnProperty("script_url")) throw new Error("Missing script_url value");
            window.OptanonWrapper = function() {
                if (window.OptanonActiveGroups) {
                    /,4,/.test(window.OptanonActiveGroups) ? this.setConsent(1) : this.setConsent(0)
                }
            }.bind(this), this.loadOneTrustScript(t.script_url);
            var e = this.getConsent();
            return !1 !== e ? void(this.consent = parseInt(e, 10)) : $.b ? void 0 : void this.setConsent(0)
        },
        loadOneTrustScript: function(t) {
            this._loadingScript || (this._loadingScript = !0, Object(Z.H)(t).then(function() {}, function() {
                console.warn("Failed to load OneTrust script!"), this._loadingScript = !1
            }.bind(this)))
        }
    });
    var gt = new m,
        mt = n(18),
        vt = n(2),
        _t = "c-int-redirect",
        yt = "c-int-redirect__listitem a",
        wt = "chkIntRedirectDisplay";
    v.prototype = Object(Z.D)(nt.a.prototype, {
        constructor: v,
        destroy: function() {
            S(this), Object(Z.O)(this.el), this.el = null, this.removeAllListeners()
        }
    });
    var Et = new v,
        Ot = n(3),
        At = !!navigator.sendBeacon,
        St = ["click", "auxclick"],
        Tt = null,
        Lt = null,
        jt = {
            OPEN_X_URL: null,
            RUBICON_URL: null,
            TEAD_URL: "//cdn.teads.tv/js/all-v2.js",
            PREBID_URL: null,
            PREBID_SETTINGS: {}
        };
    ! function(t) {
        var e = jt;
        void 0 !== t && (e = Object(Z.f)({}, jt, t)), Object(Ot.f)({
            AdDebugger: vt.a,
            AdManager: vt.b,
            GATracker: pt.a,
            MainNavigation: Q.a,
            Store: ft,
            OneTrustManager: gt
        }), K(), X.a.polyfill(), vt.c.setAdUrls({
            OPEN_X_URL: e.OPEN_X_URL,
            RUBICON_URL: e.RUBICON_URL,
            TEAD_URL: e.TEAD_URL,
            PREBID_URL: e.PREBID_URL,
            PREBID_SETTINGS: e.PREBID_SETTINGS
        }), W(), ut.a.init(), mt.a.init(), Y(), Object(Ot.b)(), F(), P(), q(), bt.a.init(), parseInt(gt.getConsent()) ? bt.a.setConsent(1) : bt.a.setConsent(0), bt.a.sendBeacon()
    }({
        RUBICON_URL: "//ads.rubiconproject.com/header/11644.js"
    })
}, function(t, e, n) {
    (function(e, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.6+9869a4bc
         */
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function t(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }

            function i(t) {
                return "function" == typeof t
            }

            function r(t) {
                U = t
            }

            function s(t) {
                G = t
            }

            function o() {
                return void 0 !== H ? function() {
                    H(l)
                } : a()
            }

            function a() {
                var t = setTimeout;
                return function() {
                    return t(l, 1)
                }
            }

            function l() {
                for (var t = 0; t < B; t += 2) {
                    (0, W[t])(W[t + 1]), W[t] = void 0, W[t + 1] = void 0
                }
                B = 0
            }

            function c(t, e) {
                var n = this,
                    i = new this.constructor(d);
                void 0 === i[X] && I(i);
                var r = n._state;
                if (r) {
                    var s = arguments[r - 1];
                    G(function() {
                        return T(r, i, s, n._result)
                    })
                } else O(n, i, t, e);
                return i
            }

            function u(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(d);
                return _(n, t), n
            }

            function d() {}

            function h() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function f() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function p(t) {
                try {
                    return t.then
                } catch (t) {
                    return tt.error = t, tt
                }
            }

            function b(t, e, n, i) {
                try {
                    t.call(e, n, i)
                } catch (t) {
                    return t
                }
            }

            function g(t, e, n) {
                G(function(t) {
                    var i = !1,
                        r = b(n, e, function(n) {
                            i || (i = !0, e !== n ? _(t, n) : w(t, n))
                        }, function(e) {
                            i || (i = !0, E(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !i && r && (i = !0, E(t, r))
                }, t)
            }

            function m(t, e) {
                e._state === $ ? w(t, e._result) : e._state === Q ? E(t, e._result) : O(e, void 0, function(e) {
                    return _(t, e)
                }, function(e) {
                    return E(t, e)
                })
            }

            function v(t, e, n) {
                e.constructor === t.constructor && n === c && e.constructor.resolve === u ? m(t, e) : n === tt ? (E(t, tt.error), tt.error = null) : void 0 === n ? w(t, e) : i(n) ? g(t, e, n) : w(t, e)
            }

            function _(e, n) {
                e === n ? E(e, h()) : t(n) ? v(e, n, p(n)) : w(e, n)
            }

            function y(t) {
                t._onerror && t._onerror(t._result), A(t)
            }

            function w(t, e) {
                t._state === Z && (t._result = e, t._state = $, 0 !== t._subscribers.length && G(A, t))
            }

            function E(t, e) {
                t._state === Z && (t._state = Q, t._result = e, G(y, t))
            }

            function O(t, e, n, i) {
                var r = t._subscribers,
                    s = r.length;
                t._onerror = null, r[s] = e, r[s + $] = n, r[s + Q] = i, 0 === s && t._state && G(A, t)
            }

            function A(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var i = void 0, r = void 0, s = t._result, o = 0; o < e.length; o += 3) i = e[o], r = e[o + n], i ? T(n, i, r, s) : r(s);
                    t._subscribers.length = 0
                }
            }

            function S(t, e) {
                try {
                    return t(e)
                } catch (t) {
                    return tt.error = t, tt
                }
            }

            function T(t, e, n, r) {
                var s = i(n),
                    o = void 0,
                    a = void 0,
                    l = void 0,
                    c = void 0;
                if (s) {
                    if (o = S(n, r), o === tt ? (c = !0, a = o.error, o.error = null) : l = !0, e === o) return void E(e, f())
                } else o = r, l = !0;
                e._state !== Z || (s && l ? _(e, o) : c ? E(e, a) : t === $ ? w(e, o) : t === Q && E(e, o))
            }

            function L(t, e) {
                try {
                    e(function(e) {
                        _(t, e)
                    }, function(e) {
                        E(t, e)
                    })
                } catch (e) {
                    E(t, e)
                }
            }

            function j() {
                return et++
            }

            function I(t) {
                t[X] = et++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function C() {
                return new Error("Array Methods must be provided an Array")
            }

            function N(t) {
                return new nt(this, t).promise
            }

            function k(t) {
                var e = this;
                return new e(M(t) ? function(n, i) {
                    for (var r = t.length, s = 0; s < r; s++) e.resolve(t[s]).then(n, i)
                } : function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function x(t) {
                var e = this,
                    n = new e(d);
                return E(n, t), n
            }

            function z() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function R() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function D() {
                var t = void 0;
                if (void 0 !== n) t = n;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === i && !e.cast) return
                }
                t.Promise = it
            }
            var P = void 0;
            P = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var M = P,
                B = 0,
                H = void 0,
                U = void 0,
                G = function(t, e) {
                    W[B] = t, W[B + 1] = e, 2 === (B += 2) && (U ? U(l) : J())
                },
                q = "undefined" != typeof window ? window : void 0,
                F = q || {},
                Y = F.MutationObserver || F.WebKitMutationObserver,
                V = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                W = new Array(1e3),
                J = void 0;
            J = V ? function() {
                return function() {
                    return e.nextTick(l)
                }
            }() : Y ? function() {
                var t = 0,
                    e = new Y(l),
                    n = document.createTextNode("");
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2
                    }
            }() : K ? function() {
                var t = new MessageChannel;
                return t.port1.onmessage = l,
                    function() {
                        return t.port2.postMessage(0)
                    }
            }() : void 0 === q ? function() {
                try {
                    var t = Function("return this")().require("vertx");
                    return H = t.runOnLoop || t.runOnContext, o()
                } catch (t) {
                    return a()
                }
            }() : a();
            var X = Math.random().toString(36).substring(2),
                Z = void 0,
                $ = 1,
                Q = 2,
                tt = {
                    error: null
                },
                et = 0,
                nt = function() {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(d), this.promise[X] || I(this.promise), M(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : E(this.promise, C())
                    }
                    return t.prototype._enumerate = function(t) {
                        for (var e = 0; this._state === Z && e < t.length; e++) this._eachEntry(t[e], e)
                    }, t.prototype._eachEntry = function(t, e) {
                        var n = this._instanceConstructor,
                            i = n.resolve;
                        if (i === u) {
                            var r = p(t);
                            if (r === c && t._state !== Z) this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof r) this._remaining--, this._result[e] = t;
                            else if (n === it) {
                                var s = new n(d);
                                v(s, t, r), this._willSettleAt(s, e)
                            } else this._willSettleAt(new n(function(e) {
                                return e(t)
                            }), e)
                        } else this._willSettleAt(i(t), e)
                    }, t.prototype._settledAt = function(t, e, n) {
                        var i = this.promise;
                        i._state === Z && (this._remaining--, t === Q ? E(i, n) : this._result[e] = n), 0 === this._remaining && w(i, this._result)
                    }, t.prototype._willSettleAt = function(t, e) {
                        var n = this;
                        O(t, void 0, function(t) {
                            return n._settledAt($, e, t)
                        }, function(t) {
                            return n._settledAt(Q, e, t)
                        })
                    }, t
                }(),
                it = function() {
                    function t(e) {
                        this[X] = j(), this._result = this._state = void 0, this._subscribers = [], d !== e && ("function" != typeof e && z(), this instanceof t ? L(this, e) : R())
                    }
                    return t.prototype.catch = function(t) {
                        return this.then(null, t)
                    }, t.prototype.finally = function(t) {
                        var e = this,
                            n = e.constructor;
                        return i(t) ? e.then(function(e) {
                            return n.resolve(t()).then(function() {
                                return e
                            })
                        }, function(e) {
                            return n.resolve(t()).then(function() {
                                throw e
                            })
                        }) : e.then(t, t)
                    }, t
                }();
            return it.prototype.then = c, it.all = N, it.race = k, it.resolve = u, it.reject = x, it._setScheduler = r, it._setAsap = s, it._asap = G, it.polyfill = D, it.Promise = it, it
        })
    }).call(e, n(27), n(31))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    ! function(e, i) {
        var r = function() {
            i(e.lazySizes), e.removeEventListener("lazyunveilread", r, !0)
        };
        i = i.bind(null, e, e.document), "object" == typeof t && t.exports ? i(n(21), n(33)) : e.lazySizes ? r() : e.addEventListener("lazyunveilread", r, !0)
    }(window, function(t, e, n) {
        "use strict";
        var i, r = n && n.cfg || t.lazySizesConfig,
            s = e.createElement("img"),
            o = "sizes" in s && "srcset" in s,
            a = /\s+\d+h/g,
            l = function() {
                var t = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                    n = Array.prototype.forEach;
                return function() {
                    var i = e.createElement("img"),
                        r = function(e) {
                            var n, i, r = e.getAttribute(lazySizesConfig.srcsetAttr);
                            r && ((i = r.match(t)) && (n = "w" == i[2] ? i[1] / i[3] : i[3] / i[1]) && e.setAttribute("data-aspectratio", n), e.setAttribute(lazySizesConfig.srcsetAttr, r.replace(a, "")))
                        },
                        s = function(t) {
                            var e = t.target.parentNode;
                            e && "PICTURE" == e.nodeName && n.call(e.getElementsByTagName("source"), r), r(t.target)
                        },
                        o = function() {
                            i.currentSrc && e.removeEventListener("lazybeforeunveil", s)
                        };
                    e.addEventListener("lazybeforeunveil", s), i.onload = o, i.onerror = o, i.srcset = "data:,a 1w 1h", i.complete && o()
                }
            }();
        if (r || (r = {}, t.lazySizesConfig = r), r.supportsType || (r.supportsType = function(t) {
                return !t
            }), !t.picturefill && !r.pf) {
            if (t.HTMLPictureElement && o) return e.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/)), void(r.pf = function() {});
            r.pf = function(e) {
                var n, r;
                if (!t.picturefill)
                    for (n = 0, r = e.elements.length; n < r; n++) i(e.elements[n])
            }, i = function() {
                var s = function(t, e) {
                        return t.w - e.w
                    },
                    l = /^\s*\d+\.*\d*px\s*$/,
                    c = function(t) {
                        var e, n, i = t.length,
                            r = t[i - 1],
                            s = 0;
                        for (s; s < i; s++)
                            if (r = t[s], r.d = r.w / t.w, r.d >= t.d) {
                                !r.cached && (e = t[s - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (r.d - t.d) * n > t.d && (r = e));
                                break
                            }
                        return r
                    },
                    u = function() {
                        var t, e = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                            n = /\s/,
                            i = function(e, n, i, r) {
                                t.push({
                                    c: n,
                                    u: i,
                                    w: 1 * r
                                })
                            };
                        return function(r) {
                            return t = [], r = r.trim(), r.replace(a, "").replace(e, i), t.length || !r || n.test(r) || t.push({
                                c: r,
                                u: r,
                                w: 99
                            }), t
                        }
                    }(),
                    d = function() {
                        d.init || (d.init = !0, addEventListener("resize", function() {
                            var t, n = e.getElementsByClassName("lazymatchmedia"),
                                r = function() {
                                    var t, e;
                                    for (t = 0, e = n.length; t < e; t++) i(n[t])
                                };
                            return function() {
                                clearTimeout(t), t = setTimeout(r, 66)
                            }
                        }()))
                    },
                    h = function(e, i) {
                        var s, o = e.getAttribute("srcset") || e.getAttribute(r.srcsetAttr);
                        !o && i && (o = e._lazypolyfill ? e._lazypolyfill._set : e.getAttribute(r.srcAttr) || e.getAttribute("src")), e._lazypolyfill && e._lazypolyfill._set == o || (s = u(o || ""), i && e.parentNode && (s.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase(), s.isPicture && t.matchMedia && (n.aC(e, "lazymatchmedia"), d())), s._set = o, Object.defineProperty(e, "_lazypolyfill", {
                            value: s,
                            writable: !0
                        }))
                    },
                    f = function(e) {
                        var i = t.devicePixelRatio || 1,
                            r = n.getX && n.getX(e);
                        return Math.min(r || i, 2.5, i)
                    },
                    p = function(e) {
                        return t.matchMedia ? (p = function(t) {
                            return !t || (matchMedia(t) || {}).matches
                        })(e) : !e
                    },
                    b = function(t) {
                        var e, i, o, a, u, d, b;
                        if (a = t, h(a, !0), u = a._lazypolyfill, u.isPicture)
                            for (i = 0, e = t.parentNode.getElementsByTagName("source"), o = e.length; i < o; i++)
                                if (r.supportsType(e[i].getAttribute("type"), t) && p(e[i].getAttribute("media"))) {
                                    a = e[i], h(a), u = a._lazypolyfill;
                                    break
                                }
                        return u.length > 1 ? (b = a.getAttribute("sizes") || "", b = l.test(b) && parseInt(b, 10) || n.gW(t, t.parentNode), u.d = f(t), !u.src || !u.w || u.w < b ? (u.w = b, d = c(u.sort(s)), u.src = d) : d = u.src) : d = u[0], d
                    },
                    g = function(t) {
                        if (!o || !t.parentNode || "PICTURE" == t.parentNode.nodeName.toUpperCase()) {
                            var e = b(t);
                            e && e.u && t._lazypolyfill.cur != e.u && (t._lazypolyfill.cur = e.u, e.cached = !0, t.setAttribute(r.srcAttr, e.u), t.setAttribute("src", e.u))
                        }
                    };
                return g.parse = u, g
            }(), r.loadedClass && r.loadingClass && function() {
                var t = [];
                ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(e) {
                    t.push(e + r.loadedClass), t.push(e + r.loadingClass)
                }), r.pf({
                    elements: e.querySelectorAll(t.join(", "))
                })
            }()
        }
    })
}, function(t, e, n) {
    ! function(e, i) {
        var r = function() {
            i(e.lazySizes), e.removeEventListener("lazyunveilread", r, !0)
        };
        i = i.bind(null, e, e.document), "object" == typeof t && t.exports ? i(n(21)) : e.lazySizes ? r() : e.addEventListener("lazyunveilread", r, !0)
    }(window, function(t, e, n) {
        "use strict";
        var i, r = e.createElement("img");
        !("srcset" in r) || "sizes" in r || t.HTMLPictureElement || (i = /^picture$/i, e.addEventListener("lazybeforeunveil", function(t) {
            if (t.detail.instance == n) {
                var r, s, o, a, l, c, u;
                !t.defaultPrevented && !lazySizesConfig.noIOSFix && (r = t.target) && (o = r.getAttribute(lazySizesConfig.srcsetAttr)) && (s = r.parentNode) && ((l = i.test(s.nodeName || "")) || (a = r.getAttribute("sizes") || r.getAttribute(lazySizesConfig.sizesAttr))) && (c = l ? s : e.createElement("picture"), r._lazyImgSrc || Object.defineProperty(r, "_lazyImgSrc", {
                    value: e.createElement("source"),
                    writable: !0
                }), u = r._lazyImgSrc, a && u.setAttribute("sizes", a), u.setAttribute(lazySizesConfig.srcsetAttr, o), r.setAttribute("data-pfsrcset", o), r.removeAttribute(lazySizesConfig.srcsetAttr), l || (s.insertBefore(c, r), c.appendChild(r)), c.insertBefore(u, r))
            }
        }))
    })
}, function(t, e, n) {
    var i = n(22);
    t.exports = function() {
        var t = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="ad-debug">'), i.b("\n" + n), i.b("    <table>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Element id:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("id", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">DFP:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("dfp", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Creative ID:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("creativeId", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Line item ID:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("lineItemId", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Rendered size:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("renderedSize", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Ad position:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("position", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 761, 905, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("            <tr>"), i.b("\n" + n), i.b('                <td class="ad-debug__key">Ad key values:</td>'), i.b("\n" + n), i.b("                <td>"), i.b(i.v(i.f("values", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("            </tr>"), i.b("\n" + n)
                }), t.pop()), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Ad sizes:</td>'), i.b("\n" + n), i.b("            <td>"), i.b("\n" + n), i.b('                <ul class="global__list-reset">'), i.b("\n" + n), i.s(i.f("sizes", t, e, 1), t, e, 0, 1082, 1144, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("                        <li>"), i.b(i.v(i.d(".", t, e, 0))), i.b("</li>"), i.b("\n" + n)
                }), t.pop()), i.b("                </ul>"), i.b("\n" + n), i.b("            </td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.s(i.f("sizeMapping", t, e, 1), t, e, 0, 1237, 1725, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("            <tr>"), i.b("\n" + n), i.b('                <td class="ad-debug__key">Ad sizeMapping:</td>'), i.b("\n" + n), i.b("                <td>"), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 1372, 1663, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b("                        <strong>"), i.b(i.v(i.f("key", t, e, 0))), i.b("</strong>"), i.b("\n" + n), i.b('                        <ul class="global__list-reset">'), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 1521, 1599, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                            i.b("                                <li>"), i.b(i.v(i.d(".", t, e, 0))), i.b("</li>"), i.b("\n" + n)
                        }), t.pop()), i.b("                        </ul>"), i.b("\n" + n)
                    }), t.pop()), i.b("                </td>"), i.b("\n" + n), i.b("            </tr>"), i.b("\n" + n)
                }), t.pop()), i.b("    </table>"), i.b("\n" + n), i.b("</div>"), i.fl()
            },
            partials: {},
            subs: {}
        }, '<div class="ad-debug">\n    <table>\n        <tr>\n            <td class="ad-debug__key">Element id:</td>\n            <td>{{ id }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">DFP:</td>\n            <td>{{ dfp }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Creative ID:</td>\n            <td>{{ creativeId }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Line item ID:</td>\n            <td>{{ lineItemId }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Rendered size:</td>\n            <td>{{ renderedSize }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Ad position:</td>\n            <td>{{ position }}</td>\n        </tr>\n        {{# values }}\n            <tr>\n                <td class="ad-debug__key">Ad key values:</td>\n                <td>{{ values }}</td>\n            </tr>\n        {{/ values }}\n        <tr>\n            <td class="ad-debug__key">Ad sizes:</td>\n            <td>\n                <ul class="global__list-reset">\n                    {{# sizes }}\n                        <li>{{ . }}</li>\n                    {{/ sizes }}\n                </ul>\n            </td>\n        </tr>\n        {{# sizeMapping }}\n            <tr>\n                <td class="ad-debug__key">Ad sizeMapping:</td>\n                <td>\n                    {{# values }}\n                        <strong>{{ key }}</strong>\n                        <ul class="global__list-reset">\n                            {{# values }}\n                                <li>{{ . }}</li>\n                            {{/ values }}\n                        </ul>\n                    {{/ values }}\n                </td>\n            </tr>\n        {{/ sizeMapping }}\n    </table>\n</div>', i);
        return t.render.apply(t, arguments)
    }
}, function(t, e, n) {
    ! function(t) {
        function e(t) {
            "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
        }

        function n(t) {
            return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
        }

        function i(t, e, n) {
            if (e.charAt(n) != t.charAt(0)) return !1;
            for (var i = 1, r = t.length; i < r; i++)
                if (e.charAt(n + i) != t.charAt(i)) return !1;
            return !0
        }

        function r(e, n, i, a) {
            var l = [],
                c = null,
                u = null,
                d = null;
            for (u = i[i.length - 1]; e.length > 0;) {
                if (d = e.shift(), u && "<" == u.tag && !(d.tag in w)) throw new Error("Illegal content in < super tag.");
                if (t.tags[d.tag] <= t.tags.$ || s(d, a)) i.push(d), d.nodes = r(e, d.tag, i, a);
                else {
                    if ("/" == d.tag) {
                        if (0 === i.length) throw new Error("Closing tag without opener: /" + d.n);
                        if (c = i.pop(), d.n != c.n && !o(d.n, c.n, a)) throw new Error("Nesting error: " + c.n + " vs. " + d.n);
                        return c.end = d.i, l
                    }
                    "\n" == d.tag && (d.last = 0 == e.length || "\n" == e[0].tag)
                }
                l.push(d)
            }
            if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
            return l
        }

        function s(t, e) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n].o == t.n) return t.tag = "#", !0
        }

        function o(t, e, n) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i].c == t && n[i].o == e) return !0
        }

        function a(t) {
            var e = [];
            for (var n in t) e.push('"' + c(n) + '": function(c,p,t,i) {' + t[n] + "}");
            return "{ " + e.join(",") + " }"
        }

        function l(t) {
            var e = [];
            for (var n in t.partials) e.push('"' + c(n) + '":{name:"' + c(t.partials[n].name) + '", ' + l(t.partials[n]) + "}");
            return "partials: {" + e.join(",") + "}, subs: " + a(t.subs)
        }

        function c(t) {
            return t.replace(v, "\\\\").replace(b, '\\"').replace(g, "\\n").replace(m, "\\r").replace(_, "\\u2028").replace(y, "\\u2029")
        }

        function u(t) {
            return ~t.indexOf(".") ? "d" : "f"
        }

        function d(t, e) {
            var n = "<" + (e.prefix || ""),
                i = n + t.n + E++;
            return e.partials[i] = {
                name: t.n,
                partials: {}
            }, e.code += 't.b(t.rp("' + c(i) + '",c,p,"' + (t.indent || "") + '"));', i
        }

        function h(t, e) {
            e.code += "t.b(t.t(t." + u(t.n) + '("' + c(t.n) + '",c,p,0)));'
        }

        function f(t) {
            return "t.b(" + t + ");"
        }
        var p = /\S/,
            b = /\"/g,
            g = /\n/g,
            m = /\r/g,
            v = /\\/g,
            _ = /\u2028/,
            y = /\u2029/;
        t.tags = {
            "#": 1,
            "^": 2,
            "<": 3,
            $: 4,
            "/": 5,
            "!": 6,
            ">": 7,
            "=": 8,
            _v: 9,
            "{": 10,
            "&": 11,
            _t: 12
        }, t.scan = function(r, s) {
            function o() {
                f.length > 0 && (b.push({
                    tag: "_t",
                    text: new String(f)
                }), f = "")
            }

            function a() {
                for (var e = !0, n = v; n < b.length; n++)
                    if (!(e = t.tags[b[n].tag] < t.tags._v || "_t" == b[n].tag && null === b[n].text.match(p))) return !1;
                return e
            }

            function l(t, e) {
                if (o(), t && a())
                    for (var n, i = v; i < b.length; i++) b[i].text && ((n = b[i + 1]) && ">" == n.tag && (n.indent = b[i].text.toString()), b.splice(i, 1));
                else e || b.push({
                    tag: "\n"
                });
                g = !1, v = b.length
            }
            var c = r.length,
                u = 0,
                d = null,
                h = null,
                f = "",
                b = [],
                g = !1,
                m = 0,
                v = 0,
                _ = "{{",
                y = "}}";
            for (s && (s = s.split(" "), _ = s[0], y = s[1]), m = 0; m < c; m++) 0 == u ? i(_, r, m) ? (--m, o(), u = 1) : "\n" == r.charAt(m) ? l(g) : f += r.charAt(m) : 1 == u ? (m += _.length - 1, h = t.tags[r.charAt(m + 1)], d = h ? r.charAt(m + 1) : "_v", "=" == d ? (m = function(t, e) {
                var i = "=" + y,
                    r = t.indexOf(i, e),
                    s = n(t.substring(t.indexOf("=", e) + 1, r)).split(" ");
                return _ = s[0], y = s[s.length - 1], r + i.length - 1
            }(r, m), u = 0) : (h && m++, u = 2), g = m) : i(y, r, m) ? (b.push({
                tag: d,
                n: n(f),
                otag: _,
                ctag: y,
                i: "/" == d ? g - _.length : m + y.length
            }), f = "", m += y.length - 1, u = 0, "{" == d && ("}}" == y ? m++ : e(b[b.length - 1]))) : f += r.charAt(m);
            return l(g, !0), b
        };
        var w = {
            _t: !0,
            "\n": !0,
            $: !0,
            "/": !0
        };
        t.stringify = function(e, n, i) {
            return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + l(e) + "}"
        };
        var E = 0;
        t.generate = function(e, n, i) {
            E = 0;
            var r = {
                code: "",
                subs: {},
                partials: {}
            };
            return t.walk(e, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i)
        }, t.wrapMain = function(t) {
            return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
        }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
            var i = this.makePartials(t);
            return i.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(i, e, this, n)
        }, t.makePartials = function(t) {
            var e, n = {
                subs: {},
                partials: t.partials,
                name: t.name
            };
            for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
            for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
            return n
        }, t.codegen = {
            "#": function(e, n) {
                n.code += "if(t.s(t." + u(e.n) + '("' + c(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
            },
            "^": function(e, n) {
                n.code += "if(!t.s(t." + u(e.n) + '("' + c(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
            },
            ">": d,
            "<": function(e, n) {
                var i = {
                    partials: {},
                    code: "",
                    subs: {},
                    inPartial: !0
                };
                t.walk(e.nodes, i);
                var r = n.partials[d(e, n)];
                r.subs = i.subs, r.partials = i.partials
            },
            $: function(e, n) {
                var i = {
                    subs: {},
                    code: "",
                    partials: n.partials,
                    prefix: e.n
                };
                t.walk(e.nodes, i), n.subs[e.n] = i.code, n.inPartial || (n.code += 't.sub("' + c(e.n) + '",c,p,i);')
            },
            "\n": function(t, e) {
                e.code += f('"\\n"' + (t.last ? "" : " + i"))
            },
            _v: function(t, e) {
                e.code += "t.b(t.v(t." + u(t.n) + '("' + c(t.n) + '",c,p,0)));'
            },
            _t: function(t, e) {
                e.code += f('"' + c(t.text) + '"')
            },
            "{": h,
            "&": h
        }, t.walk = function(e, n) {
            for (var i, r = 0, s = e.length; r < s; r++)(i = t.codegen[e[r].tag]) && i(e[r], n);
            return n
        }, t.parse = function(t, e, n) {
            return n = n || {}, r(t, "", [], n.sectionTags || [])
        }, t.cache = {}, t.cacheKey = function(t, e) {
            return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
        }, t.compile = function(e, n) {
            n = n || {};
            var i = t.cacheKey(e, n),
                r = this.cache[i];
            if (r) {
                var s = r.partials;
                for (var o in s) delete s[o].instance;
                return r
            }
            return r = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[i] = r
        }
    }(e)
}, function(t, e, n) {
    ! function(t) {
        function e(t, e, n) {
            var i;
            return e && "object" == typeof e && (void 0 !== e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
        }

        function n(t, e, n, i, r, s) {
            function o() {}

            function a() {}
            o.prototype = t, a.prototype = t.subs;
            var l, c = new o;
            c.subs = new a, c.subsText = {}, c.buf = "", i = i || {}, c.stackSubs = i, c.subsText = s;
            for (l in e) i[l] || (i[l] = e[l]);
            for (l in i) c.subs[l] = i[l];
            r = r || {}, c.stackPartials = r;
            for (l in n) r[l] || (r[l] = n[l]);
            for (l in r) c.partials[l] = r[l];
            return c
        }

        function i(t) {
            return String(null === t || void 0 === t ? "" : t)
        }

        function r(t) {
            return t = i(t), u.test(t) ? t.replace(s, "&amp;").replace(o, "&lt;").replace(a, "&gt;").replace(l, "&#39;").replace(c, "&quot;") : t
        }
        t.Template = function(t, e, n, i) {
            t = t || {}, this.r = t.code || this.r, this.c = n, this.options = i || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
        }, t.Template.prototype = {
            r: function(t, e, n) {
                return ""
            },
            v: r,
            t: i,
            render: function(t, e, n) {
                return this.ri([t], e || {}, n)
            },
            ri: function(t, e, n) {
                return this.r(t, e, n)
            },
            ep: function(t, e) {
                var i = this.partials[t],
                    r = e[i.name];
                if (i.instance && i.base == r) return i.instance;
                if ("string" == typeof r) {
                    if (!this.c) throw new Error("No compiler available.");
                    r = this.c.compile(r, this.options)
                }
                if (!r) return null;
                if (this.partials[t].base = r, i.subs) {
                    e.stackText || (e.stackText = {});
                    for (key in i.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                    r = n(r, i.subs, i.partials, this.stackSubs, this.stackPartials, e.stackText)
                }
                return this.partials[t].instance = r, r
            },
            rp: function(t, e, n, i) {
                var r = this.ep(t, n);
                return r ? r.ri(e, n, i) : ""
            },
            rs: function(t, e, n) {
                var i = t[t.length - 1];
                if (!d(i)) return void n(t, e, this);
                for (var r = 0; r < i.length; r++) t.push(i[r]), n(t, e, this), t.pop()
            },
            s: function(t, e, n, i, r, s, o) {
                var a;
                return (!d(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, i, r, s, o)), a = !!t, !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a)
            },
            d: function(t, n, i, r) {
                var s, o = t.split("."),
                    a = this.f(o[0], n, i, r),
                    l = this.options.modelGet,
                    c = null;
                if ("." === t && d(n[n.length - 2])) a = n[n.length - 1];
                else
                    for (var u = 1; u < o.length; u++) s = e(o[u], a, l), void 0 !== s ? (c = a, a = s) : a = "";
                return !(r && !a) && (r || "function" != typeof a || (n.push(c), a = this.mv(a, n, i), n.pop()), a)
            },
            f: function(t, n, i, r) {
                for (var s = !1, o = null, a = !1, l = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                    if (o = n[c], void 0 !== (s = e(t, o, l))) {
                        a = !0;
                        break
                    }
                return a ? (r || "function" != typeof s || (s = this.mv(s, n, i)), s) : !r && ""
            },
            ls: function(t, e, n, r, s) {
                var o = this.options.delimiters;
                return this.options.delimiters = s, this.b(this.ct(i(t.call(e, r)), e, n)), this.options.delimiters = o, !1
            },
            ct: function(t, e, n) {
                if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                return this.c.compile(t, this.options).render(e, n)
            },
            b: function(t) {
                this.buf += t
            },
            fl: function() {
                var t = this.buf;
                return this.buf = "", t
            },
            ms: function(t, e, n, i, r, s, o) {
                var a, l = e[e.length - 1],
                    c = t.call(l);
                return "function" == typeof c ? !!i || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, l, n, a.substring(r, s), o)) : c
            },
            mv: function(t, e, n) {
                var r = e[e.length - 1],
                    s = t.call(r);
                return "function" == typeof s ? this.ct(i(s.call(r)), r, n) : s
            },
            sub: function(t, e, n, i) {
                var r = this.subs[t];
                r && (this.activeSub = t, r(e, n, this, i), this.activeSub = !1)
            }
        };
        var s = /&/g,
            o = /</g,
            a = />/g,
            l = /\'/g,
            c = /\"/g,
            u = /[&<>\"\']/,
            d = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
    }(e)
}]);
//# sourceMappingURL=core.min.js.map
