// custom tag: app-
// 1. extends HTMLElement
// 2. customElements.define
// 3. callback: connectedCallback/disconnectedCallback
// 4. template
import './AppCounter.webcomponent.mjs';
import './AppAlert.webcomponent.mjs';


const appCounter = document.createElement('app-counter');
// element.setAttribute('count', 10);
appCounter.count = 20;
document.body.append(appCounter);

const appAlert = document.createElement('app-alert');
appAlert.setAttribute('content', 'Alert!!!');
appAlert.content = 'other alert';
document.body.append(appAlert);