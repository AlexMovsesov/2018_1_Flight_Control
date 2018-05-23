'use strict';
import {Config} from "../config/configuration";
import EventSubscriber from "./EventSubscriber";
import EventChannel from "./EventChannel";

/* @todo: check that we already have this callback
 * Container for serving mediators, naive implementation of ioc conception.
 * Used for simplification of events handling, events are grouped logically.
 * In each channel we can find events by type.
 * It makes code more semantic.
 */
class EventBus {
    /**
     * Creates channels by config's array
     * @param {Object} config
     */
    constructor(config) {
        this.defaultChannel = new EventChannel();
        this.channels = new Map();
        this.subscribers = new WeakMap();
        config.eventChannels.forEach((channel)=>{
            this.channels.set(channel, new EventChannel());
        });
        /**
         * Used in private calls
         * @param {String} channel
         * @return {EventChannel}
         */
        this.getChannel = (channel)=>{
            const eventChannel = this.channels.get(channel);
            return eventChannel ? eventChannel : this.defaultChannel;
        };
        /**
         * Used in private calls
         * Gives us reference to callbacks by object
         * @param {EventSubscriber} subscriberKey
         * @return {EventSubscriber}
         */
        this.getSubscriber = (subscriberKey)=>{
            const subscriber = this.subscribers.get(subscriberKey);
            if(!subscriber) {
                const newSubscriber = new EventSubscriber();
                this.subscribers.set(subscriberKey, newSubscriber);
                return newSubscriber;
            }
            return subscriber;
        };
    }
    /**
     * Fires event in the channel with custom data
     * @param channel
     * @param event
     * @param message
     */
    emit({channel, event, message = {}}) {
        const eventChannel = this.getChannel(channel);
        eventChannel.emit(event, message);
    }
    /**
     * Updates callback for subscriber on event by callback
     * Maybe needed for example in airplane landing action
     * After tailes are ending and airplane is in the landing area
     * We can start landing process instead of tiles animation.
     * @param channel
     * @param event
     * @param subscriberObject
     * @param callback
     */
    update({channel, event, subscriberObject, callback}) {
        const eventChannel = this.getChannel(channel);
        const subscriber = this.getSubscriber(subscriberObject);
        eventChannel.removeCallbackFromEvents(subscriber, callback);
        eventChannel.subscribe(event, callback);
        subscriber.push(callback);
    }
    /**
     * Subscribes on event by callback
     * @param channel
     * @param event
     * @param {Object} subscriberObject
     * @param callback
     */
    subscribe({channel, event, subscriberObject, callback}) {
        const eventChannel = this.getChannel(channel);
        const subscriber = this.getSubscriber(subscriberObject);
        eventChannel.subscribe(event, callback);
        subscriber.push(callback);
    }
    /**
     * Unsubcribes from event by callback
     * @param channel
     * @param event
     * @param subscriberObject
     * @param callback
     */
    unsubscribe({channel, event, subscriberObject, callback}) {
        const eventChannel = this.getChannel(channel);
        const subscriber = this.getSubscriber(subscriberObject);
        eventChannel.unsubscribe(event, callback);
        subscriber.remove(callback);
    }

    /**
     * Removes all callbacks by object in channel
     * @param channel
     * @param subscriberObject
     */
    leaveChannel(channel, subscriberObject) {
        const eventChannel = this.getChannel(channel);
        const subscriber = this.getSubscriber(subscriberObject);
        eventChannel.removeCallbacksBySubscriber(subscriber);
        this.subscribers.delete(subscriber);
    }
    /**
     * Removes all callbacks by object
     * @param subscriberObject
     */
    leaveBus(subscriberObject) {
        const subscriber = this.getSubscriber(subscriberObject);
        this.channels.forEach((channel) => {
            channel.removeCallbacksBySubscriber(subscriber);
        });
        this.subscribers.delete(subscriber);
    }
}
const eventBus = new EventBus(Config);
export {eventBus};
