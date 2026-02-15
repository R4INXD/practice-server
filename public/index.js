const id = document.getElementById("id");
const password = document.getElementById("password");
const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");

loginButton.addEventListener("click", () => {
  request("/login", "POST", {
    id: id.value,
    password: password.value,
  }).then((response) => {
    if (response.code !== "SUCCESS") {
      alert(response.message);
      return;
    }

    const loginForm = document.getElementById("login-form");
    const userInfo = document.getElementById("user-info");
    loginForm.style.display = "none";
    userInfo.style.display = "block";

    const userName = document.getElementById("user-name");
    const createdAt = document.getElementById("created-at");
    userName.innerText = response.data.name;
    createdAt.innerText = response.data.createdAt;
  });
});

logoutButton.addEventListener("click", () => {
  const loginForm = document.getElementById("login-form");
  const userInfo = document.getElementById("user-info");
  loginForm.style.display = "block";
  userInfo.style.display = "none";

  id.value = "";
  password.value = "";
});
