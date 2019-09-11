const { hasOwnProperty } = require('./helpers');

/**
 * @borrows EventEmitter#on as EventEmitter#addListener
 */
class EventEmitter {
  /**
   * Creates an EventEmitter instance.
   *
   * @param {object} [events={}] Predifine event (names).
   */
  constructor(events = {}) {
    this._events = { ...events };
  }

  /**
   * Add a listener to an event.
   * 
   * @param {string} eventName Name of the event.
   * @param {function} listener Listener for the event.
   * @throws {TypeError} Listener must be a function.
   * @returns {function} Listener for the event.
   */
  on(eventName, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('Event listener must be of type function');
    }

    if (!hasOwnProperty(this.events, eventName)) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(listener);
    return listener;
  }

  /**
   * Emit an event and call all the listeners.
   * 
   * @param {string} eventName Name of the event.
   * @param {...any} [listenerArgs] Arguments for the listener functions.
   * @throws {Error} Event must have been registered beforehand.
   */
  emit(eventName, ...listenerArgs) {
    if (!hasOwnProperty(this.events, eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    for (const listener of this._events[eventName]) {
      listener.apply(null, listenerArgs);
    }
  }

  /**
   * Remove a listener from an event.
   * 
   * @param {string} eventName Name of the event.
   * @param {function} listener Listener for the event.
   * @throws {Error} Event must have been registered beforehand.
   */
  removeListener(eventName, listener) {
    if (!hasOwnProperty(this.events, eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    const idx = this._events[eventName].indexOf(listener);
    if (idx !== -1) {
      this._events[eventName].splice(idx, 1);
    }
  }

  /**
   * Get all events of the collection.
   * 
   * @returns {object} All events of the collection.
   */
  get events() {
    return this._events;
  }
}

// Aliases
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

module.exports = EventEmitter;