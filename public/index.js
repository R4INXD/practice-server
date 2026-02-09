const id = document.getElementById("id");
const password = document.getElementById("password");
const button = document.getElementById("login");

button.addEventListener("click", () => {
  request("/login", "POST", {
    id: id.value,
    password: password.value,
  }).then((res) => {
    if (res.ok) {
      alert("로그인 성공!!");
    } else if (res.status === 401) {
      alert("없는 계정입니다!");
    } else {
      alert("예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  });
});
