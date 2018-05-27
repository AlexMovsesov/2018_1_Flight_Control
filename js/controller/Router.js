import Page from '../pages/Page';
import state from './State';
import historyApi from '../utils/History';
import {eventBus} from "./EventBus";
/**
 * Class for routing by History API events
 * Conception of pages was used for reducing
 * State object, that will be stored in History.
 */
class Router {
    /**
     * initial configuration
     */
    constructor() {
        this.pages = new Map();
        this.currentPage = null;
        this.defaultRoute = '/';
        this.loadPath = state.currentPath;
    }

    /**
     * Load page
     */
    loadPage = (route) => {
        const newPage = this.getAllowedPage(route);
        if(newPage !== this.currentPage) {
            this.detachPage(this.currentPage);
            this.attachPage(newPage);
            historyApi.push(this.currentPage, route);
        }
    };
    loadPrevPage = () => {
        this.detachPage(this.currentPage);
        const page = historyApi.pop();
        this.attachPage(page);
    };

    getAllowedPage(route) {
        const page =  this.pages.has(route) ?
            this.pages.get(route):
            this.pages.get(this.defaultRoute)
        ;
        return this.checkAllowanceToPage(page) ?
            page : this.pages.get(this.defaultRoute);

    }
    checkAllowanceToPage(page) {
        return (!state.isOffline ||
            (state.isOffline && page.offline)) &&
            (state.isPublic && page.public);
    }
    /**
     * Attaches page to active state
     */
    attachPage(page) {
        if(page instanceof Page) {
            page.attachToBus();
            this.currentPage = page;
        }
    }

    detachPage(page) {
        if(page instanceof Page) {
            page.detachFromBus();
            this.currentPage = null;
        }
    }
    /**
     * Detaches page from current state
     */
    /**
     * Add's mapping to page by uri
     * @param {String} route
     * @param {Page} page
     */
    addPage(route, page) {
        this.pages.set(route, page);
    }

    /**
     * Changes default route of application
     */
    setDefaultRoute(route) {
        if ( this.pages.has(route) ) {
            this.defaultRoute = route;
        }
    }

    /**
     * Deletes mapping by route
     * @param route
     */
    deletePage(route) {
        this.pages.delete(route)
    }

}

const router = Router();
/**
 * Set back button events listener
 */
window.addEventListener('onpopstate', function() {
    router.loadPrevPage();
});
/**
 * Subscribe for changing page events,
 * Submitter must emit link to the route.
 * In page links we are saving route in href.
 */
eventBus.subscribe({
    channel: 'input',
    event: 'changePage',
    subscriberObject: router,
    callback: router.loadPage
});
export default router;