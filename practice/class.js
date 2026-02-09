class Person {
  constructor(name, age, gender, job) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.job = job;
  }

  hello() {
    console.log("Hello, " + this.name + "!");
  }

  introduceMySelf() {
    console.log(
      `안녕하세요. 제 이름은 {$this.name}입니다.` +
        `\n저는 ${this.age}살이고, ${this.gender}입니다.` +
        `\n직업은 ${this.job}입니다!`,
    );
  }
}

class Developer extends Person {
  constructor(config) {
    super(config.name, config.age, config.gender, "개발자");
    this.stack = config.stack;
  }

  introduceMySelf() {
    console.log(
      `안녕하세요. 제 이름은 ${this.name}입니다.` +
        `\n저는 ${this.age}살이고, ${this.gender}입니다.` +
        `\n직업은 ${this.job}입니다!` +
        `\n다룰 줄 아는 언어는 ${this.stack.join(", ")}입니다...!!`,
    );
  }
}

const developers = [
  new Developer({
    name: "Jinpill",
    age: 34,
    gender: "남자",
    stack: ["JavaScript", "TypeScript", "React", "Rust", "Python"],
  }),
  new Developer({
    name: "Rian",
    age: 28,
    gender: "여자",
    stack: ["JavaScript"],
  }),
];

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];
  developer.hello();
}

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];
  developer.introduceMySelf();
}
