var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@idkfelix/compass.js/node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "node_modules/@idkfelix/compass.js/node_modules/node-fetch/browser.js"(exports2, module2) {
    "use strict";
    var getGlobal = function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("unable to locate global object");
    };
    var globalObject = getGlobal();
    module2.exports = exports2 = globalObject.fetch;
    if (globalObject.fetch) {
      exports2.default = globalObject.fetch.bind(globalObject);
    }
    exports2.Headers = globalObject.Headers;
    exports2.Request = globalObject.Request;
    exports2.Response = globalObject.Response;
  }
});

// node_modules/svelte/src/runtime/internal/utils.js
function noop() {
}
function is_promise(value) {
  return !!value && (typeof value === "object" || typeof value === "function") && typeof /** @type {any} */
  value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

// node_modules/svelte/src/runtime/internal/globals.js
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    __publicField(this, "_listeners", "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0);
    /**
     * @private
     * @type {ResizeObserver}
     */
    __publicField(this, "_observer");
    /** @type {ResizeObserverOptions} */
    __publicField(this, "options");
    this.options = options;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    var _a;
    return (_a = this._observer) != null ? _a : this._observer = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a2 = this._listeners.get(entry.target)) == null ? void 0 : _a2(entry);
      }
    });
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

// node_modules/svelte/src/runtime/internal/dom.js
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && /** @type {ShadowRoot} */
  root.host) {
    return (
      /** @type {ShadowRoot} */
      root
    );
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(
    /** @type {Document} */
    node.head || node,
    style
  );
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.data === data)
    return;
  text2.data = /** @type {string} */
  data;
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}

// node_modules/svelte/src/runtime/internal/lifecycle.js
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}

// node_modules/svelte/src/runtime/internal/scheduler.js
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}

// node_modules/svelte/src/runtime/internal/transitions.js
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}

