import './AppCounterForm.webcomponent.mjs';

const getValidationDataAttributes = (o) => Object.keys(o.dataset).filter(k => k.startsWith('validation'));

const validateRules = (el, rules) => {
    for (const rule of rules) {
        const result = validations[rule](el, el.dataset[rule]); // el.dataset['validationLuhn'] = "0"
        if (result) { // not falsy
            return result;
        }
    }
    // return undefined;
    return null; // only for consistency
};

const validations = {
    validationLuhn(el, ruleData) {
        debugger;
        if (!el.value.endsWith(ruleData)) { // Luhn algo emulation
            return 'Invalid format';
        }
        return null;
    },
    validationX(el, ruleData) {
        return null;
    }
}

/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');

const validateOnInput = [...formEl.elements]
    .filter(o => o.name)
    .filter(o => o.type === 'text') // other types
    .filter(o => getValidationDataAttributes(o).length)
    ;

const inputHanlder = (ev) => {
    const {currentTarget} = ev;

    const rules = getValidationDataAttributes(currentTarget);

    const firstError = validateRules(currentTarget, rules); // lazy (good)
    if (firstError) {
        currentTarget.setCustomValidity(firstError);
        return;
    }

    currentTarget.setCustomValidity('');
};

validateOnInput.forEach(o => o.addEventListener('input', inputHanlder));

const validateOnSubmit = false;
formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const { currentTarget } = ev;

    if (validateOnSubmit) { // version for on submit validation
        // pair -> [k, v]
        // data-validation-*
        const elements = [...currentTarget.elements].filter(o => o.name).map(o => [o, getValidationDataAttributes(o)]).filter(([o, v]) => v.length);

        // lazy variant: clear custom validity before validation:
        for (const [el] of elements) {
            el.setCustomValidity('');
        }

        for (const [el, rules] of elements) {
            // rules ['validationLuhn'] => validations['validationLuhn'](el)
            // const validationResults = rules.map(r => validations[r](el)); // not lazy (bad)
            // 1. Some not null - [null, '...']: an error
            // 2. All null - no errors
            const firstError = validateRules(el, rules); // lazy (good)
            if (firstError) {
                el.setCustomValidity(firstError);
            }
        }
    }

    const valid = currentTarget.checkValidity();
    if (!valid) {
        currentTarget.reportValidity();
        return;
    }

    // const formData = new FormData(currentTarget);

    // const xhr1 = new XMLHttpRequest();
    // xhr1.open('POST', '/api/xhr/test/first');
    // xhr1.responseType = 'json';

    // xhr1.onload = (ev) => {
    //     const xhr2 = new XMLHttpRequest();
    //     xhr2.open('POST', '/api/xhr/test/second');
    //     xhr2.responseType = 'json';

    //     xhr2.onload = (ev) => {
    //     };

    //     formData.append('status', ev.currentTarget.response.status);
    //     xhr2.send(formData); // multipart
    // };

    // xhr1.send(formData); // multipart

    // try {
    //     showLoader();
    //     xhr1.prepare();
    //     const response1 = xhr1.send(data);
    //     xhr2.prepare(response1.status);
    //     const response2 = xhr2.send(data);
    //     showData();
    // } catch (e) {
    //     showError();
    // } finally {
    //     hideLoader();
    // }
});