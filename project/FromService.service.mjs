class FormService {
    #baseUrl;

    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    submitForm(path, formData, {
        onload = () => {},
        onloadend = () => {},
        onerror = () => {},
    }) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.#baseUrl}${path}`);
        xhr.responseType = 'json';

        xhr.onload = onload;
        xhr.onloadend = onloadend; 
        xhr.onerror = onerror;

        xhr.send(formData); // multipart
    }
}

export default FormService;