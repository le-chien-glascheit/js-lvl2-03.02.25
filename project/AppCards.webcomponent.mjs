
class AppCards extends HTMLElement {
    static #template;

    #shadowRoot;
    #domInitialized = false;
    #dataLoaded = false;
    #data = [];
    /** @type {HTMLUListElement} */
    #listEl;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.debug('connected');
        this.#initTemplateIfNeeded();
        this.#initDomIfNeeded();
        this.#loadDataIfNeeded();
    }

    disconnectedCallback() {
        console.debug('disconnected');
    }

    #initTemplateIfNeeded() {
        if (this.constructor.#template) {
            return;
        }

        this.constructor.#template = document.createElement('template');
        this.constructor.#template.innerHTML = `
        <ul data-id="list"></ul>
        `;
    }

    #initDomIfNeeded() {
        if (this.#domInitialized) {
            return;
        }

        this.#domInitialized = true;
        this.#shadowRoot.append(this.constructor.#template.content.cloneNode(true));

        this.#listEl = this.#shadowRoot.querySelector('[data-id="list"]');
    }

    async #loadDataIfNeeded() {
        if (this.#dataLoaded) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3333/api/fetch/test/cards');
            if (!response.ok) {
                throw new Error('Status code not 2xx');
            }
            const responseBody = await response.json();
            // check responseBody
            this.#dataLoaded = true;
            this.#data = responseBody;
            this.dispatchEvent(
                // 1. Event - parent of all events
                // 2. some specific type - MouseEvent/PointerEvent
                // 3. CustomEvent -> Event + detail
                new CustomEvent('load')
            );
            this.#render();
        } catch (e) {
            this.dispatchEvent(new CustomEvent('error', {
                detail: e
            }));
        } finally {
            // hide loader
        }
    }

    #render() {
        if (!this.#domInitialized) {
            return;
        }

        const listItemEls = this.#data.map(({num, balance}) => {
            const listItemEl = document.createElement('li');
            listItemEl.textContent = `number: ${num}, balance: ${balance}`
            return listItemEl;
        });
        this.#listEl.append(...listItemEls);
    }
}

globalThis.customElements.define('app-cards', AppCards);