export declare type Listener<TArgs = unknown, TReturn = unknown> = (...args: TArgs[]) => TReturn;
export declare type Events = Record<string, Listener[]>;
/**
 * @borrows EventEmitter#addListener as EventEmitter#on
 * @borrows EventEmitter#removeListener as EventEmitter#off
 */
export declare class EventEmitter {
    private evts;
    /**
     * Creates an EventEmitter instance.
     */
    constructor(events?: Events);
    /**
     * Add a listener to an event.
     */
    addListener(eventName: string, listener: Listener): Listener<unknown, unknown>;
    /**
     * Emit an event and call all the listeners.
     */
    emit<T extends any[]>(eventName: string, ...listenerArgs: T): void;
    /**
     * Remove a listener from an event.
     */
    removeListener(eventName: string, listener: Listener): void;
    /**
     * Get all events of the collection.
     */
    get events(): Events;
}
export interface EventEmitter {
    on: typeof EventEmitter.prototype.addListener;
    off: typeof EventEmitter.prototype.removeListener;
}
