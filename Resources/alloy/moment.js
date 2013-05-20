(function(a) {
    function E(a, b, c, d) {
        var e = c.lang();
        return e[a].call ? e[a](c, d) : e[a][b];
    }
    function F(a, b) {
        return function(c) {
            return K(a.call(this, c), b);
        };
    }
    function G(a) {
        return function(b) {
            var c = a.call(this, b);
            return c + this.lang().ordinal(c);
        };
    }
    function H(a, b, c) {
        this._d = a, this._isUTC = !!b, this._a = a._a || null, this._lang = c || !1;
    }
    function I(a) {
        var b = this._data = {}, c = a.years || a.y || 0, d = a.months || a.M || 0, e = a.weeks || a.w || 0, f = a.days || a.d || 0, g = a.hours || a.h || 0, h = a.minutes || a.m || 0, i = a.seconds || a.s || 0, j = a.milliseconds || a.ms || 0;
        this._milliseconds = j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = f + 7 * e, this._months = d + 12 * c, 
        b.milliseconds = j % 1e3, i += J(j / 1e3), b.seconds = i % 60, h += J(i / 60), b.minutes = h % 60, 
        g += J(h / 60), b.hours = g % 24, f += J(g / 24), f += 7 * e, b.days = f % 30, d += J(f / 30), 
        b.months = d % 12, c += J(d / 12), b.years = c, this._lang = !1;
    }
    function J(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }
    function K(a, b) {
        var c = a + "";
        while (b > c.length) c = "0" + c;
        return c;
    }
    function L(a, b, c) {
        var g, d = b._milliseconds, e = b._days, f = b._months;
        d && a._d.setTime(+a + d * c), e && a.date(a.date() + e * c), f && (g = a.date(), 
        a.date(1).month(a.month() + f * c).date(Math.min(g, a.daysInMonth())));
    }
    function M(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function N(a, b) {
        var f, c = Math.min(a.length, b.length), d = Math.abs(a.length - b.length), e = 0;
        for (f = 0; c > f; f++) ~~a[f] !== ~~b[f] && e++;
        return e + d;
    }
    function O(a, b, c, d) {
        var e, f, g = [];
        for (e = 0; 7 > e; e++) g[e] = a[e] = null == a[e] ? 2 === e ? 1 : 0 : a[e];
        return a[7] = g[7] = b, null != a[8] && (g[8] = a[8]), a[3] += c || 0, a[4] += d || 0, 
        f = new Date(0), b ? (f.setUTCFullYear(a[0], a[1], a[2]), f.setUTCHours(a[3], a[4], a[5], a[6])) : (f.setFullYear(a[0], a[1], a[2]), 
        f.setHours(a[3], a[4], a[5], a[6])), f._a = g, f;
    }
    function P(a, c) {
        var d, e, g = [];
        !c && h && (c = require("./lang/" + a));
        for (d = 0; i.length > d; d++) c[i[d]] = c[i[d]] || f.en[i[d]];
        for (d = 0; 12 > d; d++) e = b([ 2e3, d ]), g[d] = new RegExp("^" + (c.months[d] || c.months(e, "")) + "|^" + (c.monthsShort[d] || c.monthsShort(e, "")).replace(".", ""), "i");
        return c.monthsParse = c.monthsParse || g, f[a] = c, c;
    }
    function Q(a) {
        var c = "string" == typeof a && a || a && a._lang || null;
        return c ? f[c] || P(c) : b;
    }
    function R(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function S(a) {
        var c, d, b = a.match(k);
        for (c = 0, d = b.length; d > c; c++) b[c] = D[b[c]] ? D[b[c]] : R(b[c]);
        return function(e) {
            var f = "";
            for (c = 0; d > c; c++) f += "function" == typeof b[c].call ? b[c].call(e, a) : b[c];
            return f;
        };
    }
    function T(a, b) {
        function d(b) {
            return a.lang().longDateFormat[b] || b;
        }
        var c = 5;
        while (c-- && l.test(b)) b = b.replace(l, d);
        return A[b] || (A[b] = S(b)), A[b](a);
    }
    function U(a) {
        switch (a) {
          case "DDDD":
            return p;

          case "YYYY":
            return q;

          case "S":
          case "SS":
          case "SSS":
          case "DDD":
            return o;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
          case "a":
          case "A":
            return r;

          case "Z":
          case "ZZ":
            return s;

          case "T":
            return t;

          case "MM":
          case "DD":
          case "YY":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
            return n;

          default:
            return new RegExp(a.replace("\\", ""));
        }
    }
    function V(a, b, c, d) {
        var e, f;
        switch (a) {
          case "M":
          case "MM":
            c[1] = null == b ? 0 : ~~b - 1;
            break;

          case "MMM":
          case "MMMM":
            for (e = 0; 12 > e; e++) if (Q().monthsParse[e].test(b)) {
                c[1] = e, f = !0;
                break;
            }
            f || (c[8] = !1);
            break;

          case "D":
          case "DD":
          case "DDD":
          case "DDDD":
            null != b && (c[2] = ~~b);
            break;

          case "YY":
            c[0] = ~~b + (~~b > 70 ? 1900 : 2e3);
            break;

          case "YYYY":
            c[0] = ~~Math.abs(b);
            break;

          case "a":
          case "A":
            d.isPm = "pm" === (b + "").toLowerCase();
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            c[3] = ~~b;
            break;

          case "m":
          case "mm":
            c[4] = ~~b;
            break;

          case "s":
          case "ss":
            c[5] = ~~b;
            break;

          case "S":
          case "SS":
          case "SSS":
            c[6] = ~~(1e3 * ("0." + b));
            break;

          case "Z":
          case "ZZ":
            d.isUTC = !0, e = (b + "").match(x), e && e[1] && (d.tzh = ~~e[1]), e && e[2] && (d.tzm = ~~e[2]), 
            e && "+" === e[0] && (d.tzh = -d.tzh, d.tzm = -d.tzm);
        }
        null == b && (c[8] = !1);
    }
    function W(a, b) {
        var f, g, c = [ 0, 0, 1, 0, 0, 0, 0 ], d = {
            tzh: 0,
            tzm: 0
        }, e = b.match(k);
        for (f = 0; e.length > f; f++) g = (U(e[f]).exec(a) || [])[0], g && (a = a.slice(a.indexOf(g) + g.length)), 
        D[e[f]] && V(e[f], g, c, d);
        return d.isPm && 12 > c[3] && (c[3] += 12), d.isPm === !1 && 12 === c[3] && (c[3] = 0), 
        O(c, d.isUTC, d.tzh, d.tzm);
    }
    function X(a, b) {
        var c, e, g, h, i, d = a.match(m) || [], f = 99;
        for (g = 0; b.length > g; g++) h = W(a, b[g]), e = T(new H(h), b[g]).match(m) || [], 
        i = N(d, e), f > i && (f = i, c = h);
        return c;
    }
    function Y(a) {
        var c, b = "YYYY-MM-DDT";
        if (u.exec(a)) {
            for (c = 0; 4 > c; c++) if (w[c][1].exec(a)) {
                b += w[c][0];
                break;
            }
            return s.exec(a) ? W(a, b + " Z") : W(a, b);
        }
        return new Date(a);
    }
    function Z(a, b, c, d, e) {
        var f = e.relativeTime[a];
        return "function" == typeof f ? f(b || 1, !!c, a, d) : f.replace(/%d/i, b || 1);
    }
    function $(a, b, c) {
        var e = d(Math.abs(a) / 1e3), f = d(e / 60), g = d(f / 60), h = d(g / 24), i = d(h / 365), j = 45 > e && [ "s", e ] || 1 === f && [ "m" ] || 45 > f && [ "mm", f ] || 1 === g && [ "h" ] || 22 > g && [ "hh", g ] || 1 === h && [ "d" ] || 25 >= h && [ "dd", h ] || 45 >= h && [ "M" ] || 345 > h && [ "MM", d(h / 30) ] || 1 === i && [ "y" ] || [ "yy", i ];
        return j[2] = b, j[3] = a > 0, j[4] = c, Z.apply({}, j);
    }
    function _(a, c) {
        b.fn[a] = function(a) {
            var b = this._isUTC ? "UTC" : "";
            return null != a ? (this._d["set" + b + c](a), this) : this._d["get" + b + c]();
        };
    }
    function ab(a) {
        b.duration.fn[a] = function() {
            return this._data[a];
        };
    }
    function bb(a, c) {
        b.duration.fn["as" + a] = function() {
            return +this / c;
        };
    }
    var b, e, c = "1.7.2", d = Math.round, f = {}, g = "en", h = "undefined" != typeof module && module.exports, i = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"), j = /^\/?Date\((\-?\d+)/i, k = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g, l = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g, m = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, n = /\d\d?/, o = /\d{1,3}/, p = /\d{3}/, q = /\d{1,4}/, r = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i, s = /Z|[\+\-]\d\d:?\d\d/i, t = /T/i, u = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, v = "YYYY-MM-DDTHH:mm:ssZ", w = [ [ "HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /T\d\d:\d\d:\d\d/ ], [ "HH:mm", /T\d\d:\d\d/ ], [ "HH", /T\d\d/ ] ], x = /([\+\-]|\d\d)/gi, y = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), z = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, A = {}, B = "DDD w M D d".split(" "), C = "M D H h m s w".split(" "), D = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(a) {
            return E("monthsShort", this.month(), this, a);
        },
        MMMM: function(a) {
            return E("months", this.month(), this, a);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            var a = new Date(this.year(), this.month(), this.date()), b = new Date(this.year(), 0, 1);
            return ~~((a - b) / 864e5 + 1.5);
        },
        d: function() {
            return this.day();
        },
        dd: function(a) {
            return E("weekdaysMin", this.day(), this, a);
        },
        ddd: function(a) {
            return E("weekdaysShort", this.day(), this, a);
        },
        dddd: function(a) {
            return E("weekdays", this.day(), this, a);
        },
        w: function() {
            var a = new Date(this.year(), this.month(), this.date() - this.day() + 5), b = new Date(a.getFullYear(), 0, 4);
            return ~~((a - b) / 864e5 / 7 + 1.5);
        },
        YY: function() {
            return K(this.year() % 100, 2);
        },
        YYYY: function() {
            return K(this.year(), 4);
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return ~~(this.milliseconds() / 100);
        },
        SS: function() {
            return K(~~(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return K(this.milliseconds(), 3);
        },
        Z: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + K(~~(a / 60), 2) + ":" + K(~~a % 60, 2);
        },
        ZZ: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + K(~~(10 * a / 6), 4);
        }
    };
    while (B.length) e = B.pop(), D[e + "o"] = G(D[e]);
    while (C.length) e = C.pop(), D[e + e] = F(D[e], 2);
    D.DDDD = F(D.DDD, 3), b = function(c, d) {
        if (null === c || "" === c) return null;
        var e, f;
        return b.isMoment(c) ? new H(new Date(+c._d), c._isUTC, c._lang) : (d ? e = M(d) ? X(c, d) : W(c, d) : (f = j.exec(c), 
        e = c === a ? new Date() : f ? new Date(+f[1]) : c instanceof Date ? c : M(c) ? O(c) : "string" == typeof c ? Y(c) : new Date(c)), 
        new H(e));
    }, b.utc = function(a, c) {
        return M(a) ? new H(O(a, !0), !0) : ("string" == typeof a && !s.exec(a) && (a += " +0000", 
        c && (c += " Z")), b(a, c).utc());
    }, b.unix = function(a) {
        return b(1e3 * a);
    }, b.duration = function(a, c) {
        var g, d = b.isDuration(a), e = "number" == typeof a, f = d ? a._data : e ? {} : a;
        return e && (c ? f[c] = a : f.milliseconds = a), g = new I(f), d && (g._lang = a._lang), 
        g;
    }, b.humanizeDuration = function(a, c, d) {
        return b.duration(a, c === !0 ? null : c).humanize(c === !0 ? !0 : d);
    }, b.version = c, b.defaultFormat = v, b.lang = function(a, c) {
        var d;
        if (!a) return g;
        (c || !f[a]) && P(a, c);
        if (f[a]) {
            for (d = 0; i.length > d; d++) b[i[d]] = f[a][i[d]];
            b.monthsParse = f[a].monthsParse, g = a;
        }
    }, b.langData = Q, b.isMoment = function(a) {
        return a instanceof H;
    }, b.isDuration = function(a) {
        return a instanceof I;
    }, b.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(a) {
            var b = a % 10;
            return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        }
    }), b.fn = H.prototype = {
        clone: function() {
            return b(this);
        },
        valueOf: function() {
            return +this._d;
        },
        unix: function() {
            return Math.floor(+this._d / 1e3);
        },
        toString: function() {
            return this._d.toString();
        },
        toDate: function() {
            return this._d;
        },
        toArray: function() {
            var a = this;
            return [ a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds(), !!this._isUTC ];
        },
        isValid: function() {
            return this._a ? null != this._a[8] ? !!this._a[8] : !N(this._a, (this._a[7] ? b.utc(this._a) : b(this._a)).toArray()) : !isNaN(this._d.getTime());
        },
        utc: function() {
            return this._isUTC = !0, this;
        },
        local: function() {
            return this._isUTC = !1, this;
        },
        format: function(a) {
            return T(this, a ? a : b.defaultFormat);
        },
        add: function(a, c) {
            var d = c ? b.duration(+c, a) : b.duration(a);
            return L(this, d, 1), this;
        },
        subtract: function(a, c) {
            var d = c ? b.duration(+c, a) : b.duration(a);
            return L(this, d, -1), this;
        },
        diff: function(a, c, e) {
            var l, f = this._isUTC ? b(a).utc() : b(a).local(), g = 6e4 * (this.zone() - f.zone()), h = this._d - f._d - g, i = this.year() - f.year(), j = this.month() - f.month(), k = this.date() - f.date();
            return l = "months" === c ? 12 * i + j + k / 30 : "years" === c ? i + (j + k / 30) / 12 : "seconds" === c ? h / 1e3 : "minutes" === c ? h / 6e4 : "hours" === c ? h / 36e5 : "days" === c ? h / 864e5 : "weeks" === c ? h / 6048e5 : h, 
            e ? l : d(l);
        },
        from: function(a, c) {
            return b.duration(this.diff(a)).lang(this._lang).humanize(!c);
        },
        fromNow: function(a) {
            return this.from(b(), a);
        },
        calendar: function() {
            var a = this.diff(b().sod(), "days", !0), c = this.lang().calendar, d = c.sameElse, e = -6 > a ? d : -1 > a ? c.lastWeek : 0 > a ? c.lastDay : 1 > a ? c.sameDay : 2 > a ? c.nextDay : 7 > a ? c.nextWeek : d;
            return this.format("function" == typeof e ? e.apply(this) : e);
        },
        isLeapYear: function() {
            var a = this.year();
            return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400;
        },
        isDST: function() {
            return this.zone() < b([ this.year() ]).zone() || this.zone() < b([ this.year(), 5 ]).zone();
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null == a ? b : this.add({
                d: a - b
            });
        },
        startOf: function(a) {
            switch (a.replace(/s$/, "")) {
              case "year":
                this.month(0);

              case "month":
                this.date(1);

              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return this;
        },
        endOf: function(a) {
            return this.startOf(a).add(a.replace(/s?$/, "s"), 1).subtract("ms", 1);
        },
        sod: function() {
            return this.clone().startOf("day");
        },
        eod: function() {
            return this.clone().endOf("day");
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset();
        },
        daysInMonth: function() {
            return b.utc([ this.year(), this.month() + 1, 0 ]).date();
        },
        lang: function(b) {
            return b === a ? Q(this) : (this._lang = b, this);
        }
    };
    for (e = 0; y.length > e; e++) _(y[e].toLowerCase(), y[e]);
    _("year", "FullYear"), b.duration.fn = I.prototype = {
        weeks: function() {
            return J(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * this._months;
        },
        humanize: function(a) {
            var b = +this, c = this.lang().relativeTime, d = $(b, !a, this.lang()), e = 0 >= b ? c.past : c.future;
            return a && (d = "function" == typeof e ? e(d) : e.replace(/%s/i, d)), d;
        },
        lang: b.fn.lang
    };
    for (e in z) z.hasOwnProperty(e) && (bb(e, z[e]), ab(e.toLowerCase()));
    bb("Weeks", 6048e5), h && (module.exports = b), "undefined" == typeof ender && (this.moment = b), 
    "function" == typeof define && define.amd && define("moment", [], function() {
        return b;
    });
}).call(this);