const apiKey = "9088a4fe3baa32b8b41f1c1f8d59218f";
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
// const toggleIcon = document.querySelector('.toggleMode i');
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const getWeather = async (region) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  setWeather(data);
};

const setWeather = (data) => {
  const regionName = document.querySelector(".regionName");
  const forecastIcon = document.querySelector(".forecastIcon");
  const forecastInfo = document.querySelector(".forecast");
  const currTemp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity .value");
  const windSpeed = document.querySelector(".windSpeed .value");
  const realFeel = document.querySelector(".realFeel .value");
  const tempMin = document.querySelector(".tempMin .value");
  const tempMax = document.querySelector(".tempMax .value");
  const visibility = document.querySelector(".visibility .value");
  const currDate = document.querySelector(".today");
  const date = new Date();
  const today = `${days[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  }`;

  currDate.innerHTML = today;
  regionName.innerHTML = `${data.name}, ${data.sys.country}`;

  forecastIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
  console.log(data.weather[0].icon)

  forecastInfo.innerHTML = data.weather[0].main;
  currTemp.innerHTML = `${(data.main.temp - 273.15).toFixed(1)}&degC`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed.toFixed(1)}m/s`;
  realFeel.innerHTML = `${(data.main.feels_like - 273.15).toFixed(1)}&degC`;
  tempMin.innerHTML = `${(data.main.temp_min - 273.15).toFixed(1)}&degC`;
  tempMax.innerHTML = `${(data.main.temp_max - 273.15).toFixed(1)}&degC`;
  visibility.innerHTML = `${data.visibility / 1000}km`;
};

searchInput.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    getWeather(searchInput.value);
  }
});

searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});

getWeather('New Delhi')

// toggleIcon.addEventListener('click',()=>{
//     if(toggleIcon.classList.contains('ri-moon-line')){
//         toggleIcon.classList.remove('ri-moon-line')
//         toggleIcon.classList.add('ri-sun-line');

//         document.body.style.backgroundColor = '#0a0a0a';
        
//         document.querySelector('.logo').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.logo').style.color = '#fff';
//         document.querySelector('.input-container').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.input-container button').style.color = '#fff';
//         document.querySelector('.input-container input').style.color = '#fff';
        
//         document.querySelector('.getLocation').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.getLocation').style.color = '#fff';
        
//         document.querySelector('.toggleMode').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.toggleMode').style.color = '#fff';
        
//         document.querySelector('.sourceCode').style.backgroundColor = '#fff';
//         document.querySelector('.sourceCode i').style.color = '#0a0a0a';
        
//         document.querySelector('.left').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.left').style.color = '#fff';
        
//         document.querySelector('.currDate').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.currDate').style.color = '#fff';
        
//         document.querySelector('.currLocation').style.backgroundColor = 'rgba(255,255,255,8%)';
//         document.querySelector('.currLocation').style.color = '#fff';
        

//         document.querySelectorAll('.infoBox').forEach(ele=>{
//             ele.style.backgroundColor = 'rgba(255,255,255,8%)';
//             ele.style.color = '#fff';
//         })

//         document.querySelector('footer p').style.color = '#fff';

//     }
    
//     else if(toggleIcon.classList.contains('ri-sun-line')){
//         toggleIcon.classList.remove('ri-sun-line')
//         toggleIcon.classList.add('ri-moon-line');
        
//         document.body.style.backgroundColor = '#fff';

//         document.querySelector('.logo').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.logo').style.color = '#0a0a0a';
//         document.querySelector('.input-container').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.input-container button').style.color = '#0a0a0a';
//         document.querySelector('.input-container input').style.color = '#0a0a0a';
        
//         document.querySelector('.getLocation').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.getLocation').style.color = '#0a0a0a';
        
//         document.querySelector('.toggleMode').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.toggleMode').style.color = '#0a0a0a';
        
//         document.querySelector('.sourceCode').style.backgroundColor = '#0a0a0a';
//         document.querySelector('.sourceCode i').style.color = '#fff';
        
//         document.querySelector('.left').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.left').style.color = '#0a0a0a';
        
//         document.querySelector('.currDate').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.currDate').style.color = '#0a0a0a';
        
//         document.querySelector('.currLocation').style.backgroundColor = 'rgba(0,0,0,0.1)';
//         document.querySelector('.currLocation').style.color = '#0a0a0a';
        

//         document.querySelectorAll('.infoBox').forEach(ele=>{
//             ele.style.backgroundColor = 'rgba(0,0,0,0.1)';
//             ele.style.color = '#0a0a0a';
//         })

//         document.querySelector('footer p').style.color = '#0a0a0a';
//     }
// })
