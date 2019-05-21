console.log("Client JS is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message = document.querySelector("#message");
const message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        message.textContent = data.error;
        message2.textContent = "";
      } else {
        message.textContent = data.location;
        message2.textContent = data.forecast;
      }
    });
  });
});
