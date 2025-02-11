/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');

// {}, Map
// key = name, [validators]
const validators = {
    num(el) {
        let error = null; // ''

        const {value} = el;
        if (!/\d{16}/.test(value.trim())) {
            error = {format: 'should be 16 symbols'};
        }

        return [el, error];
    },
    amount(el) {
        let error = null; // ''

        const {value} = el;
        if (!/\d{1,10}/.test(value.trim())) {
            error = {format: 'should be from 1 to 10 symbols'};
        }

        return [el, error];
    },
};

const translateError = (err) => {
    if (Object.hasOwn(err, 'format')) {
        return `Ошибка формата: ${err.format}`;
    }

    return `Неизвестная ошибка`; // FIXME: ...
};

// [a, b] => ([a, b])

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // sync: user experience
    const { currentTarget } = ev;
    // [...currentTarget.elements]
    const elements = Array.from(currentTarget.elements).filter(o => o.name);
    for (const el of elements) {
        el.nextElementSibling.textContent = '';
    }

    const errors = elements.map(o => validators[o.name](o)).filter(([, err]) => err);
    // TODO: set css-class

    for (const [el, err] of errors) {
        el.nextElementSibling.textContent = translateError(err);
        return;
    }

    // TODO: send
});