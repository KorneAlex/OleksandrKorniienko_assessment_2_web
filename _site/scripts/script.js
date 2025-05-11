import {hoursToTwoChars, minToTwoChars, weather_code_to_icon, get_focus_city} from "./utils.js";
import { next6days, citiesListDropdown, getCitiesList, createCityTile} from "./builder.js";       
document.addEventListener("DOMContentLoaded", () => {


console.log("INDEX SCRIPT START <==========================================================="); // <<<<<===============================================


//==========================builder============================================

// city tiles
const tilesContainer = document.getElementById("cities_tiles");
const citiesList = getCitiesList();
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get("favorites")) {
    const favCities = Object.keys(localStorage).filter(key => localStorage.getItem(key) === "true");
    try {tilesContainer.innerHTML = favCities.map(city => createCityTile(city)).join("");} catch (e) {console.log("fav cities_tiles error")}
} else {
try {tilesContainer.innerHTML = citiesList.map(city => createCityTile(city)).join("");}
catch (e) {console.log("cities_tiles error")}
}

// dropdown list
const cities_list2 = document.getElementById("cities_list");
try {cities_list2.innerHTML = citiesList.map(city => citiesListDropdown(city)).join(""); } catch (e) {console.log("cities_list error")};

// next 6 days forecast
const next6days2 = document.getElementById("next6days");
try {next6days2.innerHTML = next6days();} catch (e) {console.log("next6days error")};

//=============================================================================
    const userLocation = "waterford";
    let currentCity = "";
    try {currentCity = get_focus_city();} catch (e) {console.log("ERROR get_focus_city")}
        if (currentCity === null) {
        currentCity = userLocation;
    }
    console.log("currentCity: " + currentCity);
    let currentCityName = document.getElementById("currentCityName");
    try {currentCityName.innerHTML = currentCity.charAt(0).toUpperCase() + currentCity.slice(1);} catch (e) {console.log("ERROR cityName")}
    // const title = document.getElementById("title");
    const currentCityData = weatherData[currentCity + "_daily"] // amsterdam_daily
    const currentCityDataHourly = weatherData[currentCity + "_hourly"] // amsterdam_hourly


//===========================time=============================================
    const currentTime = document.getElementById("currentTime");
    const currentTimeHours = new Date().getHours();
    const currentTimeMinutes = new Date().getMinutes();
    try {currentTime.innerHTML = hoursToTwoChars(currentTimeHours) + ":" + minToTwoChars(currentTimeMinutes);} catch (e) {console.log("ERROR currentTime")}

//===========================daily=============================================

    const daily_weather_code = document.getElementById("daily_weather_code");
    const daily_temperature_2m_max = document.getElementById("daily_temperature_2m_max");
    const daily_temperature_2m_min = document.getElementById("daily_temperature_2m_min");
    const daily_apparent_temperature_max = document.getElementById("daily_apparent_temperature_max");
    const daily_apparent_temperature_min = document.getElementById("daily_apparent_temperature_min");
    const daily_sunrise = document.getElementById("daily_sunrise");
    const daily_sunset = document.getElementById("daily_sunset");
    // const daily_precipitation_hours = document.getElementById("daily_precipitation_hours");
    // const daily_precipitation_probability_max = document.getElementById("daily_precipitation_probability_max");
    const daily_wind_speed_10m_max = document.getElementById("daily_wind_speed_10m_max");
    const daily_wind_gusts_10m_max = document.getElementById("daily_wind_gusts_10m_max");
    const daily_wind_direction_10m_dominant = document.getElementById("daily_wind_direction_10m_dominant");

    const indexDaily = 0;

    try {daily_weather_code.innerHTML = currentCityData.daily.weather_code[indexDaily];} catch (e) {console.log("ERROR daily_weather_code")}
    try {daily_temperature_2m_max.innerHTML = currentCityData.daily.temperature_2m_max[indexDaily] + currentCityData.daily_units.temperature_2m_max;} catch (e) {console.log("ERROR daily_temperature_2m_max")}
    try {daily_temperature_2m_min.innerHTML = currentCityData.daily.temperature_2m_min[indexDaily] + currentCityData.daily_units.temperature_2m_min;} catch (e) {console.log("ERROR daily_temperature_2m_min")}
    try {daily_apparent_temperature_max.innerHTML = currentCityData.daily.apparent_temperature_max[indexDaily] + currentCityData.daily_units.apparent_temperature_max;} catch (e) {console.log("ERROR daily_apparent_temperature_max")}
    try {daily_apparent_temperature_min.innerHTML = currentCityData.daily.apparent_temperature_min[indexDaily] + currentCityData.daily_units.apparent_temperature_min;} catch (e) {console.log("ERROR daily_apparent_temperature_min")}
    try {daily_sunrise.innerHTML = currentCityData.daily.sunrise[indexDaily].slice(currentCityData.daily.sunrise[indexDaily].length-5)} catch (e) {console.log("ERROR daily_sunrise")}
    try {daily_sunset.innerHTML = currentCityData.daily.sunset[indexDaily].slice(currentCityData.daily.sunset[indexDaily].length-5)} catch (e) {console.log("ERROR daily_sunset")}
    // try {daily_precipitation_hours.innerHTML = currentCityData.daily.precipitation_hours[indexDaily] + currentCityData.daily_units.precipitation_hours;} catch (e) {console.log("ERROR daily_precipitation_hours")}
    // try {daily_precipitation_probability_max.innerHTML = currentCityData.daily.precipitation_probability_max[indexDaily] + currentCityData.daily_units.precipitation_probability_max;} catch (e) {console.log("ERROR daily_precipitation_probability_max")}
    try {daily_wind_speed_10m_max.innerHTML = currentCityData.daily.wind_speed_10m_max[indexDaily] + currentCityData.daily_units.wind_speed_10m_max;}   catch (e) {console.log("ERROR daily_wind_speed_10m_max")}
    try {daily_wind_gusts_10m_max.innerHTML = currentCityData.daily.wind_gusts_10m_max[indexDaily] + currentCityData.daily_units.wind_gusts_10m_max;} catch (e) {console.log("ERROR daily_wind_gusts_10m_max")}
    try {daily_wind_direction_10m_dominant.innerHTML = currentCityData.daily.wind_direction_10m_dominant[indexDaily] + currentCityData.daily_units.wind_direction_10m_dominant;}    catch (e) {console.log("ERROR daily_wind_direction_10m_dominant")}
    console.log("POINTER FOR THE ERROR <======================="); // <<<<<===============================================
    
   
    //==========================hourly==========================================

    const hourly_temperature_2m = document.getElementById("hourly_temperature_2m");
    const hourly_relative_humidity_2m = document.getElementById("hourly_relative_humidity_2m");
    const hourly_apparent_temperature = document.getElementById("hourly_apparent_temperature");
    const hourly_precipitation_probability = document.getElementById("hourly_precipitation_probability");
    const hourly_precipitation = document.getElementById("hourly_precipitation");
    const hourly_weather_code = document.getElementById("hourly_weather_code");
    const hourly_wind_speed_10m = document.getElementById("hourly_wind_speed_10m");
    const hourly_wind_gusts_10m = document.getElementById("hourly_wind_gusts_10m");

    const indexHourly = 0;

    try {hourly_temperature_2m.innerHTML = currentCityDataHourly.hourly.temperature_2m[indexHourly] + currentCityDataHourly.hourly_units.temperature_2m;}   catch (e) {console.log("ERROR hourly_temperature_2m")}
    try {hourly_relative_humidity_2m.innerHTML = currentCityDataHourly.hourly.relative_humidity_2m[indexHourly] + currentCityDataHourly.hourly_units.relative_humidity_2m;} catch (e) {console.log("ERROR hourly_relative_humidity_2m")}
    try {hourly_apparent_temperature.innerHTML = currentCityDataHourly.hourly.apparent_temperature[indexHourly] + currentCityDataHourly.hourly_units.apparent_temperature;} catch (e) {console.log("ERROR hourly_apparent_temperature")}
    try {hourly_precipitation_probability.innerHTML = currentCityDataHourly.hourly.precipitation_probability[indexHourly] + currentCityDataHourly.hourly_units.precipitation_probability;} catch (e) {console.log("ERROR hourly_precipitation_probability")} 
    try {hourly_precipitation.innerHTML = currentCityDataHourly.hourly.precipitation[indexHourly] + currentCityDataHourly.hourly_units.precipitation;} catch (e) {console.log("ERROR hourly_precipitation")}
    try {hourly_weather_code.innerHTML = currentCityDataHourly.hourly.weather_code[indexHourly];} catch (e) {console.log("ERROR hourly_weather_code")} 
    try {hourly_wind_speed_10m.innerHTML = currentCityDataHourly.hourly.wind_speed_10m[indexHourly] + currentCityDataHourly.hourly_units.wind_speed_10m;}   catch (e) {console.log("ERROR hourly_wind_speed_10m")}
    try {hourly_wind_gusts_10m.innerHTML = currentCityDataHourly.hourly.wind_gusts_10m[indexHourly] + currentCityDataHourly.hourly_units.wind_gusts_10m;} catch (e) {console.log("ERROR hourly_wind_gusts_10m")}

    //============================weather_img=======================================
    const weather_now = document.getElementById("weather_now_png");
    try {weather_now.src = "/img/" + weather_code_to_icon(currentCityDataHourly.hourly.weather_code[indexHourly]);} catch (e) {console.log("ERROR weather_now")}

    const weather_today = document.getElementById("weather_today_png");
    try {weather_today.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily]);} catch (e) {console.log("ERROR weather_today")}


    //=============================week cards========================================

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weekdday_today = () => {
        for (let i = 0; i < 7; i++) {
            const weekday = document.getElementById(`weekday${i}`);
            const day = new Date();
            day.setDate(day.getDate() + i);
            try {weekday.innerHTML = dayNames[day.getDay()];} catch (e) {console.log(`ERROR weekday${i}`)}
        }
    }
    
    //https://stackoverflow.com/questions/23081158/javascript-get-date-of-the-next-day

    const date_today = () => {
        for (let i = 0; i < 7; i++) {
        const date = document.getElementById(`date${i}`);
        const day = new Date();
        day.setDate(day.getDate() + i);
        try {date.innerHTML = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();} catch (e) {console.log(`ERROR day${i}`)}
        }
    }

    //==========================next6days==============================================


    const weather_for_week = () => {
        for (let i = 1; i < 7; i++) {
            const weather_today = document.getElementById(`weather_today+${i}_png`);
            try { weather_today.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+i]);} catch (e) {console.log(`ERROR weather_today+${i}`)}
        }
    }

    const wind_for_week = () => {
        for (let i = 0; i < 7; i++) {
            const wind_today = document.getElementById(`wind_today+${i}_png`);
            try { wind_today.style = `rotate: -${currentCityData.daily.wind_direction_10m_dominant[indexDaily+i]}deg;`;} catch (e) {console.log(`ERROR wind_today+${i}`)}
        }
    }

