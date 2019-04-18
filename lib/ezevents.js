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
   * 
   * @param {string} eventName name of the event
   * @param {function} listener listener for the event
   * @returns {number} amount of listeners for the event
   */
  on(eventName, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('Event listener must be of type function')
    }

    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = [];
    }

    return this.events[eventName].push(listener);
  }
  addListener = this.on;

  /**
   * Emit an event and call all the listeners.
   * 
   * @param {string} eventName name of the event
   */
  emit(eventName) {
    if (!this.events.hasOwnProperty(eventName)) {
      throw new Error(`Event '${eventName}' is not registered`);
    }

    for (listener of this.events[eventName]) {
      if (isAsyncFunction(listener)) {
        // TODO: maybe return all caught errors?
        await listener().catch(console.error);
      } else {
        listener();
      }
    }
  }

  /**
   * Remove a listener from an event.
   * 
   * @param {string} eventName name of the event
   * @param {function} listener listener for the event
   * @returns {number} (new) amount of listeners for the event
   */
  removeListener(eventName, listener) {
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

module.exports = EzeventEmitter;