/**
 * Creates an EventEmitter instance.
 * 
 * @constructor
 * @borrows EventEmitter#on as EventEmitter#addListener
 */
class EventEmitter {
  constructor() {
    this._events = {};
  }

  /**
   * Add a listener to an event.
   * Async listeners are supported.
   * 
   * @param {string} eventName name of the event
   * @param {function} listener listener for the event
   * @throws if listener is not of type function
   * @returns {function} listener for the event
   */
  on(eventName, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('Event listener must be of type function');
    }

    if (!this._events.hasOwnProperty(eventName)) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(listener);
    return listener;
  }

  /**
   * Emit an event and call all the listeners.
   * 
   * @async
   * @param {string} eventName name of the event
   * @throws if event is not registered
   */
  async emit(eventName, ...listenerArgs) {
    if (!this._events.hasOwnProperty(eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    for (const listener of this._events[eventName]) {
      if (listener.constructor.name === 'AsyncFunction') {
        await listener.apply(null, listenerArgs);
      } else {
        listener.apply(null, listenerArgs);
      }
    }
  }

  /**
   * Remove a listener from an event.
   * 
   * @param {string} eventName name of the event
   * @param {function} listener listener for the event
   * @throws if event is not registered
   */
  removeListener(eventName, listener) {
    if (!this._events.hasOwnProperty(eventName)) {
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
   * @returns {object} all events of the collection
   */
  get events() {
    return this._events;
  }
}

// Aliases
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

module.exports = EventEmitter;