// temp min max
    const daily_temperature_today = () => {
        for (let i = 1; i < 7; i++) {
            const daily_temperature_2m_max_today = document.getElementById(`daily_temperature_2m_max_today+${i}`);
            const daily_temperature_2m_min_today = document.getElementById(`daily_temperature_2m_min_today+${i}`);
            try {daily_temperature_2m_max_today.innerHTML = currentCityData.daily.temperature_2m_max[indexDaily+i] + currentCityData.daily_units.temperature_2m_max;} catch (e) {console.log(`ERROR daily_temperature_2m_max_today+${i}`)}
            try {daily_temperature_2m_min_today.innerHTML = currentCityData.daily.temperature_2m_min[indexDaily+i] + currentCityData.daily_units.temperature_2m_min;} catch (e) {console.log(`ERROR daily_temperature_2m_min_today+${i}`)}
        }
    }

// dashboard
    const cityNameConverter = () => {
        const test = getCitiesList();
        test.forEach(element => {
            const city_name = document.getElementById(`${element}_city`);
            try {city_name.innerHTML = element.charAt(0).toUpperCase() + element.slice(1);} catch (e) {console.log(`ERROR cityNameConverter ${element}_city`)}
        });
    }
    


    weekdday_today();
    date_today();
    wind_for_week();
    weather_for_week();
    daily_temperature_today();
    cityNameConverter();

    // daily_temperature_2m_max_today+${i}
console.log("INDEX SCRIPT END <==========================================================="); // <<<<<===============================================


//===========================colorMode===========================================

document.querySelectorAll("[id^=colorMode-]").forEach(checkbox => {
    checkbox.addEventListener('click', (event)=> {
            const colorMode = "Dark Mode";
            const isDark = event.target.checked;
            localStorage.setItem(colorMode, isDark);
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        })
        const colorMode = "Dark Mode";
        const isDark = localStorage.getItem(colorMode) === 'true';
        checkbox.checked = isDark;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    });
    
//===========================favorites===========================================
document.querySelectorAll("[id^=fave-]").forEach(checkbox => {
    checkbox.addEventListener('click', (event)=> {
        const city = event.target.id.slice(5);
        const isFav = event.target.checked; 
        localStorage.setItem(city, isFav); 
        console.log("City: " + city + ", Favorite: " + isFav); 
    })
    const city = checkbox.id.slice(5); 
    const isFav = localStorage.getItem(city) === 'true'; 
    checkbox.checked = isFav; 
    console.log("City: " + city + ", Favorite: " + isFav); 


    })
});
