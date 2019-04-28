const { isAsyncFunction } = require('util').types;

/**
 * Creates an EzeventsEmitter instance.
 * 
 * @constructor
 * @borrows EzeventEmitter#on as EzeventEmitter#addListener
 */
class EzeventEmitter {
  constructor() {
    this.events = {};
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

    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listener);
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
    // TODO: might just want to return here?
    if (!this.events.hasOwnProperty(eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    for (const listener of this.events[eventName]) {
      if (isAsyncFunction(listener)) {
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
   * @returns {function} the removed listener
   */
  removeListener(eventName, listener) {
    // TODO: might just want to return here?
    if (!this.events.hasOwnProperty(eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    const idx = this.events[eventName].indexOf(listener);
    if (idx === -1) {
      throw new Error(`Specified listener on '${eventName}' is not registered`);
    }

    this.events[eventName].splice(idx, 1);
    return this.events[eventName].length;
  }
}

// Aliases
EzeventEmitter.prototype.addListener = EzeventEmitter.prototype.on;

module.exports = EzeventEmitter;