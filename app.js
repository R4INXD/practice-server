// app.js

const express = require("express");
const app = express();
const PORT = 3000;

const db = require("./db");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/join", (req, res) => {
  res.sendFile(__dirname + "/pages/join.html");
});

app.post("/join", (req, res) => {
  const id = req.body.id;
  if (typeof id !== "string" || id.length < 4) {
    res.status(400).json({
      status: 400,
      code: "INVALID_ID",
      message: "ID가 올바르지 않습니다.",
    });
    return;
  }

  const password = req.body.password;
  if (typeof password !== "string" || password.length < 4) {
    res.status(400).json({
      status: 400,
      code: "INVALID_PASSWORD",
      message: "비밀번호가 올바르지 않습니다.",
    });
    return;
  }

  db.insert.run(id, password, "");

  res.status(201).json({
    status: 201,
    code: "SUCCESS",
    message: "회원가입이 완료되었습니다.",
  });
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;
  const user = db.select.get(id);

  if (!user || user.password !== password) {
    res.status(403).json({
      status: 403,
      code: "INVALID_CREDENTIALS",
      message: "아이디 또는 비밀번호가 올바르지 않습니다.",
    });
  } else {
    res.status(200).json({
      status: 200,
      code: "SUCCESS",
      message: "로그인 성공",
    });
  }
});

app.listen(PORT, () => {
  console.log("Connected to server http://localhost:" + PORT);
});
