const images = [
    // "1.jpg","2.jpg","3.jpg", "4.jpg", "5.jpg",
    // "6.jpg","7.jpg","8.jpg", "9.jpg", "10.jpg",
    // "11.jpg","12.jpg","13.jpg", "14.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 지금까지와는 반대로 JS에서 HTML로 뭔가를 넘겨줘야 해
// HTML에 추가해줘야 해

const mainForm = document.querySelector("#main_form");

mainForm.style.background = `
    url(./img/${chosenImage}) 
    no-repeat 
    0px 
    0px
    `;
// style.background = "#f3f3f3 url('img_tree.png') no-repeat right top";

// bgImage.classList.add("backgroundImg");

// console.log(bgImage);

// document.body.appendChild(bgImage);