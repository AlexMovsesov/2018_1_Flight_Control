/**
 * Using for reducing high coupling between modules
 * Mediator Pattern
 */
class EventChannel {
    /**
     * Has callbacks map
     */
    constructor() {
        this.eventToCallbacks = new Map();
        /**
         * trying to find callbacks array by event name
         * @param {String} event
         * @return {Array}
         */
        this.getEvent = (event)=>{
            const eventActions = this.eventToCallbacks.get(event);
            const isArray = eventActions instanceof Array;
            if(!isArray) {
                const callbackHolder = [];
                this.eventToCallbacks.set(event, callbackHolder);
                return callbackHolder;
            }
            return eventActions;
        };
    }

    /**
     * Removes callbacks if subscriber was subscribes on it.
     * @param subscriber
     * @param callback
     */
    removeCallbackFromEvents(subscriber, callback) {
        if(subscriber.callbacks.has(callback)) {
            this.eventToCallbacks.entries().forEach((event, value) => {
                if (value.has(callback)) {
                    this.eventToCallbacks.get(event).delete(callback);
                }
            });
        }
    }
    /**
     * Fire event by name and with data
     * Runs all callbacks that was subscribed
     * @param {String} event
     * @param {Function} message
     */
    emit(event, message) {
        const eventActions = this.getEvent(event);
        eventActions.forEach((action)=>{
            if(action) {
                action(message)
            }
        });
    }
    /**
     * Subscribes callback to events name
     * @param {String} event
     * @param {Function} callback
     */
    subscribe(event, callback) {
        const eventActions = this.getEvent(event);
        eventActions.push(callback);
    }
    /**
     * Unsubscribe callbacks to events name
     * @param {String} event
     * @param {Function} callback
     */
    unsubscribe(event, callback) {
        const eventActions = this.getEvent(event);
        eventActions.delete(callback);
    }

    /**
     * Removes all callbacks in all events that was added by subscriber
     * @param {EventSubscriber} subscriber
     * @todo: check what will come with this
     */
    removeCallbacksBySubscriber(subscriber) {
        subscriber.callbacks.forEach((callback)=>{
            this.removeCallbackFromEvents(subscriber, callback);
        });
    }
}
export default EventChannel;