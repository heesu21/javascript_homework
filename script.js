const btnEl = document.querySelector(".btn");
const titleEl = document.querySelector(".title");

function clickHandler(){
    titleEl.innerHTML= '제목이 아니다';
};

btnEl.addEventListener('click',clickHandler);

//함수 선언
function sum(num1,num2){
    console.log(num1+num2);
}

//함수 호출
sum(1, 3);

function isEvenOrOdd(num){
    if(num % 2 === 0) {
        console.log("짝수입니다");
    } else {
        console.log("홀수입니다");
    }
}

isEvenOrOdd(7)

const name = "병수";
const age = "20"

console.log(`이름: ${name}`);
console.log(`나이: ${age}`);