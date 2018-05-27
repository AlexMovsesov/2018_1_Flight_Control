import {eventBus} from "./EventBus";

class State {
    constructor(...hosts) {
        this.navigatorHost = undefined;
        this.windowHost = undefined;
        [
            this.navigatorHost,
            this.windowHost,
            ...this.rest
        ] = hosts;
    }
    get currentPath() {
        return this.windowHost.location.pathname;
    }

    /**
     * Check offline state
     * @return {boolean}
     */
    get isOffline() {
        if(this.navigatorHost) {
            return !this.navigatorHost.onLine;
        } else {
            return false;
        }
    }

    /**
     * Checks that we haven't access to private api
     */
    get isPublic() {
        const isPublic = eventBus.emit({
            channel: 'user',
            event: 'isLogged',
            message: {},
        });
        return isPublic === true;
    }

}
const state = new State();
export default state;