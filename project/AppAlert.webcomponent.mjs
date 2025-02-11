class AppAlert extends HTMLElement {
    static observedAttributes = ['content'];
    static #template;

    #domInitialized = false;
    #content = '';

    /** @type {HTMLDivElement} */
    #containerEl;
    /** @type {HTMLButtonElement} */
    #closeEl;

    constructor() {
        super();
    }

    connectedCallback() {
        this.#initTemplateIfNeeded();
        this.#initDomIfNeeded();
        this.#render();
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.constructor.observedAttributes.includes(name)) {
            return;
        }

        if (name === 'content') {
            this.#content = newValue;
            this.#render();
        }
    }

    get content() {
        return this.#content;
    }

    set content(val) {
        this.setAttribute('content', val);
    }

    #initTemplateIfNeeded() {
        if (this.constructor.#template) {
            return;
        }

        this.constructor.#template = document.createElement('template');
        this.constructor.#template.innerHTML = `
        <div>
            <div data-id="container"></div>
            <button data-action="close">x</button>
        </div>
        `;
    }

    #initDomIfNeeded() {
        if (this.#domInitialized) {
            return;
        }
        this.#domInitialized = true;
        this.append(this.constructor.#template.content.cloneNode(true));

        this.#containerEl = this.querySelector('[data-id="container"]');
        this.#closeEl = this.querySelector('[data-action="close"]');

        this.#closeEl.addEventListener('click', (ev) => this.#handleClose(ev));
    }

    #handleClose(ev) {
        // parent.removeChild <- old way
        this.remove();
    }

    #render() {
        if (!this.#domInitialized) {
            return;
        }
        this.#containerEl.textContent = this.#content;
    }
}

globalThis.customElements.define('app-alert', AppAlert);