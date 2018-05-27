import {eventBus} from "../controller/EventBus";

class CommonEvents {
    constructor(host) {
        this.host = host;
        this.linkRouter = function(evt){
            const target = evt.target;
            const isNotLink = target.tagName.toLowerCase() !== 'a';
            if (isNotLink) {
                return;
            }
            evt.preventDefault();
            eventBus.emit({
                channel: 'input',
                event: 'changePage',
                message: target.href
            });
        }.bind(this);
    }
    assign() {
        this.host.addEventListener('click', this.linkRouter, false);
    }
    unassign() {
        this.host.removeEventListener(this.linkRouter);
    }
}
const commonEvents = new CommonEvents(window);
export {commonEvents};