// array.js
// Array 배열
const array = ["Rust", "JavaScript", "Python", "TypeScript"];

// for문을 사용한 반복문 사용
for (let index = 0; index < array.length; index++) {
  const item = array[index];
  console.log("Hello, " + item + "!");
}

// 값에 접근하는 방법
array[0];
array[1];

// 특정 값을 배열의 맨 마지막 순서로 추가하는 방법
array.push("Go");

// 특정 값을 가진 아이템을 가져오는 방법
const result = array.find((item) => {
  const firstLetter = item[0];
  return firstLetter === "J";
});
console.log("J로 시작하는 언어:", result);
