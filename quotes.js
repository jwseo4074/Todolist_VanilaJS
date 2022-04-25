const quotes = [
    {
        quote : "Seeing is believing",
        author : "보는 것이 믿는 것이다."
    },
    {
        quote : "Whatever you do, make it try",
        author : "네가 무엇을 하든 간에, 그것이 도움이 되도록 하라."
    },
    {
        quote : "You will never know until you try",
        author : "시도해보지 않고는 결코 알지 못한다."
    },
    {
        quote : "No pain no gain",
        author : "고통 없이 얻는 것도 없다."
    },
    {
        quote : "Life is venture or nothing",
        author : "인생은 모험이거나 아무것도 아니거나"
    },
    {
        quote : "She can do, he can do, why not me?",
        author : "그녀도 하고 그도 하는데 나라고 왜 못해?"
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");


// console.log(quotes[0]);
// 0부터 9까지 랜덤으로 숫자를 세주는 함수가 필요하다. 배열 길이가 10이니까

// Math.random() * 10
// => 0에서 10사이 숫자 (floating)

// Math.round(1.1) => 1 (반올림)
// Math.ceil(1.2) => 2 (올림)
// Math.floor(1.99999) => 1 (내림)

// 우리가 쓸건 floor
// console.log(quotes[Math.floor(Math.random() * 10)]);
// 10 이라고 하드코딩 함 => 배열의 길이

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;