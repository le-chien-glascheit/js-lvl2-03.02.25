console.log("xhr");

// EventTarget -> events fired on
setTimeout(() => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", "http://localhost:9999/api/xhr/test/json");
  xhr.setRequestHeader("X-Secret", "top secret");

  // 1. serialize (string) -> JSON.stringify/parse, ...
  const json = JSON.stringify({
    req: {
      value: "req",
    },
  });
  // 2. Content-Type: application/json
  xhr.setRequestHeader("Content-Type", "application/json");

  // any http response
  xhr.onload = (ev) => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response);
      // console.log(xhr.responseText); not accessible
      // console.log(xhr.responseXML); not accessible

      console.log(xhr.response.res.value);
    } else {
    }
  };

  xhr.send(json);
}, 5000);

// legacy
// setTimeout(() => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:9999/api/xhr/test/json');
//     xhr.setRequestHeader('X-Secret', 'top secret');

//     // 1. serialize (string) -> JSON.stringify/parse, ...
//     const json = JSON.stringify({
//         req: {
//             value: 'req',
//         },
//     });
//     // 2. Content-Type: application/json
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     // any http response
//     xhr.onload  = (ev) => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             const response = JSON.parse(xhr.responseText);
//             console.log(response);
//         } else {

//         }
//     };

//     xhr.send(json);
// }, 5000);
