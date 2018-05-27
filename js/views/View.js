class View {
    constructor() {
        this.isRendered = false;
        this.domEl = null;
        this.content = '';
        this.attachToEl = ()=>{
            if(this.domEl) {
                this.domEl.innerHTML = this.content;
            }
        };
        this.detachFromEl = ()=>{
            if(this.domEl) {
                this.domEl.innerHTML = '';
            }
        };
    }

    render() {
        this.attachToEl();
    }

    clear() {
        this.detachFromEl();
    }

    unrender() {
        this.detachFromEl();
        this.content = '';
    }


}
