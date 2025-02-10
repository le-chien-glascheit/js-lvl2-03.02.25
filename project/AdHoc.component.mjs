// TODO: move to components/AdHoc/AdHoc.mjs
import FormService from './FromService.service.mjs';

class AdHocComponent {
    /** @type {HTMLElement} */
    #rootEl;
    /** @type {HTMLFormElement} */
    #formEl;
    /** @type {HTMLFieldSetElement} */
    #fieldsetEl;

    /** @type {FormService} */
    #service;

    constructor(el, service) {
        this.#rootEl = el;
        this.#service = service;

        this.#init();
        this.#addListeners();
    }

    #init() {
        // for future fast access
        this.#formEl = this.#rootEl.querySelector('[data-widget-part="form"]');
        this.#fieldsetEl = this.#rootEl.querySelector('[data-widget-part="fieldset"]');

        /*
        this.handleSubmit = this.handleSubmit.bind(this);
        this {
            handleSumit: -> bound
            prototype: {
                handleSubmit: regular method
            }
        }
        */
    }

    #addListeners() {
        // this.#formEl.addEventListener('submit', this.#handleSubmit);
        this.#formEl.onsubmit = (ev) => this.#handleSubmit(ev); // this => this.#addListeners
        this.#formEl.onreset = (ev) => this.#handleReset(ev);
    }

    // AdHocComponent.prototype.handleSubmit
    #handleSubmit(
        /** @type {SubmitEvent} */
        ev
    ) { // .call(this -> adhoc)
        ev.preventDefault();
        this.#fieldsetEl.disabled = true;

        const formData = new FormData(ev.currentTarget);
        this.#service.submitForm('/form-data-slow', formData, {
            load: (ev) => this.#handleLoad(ev),
            loadend: (ev) => this.#handleLoadEnd(ev),
        });
    }

    #handleLoad(ev) {
        // TODO:
    }

    #handleLoadEnd(ev) {
        this.#fieldsetEl.disabled = false;
        this.#formEl.reset();
    }

    #handleReset(ev) {

    }
};

// default export
export default AdHocComponent;

