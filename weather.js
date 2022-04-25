const API_KEY  = "9b9260a87f691a3520d48b73e6542aa8";

function onGeoOk(position) {
    // console.log(position)
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    // console.log(lat, lon);
 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // fetch(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const temp = document.querySelector("#temp_box");
        const weather = document.querySelector("#weather_box");
        const city = document.querySelector("#city_box");

        temp.innerText = `Temperature : ${data.main.temp} 'C`;
        city.innerText = `Location : ${data.name}`;
        weather.innerText =  `Weather : ${data.weather[0].main}`;
    });
}

// URL 을 부를거야 사용자가 링크를 눌러서 직접 URL 에 접속하는게 아니라
// 자바스크립트가 URL 을 불러줄거야
// network 에 가면 무슨 일이 일어나고 있는지 보임
// request 가 보인다. 
// 누군가 URL로 요청을 했다. 그건 바로 JS, fetch를 통해 요청을 보냈다

// fetch는 promise 이다. 당장 뭔가 일어낮 ㅣ않고 시간이 좀 걸린 뒤에 일어난다
// 서버에 뭔가를 물어봤는데(요청), 서버가 응답하는데 5분 걸렸아 그럼 5분 동안 서버의 응답을 기다려야해
// 그래서 쓰는게 then 이다. response를 받이와야 한다 => JSON 파일

function onGeoError() {
    alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
// 브라우저에서 위치 좌표를 준다. 
// ( 인자 2개 = 모든게 잘 됐을 때 실행될 함수, 에러일 때 실행될 함수)

// 이 코드 13줄로 사용자의 위치 정보를 알 수 있다.
// 이걸 가지고 API에 적용을 해서 사용자가 어디 있는지, 날씨 정보도 가지고 올거임