// node_modules/svelte/src/runtime/internal/await_block.js
function handle_promise(promise, info) {
  const token = info.token = {};
  function update2(type, index, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component2 = get_current_component();
    promise.then(
      (value) => {
        set_current_component(current_component2);
        update2(info.then, 1, info.value, value);
        set_current_component(null);
      },
      (error) => {
        set_current_component(current_component2);
        update2(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      }
    );
    if (info.current !== info.pending) {
      update2(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update2(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = /** @type {T} */
    promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}

// node_modules/svelte/src/runtime/internal/each.js
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}

// node_modules/svelte/src/shared/boolean_attributes.js
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

// node_modules/svelte/src/runtime/internal/Component.js
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles2 = null, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, Function[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key in this.$$p_d) {
            this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
            if (this.$$p_d[key].reflect) {
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(attr2, _oldValue, newValue) {
      var _a;
      if (this.$$r)
        return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a = this.$$c) == null ? void 0 : _a.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  var _a;
  const type = (_a = props_definition[prop]) == null ? void 0 : _a.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
var SvelteComponent = class {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/svelte/src/shared/version.js
var PUBLIC_VERSION = "4";

// node_modules/svelte/src/runtime/internal/disclose-version/index.js
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

// node_modules/@idkfelix/compass.js/src/index.js
var import_node_fetch = __toESM(require_browser(), 1);

// node_modules/@idkfelix/compass.js/src/requests/Users.js
function Users(newRequest) {
  function getAllStaff(limit) {
    let data = { "limit": limit || 1e3 };
    return newRequest("User", "GetAllStaff", data);
  }
  return {
    getAllStaff
  };
}
var Users_default = Users;

// node_modules/@idkfelix/compass.js/src/requests/Calendar.js
function Calendar(newRequest) {
  function getCalendarEventsByUser(userId, startDate, endDate) {
    let data = { "userId": userId, "startDate": startDate, "endDate": endDate };
    return newRequest("Calendar", "GetCalendarEventsByUser", data);
  }
  return {
    getCalendarEventsByUser
  };
}
var Calendar_default = Calendar;

// node_modules/@idkfelix/compass.js/src/requests/Activity.js
function Activity(newRequest) {
  function getLessonsByActivityIdQuick(activityId) {
    let data = { "activityId": activityId };
    return newRequest("Activity", "GetLessonsByActivityIdQuick", data);
  }
  function getLessonsByActivityId(activityId) {
    let data = { "activityId": activityId };
    return newRequest("Activity", "GetLessonsByActivityId", data);
  }
  function getLessonsByInstanceIdQuick(instanceId) {
    let data = { "instanceId": instanceId };
    return newRequest("Activity", "GetLessonsByInstanceIdQuick", data);
  }
  function getLessonsByInstanceId(instanceId) {
    let data = { "instanceId": instanceId };
    return newRequest("Activity", "GetLessonsByInstanceId", data);
  }
  return {
    getLessonsByActivityId,
    getLessonsByActivityIdQuick,
    getLessonsByInstanceId,
    getLessonsByInstanceIdQuick
  };
}
var Activity_default = Activity;

// node_modules/@idkfelix/compass.js/src/requests/Accounts.js
function Accounts(newRequest) {
  function getAccount() {
    return newRequest("Accounts", "GetAccount");
  }
  return {
    getAccount
  };
}
var Accounts_default = Accounts;

// node_modules/@idkfelix/compass.js/src/requests/TaskService.js
function TaskService(newRequest) {
  function getAllTaskItems(limit) {
    return newRequest(
      "TaskService",
      "GetAllTaskItems",
      { "page": 1, "start": 0, "limit": limit || 1e3 }
    );
  }
  function getTaskItems(limit) {
    return newRequest(
      "TaskService",
      "GetTaskItems",
      { "page": 1, "start": 0, "limit": limit || 1e3 }
    );
  }
  function saveTaskItem(task) {
    let data = { "task": task };
    return newRequest("TaskService", "SaveTaskItem", data);
  }
  function deleteTaskItem(task) {
    let data = { "task": task };
    return newRequest("TaskService", "DeleteTaskItem", data);
  }
  function updateTaskItem(task) {
    let data = { "task": task };
    return newRequest("TaskService", "UpdateTaskItem", data);
  }
  return {
    getAllTaskItems,
    getTaskItems,
    saveTaskItem,
    deleteTaskItem,
    updateTaskItem
  };
}
var TaskService_default = TaskService;

// node_modules/@idkfelix/compass.js/src/requests/LearningTasks.js
function LearningTasks(newRequest) {
  function getAllLearningTasksByUserId(userId, limit, showHiddenTasks) {
    let data = { "userId": userId, "limit": limit || 1e3, "showHiddenTasks": showHiddenTasks || false };
    return newRequest("LearningTasks", "GetAllLearningTasksByUserId", data);
  }
  function getAllLearningTasksByActivityId(activityId, limit, showHiddenTasks) {
    let data = { "activityId": activityId, "limit": limit || 1e3, "showHiddenTasks": showHiddenTasks || false };
    return newRequest("LearningTasks", "GetAllLearningTasksByActivityId", data);
  }
  return {
    getAllLearningTasksByActivityId,
    getAllLearningTasksByUserId
  };
}
var LearningTasks_default = LearningTasks;

// node_modules/@idkfelix/compass.js/src/index.js
async function CompassClient(domain, cookies) {
  async function newRequest(service, location, data, method) {
    let url = `https://${domain}/Services/${service}.svc/${location}`;
    const res = await (0, import_node_fetch.default)(url, {
      "method": method || "POST",
      "body": JSON.stringify(data),
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies
      }
    });
    if (!res.ok)
      throw new Error(res.statusText + " " + res.url.replace("https://" + domain, ""));
    let json = await res.json();
    return json.d;
  }
  async function downloadFile(id, nodeId) {
    let url = `https://${domain}/Services/FileAssets.svc/DownloadFile?id=${id}&nodeId=${nodeId}`;
    const res = await (0, import_node_fetch.default)(url, {
      "method": "GET",
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies
      }
    });
    if (!res.ok)
      throw new Error(res.statusText + " " + res.url.replace("https://" + domain, ""));
    return res.text();
  }
  const _Accounts = Accounts_default(newRequest);
  const initRes = await _Accounts.getAccount();
  return {
    domain,
    userId: initRes.userId,
    userInfo: initRes,
    newRequest,
    downloadFile,
    Accounts: _Accounts,
    Activity: Activity_default(newRequest),
    Calendar: Calendar_default(newRequest),
    LearningTasks: LearningTasks_default(newRequest),
    TaskService: TaskService_default(newRequest),
    Users: Users_default(newRequest)
  };
}
var src_default = CompassClient;

// src/main.svelte
function add_css(target) {
  append_styles(target, "svelte-n0mcuw", ".compass-container.svelte-n0mcuw{width:90% !important;min-width:200px;max-width:400px;text-align:center;display:block;margin-left:auto;margin-right:auto;padding-bottom:10px}h2.svelte-n0mcuw{margin:10px}button.svelte-n0mcuw{margin-left:8px;margin-right:8px;width:80px}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_catch_block(ctx) {
  let h3;
  return {
    c() {
      h3 = element("h3");
      h3.textContent = "Error Fetching Data";
    },
    m(target, anchor) {
      insert(target, h3, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(h3);
      }
    }
  };
}
function create_then_block(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*periods*/
    ctx[8]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*client, data*/
      6) {
        each_value = ensure_array_like(
          /*periods*/
          ctx2[8]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block(ctx) {
  let h4;
  let t0_value = (
    /*period*/
    ctx[9].period + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*period*/
    ctx[9].title + ""
  );
  let t2;
  return {
    c() {
      h4 = element("h4");
      t0 = text(t0_value);
      t1 = text(" - ");
      t2 = text(t2_value);
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      append(h4, t0);
      append(h4, t1);
      append(h4, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      2 && t0_value !== (t0_value = /*period*/
      ctx2[9].period + ""))
        set_data(t0, t0_value);
      if (dirty & /*data*/
      2 && t2_value !== (t2_value = /*period*/
      ctx2[9].title + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching) {
        detach(h4);
      }
    }
  };
}
function create_each_block(ctx) {
  let a;
  let div;
  let t;
  let a_href_value;
  let if_block = (
    /*period*/
    ctx[9].period && create_if_block(ctx)
  );
  return {
    c() {
      a = element("a");
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      attr(div, "class", "");
      attr(a, "href", a_href_value = `https://${/*client*/
      ctx[2].domain}/Organise/Activities/Activity.aspx?targetUserId=${/*client*/
      ctx[2].userId}#session/${/*period*/
      ctx[9].instanceId}`);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, div);
      if (if_block)
        if_block.m(div, null);
      append(a, t);
    },
    p(ctx2, dirty) {
      if (
        /*period*/
        ctx2[9].period
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*client, data*/
      6 && a_href_value !== (a_href_value = `https://${/*client*/
      ctx2[2].domain}/Organise/Activities/Activity.aspx?targetUserId=${/*client*/
      ctx2[2].userId}#session/${/*period*/
      ctx2[9].instanceId}`)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(a);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_pending_block(ctx) {
  let h3;
  return {
    c() {
      h3 = element("h3");
      h3.textContent = "Loading...";
    },
    m(target, anchor) {
      insert(target, h3, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(h3);
      }
    }
  };
}
function create_fragment(ctx) {
  let div;
  let h2;
  let t0_value = (
    /*date*/
    ctx[0].toDateString() + ""
  );
  let t0;
  let t1;
  let button0;
  let t3;
  let button1;
  let t5;
  let promise;
  let mounted;
  let dispose;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 8
  };
  handle_promise(promise = /*data*/
  ctx[1], info);
  return {
    c() {
      div = element("div");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      button0 = element("button");
      button0.textContent = "Previous";
      t3 = space();
      button1 = element("button");
      button1.textContent = "Next";
      t5 = space();
      info.block.c();
      attr(h2, "class", "svelte-n0mcuw");
      attr(button0, "class", "svelte-n0mcuw");
      attr(button1, "class", "svelte-n0mcuw");
      attr(div, "class", "compass-container menu svelte-n0mcuw");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, h2);
      append(h2, t0);
      append(div, t1);
      append(div, button0);
      append(div, t3);
      append(div, button1);
      append(div, t5);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[5]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[6]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & /*date*/
      1 && t0_value !== (t0_value = /*date*/
      ctx[0].toDateString() + ""))
        set_data(t0, t0_value);
      info.ctx = ctx;
      if (dirty & /*data*/
      2 && promise !== (promise = /*data*/
      ctx[1]) && handle_promise(promise, info)) {
      } else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      info.block.d();
      info.token = null;
      info = null;
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { sessionId } = $$props;
  let date = /* @__PURE__ */ new Date();
  let data;
  let client;
  async function incrementDate(offset) {
    $$invalidate(0, date = new Date(date));
    date.setDate(date.getDate() + offset);
    $$invalidate(1, data = fetchData(date.toISOString().slice(0, 10)));
  }
  async function fetchData(date2) {
    $$invalidate(2, client = await src_default("mullauna-vic.compass.education", "ASP.NET_SessionId=" + sessionId));
    let periods = await client.Calendar.getCalendarEventsByUser(client.userId, date2, date2);
    return periods.sort((a, b) => a.period - b.period);
  }
  const click_handler = () => {
    incrementDate(-1);
  };
  const click_handler_1 = () => {
    incrementDate(1);
  };
  $$self.$$set = ($$props2) => {
    if ("sessionId" in $$props2)
      $$invalidate(4, sessionId = $$props2.sessionId);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*date*/
    1) {
      $: {
        $$invalidate(1, data = fetchData(date.toISOString().slice(0, 10)));
      }
    }
  };
  return [date, data, client, incrementDate, sessionId, click_handler, click_handler_1];
}
var Main = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { sessionId: 4 }, add_css);
  }
};
var main_default = Main;

// src/main.js
var { Plugin, ItemView, PluginSettingTab, Setting } = require("obsidian");
var SettingTab = class extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new Setting(containerEl).setName("ASP.NET_SessionId=").addText((text2) => text2.setPlaceholder("Enter your SessionId").setValue(this.plugin.settings.sessionId).onChange(async (value) => {
      this.plugin.settings.sessionId = value;
      await this.plugin.saveSettings();
    }));
  }
};
var CompassView = "CompassView";
var compassView = class extends ItemView {
  constructor(leaf, sessionId) {
    super(leaf);
    this.sessionId = sessionId;
  }
  getViewType() {
    return CompassView;
  }
  getDisplayText() {
    return "Compass";
  }
  async onOpen() {
    this.icon = "compass";
    this.component = new main_default({
      target: this.contentEl,
      props: {
        sessionId: this.sessionId
      }
    });
  }
};
module.exports = class CompassPlugin extends Plugin {
  async loadSettings() {
    this.settings = Object.assign({}, { sessionId: "" }, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new SettingTab(this.app, this));
    this.registerView(
      CompassView,
      (leaf) => new compassView(leaf, this.settings.sessionId)
    );
    this.addRibbonIcon("compass", "Compass", () => {
      this.app.workspace.detachLeavesOfType(CompassView);
      this.app.workspace.getRightLeaf(false).setViewState({
        type: CompassView,
        active: true
      });
      this.app.workspace.revealLeaf(
        this.app.workspace.getLeavesOfType(CompassView)[0]
      );
    });
  }
  async onUnload() {
    this.app.workspace.detachLeavesOfType(CompassView);
  }
};
