console.log("xhr");

setTimeout(() => {
  // Window: CPU-intensive & IO-intensive (sync) -> bad code

  // sync (bad):
  // const xhr = new XMLHttpRequest();
  // xhr.open('POST', 'http://localhost:9999/api/test/query?key=value', false);
  // xhr.setRequestHeader('X-Secret', 'top secret');
  // xhr.send(); // for sync requests -> wait for response
  // const response = xhr.response;
  // console.log(response);

  // CPU-intensive:
  // let sum = 0;
  // for (let i = 0; i < 1_000_000_000; i++) {
  //     sum++;
  // }
  // console.log(sum);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:9999/api/test/query?key=value");
  xhr.setRequestHeader("X-Secret", "top secret");
  xhr.send(); // for sync requests -> wait for response
  // const response = xhr.response;
  // console.log(response);
  xhr.onload = (evt) => {
    console.log(xhr.response);
  };
}, 5000);
// gc
// bad idea:
// xhr.open('POST', 'http://localhost:9999/api/test?query=value');
// xhr.setRequestHeader('X-Secret', 'top top secret');
// xhr.send();
