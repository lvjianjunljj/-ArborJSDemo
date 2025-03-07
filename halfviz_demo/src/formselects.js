"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
    return typeof e
} : function(e) {
    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};

function _defineProperty(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        e[t] = n
    }
    return e
}(function(e, t, n) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = n()
    } else if (typeof define === "function" && define.amd) {
        define(n)
    } else if (t.layui && e.define) {
        e.define(["jquery"], function(e) {
            e("formSelects", n())
        })
    } else {
        t.formSelects = n()
    }
})(typeof layui == "undefined" ? null : layui, window, function() {
    var t = "4.0.0.0910",
        v = "xm-select",
        m = "xm-select-parent",
        y = "xm-select-input",
        g = "xm-select--suffix",
        w = "xm-select-this",
        x = "xm-select-label",
        k = "xm-select-search",
        b = "xm-select-search-type",
        C = "xm-select-show-count",
        S = "xm-select-create",
        d = "xm-select-create-long",
        T = "xm-select-max",
        L = "xm-select-skin",
        j = "xm-select-direction",
        A = "xm-select-height",
        E = "xm-dis-disabled",
        N = "xm-select-dis",
        p = "xm-select-temp",
        D = "xm-select-radio",
        H = "xm-select-linkage",
        F = "xm-select-dl",
        h = "xm-select-hide",
        _ = "xm-hide-input",
        O = "xm-select-sj",
        e = "xm-icon-close",
        I = "xm-select-title",
        P = "xm-form-select",
        f = "xm-form-selected",
        V = "xm-select-none",
        U = "xm-select-empty",
        M = "xm-input",
        W = "xm-dl-input",
        J = "xm-select-tips",
        s = "xm-iconfont",
        B = "XM_PID_VALUE",
        R = "xm-cz",
        l = "xm-cz-group",
        n = "Data factory select",
        q = {},
        z = {
            on: {},
            endOn: {},
            filter: {},
            maxTips: {},
            opened: {},
            closed: {}
        },
        X = {
            type: "get",
            header: {},
            first: true,
            data: {},
            searchUrl: "",
            searchName: "keyword",
            searchVal: null,
            keyName: "name",
            keyVal: "value",
            keySel: "selected",
            keyDis: "disabled",
            keyChildren: "children",
            dataType: "",
            delay: 500,
            beforeSuccess: null,
            success: null,
            error: null,
            beforeSearch: null,
            response: {
                statusCode: 0,
                statusName: "code",
                msgName: "msg",
                dataName: "data"
            },
            tree: {
                nextClick: function e(t, n, i) {
                    i([])
                },
                folderChoose: true,
                lazy: true
            }
        },
        i = [{
            icon: "xm-iconfont icon-quanxuan",
            name: "All",
            click: function e(t, n) {
                n.selectAll(t, true, true)
            }
        }, {
            icon: "xm-iconfont icon-qingkong",
            name: "Clear",
            click: function e(t, n) {
                n.removeAll(t, true, true)
            }
        }, {
            icon: "xm-iconfont icon-fanxuan",
            name: "反选",
            click: function e(t, n) {
                n.reverse(t, true, true)
            }
        }, {
            icon: "xm-iconfont icon-pifu",
            name: "换肤",
            click: function e(t, n) {
                n.skin(t)
            }
        }],
        Q = window.$ || window.layui && window.layui.jquery,
        c = Q(window),
        Y = {},
        a = {},
        r = {},
        $ = function e(t) {
            var l = this;
            this.config = {
                name: null,
                max: null,
                maxTips: function e(t, n, i, a) {
                    var r = Q('[xid="' + l.config.name + '"]').prev().find("." + v);
                    if (r.parents(".layui-form-item[pane]").length) {
                        r = r.parents(".layui-form-item[pane]")
                    }
                    r.attr("style", "border-color: red !important");
                    setTimeout(function() {
                        r.removeAttr("style")
                    }, 300)
                },
                init: null,
                on: null,
                opened: null,
                closed: null,
                filter: function e(t, n, i, a) {
                    return i.name.indexOf(n) == -1
                },
                clearid: -1,
                direction: "auto",
                height: null,
                isEmpty: false,
                btns: [i[0], i[1], i[2]],
                searchType: 0,
                create: function e(t, n) {
                    return Date.now()
                },
                template: function e(t, n) {
                    return n.name
                },
                showCount: 0,
                isCreate: false,
                placeholder: n,
                clearInput: false
            };
            this.select = null;
            this.values = [];
            Q.extend(this.config, t, {
                searchUrl: t.isSearch ? t.searchUrl : null,
                placeholder: t.optionsFirst ? t.optionsFirst.value ? n : t.optionsFirst.innerHTML || n : n,
                btns: t.radio ? [i[1]] : [i[0], i[1], i[2]]
            }, r[t.name] || a);
            if (isNaN(this.config.showCount) || this.config.showCount <= 0) {
                this.config.showCount = 19921012
            }
        };
    var o = function e() {
        this.appender();
        this.on();
        this.onreset()
    };
    o.prototype.appender = function() {
        if (!Array.prototype.map) {
            Array.prototype.map = function(e, t) {
                var n, i, a, r = Object(this),
                    l = r.length >>> 0;
                if (t) {
                    n = t
                }
                i = new Array(l);
                a = 0;
                while (a < l) {
                    var o, s;
                    if (a in r) {
                        o = r[a];
                        s = e.call(n, o, a, r);
                        i[a] = s
                    }
                    a++
                }
                return i
            }
        }
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function e(t, n) {
                var i, a;
                if (this == null) {
                    throw new TypeError("this is null or not defined")
                }
                var r = Object(this);
                var l = r.length >>> 0;
                if (typeof t !== "function") {
                    throw new TypeError(t + " is not a function")
                }
                if (arguments.length > 1) {
                    i = n
                }
                a = 0;
                while (a < l) {
                    var o;
                    if (a in r) {
                        o = r[a];
                        t.call(i, o, a, r)
                    }
                    a++
                }
            }
        }
        if (!Array.prototype.filter) {
            Array.prototype.filter = function(e) {
                if (this === void 0 || this === null) {
                    throw new TypeError
                }
                var t = Object(this);
                var n = t.length >>> 0;
                if (typeof e !== "function") {
                    throw new TypeError
                }
                var i = [];
                var a = arguments[1];
                for (var r = 0; r < n; r++) {
                    if (r in t) {
                        var l = t[r];
                        if (e.call(a, l, r, t)) {
                            i.push(l)
                        }
                    }
                }
                return i
            }
        }
    };
    o.prototype.init = function(e) {
        var h = this;
        Q(e ? e : "select[" + v + "]").each(function(e, t) {
            var n = Q(t),
                i = n.attr(v),
                a = n.next(".layui-form-select"),
                r = n.next("." + m),
                l = {
                    name: i,
                    disabled: t.disabled,
                    max: n.attr(T) - 0,
                    isSearch: n.attr(k) != undefined,
                    searchUrl: n.attr(k),
                    isCreate: n.attr(S) != undefined,
                    radio: n.attr(D) != undefined,
                    skin: n.attr(L),
                    direction: n.attr(j),
                    optionsFirst: t.options[0],
                    height: n.attr(A),
                    formname: n.attr("name") || n.attr("_name"),
                    layverify: n.attr("lay-verify") || n.attr("_lay-verify"),
                    layverType: n.attr("lay-verType"),
                    searchType: n.attr(b) == "dl" ? 1 : 0,
                    showCount: n.attr(C) - 0
                },
                o = n.find("option[selected]").toArray().map(function(e) {
                    return {
                        name: e.innerHTML,
                        value: e.value
                    }
                }),
                s = new $(l);
            s.values = o;
            if (s.config.init) {
                s.values = s.config.init.map(function(e) {
                    if ((typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
                        return e
                    }
                    return {
                        name: n.find('option[value="' + e + '"]').text(),
                        value: e
                    }
                }).filter(function(e) {
                    return e.name
                });
                s.config.init = s.values.concat([])
            } else {
                s.config.init = o.concat([])
            }!s.values && (s.values = []);
            q[i] = s;
            a[0] && a.remove();
            r[0] && r.remove();
            var d = h.renderSelect(i, s.config.placeholder, t);
            var c = !s.config.height || s.config.height == "auto" ? "" : 'xm-hg style="height: 34px;"';
            var f = ['<div class="' + x + '">', '<input type="text" fsw class="' + M + " " + y + '" ' + (s.config.isSearch ? "" : 'style="display: none;"') + ' autocomplete="off" debounce="0" />', "</div>"];
            var u = Q('<div class="' + P + '" ' + L + '="' + s.config.skin + '">\n\t\t\t\t\t<input class="' + _ + '" value="" name="' + s.config.formname + '" lay-verify="' + s.config.layverify + '" lay-verType="' + s.config.layverType + '" type="text" style="position: absolute;bottom: 0; z-index: -1;width: 100%; height: 100%; border: none; opacity: 0;"/>\n\t\t\t\t\t<div class="' + I + " " + (s.config.disabled ? N : "") + '">\n\t\t\t\t\t\t<div class="' + M + " " + v + '" ' + c + ">\n\t\t\t\t\t\t\t" + f.join("") + '\n\t\t\t\t\t\t\t<i class="' + O + '"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="' + g + '">\n\t\t\t\t\t\t\t<input type="text" autocomplete="off" placeholder="' + s.config.placeholder + '" readonly="readonly" unselectable="on" class="' + M + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<dl xid="' + i + '" class="' + F + " " + (s.config.radio ? D : "") + '">' + d + "</dl>\n\t\t\t\t</div>");
            var p = Q('<div class="' + m + '" FS_ID="' + i + '"></div>');
            p.append(u);
            n.after(p);
            n.attr("lay-ignore", "");
            n.removeAttr("name") && n.attr("_name", s.config.formname);
            n.removeAttr("lay-verify") && n.attr("_lay-verify", s.config.layverify);
            if (s.config.isSearch) {
                Y[i] = Q.extend({}, X, {
                    searchUrl: s.config.searchUrl
                }, Y[i]);
                Q(document).on("input", "div." + m + '[FS_ID="' + i + '"] .' + y, function(e) {
                    h.search(i, e, s.config.searchUrl)
                });
                if (s.config.searchUrl) {
                    h.triggerSearch(u, true)
                }
            } else {
                u.find("dl dd." + W).css("display", "none")
            }
        })
    };
    o.prototype.search = function(a, e, t, n) {
        var r = this;
        var i = void 0;
        if (n) {
            i = n
        } else {
            i = e.target;
            var l = e.keyCode;
            if (l === 9 || l === 13 || l === 37 || l === 38 || l === 39 || l === 40) {
                return false
            }
        }
        var o = Q.trim(i.value);
        this.changePlaceHolder(Q(i));
        var s = Y[a] ? Y[a] : X;
        t = s.searchUrl || t;
        var d = q[a],
            c = d.config.isCreate,
            f = Q('dl[xid="' + a + '"]').parents("." + P);
        if (t) {
            if (s.searchVal) {
                o = s.searchVal;
                s.searchVal = ""
            }
            if (!s.beforeSearch || s.beforeSearch && s.beforeSearch instanceof Function && s.beforeSearch(a, t, o)) {
                var u = s.delay;
                if (s.first) {
                    s.first = false;
                    u = 10
                }
                clearTimeout(d.clearid);
                d.clearid = setTimeout(function() {
                    f.find("dl > *:not(." + J + ")").remove();
                    f.find("dd." + V).addClass(U).text("请求中");
                    r.ajax(a, t, o, false, null, true)
                }, u)
            }
        } else {
            f.find("dl ." + h).removeClass(h);
            f.find("dl dd:not(." + J + ")").each(function(e, t) {
                var n = Q(t);
                var i = z.filter[a] || q[a].config.filter;
                if (i && i(a, o, r.getItem(a, n), n.hasClass(E)) == true) {
                    n.addClass(h)
                }
            });
            f.find("dl dt").each(function(e, t) {
                if (!Q(t).nextUntil("dt", ":not(." + h + ")").length) {
                    Q(t).addClass(h)
                }
            });
            this.create(a, c, o);
            var p = f.find("dl dd:not(." + J + "):not(." + h + ")");
            if (!p.length) {
                f.find("dd." + V).addClass(U).text("无匹配项")
            } else {
                f.find("dd." + V).removeClass(U)
            }
        }
    };
    o.prototype.isArray = function(e) {
        return Object.prototype.toString.call(e) == "[object Array]"
    };
    o.prototype.triggerSearch = function(e, i) {
        var a = this;
        (e ? [e] : Q("." + P).toArray()).forEach(function(e, t) {
            e = Q(e);
            var n = e.find("dl").attr("xid");
            if (n && q[n] && q[n].config.isEmpty || i) {
                a.search(n, null, null, q[n].config.searchType == 0 ? e.find("." + x + " ." + y) : e.find("dl ." + W + " ." + y))
            }
        })
    };
    o.prototype.clearInput = function(e) {
        var t = Q("." + m + '[fs_id="' + e + '"]');
        var n = q[e].config.searchType == 0 ? t.find("." + x + " ." + y) : t.find("dl ." + W + " ." + y);
        n.val("")
    };
    o.prototype.ajax = function(i, a, r, l, o, s, d, c) {
        var f = this;
        var u = Q("." + m + ' dl[xid="' + i + '"]').parents("." + P);
        if (!u[0] || !a) {
            return
        }
        var p = Y[i] ? Y[i] : X;
        var e = Q.extend(true, {}, p.data);
        e[p.searchName] = r;
        Q.ajax({
            type: p.type,
            headers: p.header,
            url: a,
            data: p.dataType == "json" ? JSON.stringify(e) : e,
            success: function e(t) {
                if (typeof t == "string") {
                    t = JSON.parse(t)
                }
                p.beforeSuccess && p.beforeSuccess instanceof Function && (t = p.beforeSuccess(i, a, r, t));
                if (f.isArray(t)) {
                    var n = {};
                    n[p.response.statusName] = p.response.statusCode;
                    n[p.response.msgName] = "";
                    n[p.response.dataName] = t;
                    t = n
                }
                if (t[p.response.statusName] != p.response.statusCode) {
                    u.find("dd." + V).addClass(U).text(t[p.response.msgName])
                } else {
                    u.find("dd." + V).removeClass(U);
                    f.renderData(i, t[p.response.dataName], l, o, s, c);
                    q[i].config.isEmpty = t[p.response.dataName].length == 0
                }
                d && d(i);
                p.success && p.success instanceof Function && p.success(i, a, r, t)
            },
            error: function e(t) {
                u.find("dd[lay-value]:not(." + J + ")").remove();
                u.find("dd." + V).addClass(U).text("服务异常");
                p.error && p.error instanceof Function && p.error(i, a, r, t)
            }
        })
    };
    o.prototype.renderData = function(n, e, t, i, a, r) {
        var l = this;
        if (t) {
            this.renderLinkage(n, e, i);
            return
        }
        if (r) {
            this.renderReplace(n, e);
            return
        }
        var o = Q("." + m + ' dl[xid="' + n + '"]').parents("." + P);
        var s = Y[n] ? Y[n] : X;
        var d = o.find("." + g + " input");
        e = this.exchangeData(n, e);
        var c = [];
        o.find("dl").html(this.renderSelect(n, d.attr("placeholder") || d.attr("back"), e.map(function(e) {
            var t = Q.extend({}, e, {
                innerHTML: e[s.keyName],
                value: e[s.keyVal],
                sel: e[s.keySel],
                disabled: e[s.keyDis],
                type: e.type,
                name: e[s.keyName]
            });
            if (t.sel) {
                c.push(t)
            }
            return t
        })));
        var f = o.find("." + x);
        var u = o.find("dl[xid]");
        if (a) {
            var p = q[n].values;
            p.forEach(function(e, t) {
                u.find('dd[lay-value="' + e.value + '"]').addClass(w)
            });
            c.forEach(function(e, t) {
                if (l.indexOf(p, e) == -1) {
                    l.addLabel(n, f, e);
                    u.find('dd[lay-value="' + e.value + '"]').addClass(w);
                    p.push(e)
                }
            })
        } else {
            c.forEach(function(e, t) {
                l.addLabel(n, f, e);
                u.find('dd[lay-value="' + e.value + '"]').addClass(w)
            });
            q[n].values = c
        }
        this.commonHandler(n, f)
    };
    o.prototype.renderLinkage = function(l, e, n) {
        var i = [],
            a = 0,
            o = {
                0: e
            },
            s = Y[l] ? Y[l] : X;
        G[l] = {};
        var t = function e() {
            var r = i[a++] = [],
                t = o;
            o = {};
            Q.each(t, function(a, e) {
                Q.each(e, function(e, t) {
                    var n = {
                        pid: a,
                        name: t[s.keyName],
                        value: t[s.keyVal]
                    };
                    G[l][n.value] = Q.extend(t, n);
                    r.push(n);
                    var i = t[s.keyChildren];
                    if (i && i.length) {
                        o[n.value] = i
                    }
                })
            })
        };
        do {
            t()
        } while (Object.getOwnPropertyNames(o).length);
        var r = Q("." + m + ' dl[xid="' + l + '"]').parents("." + P);
        var d = ['<div class="xm-select-linkage">'];
        Q.each(i, function(e, t) {
            var i = ['<div style="left: ' + (n - 0) * e + 'px;" class="xm-select-linkage-group xm-select-linkage-group' + (e + 1) + " " + (e != 0 ? "xm-select-linkage-hide" : "") + '">'];
            Q.each(t, function(e, t) {
                var n = '<li title="' + t.name + '" pid="' + t.pid + '" xm-value="' + t.value + '"><span>' + t.name + "</span></li>";
                i.push(n)
            });
            i.push("</div>");
            d = d.concat(i)
        });
        d.push('<div style="clear: both; height: 288px;"></div>');
        d.push("</div>");
        r.find("dl").html(d.join(""));
        r.find("." + y).css("display", "none")
    };
    o.prototype.renderReplace = function(n, e) {
        var i = this;
        var t = Q("." + m + ' dl[xid="' + n + '"]');
        var a = Y[n] ? Y[n] : X;
        e = this.exchangeData(n, e);
        G[n] = e;
        var r = e.map(function(e) {
            var t = Q.extend({}, e, {
                innerHTML: e[a.keyName],
                value: e[a.keyVal],
                sel: e[a.keySel],
                disabled: e[a.keyDis],
                type: e.type,
                name: e[a.keyName]
            });
            return i.createDD(n, t)
        }).join("");
        t.find("dd:not(." + J + "),dt:not([style])").remove();
        t.find("dt[style]").after(Q(r))
    };
    o.prototype.exchangeData = function(e, t) {
        var n = Y[e] ? Y[e] : X;
        var i = n["keyChildren"];
        var a = n["keyDis"];
        G[e] = {};
        var r = this.getChildrenList(t, i, a, [], false);
        return r
    };
    o.prototype.getChildrenList = function(e, t, n, i, a) {
        var r = [],
            l = 0;
        for (var o = 0; o < e.length; o++) {
            var s = e[o];
            if (s.type && s.type == "optgroup") {
                r.push(s);
                continue
            } else {
                l++
            }
            var d = i.concat([]);
            d.push(l - 1 + "_E");
            s[B] = JSON.stringify(d);
            s[n] = s[n] || a;
            r.push(s);
            var c = s[t];
            if (c && K.isArray(c) && c.length) {
                s["XM_TREE_FOLDER"] = true;
                var f = d.concat([]);
                var u = this.getChildrenList(c, t, n, f, s[n]);
                r = r.concat(u)
            }
        }
        return r
    };
    o.prototype.create = function(e, t, n) {
        if (t && n) {
            var i = q[e],
                a = Q('[xid="' + e + '"]'),
                r = a.find("dd." + J + "." + W),
                l = null,
                o = a.find("dd." + p);
            a.find("dd:not(." + J + "):not(." + p + ")").each(function(e, t) {
                if (n == Q(t).find("span").attr("name")) {
                    l = t
                }
            });
            if (!l) {
                var s = i.config.create(e, n);
                if (o[0]) {
                    o.attr("lay-value", s);
                    o.find("span").text(n);
                    o.find("span").attr("name", n);
                    o.removeClass(h)
                } else {
                    r.after(Q(this.createDD(e, {
                        name: n,
                        innerHTML: n,
                        value: s
                    }, p + " " + d)))
                }
            }
        } else {
            Q("[xid=" + e + "] dd." + p).remove()
        }
    };
    o.prototype.createDD = function(e, t, n) {
        var i = Y[e] ? Y[e] : X;
        var a = Q.trim(t.innerHTML);
        G[e][t.value] = Q(t).is("option") ? t = function() {
            var e = {};
            e[i.keyName] = a;
            e[i.keyVal] = t.value;
            e[i.keyDis] = t.disabled;
            return e
        }() : t;
        var r = q[e].config.template(e, t);
        var l = t[B];
        l ? l = JSON.parse(l) : l = [-1];
        var o = l[0] == -1 ? "" : 'tree-id="' + l.join("-") + '" tree-folder="' + !!t["XM_TREE_FOLDER"] + '"';
        return '<dd lay-value="' + t.value + '" class="' + (t.disabled ? E : "") + " " + (n ? n : "") + '" ' + o + '>\n\t\t\t\t\t<div class="xm-unselect xm-form-checkbox ' + (t.disabled ? E : "") + '"  style="margin-left: ' + (l.length - 1) * 30 + 'px">\n\t\t\t\t\t\t<i class="' + s + '"></i>\n\t\t\t\t\t\t<span name="' + a + '">' + r + "</span>\n\t\t\t\t\t</div>\n\t\t\t\t</dd>"
    };
    o.prototype.createQuickBtn = function(e, t) {
        return '<div class="' + R + '" method="' + e.name + '" title="' + e.name + '" ' + (t ? 'style="margin-right: ' + t + '"' : "") + '><i class="' + e.icon + '"></i><span>' + e.name + "</span></div>"
    };
    o.prototype.renderBtns = function(e, t, n) {
        var i = this;
        var a = [];
        var r = Q('dl[xid="' + e + '"]');
        a.push('<div class="' + l + '" show="' + t + '" style="max-width: ' + (r.prev().width() - 54) + 'px;">');
        Q.each(q[e].config.btns, function(e, t) {
            a.push(i.createQuickBtn(t, n))
        });
        a.push("</div>");
        a.push(this.createQuickBtn({
            icon: "xm-iconfont icon-caidan",
            name: ""
        }));
        return a.join("")
    };
    o.prototype.renderSelect = function(n, e, t) {
        var i = this;
        G[n] = {};
        var a = [];
        if (q[n].config.btns.length) {
            setTimeout(function() {
                var e = Q('dl[xid="' + n + '"]');
                e.parents("." + P).attr(b, q[n].config.searchType);
                e.find("." + l).css("max-width", e.prev().width() - 54 + "px")
            }, 10);
            a.push(['<dd lay-value="" class="' + J + '" style="background-color: #FFF!important;">', this.renderBtns(n, null, "30px"), "</dd>", '<dd lay-value="" class="' + J + " " + W + '" style="background-color: #FFF!important;">', '<i class="xm-iconfont icon-sousuo"></i>', '<input type="text" class="' + M + " " + y + '" placeholder="请搜索"/>', "</dd>"].join(""))
        } else {
            a.push('<dd lay-value="" class="' + J + '">' + e + "</dd>")
        }
        if (this.isArray(t)) {
            Q(t).each(function(e, t) {
                if (t) {
                    if (t.type && t.type === "optgroup") {
                        a.push("<dt>" + t.name + "</dt>")
                    } else {
                        a.push(i.createDD(n, t))
                    }
                }
            })
        } else {
            Q(t).find("*").each(function(e, t) {
                if (t.tagName.toLowerCase() == "option" && e == 0 && !t.value) {
                    return
                }
                if (t.tagName.toLowerCase() === "optgroup") {
                    a.push("<dt>" + t.label + "</dt>")
                } else {
                    a.push(i.createDD(n, t))
                }
            })
        }
        a.push('<dt style="display:none;"> </dt>');
        a.push('<dd class="' + J + " " + V + " " + (a.length === 2 ? U : "") + '">没有选项</dd>');
        return a.join("")
    };
    o.prototype.on = function() {
        var n = this;
        this.one();
        Q(document).on("click", function(e) {
            if (!Q(e.target).parents("." + I)[0]) {
                Q("." + m + " dl ." + h).removeClass(h);
                Q("." + m + " dl dd." + U).removeClass(U);
                Q("." + m + " dl dd." + p).remove();
                Q.each(q, function(e, t) {
                    n.clearInput(e);
                    if (!t.values.length) {
                        n.changePlaceHolder(Q('div[FS_ID="' + e + '"] .' + x))
                    }
                })
            }
            Q("." + m + " ." + f).each(function(e, t) {
                n.changeShow(Q(t).find("." + I), false)
            })
        })
    };
    o.prototype.calcLabelLeft = function(e, t, n) {
        var i = this.getPosition(e[0]);
        i.y = i.x + e[0].clientWidth;
        var a = e[0].offsetLeft;
        if (!e.find("span").length) {
            a = 0
        } else if (n) {
            var r = e.find("span:last");
            r.css("display") == "none" ? r = r.prev()[0] : r = r[0];
            var l = this.getPosition(r);
            l.y = l.x + r.clientWidth;
            if (l.y > i.y) {
                a = a - (l.y - i.y) - 5
            } else {
                a = 0
            }
        } else {
            if (t < 0) {
                var o = e.find(":last");
                o.css("display") == "none" ? o = o.prev()[0] : o = o[0];
                var s = this.getPosition(o);
                s.y = s.x + o.clientWidth;
                if (s.y > i.y) {
                    a -= 10
                }
            } else {
                if (a < 0) {
                    a += 10
                }
                if (a > 0) {
                    a = 0
                }
            }
        }
        e.css("left", a + "px")
    };
    o.prototype.one = function(e) {
        var C = this;
        Q(e ? e : document).off("click", "." + I).on("click", "." + I, function(e) {
            var t = Q(e.target),
                n = t.is(I) ? t : t.parents("." + I),
                i = n.next(),
                a = i.attr("xid");
            Q("dl[xid]").not(i).each(function(e, t) {
                C.clearInput(Q(t).attr("xid"))
            });
            Q("dl[xid]").not(i).find("dd." + h).removeClass(h);
            if (n.hasClass(N)) {
                return false
            }
            if (t.is("." + O) || t.is("." + y + "[readonly]")) {
                C.changeShow(n, !n.parents("." + P).hasClass(f));
                return false
            }
            if (n.find("." + y + ":not(readonly)")[0]) {
                var r = n.find("." + y),
                    l = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    o = C.getPosition(n[0]),
                    s = n.width();
                while (l.x > o.x) {
                    if (Q(document.elementFromPoint(l.x, l.y)).is(r)) {
                        r.focus();
                        C.changeShow(n, true);
                        return false
                    }
                    l.x -= 50
                }
            }
            if (t.is("." + y)) {
                C.changeShow(n, true);
                return false
            }
            if (t.is('i[fsw="' + v + '"]')) {
                var d = C.getItem(a, t),
                    c = i.find("dd[lay-value='" + d.value + "']");
                if (c.hasClass(E)) {
                    return false
                }
                C.handlerLabel(a, c, false, d);
                return false
            }
            C.changeShow(n, !n.parents("." + P).hasClass(f));
            return false
        });
        Q(e ? e : document).off("click", "dl." + F).on("click", "dl." + F, function(e) {
            var t = Q(e.target);
            if (t.is("." + H) || t.parents("." + H)[0]) {
                t = t.is("li") ? t : t.parents("li[xm-value]");
                var n = t.parents(".xm-select-linkage-group"),
                    i = t.parents("dl").attr("xid");
                if (!i) {
                    return false
                }
                n.find(".xm-select-active").removeClass("xm-select-active");
                t.addClass("xm-select-active");
                n.nextAll(".xm-select-linkage-group").addClass("xm-select-linkage-hide");
                var a = n.next(".xm-select-linkage-group");
                a.find("li").addClass("xm-select-linkage-hide");
                a.find('li[pid="' + t.attr("xm-value") + '"]').removeClass("xm-select-linkage-hide");
                if (!a[0] || a.find("li:not(.xm-select-linkage-hide)").length == 0) {
                    var r = [],
                        l = 0,
                        o = !t.hasClass("xm-select-this");
                    if (q[i].config.radio) {
                        t.parents(".xm-select-linkage").find(".xm-select-this").removeClass("xm-select-this")
                    }
                    do {
                        r[l++] = {
                            name: t.find("span").text(),
                            value: t.attr("xm-value")
                        };
                        t = t.parents(".xm-select-linkage-group").prev().find('li[xm-value="' + t.attr("pid") + '"]')
                    } while (t.length);
                    r.reverse();
                    var s = {
                        name: r.map(function(e) {
                            return e.name
                        }).join("/"),
                        value: r.map(function(e) {
                            return e.value
                        }).join("/")
                    };
                    C.handlerLabel(i, null, o, s)
                } else {
                    a.removeClass("xm-select-linkage-hide")
                }
                return false
            }
            if (t.is("dl")) {
                return false
            }
            if (t.is("dt")) {
                t.nextUntil("dt").each(function(e, t) {
                    t = Q(t);
                    if (t.hasClass(E) || t.hasClass(w)) {} else {
                        t.find("i:not(.icon-expand)").click()
                    }
                });
                return false
            }
            var d = t.is("dd") ? t : t.parents("dd");
            var c = d.parent("dl").attr("xid");
            if (d.hasClass(E)) {
                return false
            }
            if (t.is("i.icon-caidan")) {
                var f = [],
                    u = [];
                t.parents("dl").find('dd[tree-folder="true"]').each(function(e, t) {
                    Q(t).attr("xm-tree-hidn") == undefined ? f.push(t) : u.push(t)
                });
                var p = u.length ? u : f;
                p.forEach(function(e) {
                    return e.click()
                });
                return false
            }
            var h = d.attr("tree-id");
            if (h) {
                if (t.is("i:not(.icon-expand)")) {
                    C.handlerLabel(c, d, !d.hasClass(w));
                    return false
                }
                var v = Y[c] || X;
                var m = v.tree;
                var y = d.nextAll('dd[tree-id^="' + h + '"]');
                if (y && y.length) {
                    var g = y[0].clientHeight;
                    g ? (C.addTreeHeight(d, g), g = 0) : (g = d.attr("xm-tree-hidn") || 36, d.removeAttr("xm-tree-hidn"), d.find(">i").remove(), y = y.filter(function(e, t) {
                        return Q(t).attr("tree-id").split("-").length - 1 == h.split("-").length
                    }));
                    y.animate({
                        height: g
                    }, 150);
                    return false
                } else {
                    if (m.nextClick && m.nextClick instanceof Function) {
                        m.nextClick(c, C.getItem(c, d), function(e) {
                            if (!e || !e.length) {
                                C.handlerLabel(c, d, !d.hasClass(w))
                            } else {
                                d.attr("tree-folder", "true");
                                var n = [];
                                e.forEach(function(e, t) {
                                    e.innerHTML = e[v.keyName];
                                    e[B] = JSON.stringify(h.split("-").concat([t]));
                                    n.push(C.createDD(c, e));
                                    G[c][e[v.keyVal]] = e
                                });
                                d.after(n.join(""))
                            }
                        });
                        return false
                    }
                }
            }
            if (d.hasClass(J)) {
                var x = t.is("." + R) ? t : t.parents("." + R);
                if (!x[0]) {
                    return false
                }
                var k = x.attr("method");
                var b = q[c].config.btns.filter(function(e) {
                    return e.name == k
                })[0];
                b && b.click && b.click instanceof Function && b.click(c, C);
                return false
            }
            C.handlerLabel(c, d, !d.hasClass(w));
            return false
        })
    };
    o.prototype.addTreeHeight = function(e, i) {
        var a = this;
        var t = e.attr("tree-id");
        var n = e.nextAll('dd[tree-id^="' + t + '"]');
        if (n.length) {
            e.append('<i class="xm-iconfont icon-expand"></i>');
            e.attr("xm-tree-hidn", i);
            n.each(function(e, t) {
                var n = Q(t);
                a.addTreeHeight(n, i)
            })
        }
    };
    var G = {};
    o.prototype.getItem = function(e, t) {
        if (t instanceof Q) {
            if (t.is('i[fsw="' + v + '"]')) {
                var n = t.parent();
                return G[e][t] || {
                    name: n.find("font").text(),
                    value: n.attr("value")
                }
            }
            var i = t.attr("lay-value");
            return !G[e][i] ? G[e][i] = {
                name: t.find("span[name]").attr("name"),
                value: i
            } : G[e][i]
        } else if (typeof t == "string" && t.indexOf("/") != -1) {
            return G[e][t] || {
                name: this.valToName(e, t),
                value: t
            }
        }
        return G[e][t]
    };
    o.prototype.linkageAdd = function(e, t) {
        var n = Q('dl[xid="' + e + '"]');
        n.find(".xm-select-active").removeClass("xm-select-active");
        var i = t.value.split("/");
        var a = void 0,
            r = void 0,
            l = 0;
        var o = [];
        do {
            a = i[l];
            r = n.find(".xm-select-linkage-group" + (l + 1) + ' li[xm-value="' + a + '"]');
            r[0] && o.push(r);
            l++
        } while (r.length && a != undefined);
        if (o.length == i.length) {
            Q.each(o, function(e, t) {
                t.addClass("xm-select-this")
            })
        }
    };
    o.prototype.linkageDel = function(e, t) {
        var n = Q('dl[xid="' + e + '"]');
        var i = t.value.split("/");
        var a = void 0,
            r = void 0,
            l = i.length - 1;
        do {
            a = i[l];
            r = n.find(".xm-select-linkage-group" + (l + 1) + ' li[xm-value="' + a + '"]');
            if (!r.parent().next().find("li[pid=" + a + "].xm-select-this").length) {
                r.removeClass("xm-select-this")
            }
            l--
        } while (r.length && a != undefined)
    };
    o.prototype.valToName = function(e, t) {
        var i = Q('dl[xid="' + e + '"]');
        var n = (t + "").split("/");
        if (!n.length) {
            return null
        }
        var a = [];
        Q.each(n, function(e, t) {
            var n = i.find(".xm-select-linkage-group" + (e + 1) + ' li[xm-value="' + t + '"] span').text();
            a.push(n)
        });
        return a.length == n.length ? a.join("/") : null
    };
    o.prototype.commonHandler = function(e, t) {
        if (!t || !t[0]) {
            return
        }
        this.checkHideSpan(e, t);
        this.changePlaceHolder(t);
        this.retop(t.parents("." + P));
        this.calcLabelLeft(t, 0, true);
        this.setHidnVal(e, t);
        t.parents("." + I + " ." + v).attr("title", q[e].values.map(function(e) {
            return e.name
        }).join(","))
    };
    o.prototype.initVal = function(e) {
        var o = this;
        var t = {};
        if (e) {
            t[e] = q[e]
        } else {
            t = q
        }
        Q.each(t, function(n, e) {
            var t = e.values,
                i = Q('dl[xid="' + n + '"]').parent(),
                a = i.find("." + x),
                r = i.find("dl");
            r.find("dd." + w).removeClass(w);
            var l = t.concat([]);
            l.concat([]).forEach(function(e, t) {
                o.addLabel(n, a, e);
                r.find('dd[lay-value="' + e.value + '"]').addClass(w)
            });
            if (e.config.radio) {
                l.length && t.push(l[l.length - 1])
            }
            o.commonHandler(n, a)
        })
    };
    o.prototype.setHidnVal = function(e, t) {
        if (!t || !t[0]) {
            return
        }
        t.parents("." + m).find("." + _).val(q[e].values.map(function(e) {
            return e.value
        }).join(","))
    };
    o.prototype.handlerLabel = function(e, t, n, i, a) {
        var r = Q('[xid="' + e + '"]').prev().find("." + x),
            l = t && this.getItem(e, t),
            o = q[e].values,
            s = q[e].config.on || z.on[e],
            d = q[e].config.endOn || z.endOn[e];
        if (i) {
            l = i
        }
        var c = q[e];
        if (n && c.config.max && c.values.length >= c.config.max) {
            var f = z.maxTips[e] || q[e].config.maxTips;
            f && f(e, o.concat([]), l, c.config.max);
            return
        }
        if (!a) {
            if (s && s instanceof Function && s(e, o.concat([]), l, n, t && t.hasClass(E)) == false) {
                return
            }
        }
        var u = Q('dl[xid="' + e + '"]');
        n ? (t && t[0] ? (t.addClass(w), t.removeClass(p)) : u.find(".xm-select-linkage")[0] && this.linkageAdd(e, l), this.addLabel(e, r, l), o.push(l)) : (t && t[0] ? t.removeClass(w) : u.find(".xm-select-linkage")[0] && this.linkageDel(e, l), this.delLabel(e, r, l), this.remove(o, l));
        if (!r[0]) return;
        if (c.config.radio) {
            this.changeShow(r, false)
        }
        r.parents("." + I).prev().removeClass("layui-form-danger");
        c.config.clearInput && this.clearInput(e);
        this.commonHandler(e, r);
        !a && d && d instanceof Function && d(e, o.concat([]), l, n, t && t.hasClass(E))
    };
    o.prototype.addLabel = function(e, t, n) {
        if (!n) return;
        var i = 'fsw="' + v + '"';
        var a = [Q("<span " + i + ' value="' + n.value + '"><font ' + i + ">" + n.name + "</font></span>"), Q("<i " + i + ' class="xm-iconfont icon-close"></i>')],
            r = a[0],
            l = a[1];
        r.append(l);
        var o = q[e];
        if (o.config.radio) {
            o.values.length = 0;
            Q('dl[xid="' + e + '"]').find("dd." + w + ':not([lay-value="' + n.value + '"])').removeClass(w);
            t.find("span").remove()
        }
        t.find("input").css("width", "50px");
        t.find("input").before(r)
    };
    o.prototype.delLabel = function(e, t, n) {
        if (!n) return;
        t.find('span[value="' + n.value + '"]:first').remove()
    };
    o.prototype.checkHideSpan = function(e, t) {
        var n = t.parents("." + v)[0].offsetHeight + 5;
        t.find("span.xm-span-hide").removeClass("xm-span-hide");
        t.find("span[style]").remove();
        var i = q[e].config.showCount;
        t.find("span").each(function(e, t) {
            if (e >= i) {
                Q(t).addClass("xm-span-hide")
            }
        });
        var a = t.find("span:eq(" + i + ")");
        a[0] && a.before(Q('<span style="padding-right: 6px;" fsw="' + v + '"> + ' + (t.find("span").length - i) + "</span>"))
    };
    o.prototype.retop = function(e) {
        var t = e.find("dl"),
            n = e.offset().top + e.outerHeight() + 5 - c.scrollTop(),
            i = t.outerHeight();
        var a = e.hasClass("layui-form-selectup") || t.css("top").indexOf("-") != -1 || n + i > c.height() && n >= i;
        e = e.find("." + v);
        var r = q[t.attr("xid")];
        var l = t.parents(".layui-form-pane")[0] && t.prev()[0].clientHeight > 38 ? 14 : 10;
        if (r && r.config.direction == "up" || a) {
            a = true;
            if (r && r.config.direction == "down") {
                a = false
            }
        }
        var o = e[0].offsetTop + e.height() + l;
        if (a) {
            t.css({
                top: "auto",
                bottom: o + 3 + "px"
            })
        } else {
            t.css({
                top: o + "px",
                bottom: "auto"
            })
        }
    };
    o.prototype.changeShow = function(e, t) {
        Q(".layui-form-selected").removeClass("layui-form-selected");
        var n = e.parents("." + P),
            i = n.hasClass(f),
            a = n.find("dl").attr("xid");
        Q("." + m + " ." + P).not(n).removeClass(f);
        if (t) {
            this.retop(n);
            n.addClass(f);
            n.find("." + y).focus();
            if (!n.find("dl dd[lay-value]:not(." + J + ")").length) {
                n.find("dl ." + V).addClass(U)
            }
        } else {
            n.removeClass(f);
            this.clearInput(a);
            n.find("dl ." + U).removeClass(U);
            n.find("dl dd." + h).removeClass(h);
            n.find("dl dd." + p).remove();
            if (a && q[a] && q[a].config.isEmpty) {
                this.triggerSearch(n)
            }
            this.changePlaceHolder(n.find("." + x))
        }
        if (t != i) {
            var r = q[a].config.opened || z.opened[a];
            t && r && r instanceof Function && r(a);
            var l = q[a].config.closed || z.closed[a];
            !t && l && l instanceof Function && l(a)
        }
    };
    o.prototype.changePlaceHolder = function(e) {
        var t = e.parents("." + I);
        t[0] || (t = e.parents("dl").prev());
        if (!t[0]) {
            return
        }
        var n = e.parents("." + m).find("dl[xid]").attr("xid");
        if (q[n] && q[n].config.height) {} else {
            var i = t.find("." + v)[0].clientHeight;
            t.css("height", (i > 36 ? i + 4 : i) + "px");
            var a = t.parents("." + m).parent().prev();
            if (a.is(".layui-form-label") && t.parents(".layui-form-pane")[0]) {
                i = i > 36 ? i + 4 : i;
                t.css("height", i + "px");
                a.css({
                    height: i + 2 + "px",
                    lineHeight: i - 18 + "px"
                })
            }
        }
        var r = t.find("." + g + " input"),
            l = !e.find("span:last")[0] && !t.find("." + y).val();
        if (l) {
            var o = r.attr("back");
            r.removeAttr("back");
            r.attr("placeholder", o)
        } else {
            var s = r.attr("placeholder");
            r.removeAttr("placeholder");
            r.attr("back", s)
        }
    };
    o.prototype.indexOf = function(e, t) {
        for (var n = 0; n < e.length; n++) {
            if (e[n].value == t || e[n].value == (t ? t.value : t) || e[n] == t || JSON.stringify(e[n]) == JSON.stringify(t)) {
                return n
            }
        }
        return -1
    };
    o.prototype.remove = function(e, t) {
        var n = this.indexOf(e, t ? t.value : t);
        if (n > -1) {
            e.splice(n, 1);
            return true
        }
        return false
    };
    o.prototype.selectAll = function(i, a, e) {
        var r = this;
        var l = Q('[xid="' + i + '"]');
        if (!l[0]) {
            return
        }
        if (l.find(".xm-select-linkage")[0]) {
            return
        }
        l.find("dd[lay-value]:not(." + J + "):not(." + w + ")" + (e ? ":not(." + E + ")" : "")).each(function(e, t) {
            t = Q(t);
            var n = r.getItem(i, t);
            r.handlerLabel(i, l.find('dd[lay-value="' + n.value + '"]'), true, n, !a)
        })
    };
    o.prototype.removeAll = function(n, i, a) {
        var r = this;
        var l = Q('[xid="' + n + '"]');
        if (!l[0]) {
            return
        }
        if (l.find(".xm-select-linkage")[0]) {
            q[n].values.concat([]).forEach(function(e, t) {
                var n = e.value.split("/");
                var i = void 0,
                    a = void 0,
                    r = 0;
                do {
                    i = n[r++];
                    a = l.find(".xm-select-linkage-group" + r + ':not(.xm-select-linkage-hide) li[xm-value="' + i + '"]');
                    a.click()
                } while (a.length && i != undefined)
            });
            return
        }
        q[n].values.concat([]).forEach(function(e, t) {
            if (a && l.find('dd[lay-value="' + e.value + '"]').hasClass(E)) {} else {
                r.handlerLabel(n, l.find('dd[lay-value="' + e.value + '"]'), false, e, !i)
            }
        })
    };
    o.prototype.reverse = function(i, a, e) {
        var r = this;
        var l = Q('[xid="' + i + '"]');
        if (!l[0]) {
            return
        }
        if (l.find(".xm-select-linkage")[0]) {
            return
        }
        l.find("dd[lay-value]:not(." + J + ")" + (e ? ":not(." + E + ")" : "")).each(function(e, t) {
            t = Q(t);
            var n = r.getItem(i, t);
            r.handlerLabel(i, l.find('dd[lay-value="' + n.value + '"]'), !t.hasClass(w), n, !a)
        })
    };
    o.prototype.skin = function(e) {
        var t = ["default", "primary", "normal", "warm", "danger"];
        var n = t[Math.floor(Math.random() * t.length)];
        Q('dl[xid="' + e + '"]').parents("." + m).find("." + P).attr("xm-select-skin", n);
        this.check(e) && this.commonHandler(e, Q('dl[xid="' + e + '"]').parents("." + m).find("." + x))
    };
    o.prototype.getPosition = function(e) {
        var t = 0,
            n = 0;
        while (e != null) {
            t += e.offsetLeft;
            n += e.offsetTop;
            e = e.offsetParent
        }
        return {
            x: t,
            y: n
        }
    };
    o.prototype.onreset = function() {
        Q(document).on("click", "[type=reset]", function(e) {
            Q(e.target).parents("form").find("." + m + " dl[xid]").each(function(e, t) {
                var n = t.getAttribute("xid"),
                    i = Q(t),
                    a = void 0,
                    r = {};
                K.removeAll(n);
                q[n].config.init.forEach(function(e, t) {
                    if (e && (!r[e] || q[n].config.repeat) && (a = i.find('dd[lay-value="' + e.value + '"]'))[0]) {
                        K.handlerLabel(n, a, true);
                        r[e] = 1
                    }
                })
            })
        })
    };
    o.prototype.bindEvent = function(n, e, i) {
        if (e && e instanceof Function) {
            i = e;
            e = null
        }
        if (i && i instanceof Function) {
            if (!e) {
                Q.each(q, function(e, t) {
                    q[e] ? q[e].config[n] = i : z[n][e] = i
                })
            } else {
                q[e] ? (q[e].config[n] = i, delete z[n][e]) : z[n][e] = i
            }
        }
    };
    o.prototype.check = function(e, t) {
        if (Q('dl[xid="' + e + '"]').length) {
            return true
        } else if (Q('select[xm-select="' + e + '"]').length) {
            if (!t) {
                this.render(e, Q('select[xm-select="' + e + '"]'));
                return true
            }
        } else {
            delete q[e];
            return false
        }
    };
    o.prototype.render = function(e, t) {
        K.init(t);
        K.one(Q('dl[xid="' + e + '"]').parents("." + m));
        K.initVal(e)
    };
    o.prototype.log = function(e) {
        console.log(e)
    };
    var u = function e() {
        this.v = t;
        this.render()
    };
    var K = new o;
    u.prototype.value = function(i, e, t) {
        if (typeof i != "string") {
            return []
        }
        var a = q[i];
        if (!K.check(i)) {
            return []
        }
        if (typeof e == "string" || e == undefined) {
            var n = a.values.concat([]) || [];
            if (e == "val") {
                return n.map(function(e) {
                    return e.value
                })
            }
            if (e == "valStr") {
                return n.map(function(e) {
                    return e.value
                }).join(",")
            }
            if (e == "name") {
                return n.map(function(e) {
                    return e.name
                })
            }
            if (e == "nameStr") {
                return n.map(function(e) {
                    return e.name
                }).join(",")
            }
            return n
        }
        if (K.isArray(e)) {
            var r = Q('[xid="' + i + '"]'),
                l = {},
                o = void 0,
                s = true;
            if (t == false) {
                s = false
            } else if (t == true) {
                s = true
            } else {
                K.removeAll(i)
            }
            if (s) {
                a.values.forEach(function(e, t) {
                    l[e.value] = 1
                })
            }
            e.forEach(function(e, t) {
                if (e && (!l[e] || a.config.repeat)) {
                    if ((o = r.find('dd[lay-value="' + e + '"]'))[0]) {
                        K.handlerLabel(i, o, s, null, true);
                        l[e] = 1
                    } else {
                        var n = K.valToName(i, e);
                        if (n) {
                            K.handlerLabel(i, o, s, K.getItem(i, e), true);
                            l[e] = 1
                        }
                    }
                }
            })
        }
    };
    u.prototype.on = function(e, t, n) {
        K.bindEvent(n ? "endOn" : "on", e, t);
        return this
    };
    u.prototype.filter = function(e, t) {
        K.bindEvent("filter", e, t);
        return this
    };
    u.prototype.maxTips = function(e, t) {
        K.bindEvent("maxTips", e, t);
        return this
    };
    u.prototype.opened = function(e, t) {
        K.bindEvent("opened", e, t);
        return this
    };
    u.prototype.closed = function(e, t) {
        K.bindEvent("closed", e, t);
        return this
    };
    u.prototype.config = function(e, n, t) {
        if (e && (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
            t = n == true;
            n = e;
            e = null
        }
        if (n && (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object") {
            if (t) {
                n.header || (n.header = {});
                n.header["Content-Type"] = "application/json; charset=UTF-8";
                n.dataType = "json"
            }
            e ? (Y[e] = Q.extend(true, {}, Y[e] || X, n), !K.check(e) && this.render(e), q[e] && n.direction && (q[e].config.direction = n.direction), q[e] && n.clearInput && (q[e].config.clearInput = true), n.searchUrl && q[e] && K.triggerSearch(Q("." + m + ' dl[xid="' + e + '"]').parents("." + P), true)) : (Q.extend(true, X, n), Q.each(Y, function(e, t) {
                Q.extend(true, t, n)
            }))
        }
        return this
    };
    u.prototype.render = function(e, t) {
        var n;
        if (e && (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
            t = e;
            e = null
        }
        var i = t ? (n = {
            init: t.init,
            disabled: t.disabled,
            max: t.max,
            isSearch: t.isSearch,
            searchUrl: t.searchUrl,
            isCreate: t.isCreate,
            radio: t.radio,
            skin: t.skin,
            direction: t.direction,
            height: t.height,
            formname: t.formname,
            layverify: t.layverify,
            layverType: t.layverType,
            showCount: t.showCount,
            placeholder: t.placeholder,
            create: t.create,
            filter: t.filter,
            maxTips: t.maxTips,
            on: t.on
        }, _defineProperty(n, "on", t.on), _defineProperty(n, "opened", t.opened), _defineProperty(n, "closed", t.closed), _defineProperty(n, "template", t.template), _defineProperty(n, "clearInput", t.clearInput), n) : {};
        t && t.searchType != undefined && (i.searchType = t.searchType == "dl" ? 1 : 0);
        if (e) {
            r[e] = {};
            Q.extend(r[e], q[e] ? q[e].config : {}, i)
        } else {
            Q.extend(a, i)
        }(Q("select[" + v + '="' + e + '"]')[0] ? Q("select[" + v + '="' + e + '"]') : Q("select[" + v + "]")).each(function(e, t) {
            var n = t.getAttribute(v);
            K.render(n, t);
            setTimeout(function() {
                return K.setHidnVal(n, Q('select[xm-select="' + n + '"] + div.' + m + " ." + x))
            }, 10)
        });
        return this
    };
    u.prototype.disabled = function(e) {
        var t = {};
        e ? K.check(e) && (t[e] = q[e]) : t = q;
        Q.each(t, function(e, t) {
            Q('dl[xid="' + e + '"]').prev().addClass(N)
        });
        return this
    };
    u.prototype.undisabled = function(e) {
        var t = {};
        e ? K.check(e) && (t[e] = q[e]) : t = q;
        Q.each(t, function(e, t) {
            Q('dl[xid="' + e + '"]').prev().removeClass(N)
        });
        return this
    };
    u.prototype.data = function(e, t, n) {
        if (!e || !t || !n) {
            K.log("id: " + e + " param error !!!");
            return this
        }
        if (!K.check(e)) {
            K.log("id: " + e + " not render !!!");
            return this
        }
        this.value(e, []);
        this.config(e, n);
        if (t == "local") {
            K.renderData(e, n.arr, n.linkage == true, n.linkageWidth ? n.linkageWidth : "100")
        } else if (t == "server") {
            K.ajax(e, n.url, n.keyword, n.linkage == true, n.linkageWidth ? n.linkageWidth : "100")
        }
        return this
    };
    u.prototype.btns = function(e, o, s) {
        if (e && K.isArray(e)) {
            o = e;
            e = null
        }
        if (!o || !K.isArray(o)) {
            return this
        }
        var t = {};
        e ? K.check(e) && (t[e] = q[e]) : t = q;
        o = o.map(function(e) {
            if (typeof e == "string") {
                if (e == "select") {
                    return i[0]
                }
                if (e == "remove") {
                    return i[1]
                }
                if (e == "reverse") {
                    return i[2]
                }
                if (e == "skin") {
                    return i[3]
                }
            }
            return e
        });
        Q.each(t, function(e, t) {
            t.config.btns = o;
            var n = Q('dl[xid="' + e + '"]').find("." + J + ":first");
            if (o.length) {
                var i = s && s.show && (s.show == "name" || s.show == "icon") ? s.show : "";
                var a = K.renderBtns(e, i, s && s.space ? s.space : "30px");
                n.html(a)
            } else {
                var r = n.parents("." + P).find("." + g + " input");
                var l = r.attr("placeholder") || r.attr("back");
                n.html(l);
                n.removeAttr("style")
            }
        });
        return this
    };
    u.prototype.search = function(e, t) {
        if (e && K.check(e)) {
            Y[e] = Q.extend(true, {}, Y[e] || X, {
                first: true,
                searchVal: t
            });
            K.triggerSearch(Q('dl[xid="' + e + '"]').parents("." + P), true)
        }
        return this
    };
    u.prototype.replace = function(e, t, n) {
        var i = this;
        if (!e || !t || !n) {
            K.log("id: " + e + " param error !!!");
            return this
        }
        if (!K.check(e, true)) {
            K.log("id: " + e + " not render !!!");
            return this
        }
        var a = this.value(e, "val");
        this.value(e, []);
        this.config(e, n);
        if (t == "local") {
            K.renderData(e, n.arr, n.linkage == true, n.linkageWidth ? n.linkageWidth : "100", false, true);
            this.value(e, a, true)
        } else if (t == "server") {
            K.ajax(e, n.url, n.keyword, n.linkage == true, n.linkageWidth ? n.linkageWidth : "100", false, function(e) {
                i.value(e, a, true)
            }, true)
        }
    };
    return new u
});