class AppCounter extends HTMLElement {
    constructor() {
        super();
    }

    // connectedCallback()
    connectedCallback() {
        this.#render();
    }

    disconnectedCallback() {
        debugger;
    }

    #render() {
        this.innerHTML = `
            <div>
                <button>click me</button>
            </div>
        `;
    }
}

// window, self, global => globalThis
globalThis.customElements.define('app-counter', AppCounter);

const element = document.createElement('app-counter');
document.body.append(element);
setTimeout(() => {
    element.remove();
}, 10_000);