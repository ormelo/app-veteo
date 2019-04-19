'use strict';
!function(m) {
  /**
   * @param {string} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  t.r = function(data) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(data, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(data, "__esModule", {
      value : true
    });
  };
  /**
   * @param {string} o
   * @param {number} proplist
   * @return {?}
   */
  t.t = function(o, proplist) {
    if (1 & proplist && (o = t(o)), 8 & proplist) {
      return o;
    }
    if (4 & proplist && "object" == typeof o && o && o.__esModule) {
      return o;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : o
    }), 2 & proplist && "string" != typeof o) {
      var s;
      for (s in o) {
        t.d(d, s, function(namefrom) {
          return o[namefrom];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  t.n = function(e) {
    /** @type {function(): ?} */
    var n = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {string} t
   * @param {string} object
   * @return {?}
   */
  t.o = function(t, object) {
    return Object.prototype.hasOwnProperty.call(t, object);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 38);
}([function(module, n, factory) {
  module.exports = factory(17);
}, function(mixin, n, typeChecker) {
  var error = typeChecker(19);
  /**
   * @param {string} format
   * @return {?}
   */
  mixin.exports = function(format) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var object = null != arguments[i] ? arguments[i] : {};
      /** @type {!Array<string>} */
      var r = Object.keys(object);
      if ("function" == typeof Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        r = r.concat(Object.getOwnPropertySymbols(object).filter(function(key) {
          return Object.getOwnPropertyDescriptor(object, key).enumerable;
        }));
      }
      r.forEach(function(p) {
        error(format, p, object[p]);
      });
    }
    return format;
  };
}, function(mixin, n) {
  /**
   * @param {!Object} attrs
   * @param {!Function} fn
   * @param {!Function} o
   * @param {!Function} c
   * @param {!Function} d
   * @param {string} method
   * @param {!Object} a
   * @return {?}
   */
  function format(attrs, fn, o, c, d, method, a) {
    try {
      var r = attrs[method](a);
      var p = r.value;
    } catch ($V31) {
      return void o($V31);
    }
    if (r.done) {
      fn(p);
    } else {
      Promise.resolve(p).then(c, d);
    }
  }
  /**
   * @param {(!Function|string)} b
   * @return {?}
   */
  mixin.exports = function(b) {
    return function() {
      var a = this;
      /** @type {!Arguments} */
      var t = arguments;
      return new Promise(function(n, e) {
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        function end(data) {
          format(r, n, e, end, size, "next", data);
        }
        /**
         * @param {!Object} d
         * @return {undefined}
         */
        function size(d) {
          format(r, n, e, end, size, "throw", d);
        }
        var r = b.apply(a, t);
        end(void 0);
      });
    };
  };
}, function(canCreateDiscussions, a, e) {
  e.d(a, "b", function() {
    return warn;
  });
  e.d(a, "c", function() {
    return log;
  });
  e.d(a, "a", function() {
    return append_msg_me;
  });
  var s = e(6);
  /** @type {boolean} */
  var subPath = "object" === ("undefined" == typeof console ? "undefined" : e.n(s)()(console));
  /**
   * @param {?} message
   * @return {?}
   */
  var format = function(message) {
    return "[chatbot.com] - %s ".replace("%s", message);
  };
  /**
   * @param {?} e
   * @return {?}
   */
  var warn = function(e) {
    var code = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
    return subPath && console.error(code ? format(e) : e), false;
  };
  /**
   * @param {?} message
   * @return {?}
   */
  var log = function(message) {
    return subPath && console.warn(format(message)), false;
  };
  /**
   * @param {?} msg
   * @return {?}
   */
  var append_msg_me = function(msg) {
    throw format(msg);
  };
}, , function(mixin) {
  mixin.exports = {
    polyfillUrl : "https://cdn.chatbot.com/widget/polyfill.js",
    apiUrl : "https://api.chatbot.com",
    iframeUrl : "https://cdn.chatbot.com/widget/chat.html",
    cdnUrl : "https://cdn.chatbot.com/widget",
    storagePrefix : "__be"
  };
}, function(obj, canCreateDiscussions) {
  /**
   * @param {string} obj
   * @return {?}
   */
  function stringify(obj) {
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(objOrTsid) {
      return typeof objOrTsid;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function fn(a) {
    return "function" == typeof Symbol && "symbol" === stringify(Symbol.iterator) ? obj.exports = fn = function(obj) {
      return stringify(obj);
    } : obj.exports = fn = function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : stringify(obj);
    }, fn(a);
  }
  /** @type {function(string): ?} */
  obj.exports = fn;
}, function(mixin, n, NFA) {
  var m = NFA(24);
  /**
   * @param {string} x
   * @param {string} n
   * @return {?}
   */
  mixin.exports = function(x, n) {
    if (null == x) {
      return {};
    }
    var k;
    var i;
    var a = m(x, n);
    if (Object.getOwnPropertySymbols) {
      /** @type {!Array<?>} */
      var removed = Object.getOwnPropertySymbols(x);
      /** @type {number} */
      i = 0;
      for (; i < removed.length; i++) {
        k = removed[i];
        if (!(0 <= n.indexOf(k))) {
          if (Object.prototype.propertyIsEnumerable.call(x, k)) {
            a[k] = x[k];
          }
        }
      }
    }
    return a;
  };
}, function(canCreateDiscussions, a, e) {
  e.d(a, "a", function() {
    return r;
  });
  /**
   * @return {undefined}
   */
  var r = function() {
  };
}, function(mixin, n, Clazz_doubleToInt) {
  var x = Clazz_doubleToInt(21);
  var y = Clazz_doubleToInt(22);
  var createFilePattern = Clazz_doubleToInt(23);
  /**
   * @param {string} a
   * @param {?} b
   * @return {?}
   */
  mixin.exports = function(a, b) {
    return x(a) || y(a, b) || createFilePattern();
  };
}, function(canCreateDiscussions, a, e) {
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function u(name, a) {
    return hasOwnProperty.call(a, name);
  }
  /**
   * @return {?}
   */
  function linkGen() {
    return Math.random().toString(36).substring(2);
  }
  /**
   * @param {!Function} first
   * @return {?}
   */
  function wrapOverride(first) {
    var r;
    /** @type {boolean} */
    var e = false;
    return function() {
      return e ? r : (e = true, r = first.apply(void 0, arguments));
    };
  }
  /**
   * @return {?}
   */
  function extend() {
    return (extend = Object.assign || function(result) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var e = arguments[i];
        var k;
        for (k in e) {
          if (Object.prototype.hasOwnProperty.call(e, k)) {
            result[k] = e[k];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  }
  /**
   * @param {!Node} elem
   * @return {?}
   */
  function removeElement(elem) {
    return elem.parentNode.removeChild(elem);
  }
  /**
   * @param {number} track
   * @return {?}
   */
  function fetch(track) {
    return new Promise(function(state, done) {
      var trackRemoved;
      next({
        next : state,
        error : done,
        complete : function() {
          /** @type {!Error} */
          var notRunningError = new Error("No elements in sequence.");
          /** @type {string} */
          notRunningError.code = "NO_ELEMENTS";
          done(notRunningError);
        }
      })((trackRemoved = track, function(canCreateDiscussions, checkVersion) {
        if (0 === canCreateDiscussions) {
          var r;
          var _name;
          /** @type {boolean} */
          var _localExports = false;
          /** @type {boolean} */
          var undefined = false;
          trackRemoved(0, function(bp, name) {
            return 0 === bp ? (r = name, void checkVersion(0, function(n, trOpts) {
              if (2 === n) {
                /** @type {boolean} */
                undefined = true;
              }
              r(n, trOpts);
            })) : 1 === bp ? (_localExports = true, _name = name, void r(1)) : void(2 === bp && !name && _localExports && (checkVersion(1, _name), undefined) || checkVersion(bp, name));
          });
        }
      }));
    });
  }
  /**
   * @param {number} height
   * @return {?}
   */
  function createPteros(height) {
    return void 0 === height && (height = -1), function(continuation) {
      return function(canCreateDiscussions, resolve) {
        if (0 === canCreateDiscussions) {
          var map;
          /** @type {boolean} */
          var parentContext = false;
          var whatToScale = height;
          /**
           * @param {number} callback
           * @param {?} data
           * @return {undefined}
           */
          var track = function(callback, data) {
            map(callback, data);
          };
          !function logout() {
            continuation(0, function(undefined, context) {
              return 0 === undefined ? (map = context, parentContext ? void track(1) : (parentContext = true, void resolve(0, track))) : 2 === undefined && context && 0 !== whatToScale ? (whatToScale--, void logout()) : void resolve(undefined, context);
            });
          }();
        }
      };
    };
  }
  /**
   * @param {number} error
   * @return {?}
   */
  function getItem(error) {
    return function(saveNotifs) {
      return function(canCreateDiscussions, debug) {
        /**
         * @param {number} v
         * @return {undefined}
         */
        function next(v) {
          /** @type {number} */
          g = setTimeout(function() {
            tmp(2);
            /** @type {!Error} */
            var e = new Error("Timeout.");
            /** @type {string} */
            e.code = "TIMEOUT";
            debug(2, e);
          }, v);
        }
        if (0 === canCreateDiscussions) {
          var tmp;
          var g;
          /** @type {boolean} */
          var isValid = error instanceof Date;
          saveNotifs(0, function(devicesWinUSB, val) {
            if (0 === devicesWinUSB) {
              return tmp = val, next(isValid ? error - Date.now() : error), void debug(0, function(e, axis) {
                if (2 === e) {
                  clearTimeout(g);
                }
                tmp(e, axis);
              });
            }
            if (2 === devicesWinUSB) {
              clearTimeout(g);
            } else {
              if (!(1 !== devicesWinUSB || isValid)) {
                clearTimeout(g);
                next(error);
              }
            }
            debug(devicesWinUSB, val);
          });
        }
      };
    };
  }
  /**
   * @param {!Error} msg
   * @return {?}
   */
  function interceptRequest(msg) {
    return function(canCreateDiscussions, write) {
      if (0 === canCreateDiscussions) {
        /** @type {boolean} */
        var e = false;
        write(0, function(canCreateDiscussions) {
          if (2 === canCreateDiscussions) {
            /** @type {boolean} */
            e = true;
          }
        });
        if (!e) {
          write(2, msg || new Error);
        }
      }
    };
  }
  /**
   * @param {!Function} n
   * @return {?}
   */
  function filter(n) {
    return function(fn) {
      return call(match(n)(fn));
    };
  }
  /**
   * @param {!Element} options
   * @param {number} id
   * @return {?}
   */
  function init(options, id) {
    if (void 0 === id) {
      id = {};
    }
    var row = put(id);
    var val = row[0];
    var name = row[1];
    var command = x();
    /** @type {number} */
    var i = _g++;
    var win = options.contentWindow;
    var err = load(options.src);
    var store = setup();
    /**
     * @param {string} name
     * @param {!Object} callback
     * @return {?}
     */
    var start = function(name, callback) {
      return resolve(result, i, name, callback);
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    var data = function(data) {
      win.postMessage(data, err);
    };
    var d = exports(parse(function(data) {
      return data.owner === result && data.instance === i;
    })(bindEvt(command)($())));
    var result = format(store, d, start, data);
    var date = exports(log(1)(createPteros(5)(getItem(500)(bindEvt(command)(send(d, data, start(event, name)))))));
    var res = fn(result, store.emit, data, val);
    return get(res)(filter(function() {
      return d;
    })(date)), {
      api : result,
      destroy : function() {
        /** @type {!Error} */
        var token = new Error("Destroyed.");
        /** @type {string} */
        token.code = "DESTROYED";
        command(2, token);
      },
      handshake$ : date
    };
  }
  /**
   * @param {number} m
   * @return {?}
   */
  function run(m) {
    if (void 0 === m) {
      m = {};
    }
    var url = log(1)(getItem(3E3)(parse(function(mark) {
      return mark.type === event;
    })($())));
    return {
      promise : fetch(match(function(data) {
        var mod = data.instance;
        var user = data.owner;
        var origin = data.origin;
        var row = put(m);
        var val = row[0];
        var str = row[1];
        /** @type {!Window} */
        var p = window.parent;
        var store = setup();
        /**
         * @param {?} sender
         * @return {undefined}
         */
        var callback = function(sender) {
          p.postMessage(sender, origin);
        };
        var file = parse(function(b) {
          return b.owner === user;
        })($());
        var result = format(store, file, function(value, callback) {
          return resolve(user, mod, value, callback);
        }, callback, data.data);
        var res = fn(result, store.emit, callback, val);
        return get(res)(file), callback(extend({}, data, {
          type : value,
          data : {
            error : false,
            result : str
          }
        })), result;
      })(url))
    };
  }
  /**
   * @param {!Object} options
   * @param {undefined} config
   * @return {?}
   */
  function render(options, config) {
    var instance;
    var div = options.container;
    var type = options.url;
    var frame = createElement(div, type);
    /**
     * @return {undefined}
     */
    var destroy = function() {
      removeElement(frame);
      if (instance) {
        instance.destroy();
      }
    };
    return {
      destroy : destroy,
      frame : frame,
      promise : fetch(log(1)(match(function(groupExist) {
        var self = instance.api;
        return self.data = groupExist, self.destroy = destroy, self.frame = frame, self;
      })(filter(function() {
        return (instance = init(frame, config)).handshake$;
      })(on(frame, "load")))))
    };
  }
  /**
   * @param {!Object} options
   * @param {undefined} config
   * @return {?}
   */
  function build(options, config) {
    var node;
    var div = options.container;
    var type = options.url;
    var callback = options.onConnected;
    var frame = createElement(div, type);
    /**
     * @return {undefined}
     */
    var destroy = function() {
      removeElement(frame);
      if (node) {
        node.destroy();
      }
    };
    return get(function(eventWidget) {
      var n = eventWidget.data;
      callback({
        destroy : destroy,
        frame : frame,
        data : n
      });
    })(createPteros()(filter(function() {
      return template(function(t, PL$58) {
        var options;
        var response;
        var destroy;
        var url;
        var container = (options = init({
          frame : frame
        }.frame, config), response = options.api, destroy = options.destroy, url = options.handshake$, {
          destroy : destroy,
          promise : fetch(match(function(t) {
            return response.data = t, response.destroy = destroy, response;
          })(url))
        });
        return container.promise.then(t, PL$58), (node = container).destroy;
      });
    })(on(frame, "load")))), {
      destroy : destroy,
      frame : frame
    };
  }
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty = {}.hasOwnProperty;
  Array.isArray;
  /**
   * @param {!Function} f
   * @return {?}
   */
  var delay = function(f) {
    return new Promise(function(cb) {
      cb(f());
    });
  };
  /**
   * @param {!Object} p
   * @return {?}
   */
  var create = function(p) {
    return p = p || Object.create(null), {
      on : function(name, data) {
        (p[name] || (p[name] = [])).push(data);
      },
      off : function(name, callback) {
        if (p[name]) {
          p[name].splice(p[name].indexOf(callback) >>> 0, 1);
        }
      },
      emit : function(c, result) {
        (p[c] || []).slice().map(function(listener) {
          listener(result);
        });
        (p["*"] || []).slice().map(function(cb) {
          cb(c, result);
        });
      }
    };
  };
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var update = Object.assign || function(l) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var h = arguments[i];
      var k;
      for (k in h) {
        if (Object.prototype.hasOwnProperty.call(h, k)) {
          l[k] = h[k];
        }
      }
    }
    return l;
  };
  /**
   * @return {?}
   */
  var setup = function() {
    var index = {};
    var self = create(index);
    return update({}, self, {
      off : function(type, callback) {
        if (type) {
          self.off(type, callback);
        } else {
          Object.keys(index).forEach(function(shpA) {
            delete index[shpA];
          });
        }
      },
      once : function(type, callback) {
        self.on(type, function selfDeleting(event) {
          self.off(type, selfDeleting);
          callback(event);
        });
      }
    });
  };
  e.d(a, "a", function() {
    return run;
  });
  e.d(a, "b", function() {
    return render;
  });
  e.d(a, "c", function() {
    return build;
  });
  /**
   * @param {!Function} r
   * @return {?}
   */
  var match = function(r) {
    return function(saveNotifs) {
      return function(canCreateDiscussions, slice) {
        if (0 === canCreateDiscussions) {
          saveNotifs(0, function(value, n) {
            slice(value, 1 === value ? r(n) : n);
          });
        }
      };
    };
  };
  /**
   * @param {!Object} t
   * @return {?}
   */
  var next = function(t) {
    return void 0 === t && (t = {}), function(objCallback) {
      if ("function" == typeof t) {
        t = {
          next : t
        };
      }
      var updateNotAvailable;
      /** @type {!Object} */
      var o = t;
      var at = o.next;
      var f = o.error;
      var orig = o.complete;
      objCallback(0, function(url, data) {
        if (0 === url) {
          /** @type {string} */
          updateNotAvailable = data;
        }
        if (1 === url && at) {
          at(data);
        }
        if (!(1 !== url && 0 !== url)) {
          updateNotAvailable(1);
        }
        if (2 === url && !data && orig) {
          orig();
        }
        if (2 === url && data && f) {
          f(data);
        }
      });
      return function() {
        if (updateNotAvailable) {
          updateNotAvailable(2);
        }
      };
    };
  };
  /**
   * @param {!Function} n
   * @return {?}
   */
  var parse = function(n) {
    return function(saveNotifs) {
      return function(canCreateDiscussions, _export) {
        var PL$2;
        if (0 === canCreateDiscussions) {
          saveNotifs(0, function(context, a) {
            if (0 === context) {
              _export(context, PL$2 = a);
            } else {
              if (1 === context) {
                if (n(a)) {
                  _export(context, a);
                } else {
                  PL$2(1);
                }
              } else {
                _export(context, a);
              }
            }
          });
        }
      };
    };
  };
  /**
   * @param {!Function} predicate
   * @return {?}
   */
  var get = function(predicate) {
    return function(before_create) {
      var received;
      before_create(0, function(canCreateDiscussions, n) {
        if (0 === canCreateDiscussions) {
          received = n;
        }
        if (1 === canCreateDiscussions) {
          predicate(n);
        }
        if (!(1 !== canCreateDiscussions && 0 !== canCreateDiscussions)) {
          received(1);
        }
      });
    };
  };
  /**
   * @param {?} fileChangeListener
   * @return {?}
   */
  var exports = function(fileChangeListener) {
    var cb;
    /** @type {!Array} */
    var f = [];
    return function(canCreateDiscussions, a) {
      if (0 === canCreateDiscussions) {
        f.push(a);
        /**
         * @param {number} password
         * @param {?} hash
         * @return {undefined}
         */
        var c = function(password, hash) {
          if (2 === password) {
            var e = f.indexOf(a);
            if (-1 < e) {
              f.splice(e, 1);
            }
            if (!f.length) {
              cb(2);
            }
          } else {
            cb(password, hash);
          }
        };
        if (1 !== f.length) {
          a(0, c);
        } else {
          fileChangeListener(0, function(ch, timeout) {
            if (0 === ch) {
              cb = timeout;
              a(0, c);
            } else {
              var input = f.slice(0);
              /** @type {boolean} */
              var isArray = Array.isArray(input);
              /** @type {number} */
              var p = 0;
              input = isArray ? input : input[Symbol.iterator]();
              for (;;) {
                var i;
                if (isArray) {
                  if (p >= input.length) {
                    break;
                  }
                  i = input[p++];
                } else {
                  if ((p = input.next()).done) {
                    break;
                  }
                  i = p.value;
                }
                i(ch, timeout);
              }
            }
            if (2 === ch) {
              /** @type {!Array} */
              f = [];
            }
          });
        }
      }
    };
  };
  /**
   * @return {?}
   */
  var x = function() {
    /** @type {!Array} */
    var parent = [];
    return function(finaltx, canvas) {
      if (0 === finaltx) {
        var obj = canvas;
        parent.push(obj);
        obj(0, function(canCreateDiscussions) {
          if (2 === canCreateDiscussions) {
            /** @type {number} */
            var n = parent.indexOf(obj);
            if (-1 < n) {
              parent.splice(n, 1);
            }
          }
        });
      } else {
        var log;
        /** @type {!Array<?>} */
        var items = parent.slice(0);
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var items_length = items.length;
        for (; i < items_length; i++) {
          log = items[i];
          if (-1 < parent.indexOf(log)) {
            log(finaltx, canvas);
          }
        }
      }
    };
  };
  /**
   * @param {number} cols
   * @return {?}
   */
  var log = function(cols) {
    return function(saveNotifs) {
      return function(canCreateDiscussions, cb) {
        /**
         * @param {?} type
         * @param {?} i
         * @return {undefined}
         */
        function i(type, i) {
          if (x < cols) {
            _loop(type, i);
          }
        }
        if (0 === canCreateDiscussions) {
          var _loop;
          /** @type {number} */
          var x = 0;
          saveNotifs(0, function(fallbackReleases, formattedSections) {
            if (0 === fallbackReleases) {
              _loop = formattedSections;
              cb(0, i);
            } else {
              if (1 === fallbackReleases) {
                if (x < cols) {
                  x++;
                  cb(fallbackReleases, formattedSections);
                  if (x === cols) {
                    cb(2);
                    _loop(2);
                  }
                }
              } else {
                cb(fallbackReleases, formattedSections);
              }
            }
          });
        }
      };
    };
  };
  var undefined = {};
  /**
   * @param {?} fn
   * @return {?}
   */
  var bindEvt = function(fn) {
    return function(saveNotifs) {
      return function(canCreateDiscussions, e) {
        if (0 === canCreateDiscussions) {
          var module;
          var type;
          /** @type {boolean} */
          var g = false;
          var value = undefined;
          saveNotifs(0, function(context, m) {
            if (0 === context) {
              return module = m, fn(0, function(context, a) {
                if (0 !== context) {
                  return 1 === context ? (value = void 0, type(2), module(2), void(g && e(2))) : void(2 === context && (type = null, a && (value = a, module(2), g && e(context, a))));
                }
                (type = a)(1);
              }), g = true, e(0, function(input, pipes) {
                if (value === undefined) {
                  if (2 === input && type) {
                    type(2);
                  }
                  module(input, pipes);
                }
              }), void(value !== undefined && e(2, value));
            }
            if (2 === context) {
              type(2);
            }
            e(context, m);
          });
        }
      };
    };
  };
  /** @type {string} */
  var EDGE_AUX = "@@livechat/postmessenger";
  /** @type {string} */
  var event = "handshake";
  /** @type {string} */
  var value = "response";
  /**
   * @param {!Function} drop
   * @return {?}
   */
  var merge = function(drop) {
    return function(canCreateDiscussions, has) {
      if (0 === canCreateDiscussions) {
        /** @type {boolean} */
        var e = false;
        has(0, function(canCreateDiscussions) {
          if (2 === canCreateDiscussions) {
            /** @type {boolean} */
            e = true;
          }
        });
        has(1, drop());
        if (!e) {
          has(2);
        }
      }
    };
  };
  /**
   * @param {?} resultCallback
   * @return {?}
   */
  var call = function(resultCallback) {
    return function(canCreateDiscussions, fn) {
      /**
       * @param {number} xhr
       * @param {?} data
       * @return {undefined}
       */
      function send(xhr, data) {
        if (1 === xhr) {
          (callback || complete)(1, data);
        }
        if (2 === xhr) {
          if (callback) {
            callback(2);
          }
          complete(2);
        }
      }
      if (0 === canCreateDiscussions) {
        var complete;
        var callback;
        /** @type {boolean} */
        var a = false;
        resultCallback(0, function(url, data) {
          if (0 === url) {
            /** @type {!Function} */
            complete = data;
            fn(0, send);
          } else {
            if (1 === url) {
              /** @type {!Function} */
              var new_data = data;
              if (callback) {
                callback(2);
              }
              new_data(0, function(tag, value) {
                if (0 === tag) {
                  (callback = value)(1);
                } else {
                  if (1 === tag) {
                    fn(1, value);
                  } else {
                    if (2 === tag && value) {
                      complete(2);
                      fn(2, value);
                    } else {
                      if (2 === tag) {
                        if (a) {
                          fn(2);
                        } else {
                          callback = void 0;
                          complete(1);
                        }
                      }
                    }
                  }
                }
              });
            } else {
              if (2 === url && data) {
                if (callback) {
                  callback(2);
                }
                fn(2, data);
              } else {
                if (2 === url) {
                  if (callback) {
                    /** @type {boolean} */
                    a = true;
                  } else {
                    fn(2);
                  }
                }
              }
            }
          }
        });
      }
    };
  };
  /**
   * @param {!Object} target
   * @param {string} type
   * @param {?} capture
   * @return {?}
   */
  var on = function(target, type, capture) {
    return function(canCreateDiscussions, callback) {
      if (0 === canCreateDiscussions) {
        /** @type {boolean} */
        var e = false;
        /**
         * @param {?} mu
         * @return {undefined}
         */
        var fn = function(mu) {
          callback(1, mu);
        };
        callback(0, function(canCreateDiscussions) {
          if (2 === canCreateDiscussions) {
            /** @type {boolean} */
            e = true;
            target.removeEventListener(type, fn, capture);
          }
        });
        if (!e) {
          target.addEventListener(type, fn, capture);
        }
      }
    };
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  var addressCurrentTime = function(e) {
    return !!e.data && e.data[EDGE_AUX];
  };
  var $ = wrapOverride(function() {
    return exports(match(function(event) {
      return event.data.origin = event.origin, event.data;
    })(parse(addressCurrentTime)(on(window, "message"))));
  });
  /** @type {number} */
  var requests = 0;
  /**
   * @param {?} object
   * @param {!Function} done
   * @param {!Element} event
   * @return {?}
   */
  var send = function(object, done, event) {
    return onAction = merge(function() {
      /** @type {number} */
      var request = requests++;
      return event.request = request, done(event), log(1)(filter(function(event) {
        if (!event.data.error) {
          return merge(function() {
            return event.data.result;
          });
        }
        var r = event.data.result;
        var a = r.real;
        var e = r.error;
        if (!a) {
          return interceptRequest(e);
        }
        /** @type {!Error} */
        var error = new Error(e.message);
        return u("code", e) && (error.code = e.code), interceptRequest(error);
      })(parse(function(event) {
        return event.type === value && event.request === request;
      })(object)));
    }), function(canCreateDiscussions, bind) {
      /**
       * @param {number} err
       * @param {?} req
       * @return {undefined}
       */
      function onerror(err, req) {
        if (1 === err) {
          (complete || callback)(1, req);
        }
        if (2 === err) {
          if (complete) {
            complete(2);
          }
          if (callback) {
            callback(2);
          }
        }
      }
      if (0 === canCreateDiscussions) {
        var callback;
        var complete;
        /**
         * @param {?} n
         * @return {?}
         */
        var isNumeric = function(n) {
          return void 0 !== n;
        };
        /**
         * @param {!Array} x
         * @return {?}
         */
        var isFunction = function(x) {
          return void 0 === x;
        };
        /** @type {boolean} */
        var u = false;
        onAction(0, function(string, n) {
          if (0 === string) {
            callback = n;
            bind(0, onerror);
          } else {
            if (1 === string) {
              var upperBound = n;
              if (complete) {
                complete(2);
              }
              upperBound(0, function(string, n) {
                if (0 === string) {
                  (complete = n)(1);
                } else {
                  if (1 === string) {
                    bind(1, n);
                  } else {
                    if (2 === string && isFunction(n)) {
                      if (u) {
                        bind(2);
                      } else {
                        complete = void 0;
                        callback(1);
                      }
                    } else {
                      if (2 === string && isNumeric(n)) {
                        bind(2, n);
                      }
                    }
                  }
                }
              });
            } else {
              if (2 === string && isFunction(n)) {
                if (complete) {
                  /** @type {boolean} */
                  u = true;
                } else {
                  bind(2);
                }
              } else {
                if (2 === string && isNumeric(n)) {
                  bind(2, n);
                }
              }
            }
          }
        });
      }
    };
    var onAction;
  };
  /**
   * @param {?} value
   * @param {?} id
   * @param {!Function} callback
   * @param {!Function} options
   * @param {!Object} n
   * @return {?}
   */
  var format = function(value, id, callback, options, n) {
    return void 0 === n && (n = null), extend({}, value, {
      call : function(name) {
        /** @type {number} */
        var argl = arguments.length;
        /** @type {!Array} */
        var args = new Array(1 < argl ? argl - 1 : 0);
        /** @type {number} */
        var i = 1;
        for (; i < argl; i++) {
          args[i - 1] = arguments[i];
        }
        return fetch(send(id, options, callback("call", {
          method : name,
          args : args
        })));
      },
      emit : function(name, text) {
        options(callback("emit", {
          event : name,
          arg : text
        }));
      },
      data : n
    });
  };
  /**
   * @param {!Object} type
   * @param {!Object} name
   * @param {string} value
   * @param {!Object} object
   * @return {?}
   */
  var resolve = function(type, name, value, object) {
    var ret;
    return (ret = {
      "@@livechat/postmessenger" : true
    }).owner = type, ret.instance = name, ret.type = value, ret.data = object, ret;
  };
  /**
   * @param {?} script
   * @param {?} format
   * @param {!Function} data
   * @param {!Object} callback
   * @return {?}
   */
  var fn = function(script, format, data, callback) {
    return function(ctx) {
      switch(ctx.type) {
        case "call":
          return void delay(function() {
            var request = ctx.data;
            var method = request.method;
            var q = request.args;
            return callback[method].apply(script, q);
          }).then(function(result) {
            /** @type {string} */
            ctx.type = value;
            ctx.data = {
              error : false,
              result : result
            };
            data(ctx);
          }, function(e) {
            var result;
            /** @type {string} */
            ctx.type = value;
            if (e instanceof Error) {
              result = {
                real : true,
                error : {
                  message : e.message
                }
              };
              if (u("code", e)) {
                result.error.code = e.code;
              }
            } else {
              result = {
                real : false,
                error : e
              };
            }
            ctx.data = {
              error : true,
              result : result
            };
            data(ctx);
          });
        case "emit":
          var payload = ctx.data;
          var event = payload.event;
          var name = payload.arg;
          return void format(event, name);
        default:
          return;
      }
    };
  };
  /**
   * @param {number} num
   * @return {?}
   */
  var put = function(num) {
    return e = function(value) {
      return "function" == typeof value;
    }, b = num, Object.keys(b).reduce(function(lstnrs, k) {
      return lstnrs[e(b[k]) ? 0 : 1][k] = b[k], lstnrs;
    }, [{}, {}]);
    var e;
    var b;
  };
  var result = linkGen();
  /** @type {number} */
  var _g = 0;
  /**
   * @param {string} imageId
   * @return {?}
   */
  var load = function(imageId) {
    /** @type {!Element} */
    var data = document.createElement("a");
    /** @type {string} */
    data.href = imageId;
    var i;
    var dataPointerPath = 4 < data.protocol.length ? data.protocol : window.location.protocol;
    return i = data.host.length ? "80" === data.port || "443" === data.port ? data.hostname : data.host : window.location.host, data.origin || dataPointerPath + "//" + i;
  };
  /**
   * @param {!Object} t
   * @param {string} c
   * @return {?}
   */
  var createElement = function(t, c) {
    /** @type {!Element} */
    var p = document.createElement("iframe");
    return t.appendChild(p), p.src = c, p;
  };
  /**
   * @param {!Function} callback
   * @return {?}
   */
  var template = function(callback) {
    return function(canCreateDiscussions, cb) {
      if (0 === canCreateDiscussions) {
        if ("function" != typeof callback) {
          return cb(0, function() {
          }), void cb(2);
        }
        var a;
        /** @type {boolean} */
        var isRelative = false;
        cb(0, function(s) {
          if (!isRelative) {
            if ((isRelative = 2 === s) && "function" == typeof a) {
              a();
            }
          }
        });
        if (!isRelative) {
          a = callback(function(formattedSections) {
            if (!isRelative) {
              cb(1, formattedSections);
            }
          }, function(undefined) {
            if (!(isRelative || void 0 === undefined)) {
              /** @type {boolean} */
              isRelative = true;
              cb(2, undefined);
            }
          }, function() {
            if (!isRelative) {
              /** @type {boolean} */
              isRelative = true;
              cb(2);
            }
          });
        }
      }
    };
  };
}, function(canCreateDiscussions, a, e) {
  e.d(a, "a", function() {
    return r;
  });
  /** @type {string} */
  var r = "URL_CHANGED";
}, function(canCreateDiscussions, a, e) {
  e.d(a, "a", function() {
    return popupSaveDialog;
  });
  /**
   * @param {(Array|string)} data
   * @return {undefined}
   */
  var popupSaveDialog = function(data) {
    var autoReview;
    var origin;
    /** @type {(Array|string)} */
    autoReview = data;
    origin = Object.assign(document.createElement("a"), {
      href : autoReview
    }).hostname;
    if (Boolean(origin && origin === window.location.hostname)) {
      /** @type {(Array|string)} */
      window.location.href = data;
    } else {
      window.open(data, "_blank");
    }
  };
}, function(canCreateDiscussions, a, e) {
  e.d(a, "a", function() {
    return generateFlatList;
  });
  /**
   * @param {?} i
   * @return {undefined}
   */
  var generateFlatList = function(i) {
    window.location.assign("tel:".concat(i));
  };
}, , , function(module) {
  module.exports = {
    root : {
      "background-color" : "transparent",
      "pointer-events" : "none",
      "z-index" : 2147483639,
      "max-height" : "100%",
      position : "fixed",
      right : 0,
      bottom : 0,
      border : 0,
      width : 0,
      height : 0,
      overflow : "hidden",
      visibility : "visible"
    },
    frame : {
      "pointer-events" : "all",
      background : "none",
      border : 0,
      float : "none",
      position : "absolute",
      top : 0,
      right : 0,
      bottom : 0,
      left : 0,
      width : "100%",
      height : "100%",
      margin : 0,
      padding : 0
    }
  };
}, function(module, n, factory) {
  var g = function() {
    return this || "object" == typeof self && self;
  }() || Function("return this")();
  var hadRuntime = g.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime");
  var oldRuntime = hadRuntime && g.regeneratorRuntime;
  if (g.regeneratorRuntime = void 0, module.exports = factory(18), hadRuntime) {
    g.regeneratorRuntime = oldRuntime;
  } else {
    try {
      delete g.regeneratorRuntime;
    } catch (t) {
      g.regeneratorRuntime = void 0;
    }
  }
}, function(module, canCreateDiscussions) {
  !function(global) {
    /**
     * @param {!Function} w
     * @param {!Function} name
     * @param {number} p
     * @param {!Array} ctx
     * @return {?}
     */
    function wrap(w, name, p, ctx) {
      var i;
      var r;
      var context;
      var state;
      var source = name && name.prototype instanceof Model ? name : Model;
      /** @type {!Object} */
      var self = Object.create(source.prototype);
      var c = new Context(ctx || []);
      return self._invoke = (i = w, r = p, context = c, state = GenStateSuspendedStart, function(foo, undefined) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if ("throw" === foo) {
            throw undefined;
          }
          return cb();
        }
        /** @type {string} */
        context.method = foo;
        /** @type {string} */
        context.arg = undefined;
        for (;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) {
                continue;
              }
              return delegateResult;
            }
          }
          if ("next" === context.method) {
            context.sent = context._sent = context.arg;
          } else {
            if ("throw" === context.method) {
              if (state === GenStateSuspendedStart) {
                throw state = GenStateCompleted, context.arg;
              }
              context.dispatchException(context.arg);
            } else {
              if ("return" === context.method) {
                context.abrupt("return", context.arg);
              }
            }
          }
          /** @type {string} */
          state = GenStateExecuting;
          var record = tryCatch(i, r, context);
          if ("normal" === record.type) {
            if (state = context.done ? GenStateCompleted : GenStateSuspendedYield, record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value : record.arg,
              done : context.done
            };
          }
          if ("throw" === record.type) {
            /** @type {string} */
            state = GenStateCompleted;
            /** @type {string} */
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      }), self;
    }
    /**
     * @param {!Function} obj
     * @param {string} callback
     * @param {!Object} arg
     * @return {?}
     */
    function tryCatch(obj, callback, arg) {
      try {
        return {
          type : "normal",
          arg : obj.call(callback, arg)
        };
      } catch (keystableId) {
        return {
          type : "throw",
          arg : keystableId
        };
      }
    }
    /**
     * @return {undefined}
     */
    function Model() {
    }
    /**
     * @return {undefined}
     */
    function GeneratorFunction() {
    }
    /**
     * @return {undefined}
     */
    function GeneratorFunctionPrototype() {
    }
    /**
     * @param {!Object} prototype
     * @return {undefined}
     */
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        /**
         * @param {!Array} next
         * @return {?}
         */
        prototype[method] = function(next) {
          return this._invoke(method, next);
        };
      });
    }
    /**
     * @param {string} generator
     * @return {undefined}
     */
    function AsyncIterator(generator) {
      var context;
      /**
       * @param {string} type
       * @param {!Array} method
       * @return {?}
       */
      this._invoke = function(type, method) {
        /**
         * @return {?}
         */
        function callback() {
          return new Promise(function(results, onRejected) {
            !function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var info = record.arg;
                var value = info.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? Promise.resolve(value.__await).then(function(f) {
                  invoke("next", f, resolve, reject);
                }, function(f) {
                  invoke("throw", f, resolve, reject);
                }) : Promise.resolve(value).then(function(t) {
                  /** @type {!Object} */
                  info.value = t;
                  resolve(info);
                }, function(f) {
                  return invoke("throw", f, resolve, reject);
                });
              }
              reject(record.arg);
            }(type, method, results, onRejected);
          });
        }
        return context = context ? context.then(callback, callback) : callback();
      };
    }
    /**
     * @param {!Object} delegate
     * @param {!Object} context
     * @return {?}
     */
    function maybeInvokeDelegate(delegate, context) {
      var selector = delegate.iterator[context.method];
      if (selector === undefined) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) {
            return ContinueSentinel;
          }
          /** @type {string} */
          context.method = "throw";
          /** @type {!TypeError} */
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(selector, delegate.iterator, context.arg);
      if ("throw" === record.type) {
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      }
      var result = record.arg;
      return result ? result.done ? (context[delegate.resultName] = result.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : result : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    /**
     * @param {!Array} locs
     * @return {undefined}
     */
    function pushTryEntry(locs) {
      var entry = {
        tryLoc : locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    /**
     * @param {!Object} entry
     * @return {undefined}
     */
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      /** @type {string} */
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    /**
     * @param {!Array} tryLocsList
     * @return {undefined}
     */
    function Context(tryLocsList) {
      /** @type {!Array} */
      this.tryEntries = [{
        tryLoc : "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    /**
     * @param {!Object} iterable
     * @return {?}
     */
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if ("function" == typeof iterable.next) {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          /** @type {number} */
          var i = -1;
          /**
           * @return {?}
           */
          var vert = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) {
                return next.value = iterable[i], next.done = false, next;
              }
            }
            return next.value = undefined, next.done = true, next;
          };
          return vert.next = vert;
        }
      }
      return {
        next : cb
      };
    }
    /**
     * @return {?}
     */
    function cb() {
      return {
        value : undefined,
        done : true
      };
    }
    var undefined;
    var Op = Object.prototype;
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = Op.hasOwnProperty;
    /** @type {(function(string=): ?|{})} */
    var $Symbol = "function" == typeof Symbol ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    /** @type {boolean} */
    var inModule = "object" == typeof module;
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        module.exports = runtime;
      }
    } else {
      /** @type {function(!Function, !Function, number, !Array): ?} */
      (runtime = global.regeneratorRuntime = inModule ? module.exports : {}).wrap = wrap;
      /** @type {string} */
      var GenStateSuspendedStart = "suspendedStart";
      /** @type {string} */
      var GenStateSuspendedYield = "suspendedYield";
      /** @type {string} */
      var GenStateExecuting = "executing";
      /** @type {string} */
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      var IteratorPrototype = {};
      /**
       * @return {?}
       */
      IteratorPrototype[iteratorSymbol] = function() {
        return this;
      };
      /** @type {function(!Object): (Object|null)} */
      var getProto = Object.getPrototypeOf;
      /** @type {(Object|null)} */
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        /** @type {!Object} */
        IteratorPrototype = NativeIteratorPrototype;
      }
      /** @type {!Object} */
      var Gp = GeneratorFunctionPrototype.prototype = Model.prototype = Object.create(IteratorPrototype);
      /** @type {function(): undefined} */
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      /** @type {function(): undefined} */
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      /** @type {string} */
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
      /**
       * @param {!Object} obj
       * @return {?}
       */
      runtime.isGeneratorFunction = function(obj) {
        /** @type {(!Function|boolean|null)} */
        var ctor = "function" == typeof obj && obj.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      };
      /**
       * @param {!Object} genFun
       * @return {?}
       */
      runtime.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      };
      /**
       * @param {?} arg
       * @return {?}
       */
      runtime.awrap = function(arg) {
        return {
          __await : arg
        };
      };
      defineIteratorMethods(AsyncIterator.prototype);
      /**
       * @return {?}
       */
      AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
      };
      /** @type {function(string): undefined} */
      runtime.AsyncIterator = AsyncIterator;
      /**
       * @param {!Function} innerFn
       * @param {!Object} outerFn
       * @param {undefined} self
       * @param {!Array} tryLocsList
       * @return {?}
       */
      runtime.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      defineIteratorMethods(Gp);
      /** @type {string} */
      Gp[toStringTagSymbol] = "Generator";
      /**
       * @return {?}
       */
      Gp[iteratorSymbol] = function() {
        return this;
      };
      /**
       * @return {?}
       */
      Gp.toString = function() {
        return "[object Generator]";
      };
      /**
       * @param {!Object} obj
       * @return {?}
       */
      runtime.keys = function(obj) {
        /** @type {!Array} */
        var r = [];
        var prop;
        for (prop in obj) {
          r.push(prop);
        }
        return r.reverse(), function next() {
          for (; r.length;) {
            var key = r.pop();
            if (key in obj) {
              return next.value = key, next.done = false, next;
            }
          }
          return next.done = true, next;
        };
      };
      /** @type {function(!Object): ?} */
      runtime.values = values;
      Context.prototype = {
        constructor : Context,
        reset : function(noalert) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = false, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !noalert) {
            var name;
            for (name in this) {
              if ("t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop : function() {
          /** @type {boolean} */
          this.done = true;
          var record = this.tryEntries[0].completion;
          if ("throw" === record.type) {
            throw record.arg;
          }
          return this.rval;
        },
        dispatchException : function(exception) {
          /**
           * @param {string} id
           * @param {boolean} download
           * @return {?}
           */
          function handle(id, download) {
            return record.type = "throw", record.arg = exception, rule.next = id, download && (rule.method = "next", rule.arg = undefined), !!download;
          }
          if (this.done) {
            throw exception;
          }
          var rule = this;
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; 0 <= i; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if ("root" === entry.tryLoc) {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              /** @type {boolean} */
              var hasCatch = hasOwn.call(entry, "catchLoc");
              /** @type {boolean} */
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else {
                  if (!hasFinally) {
                    throw new Error("try statement without catch or finally");
                  }
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                }
              }
            }
          }
        },
        abrupt : function(type, arg) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; 0 <= i; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            /** @type {null} */
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete : function(record, afterLoc) {
          if ("throw" === record.type) {
            throw record.arg;
          }
          return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish : function(finallyLoc) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; 0 <= i; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          }
        },
        catch : function(tryLoc) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; 0 <= i; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield : function(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator : values(iterable),
            resultName : resultName,
            nextLoc : nextLoc
          }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
      };
    }
  }(function() {
    return this || "object" == typeof self && self;
  }() || Function("return this")());
}, function(mixin, n) {
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  };
}, , function(mixin, n) {
  /**
   * @param {string} t
   * @return {?}
   */
  mixin.exports = function(t) {
    if (Array.isArray(t)) {
      return t;
    }
  };
}, function(mixin, n) {
  /**
   * @param {string} patterns
   * @param {number} n
   * @return {?}
   */
  mixin.exports = function(patterns, n) {
    /** @type {!Array} */
    var buf = [];
    /** @type {boolean} */
    var _n = true;
    /** @type {boolean} */
    var o = false;
    var i = void 0;
    try {
      var info;
      var __$0 = patterns[Symbol.iterator]();
      for (; !(_n = (info = __$0.next()).done) && (buf.push(info.value), !n || buf.length !== n); _n = true) {
      }
    } catch (contactCapacity) {
      /** @type {boolean} */
      o = true;
      i = contactCapacity;
    } finally {
      try {
        if (!(_n || null == __$0.return)) {
          __$0.return();
        }
      } finally {
        if (o) {
          throw i;
        }
      }
    }
    return buf;
  };
}, function(mixin, n) {
  /**
   * @return {?}
   */
  mixin.exports = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}, function(mixin, n) {
  /**
   * @param {!Object} o
   * @param {string} extra
   * @return {?}
   */
  mixin.exports = function(o, extra) {
    if (null == o) {
      return {};
    }
    var k;
    var i;
    var copy = {};
    /** @type {!Array<string>} */
    var s = Object.keys(o);
    /** @type {number} */
    i = 0;
    for (; i < s.length; i++) {
      /** @type {string} */
      k = s[i];
      if (!(0 <= extra.indexOf(k))) {
        copy[k] = o[k];
      }
    }
    return copy;
  };
}, , , , function(mixin, n) {
  /** @type {string} */
  mixin.exports = "html.chatbot-mobile-opened > body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n}\n";
}, , , , , , , , , , function(canCreateDiscussions, responses, $) {
  $.r(responses);
  var d = {};
  $.r(d);
  $.d(d, "create", function() {
    return mt;
  });
  $.d(d, "destroy", function() {
    return destroy;
  });
  $.d(d, "openChat", function() {
    return gt;
  });
  $.d(d, "closeChat", function() {
    return bt;
  });
  $.d(d, "setCustomParameters", function() {
    return validate;
  });
  $.d(d, "resetSession", function() {
    return xt;
  });
  $.d(d, "sendMessage", function() {
    return Ot;
  });
  $.d(d, "sendTrigger", function() {
    return jt;
  });
  $.d(d, "openMoment", function() {
    return Et;
  });
  $.d(d, "closeMoment", function() {
    return run;
  });
  $.d(d, "endChat", function() {
    return kt;
  });
  var value;
  var parent;
  var scrollTop;
  var oldSetupComputes;
  var oldBubbleRule;
  var super$0;
  var n;
  var stopTransmitter;
  var saveFifos;
  var oldBuildFrag;
  var oldSetAttr;
  var origCreatedCallback;
  var oginalReverse;
  var CropAreaRectangle;
  var statusHandle;
  var orginalDraw;
  var prevModFn;
  var options = $(5);
  /**
   * @param {!Function} url
   * @return {?}
   */
  var embedScript = function(url) {
    return i = options.polyfillUrl, r = ret = url, (node = document.createElement("script")).type = "text/javascript", node.src = i, node.onload = ret, node.onerror = r, void document.head.appendChild(node);
    var i;
    var ret;
    var r;
    var node;
  };
  var element = $(0);
  var node = $.n(element);
  var x = $(2);
  var range = $.n(x);
  /** @type {string} */
  var expectedId = "#chatbot-chat";
  var survey = window.__be = window.__be || {};
  var P = window.BE_API = window.BE_API || {};
  var f = $(8);
  /** @type {!RegExp} */
  var reParam = new RegExp("Android|webOs|iPhone|iPod|BlackBerry|Windows Phone", "i");
  /**
   * @return {?}
   */
  var load = function() {
    var registerAsLoaded = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a;
    /**
     * @return {undefined}
     */
    var listener = function() {
      /** @type {boolean} */
      var item = !!(window.innerWidth <= 450 || window.innerHeight <= 450 || navigator.userAgent.match(reParam));
      registerAsLoaded(item);
    };
    return listener(), window.addEventListener("resize", listener), function() {
      return window.removeEventListener("resize", listener);
    };
  };
  /** @type {!History} */
  var History = history;
  /** @type {function(this:History, *, string, string=): undefined} */
  var pushState = History.pushState;
  /** @type {function(this:History, *, string, string=): undefined} */
  var replaceState = History.replaceState;
  /**
   * @return {?}
   */
  var init = function() {
    var expect = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a;
    /**
     * @return {undefined}
     */
    var done = function() {
      expect(window.location.href);
    };
    return history.pushState = function() {
      /** @type {number} */
      var arglen = arguments.length;
      /** @type {!Array} */
      var args = new Array(arglen);
      /** @type {number} */
      var i = 0;
      for (; i < arglen; i++) {
        args[i] = arguments[i];
      }
      pushState.apply(history, args);
      done();
    }, history.replaceState = function() {
      /** @type {number} */
      var i = arguments.length;
      /** @type {!Array} */
      var n = new Array(i);
      /** @type {number} */
      var k = 0;
      for (; k < i; k++) {
        n[k] = arguments[k];
      }
      replaceState.apply(history, n);
      done();
    }, window.addEventListener("hashchange", done), done(), function() {
      /** @type {function(this:History, *, string, string=): undefined} */
      history.pushState = pushState;
      /** @type {function(this:History, *, string, string=): undefined} */
      history.replaceState = replaceState;
      window.removeEventListener("hashchange", done);
    };
  };
  var opt = $(10);
  var schema = $(3);
  var tile = $(1);
  var getSourceLanguageAC = $.n(tile);
  var option = $(16);
  var hash = $(28);
  var iter = $.n(hash);
  var q = $(7);
  var match = $.n(q);
  /**
   * @param {!Object} item
   * @param {!Object} path
   * @return {?}
   */
  var create = function(item, path) {
    var val;
    var index = path.id;
    var map = path.classes;
    var i = path.style;
    var a = match()(path, ["id", "classes", "style"]);
    return index && (item.id = "#" === (val = index).charAt(0) ? val.substring(1) : val), name && (item.name = name), map && map.forEach(function(t) {
      return item.classList.add(t);
    }), i && equal(item, i), Object.assign(item, a);
  };
  /**
   * @param {!Object} path
   * @return {?}
   */
  var callback = function(path) {
    var node = path.tag;
    var element = void 0 === node ? "div" : node;
    var undefined = path.parent;
    var row = void 0 === undefined ? document.body : undefined;
    var input = match()(path, ["tag", "parent"]);
    return row.appendChild(create(document.createElement(element), input));
  };
  /**
   * @param {!FileEntry} elem
   * @return {?}
   */
  var fn = function(elem) {
    return !!elem && (elem.remove(), true);
  };
  /**
   * @param {!Object} s
   * @param {!Object} l
   * @return {?}
   */
  var equal = function(s, l) {
    if (!s) {
      return s;
    }
    var n;
    for (n in l) {
      if (l.hasOwnProperty(n)) {
        s.style[n] = l[n];
      }
    }
    return s;
  };
  /** @type {function(): ?} */
  var sublimeTextRender = (oldSetupComputes = range()(node.a.mark(function start() {
    var s;
    return node.a.wrap(function(_context) {
      for (;;) {
        switch(_context.prev = _context.next) {
          case 0:
            return _context.next = 2, use(require());
          case 2:
            if (s = _context.sent) {
              /** @type {number} */
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            create(s, {
              id : "#chatbot-chat-frame",
              style : option.frame
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, start, this);
  })), function() {
    return oldSetupComputes.apply(this, arguments);
  });
  /**
   * @return {?}
   */
  var require = function() {
    return document.querySelector(expectedId);
  };
  /** @type {function(): ?} */
  var rvRender = (oldBubbleRule = range()(node.a.mark(function init() {
    return node.a.wrap(function(context$5$0) {
      for (;;) {
        switch(context$5$0.prev = context$5$0.next) {
          case 0:
            return (parent = callback({
              tag : "style",
              type : "text/css",
              id : "#chatbot-stylesheet",
              parent : document.head
            })).appendChild(document.createTextNode(iter.a)), callback({
              id : expectedId,
              style : option.root
            }), !document.querySelector("meta[name=viewport]") && (value = callback({
              parent : document.head,
              tag : "meta",
              name : "viewport"
            })), context$5$0.next = 5, sublimeTextRender();
          case 5:
          case "end":
            return context$5$0.stop();
        }
      }
    }, init, this);
  })), function() {
    return oldBubbleRule.apply(this, arguments);
  });
  /**
   * @param {boolean} range
   * @return {undefined}
   */
  var showResultNear = function(range) {
    var n;
    var e;
    /** @type {!HTMLBodyElement} */
    var scrollNode = document.body;
    /** @type {!Element} */
    var element = document.documentElement;
    /** @type {string} */
    var item = "chatbot-mobile-opened";
    if (range && !data.mobile) {
      /** @type {boolean} */
      range = false;
    }
    if (range) {
      /** @type {number} */
      scrollTop = window.pageYOffset;
      /** @type {string} */
      e = item;
      element.classList.add(e);
    } else {
      /** @type {string} */
      n = item;
      element.classList.remove(n);
      if ("number" == typeof scrollTop) {
        scrollNode.scrollTop = element.scrollTop = scrollTop;
        scrollTop = void 0;
      }
    }
  };
  var self = $(13);
  var e = $(12);
  var packageOpts = {
    documentReferrer : document.referrer,
    updateFrameStyle : function(appInstallerId) {
      var fn;
      /** @type {number} */
      fn = appInstallerId;
      equal(require(), getSourceLanguageAC()({}, option.root, fn));
    },
    openUrl : function(url) {
      Object(e.a)(url);
    },
    callNumber : function(number) {
      Object(self.a)(number);
    },
    setMetaViewport : function(width) {
      var contentBody;
      /** @type {string} */
      contentBody = width;
      if (value) {
        /** @type {string} */
        value.content = contentBody ? "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" : "";
      }
    },
    onStartConversation : function() {
      cb("onStartConversation");
    },
    onChatOpen : function() {
      cb("onChatWindowOpen");
      showResultNear(true);
    },
    onChatClose : function() {
      cb("onChatWindowClose");
      showResultNear(false);
    },
    onMessage : function(stanza) {
      cb("onMessage", stanza);
    },
    onMomentOpen : function() {
      /** @type {boolean} */
      data.moment = true;
      cb("onMomentOpen");
    },
    onMomentClose : function() {
      /** @type {boolean} */
      data.moment = false;
      cb("onMomentClose");
    },
    onMomentLoad : function() {
      cb("onMomentLoad");
    }
  };
  var ctx = {};
  /** @type {function(?): ?} */
  var use = (super$0 = range()(node.a.mark(function init($obj) {
    var maskset;
    var opts;
    var s;
    var p;
    return node.a.wrap(function(_context2) {
      for (;;) {
        switch(_context2.prev = _context2.next) {
          case 0:
            return maskset = "".concat(options.iframeUrl, "?id=").concat(data.widgetId, "&branding=").concat(data.branding, "&v=").concat(433), opts = Object(opt.b)({
              container : $obj,
              url : maskset
            }, packageOpts), s = opts.frame, p = opts.promise, _context2.prev = 2, _context2.t0 = Object, _context2.t1 = ctx, _context2.next = 7, p;
          case 7:
            _context2.t2 = _context2.sent;
            _context2.t0.assign.call(_context2.t0, _context2.t1, _context2.t2);
            /** @type {number} */
            _context2.next = 14;
            break;
          case 11:
            return _context2.prev = 11, _context2.t3 = _context2.catch(2), _context2.abrupt("return", Object(schema.b)("Something went wrong"));
          case 14:
            return _context2.abrupt("return", s);
          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, init, this, [[2, 11]]);
  })), function(canCreateDiscussions) {
    return super$0.apply(this, arguments);
  });
  var from = $(11);
  /** @type {boolean} */
  var at = false;
  var data = {
    moment : false,
    get initialized() {
      return at;
    },
    get api() {
      return P;
    },
    get widgetId() {
      return survey.id;
    },
    get branding() {
      return void 0 === survey.branding || false !== survey.branding;
    },
    get defined() {
      return !!survey.definied;
    },
    get mobile() {
      return n;
    },
    set defined(resources) {
      survey.definied = resources;
    },
    initialize : function() {
      var oldSetupComputes;
      stopTransmitter = new load((oldSetupComputes = range()(node.a.mark(function start(e) {
        return node.a.wrap(function(_context3) {
          for (;;) {
            switch(_context3.prev = _context3.next) {
              case 0:
                if (n === e) {
                  return _context3.abrupt("return");
                }
                /** @type {number} */
                _context3.next = 2;
                break;
              case 2:
                return n = e, ctx.call("toggleMobile", n), _context3.t0 = showResultNear, _context3.next = 7, ctx.call("isChatOpened");
              case 7:
                _context3.t1 = _context3.sent;
                (0, _context3.t0)(_context3.t1);
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, start, this);
      })), function(canCreateDiscussions) {
        return oldSetupComputes.apply(this, arguments);
      }));
      saveFifos = new init(function(t) {
        ctx.emit(from.a, t);
      });
      /** @type {boolean} */
      at = true;
    },
    destroy : function() {
      saveFifos();
      stopTransmitter();
      n = void 0;
      /** @type {boolean} */
      at = false;
      /** @type {boolean} */
      this.moment = false;
    }
  };
  /** @type {!Array} */
  var events = ["onBeforeLoad", "onLoad", "onChatWindowOpen", "onChatWindowClose", "onCreate", "onDestroy", "onMessage", "onStartConversation", "onMomentOpen", "onMomentClose", "onMomentLoad"];
  var tablesongs = $(9);
  var get_hash_fn = $.n(tablesongs);
  var target = $(6);
  var flow = $.n(target);
  /**
   * @param {string} value
   * @return {?}
   */
  var parseInt = function(value) {
    return "string" == typeof value;
  };
  /**
   * @param {string} n
   * @return {?}
   */
  var emit = function(n) {
    return "number" == typeof n ? "".concat(n) : n;
  };
  /**
   * @return {undefined}
   */
  var update = function() {
    if (!data.initialized) {
      Object(schema.a)("The widget is not initialized.");
    }
  };
  /** @type {function(): ?} */
  var mt = (oldBuildFrag = range()(node.a.mark(function init() {
    return node.a.wrap(function(context$5$0) {
      for (;;) {
        switch(context$5$0.prev = context$5$0.next) {
          case 0:
            return data.widgetId || Object(schema.a)("Invalid id parameter."), require() && Object(schema.a)("Chat container already exists."), context$5$0.next = 4, rvRender();
          case 4:
            data.initialize();
            cb("onLoad");
          case 6:
          case "end":
            return context$5$0.stop();
        }
      }
    }, init, this);
  })), function() {
    return oldBuildFrag.apply(this, arguments);
  });
  /**
   * @return {undefined}
   */
  var destroy = function() {
    update();
    ctx.destroy();
    data.destroy();
    fn(value);
    fn(parent);
    fn(require());
    showResultNear(false);
    cb("onDestroy");
  };
  /** @type {function(): ?} */
  var gt = (oldSetAttr = range()(node.a.mark(function start() {
    return node.a.wrap(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            return update(), _context4.next = 3, ctx.call("isChatOpened");
          case 3:
            if (!_context4.sent) {
              /** @type {number} */
              _context4.next = 5;
              break;
            }
            Object(schema.a)("Chat is already opened");
          case 5:
            ctx.call("toggleChat", true);
          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, start, this);
  })), function() {
    return oldSetAttr.apply(this, arguments);
  });
  /** @type {function(): ?} */
  var bt = (origCreatedCallback = range()(node.a.mark(function start() {
    return node.a.wrap(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            return update(), _context4.next = 3, ctx.call("isChatOpened");
          case 3:
            if (_context4.sent) {
              /** @type {number} */
              _context4.next = 5;
              break;
            }
            Object(schema.a)("Chat is already closed");
          case 5:
            ctx.call("toggleChat", false);
          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, start, this);
  })), function() {
    return origCreatedCallback.apply(this, arguments);
  });
  /**
   * @return {undefined}
   */
  var validate = function() {
    var data;
    var result = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    update();
    data = result;
    if ("object" !== flow()(data)) {
      Object(schema.a)('Parameters must be an object that matches the schema: \n\n{ \n    parameter_name: "parameter value"\n}');
    }
    /** @type {!Array<Array<?>>} */
    var serializedResponse = Object.entries(result);
    var message = {};
    if (99 < serializedResponse.length) {
      Object(schema.a)("The maximum number of custom parameters is 99.");
    }
    serializedResponse.forEach(function(bytes) {
      var data = get_hash_fn()(bytes, 2);
      var e = data[0];
      var result = data[1];
      e = emit(e);
      result = emit(result);
      if (/^[\w-]{1,128}$/g.test(e)) {
        if (parseInt(result)) {
          if (!result.length || 1024 < result.length) {
            Object(schema.a)('Custom parameter "'.concat(e, '" is incorrect. Value can not be empty and can be up to 1024 characters long.'));
          }
        } else {
          Object(schema.a)('Custom parameter "'.concat(e, '" is incorrect. Value must be string or number.'));
        }
      } else {
        Object(schema.a)('Custom parameter "'.concat(e, '" is incorrect. Name must be between 1-128 characters long and can only contain alpha-numeric, underscore and dash characters.'));
      }
      message[e] = result;
    });
    ctx.call("setCustomParameters", message);
  };
  /** @type {function(): ?} */
  var xt = (oginalReverse = range()(node.a.mark(function init() {
    return node.a.wrap(function(context$5$0) {
      for (;;) {
        switch(context$5$0.prev = context$5$0.next) {
          case 0:
            cb("destroy");
            cb("create");
          case 3:
            cb("destroy");
            cb("create");
          case 5:
            cb("destroy");
            cb("create");
          case "end":
            return context$5$0.stop();
        }
      }
    }, init, this);
  })), function() {
    return oginalReverse.apply(this, arguments);
  });
  /** @type {function(): ?} */
  var Ot = (CropAreaRectangle = range()(node.a.mark(function start() {
    var event;
    var e;
    var slideId;
    /** @type {!Arguments} */
    var fixtureUrls = arguments;
    return node.a.wrap(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            return event = 0 < fixtureUrls.length && void 0 !== fixtureUrls[0] ? fixtureUrls[0] : {}, e = event.message, slideId = event.postback, update(), 256, e = emit(e), parseInt(e) ? (!e.length || 256 < e.length) && Object(schema.a)("Message can not be empty and can be up to ".concat(256, " characters long.")) : Object(schema.a)("Message must be string or number."), void 0 !== slideId && (parseInt(slideId) ? (!slideId.length || 256 < slideId.length) && Object(schema.a)("Postback can not be empty and can be up to ".concat(256, 
            " characters long.")) : Object(schema.a)("Postback must be string or number.")), _context4.next = 8, ctx.call("isChatOpened");
          case 8:
            if (_context4.sent) {
              /** @type {number} */
              _context4.next = 10;
              break;
            }
            ctx.call("toggleChat", true);
          case 10:
            ctx.call("sendMessage", {
              message : e,
              postback : slideId
            });
          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, start, this);
  })), function() {
    return CropAreaRectangle.apply(this, arguments);
  });
  /** @type {function(?): ?} */
  var jt = (statusHandle = range()(node.a.mark(function start(e) {
    return node.a.wrap(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            return update(), _context4.next = 3, ctx.call("isChatOpened");
          case 3:
            if (_context4.sent) {
              /** @type {number} */
              _context4.next = 5;
              break;
            }
            ctx.call("toggleChat", true);
          case 5:
            50;
            e = emit(e);
            if (parseInt(e)) {
              if (!e.length || 50 < e.length) {
                Object(schema.a)("Trigger can not be empty and can be up to ".concat(50, " characters long."));
              }
            } else {
              Object(schema.a)("Trigger must be string or number.");
            }
            ctx.call("triggerQuery", e);
          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, start, this);
  })), function(canCreateDiscussions) {
    return statusHandle.apply(this, arguments);
  });
  /** @type {function(): ?} */
  var Et = (orginalDraw = range()(node.a.mark(function init() {
    var s;
    var i;
    var l;
    /** @type {!Arguments} */
    var fixtureUrls = arguments;
    return node.a.wrap(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            return s = 0 < fixtureUrls.length && void 0 !== fixtureUrls[0] ? fixtureUrls[0] : {}, i = s.url, l = s.height, update(), data.moment && Object(schema.a)("Moment is already opened"), parseInt(i) && i || Object(schema.a)("Url must be string and can not be empty"), ["full", "tall", "compact"].includes(l) || Object(schema.a)('The value of the field "height" must be one of the following: "full", "tall or "compact"'), _context4.next = 7, ctx.call("isChatOpened");
          case 7:
            if (_context4.sent) {
              /** @type {number} */
              _context4.next = 9;
              break;
            }
            ctx.call("toggleChat", true);
          case 9:
            ctx.call("openMoment", i, l);
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, init, this);
  })), function() {
    return orginalDraw.apply(this, arguments);
  });
  /**
   * @return {undefined}
   */
  var run = function() {
    update();
    if (!data.moment) {
      Object(schema.a)("Moment is already closed");
    }
    ctx.call("closeMoment");
  };
  /** @type {function(): ?} */
  var kt = (prevModFn = range()(node.a.mark(function init() {
    return node.a.wrap(function(context$5$0) {
      for (;;) {
        switch(context$5$0.prev = context$5$0.next) {
          case 0:
            update();
            ctx.call("endChat");
          case 2:
          case "end":
            return context$5$0.stop();
        }
      }
    }, init, this);
  })), function() {
    return prevModFn.apply(this, arguments);
  });
  /**
   * @return {undefined}
   */
  var link = function() {
    if (data.defined ? Object(schema.c)("The widget code has been loaded more than once.") : (data.defined = true, window.postMessage && document.querySelector || Object(schema.b)("Not supported browser type."))) {
      !function() {
        /** @type {boolean} */
        var _n = true;
        /** @type {boolean} */
        var n = false;
        var e = void 0;
        try {
          var _step3;
          var __$0 = events[Symbol.iterator]();
          for (; !(_n = (_step3 = __$0.next()).done); _n = true) {
            var i = _step3.value;
            data.api[i] = "function" == typeof data.api[i] ? data.api[i] : null;
          }
        } catch (_error) {
          /** @type {boolean} */
          n = true;
          e = _error;
        } finally {
          try {
            if (!(_n || null == __$0.return)) {
              __$0.return();
            }
          } finally {
            if (n) {
              throw e;
            }
          }
        }
      }();
      Object.keys(d).forEach(function(property) {
        return Object.defineProperty(data.api, property, {
          writable : false,
          enumerable : true,
          value : d[property]
        });
      });
      if (cb("onBeforeLoad")) {
        makeRequest("create").catch(function(mmCoreSplitViewBlock) {
          return Object(schema.b)(mmCoreSplitViewBlock, false);
        });
      }
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  var cb = function(name) {
    var bubbled_sets__3355 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
    return "onBeforeLoad" === name ? null === data.api[name] || false !== data.api[name].call(data.api) : "function" == typeof data.api[name] && data.api[name].call(data.api, bubbled_sets__3355);
  };
  /**
   * @param {string} method
   * @param {?} uri
   * @return {?}
   */
  var makeRequest = function(method, uri) {
    if (data.api.hasOwnProperty(method)) {
      return data.api[method](uri);
    }
  };
  embedScript(function() {
    return document.body ? link() : window.addEventListener("DOMContentLoaded", link);
  });
}]);
