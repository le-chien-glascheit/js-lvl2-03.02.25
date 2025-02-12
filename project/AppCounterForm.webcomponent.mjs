const template = document.createElement('template');
template.innerHTML = `
    <span data-id="value"></span>
    <button type="button" data-action="increase">+</button>
`;

class AppCounterForm extends HTMLElement {
    static observedAttributes = ['count']; // convention
    static formAssociated = true;

    #domInitialized = false;

    #internals;
    #count = 0;

    /** @type {HTMLSpanElement} */
    #valueEl;
    /** @type {HTMLButtonElement} */
    #increaseEl;


    constructor() {
        super();
        this.#internals = this.attachInternals();
        this.attachShadow({mode: 'open'});
    }

    get count() {
        return this.#count;
    }

    set count(val) {
       this.setAttribute('count', val); 
    }

    get name() {
        return this.getAttribute('name');
    }

    // connectedCallback()
    connectedCallback() {
        console.log('connected');
        this.#initDOMifNeeded();
        this.#validate();
        this.#render();
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attribute changed');
        if (!this.constructor.observedAttributes.includes(name)) {
            return;
        }

        if (name === 'count') {
            const parsed = Number.parseInt(newValue, 10);
            // TODO: validate
            if (Number.isNaN(parsed)) {
                // this.setAttribute('count', oldValue);
                this.setAttribute('count', this.#count);
                return;
            }

            this.#count = parsed;
            this.#validate();
            this.#internals.setFormValue(`${this.#count}`);
            // TODO: validate -> required, max, min, other built-in

            this.#render();
            return;
        }
    }

    #validate() {
        // TODO: validation
        if (this.#count > 5) {
            this.#internals.setValidity({ rangeOverflow: true }, 'Value too big', this.#increaseEl); // anchor
        } else {
            this.#internals.setValidity({});
        }
    }

    #initDOMifNeeded() {
        if (this.#domInitialized) { // guard
            return;
        }

        this.#domInitialized = true;
        this.shadowRoot.append(template.content.cloneNode(true));

        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }

        this.#valueEl = this.shadowRoot.querySelector('[data-id="value"]');
        this.#increaseEl = this.shadowRoot.querySelector('[data-action="increase"]');
        // this.#increaseEl.addEventListener('click', this.#handleIncreaseProp);
        this.#increaseEl.addEventListener('click', (ev) => this.#handleIncrease(ev));
        this.addEventListener('focus', (ev) => this.#increaseEl.focus());
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
globalThis.customElements.define('app-counter-form', AppCounterForm);