// custom tag: app-
// 1. extends HTMLElement
// 2. customElements.define
// 3. callback: connectedCallback/disconnectedCallback
// 4. template

const template = document.createElement('template');
template.innerHTML = `
    <span data-id="value"></span>
    <button data-action="increase">+</button>
`;

class AppCounter extends HTMLElement {
    #domInitialized = false;

    #count = 0;

    /** @type {HTMLSpanElement} */
    #valueEl;
    /** @type {HTMLButtonElement} */
    #increaseEl;

    constructor() {
        super();
    }

    static observedAttributes = ['count']; // convention

    get count() {
        return this.#count;
    }

    set count(val) {
       this.setAttribute('count', val); 
    }

    // connectedCallback()
    connectedCallback() {
        this.#initDOMifNeeded();
        this.#render();
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.constructor.observedAttributes.includes(name)) {
            return;
        }

        if (name === 'count') {
            const parsed = Number.parseInt(newValue, 10);
            if (this.#count === parsed) {
                return;
            }

            // TODO: validate
            if (Number.isNaN(parsed)) {
                // this.setAttribute('count', oldValue);
                this.setAttribute('count', this.#count);
                return;
            }

            this.#count = parsed;
            this.#render();
            return;
        }
    }

    #initDOMifNeeded() {
        if (this.#domInitialized) { // guard
            return;
        }

        this.#domInitialized = true;
        this.append(template.content.cloneNode(true));

        this.#valueEl = this.querySelector('[data-id="value"]');
        this.#increaseEl = this.querySelector('[data-action="increase"]');
        // this.#increaseEl.addEventListener('click', this.#handleIncreaseProp);
        this.#increaseEl.addEventListener('click', (ev) => this.#handleIncrease(ev));
    }

    #handleIncrease(ev) {
        this.#count++;
        this.setAttribute('count', this.#count);
        this.#render();
    }

    // property = arrow fn
    #handleIncreaseProp = (ev) => {
        this.#count++;
        this.setAttribute('count', this.#count);
        this.#render();
    }

    #render() {
        if (!this.#domInitialized) {
            return;
        }
        this.#valueEl.textContent = `${this.#count}`;
    }
}

// window, self, global => globalThis
globalThis.customElements.define('app-counter', AppCounter);

const element = document.createElement('app-counter');
// element.setAttribute('count', 10);
element.count = 20;
document.body.append(element);
// setTimeout(() => {
//     element.remove();
// }, 10_000);
// setTimeout(() => {
//     document.body.append(element);
// }, 15_000);