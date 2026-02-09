// public/join.js

const id = document.getElementById("id");
const password = document.getElementById("password");
const button = document.getElementById("join");

button.addEventListener("click", () => {
  request("/join", "POST", {
    id: id.value,
    password: password.value,
  }).then((response) => {
    console.log(response);
    alert(response.message);
  });
});
