'use strict';

/**
 * Callbacks container
 */
class EventSubscriber {
    /**
     * Creates callbacks array for object defined in weakmap,
     * We dont need to have a composition with that object
     * Cause this object is used only for handling events.
     */
    constructor(){
        this.callbacks = [];
    }

    /**
     * Pushes callback
     * @param callback
     */
    push(callback) {
        this.callbacks.push(callback);
    }

    /**
     * deletes callback
     * @param callback
     */
    remove(callback) {
        this.callbacks.delete(callback);
    }
}
export default EventSubscriber;