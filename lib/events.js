"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var util_1 = require("./util");
/**
 * @borrows EventEmitter#addListener as EventEmitter#on
 * @borrows EventEmitter#removeListener as EventEmitter#off
 */
var EventEmitter = /** @class */ (function () {
    /**
     * Creates an EventEmitter instance.
     */
    function EventEmitter(events) {
        if (events === void 0) { events = {}; }
        this.evts = __assign({}, events);
    }
    /**
     * Add a listener to an event.
     */
    EventEmitter.prototype.addListener = function (eventName, listener) {
        if (!util_1.has(this.evts, eventName)) {
            this.evts[eventName] = [];
        }
        this.evts[eventName].push(listener);
        return listener;
    };
    /**
     * Emit an event and call all the listeners.
     */
    EventEmitter.prototype.emit = function (eventName) {
        var listenerArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            listenerArgs[_i - 1] = arguments[_i];
        }
        if (!util_1.has(this.evts, eventName)) {
            return;
        }
        for (var _a = 0, _b = this.evts[eventName]; _a < _b.length; _a++) {
            var listener = _b[_a];
            listener.apply(void 0, listenerArgs);
        }
    };
    /**
     * Remove a listener from an event.
     */
    EventEmitter.prototype.removeListener = function (eventName, listener) {
        if (!util_1.has(this.evts, eventName)) {
            return;
        }
        var idx = this.evts[eventName].indexOf(listener);
        if (idx !== -1) {
            this.evts[eventName].splice(idx, 1);
        }
    };
    Object.defineProperty(EventEmitter.prototype, "events", {
        /**
         * Get all events of the collection.
         */
        get: function () {
            return __assign({}, this.evts);
        },
        enumerable: false,
        configurable: true
    });
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
