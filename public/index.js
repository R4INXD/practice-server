const id = document.getElementById("id");
const password = document.getElementById("password");
const button = document.getElementById("login");

button.addEventListener("click", () => {
  request("/login", "POST", {
    id: id.value,
    password: password.value,
  }).then((response) => {
    if (response.code === "SUCCESS") {
      alert(response.message);
    } else {
      alert(response.message);
    }
  });
});
