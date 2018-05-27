import {eventBus} from '../controller/EventBus';
class Page {
    constructor() {
        this.title = '';
        this.view = null;
        this.public = false;
        this.offline = false;
        this.onLoad = () => {

        };
        this.onUnLoad = () => {

        };
    }

    /**
     * @todo: fix
     */
    attachToBus() {
        eventBus.subscribe({
            channel: 'rendering',
            event: 'pageLoad',
            subscriberObject: this,
            callback: this.onLoad
        });
    }
    detachFromBus() {
        eventBus.leaveBus(this);
    }


}
export default Page;