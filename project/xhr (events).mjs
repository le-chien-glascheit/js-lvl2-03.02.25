console.log("xhr");

// EventTarget -> events fired on
setTimeout(() => {
  const xhr = new XMLHttpRequest();
  xhr.timeout = 5_000;
  xhr.open("POST", "http://localhost:9999/api/test/readystate");
  xhr.setRequestHeader("X-Secret", "top secret");
  // readystate -> legacy or advanced
  // readyState:
  xhr.onreadystatechange = (ev) => {
    console.log("readystate", xhr.readyState);
    console.log("readystate", xhr.response);

    if (xhr.readyState === 4) {
      // Typical error: === 200
      if (xhr.status >= 200 && xhr.status < 300) {
        // 200: ok
      } else {
      }
    }
  };

  // any http response
  xhr.onload = (ev) => {
    console.log("load", xhr.readyState);
    console.log("load", xhr.response);

    if (xhr.status >= 200 && xhr.status < 300) {
      // 200: ok
    } else {
    }
  };

  // network error
  xhr.onerror = (ev) => {
    console.log("error", xhr.readyState);
    console.log("error", xhr.response);
    console.log("error", xhr.status);
  };

  xhr.ontimeout = (ev) => {
    console.log("timeout", xhr.readyState);
    console.log("timeout", xhr.response);
    console.log("timeout", xhr.status);
  };

  // finally
  xhr.onloadend = (ev) => {
    console.log("loadend", xhr.readyState);
    console.log("loadend", xhr.response);
    console.log("loadend", xhr.status);
  };

  xhr.send();

  // sync code
  try {
    // show loader
    // + send
    // load
    // show data
  } catch (e) {
    // onerror
    // show error
  } finally {
    // onloadend
    // hide loader
  }
}, 5000);
