class History {
    constructor(history) {
        this.api = history;
        this.hCnt = history.length;
    }
    push(page, route) {
        this.api.pushState(page, page.title, route)
        this.hCnt = this.api.length;
    }
    pop(distance = 1) {
        this.api.back(distance);
        this.hCnt = this.api.length;
        return history.state;
    }
}
const historyApi = new History(window.history);
export default historyApi;