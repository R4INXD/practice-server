// app.js

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/join", (req, res) => {
  res.sendFile(__dirname + "/pages/join.html");
});

const func = () => {
  return;
};
const a = func();
console.log(a);

app.post("/join", (req, res) => {
  const id = req.body.id;
  if (typeof id !== "string" || id.length < 6) {
    res.status(400).json({
      status: 400,
      code: "INVALID_ID",
      message: "ID가 올바르지 않습니다.",
    });
    return;
  }

  const password = req.body.password;
  if (typeof password !== "string" || password.length < 8) {
    res.status(400).json({
      status: 400,
      code: "INVALID_PASSWORD",
      message: "비밀번호가 올바르지 않습니다.",
    });
    return;
  }

  console.log("new user:", id, password);
  res.status(201).json({
    status: 201,
    code: "SUCCESS",
    message: "회원가입이 완료되었습니다.",
  });
});

app.post("/login", (req, res) => {
  if (req.body.id === "hello@jinpill.dev" && req.body.password === "password") {
    res.sendStatus(200); // OK
  } else {
    res.sendStatus(403); // Forbidden
  }
});

app.listen(PORT, () => {
  console.log("Connected to server http://localhost:" + PORT);
});
