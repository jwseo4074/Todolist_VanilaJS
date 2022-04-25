const clock = document.querySelector("#clock");

clock.innerText = "clock";

// function sayHello() {
//     console.log("hello");
//     // 매 2초마다~~ : interval 개념
// }

// setInterval(니가 실행하고자 하는 함수, function 간격을 얼마로 할지)
// setInterval(sayHello, 5000);
// 5초마다 함수 실행

// 일정한 시간 뒤에 함수 실행
// setTimeout(sayHello, 5000);

// const date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getFullYear());

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${min}:${sec}`;
    // clock.innerText = `${hour}:${min}`;

}
getClock();
setInterval(getClock, 1000);
//1초마다 시계 객체가 만들어지는거야

//문제점
//textformatting 이 필요하다   0초 => 00초
//이게 실행되면 바로 시계를 보여주지 않고 1초를 기다려야 함