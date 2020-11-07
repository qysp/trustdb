import { has } from './util';

export type Listener<TArgs = unknown, TReturn = unknown> = (...args: TArgs[]) => TReturn;
export type Events = Record<string, Listener[]>;

/**
 * @borrows EventEmitter#addListener as EventEmitter#on
 * @borrows EventEmitter#removeListener as EventEmitter#off
 */
export class EventEmitter {
  private evts: Events;

  /**
   * Creates an EventEmitter instance.
   */
  constructor(events: Events = {}) {
    this.evts = { ...events };
  }

  /**
   * Add a listener to an event.
   */
  addListener(eventName: string, listener: Listener) {
    if (!has(this.evts, eventName)) {
      (this.evts as Events)[eventName] = [];
    }

    this.evts[eventName].push(listener);
    return listener;
  }

  /**
   * Emit an event and call all the listeners.
   */
  emit<T extends any[]>(eventName: string, ...listenerArgs: T) {
    if (!has(this.evts, eventName)) {
      return;
    }

    for (const listener of this.evts[eventName]) {
      listener(...listenerArgs);
    }
  }

  /**
   * Remove a listener from an event.
   */
  removeListener(eventName: string, listener: Listener) {
    if (!has(this.evts, eventName)) {
      return;
    }

    const idx = this.evts[eventName].indexOf(listener);
    if (idx !== -1) {
      this.evts[eventName].splice(idx, 1);
    }
  }

  /**
   * Get all events of the collection.
   */
  get events(): Events {
    return { ...this.evts };
  }
}

export interface EventEmitter {
  on: typeof EventEmitter.prototype.addListener;
  off: typeof EventEmitter.prototype.removeListener;
}

EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
