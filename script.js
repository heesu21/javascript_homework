//문제1
const persons = [
  { name: "철수", age: 19, gender: "남" },
  { name: "짱구", age: 20, gender: "남" },
  { name: "유리", age: 21, gender: "여" },
];

//console.log(person);

//문제2
const personContainer = document.querySelector(".person-container");

persons.forEach(function (person) {
  let html템플릿 = `<div class="person">
                    <h3 class="name">${person.name}</h3>
                    <h3 class="age">${person.age}</h3>
                    <h3 class="gender">${person.gender}</h3>
                  </div>`;
  personContainer.insertAdjacentHTML("beforeend", html템플릿);
});

//문제3
const person = persons.find((person) => {
  return person.gender === "여";
});
console.log(person);

//문제4
const result = persons.filter((person) => {
  return person.gender === "남";
});

console.log(result);

//문제5 - 기존 데이터 확인 튜터님한테 가기
const plus = persons.map((person) => {
  return {
    name: person.name,
    age: person.age + 10,
    gender: person.gender,
  };
});
console.log(plus);

//문제6
const newPersons = [...persons];
newPersons.sort((a, b) => {
  return b.age - a.age;
});

console.log(newPersons);

//문제7
const user = [
  {
    이름: "병수",
    나이: 20,
    주소: "시골",
  },
];

//const { 이름, 나이, 주소 } = user;
//console.log(user);

//문제8
localStorage.setItem("user", JSON.stringify(user));

console.log(user);

const num = JSON.parse(localStorage.getItem("user"));

const newUser = num.map((user) => {
  if (user.나이 === 20) {
    return {
      ...user,
      나이: 50,
    };
  }
  return user;
});
localStorage.setItem("user", JSON.stringify(newUser));

localStorage.removeItem("user");

//문제9
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(fetch);
