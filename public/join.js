// public/join.js

const id = document.getElementById("id");
const pass = document.getElementById("password");
const confirm = document.getElementById("password-confirm");
const name = document.getElementById("name");
const button = document.getElementById("join");

button.addEventListener("click", () => {
  if (!checkValues()) return;
  if (pass.value !== confirm.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  request("/join", "POST", {
    id: id.value,
    password: pass.value,
    name: name.value,
  }).then((response) => {
    alert(response.message);
    window.location.href = "/";
  });
});

const checkValues = () => {
  if (!id.value) {
    alert("아이디를 입력해주세요.");
    return false;
  }

  if (!pass.value) {
    alert("비밀번호를 입력해주세요.");
    return false;
  }

  if (!confirm.value) {
    alert("비밀번호 확인을 입력해주세요.");
    return false;
  }

  if (!name.value) {
    alert("이름을 입력해주세요.");
    return false;
  }

  return true;
};
