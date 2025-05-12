import {hoursToTwoChars, minToTwoChars, weatherCodeToIcon, getFocusCity, getDayKeyValue, getLocation} from "./utils.js";
import {next7days, citiesListDropdown, getCitiesList, createCityTile, hourlyBreakdown} from "./builder.js";       


document.addEventListener("DOMContentLoaded", () => {

//==========================builder============================================

// const hero = document.getElementById("hero");
// try { hero.innerHTML = build_hero();} catch (e) {"ERROR NO HERO HERE"}


// city tiles
const tilesContainer = document.getElementById("cities_tiles");
const citiesList = getCitiesList();
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get("favorites")) {
    const favCities = Object.keys(localStorage).filter(key => localStorage.getItem(key) === "true" && citiesList.includes(key));
    if(favCities.length>0){
    try {tilesContainer.innerHTML = favCities.map(city => createCityTile(city)).join("");} catch (e) {console.log("ERROR fav cities_tiles")}}
} else {
try {tilesContainer.innerHTML = citiesList.map(city => createCityTile(city)).join("");}
catch (e) {console.log("ERROR cities_tiles")}
const allCitiesInfo = document.getElementsByClassName("cardInfo");
    [...allCitiesInfo].forEach(element => {
        element.remove();
    });
}

//================================hourly_breakdown=======================================================

const hours = document.getElementById("hourly_breakdown");
try {hours.innerHTML = hourlyBreakdown(urlParams.get("focus_city"), getDayKeyValue());} catch (e) {console.log("ERROR focus city for hourly breakdown")
}

// active menu
const activeMenu = urlParams.get("menu");
const menuItem = document.getElementById(activeMenu);
try{ menuItem.style.backgroundColor = "#ffb901";} catch (e) {console.log("ERROR menu item")}


// dropdown list
const cities_list_dropdown = document.getElementById("cities_list");
try {cities_list_dropdown.innerHTML = citiesList.map(city => citiesListDropdown(city)).join(""); } catch (e) {console.log("cities_list error")};

// next 6 days forecast
const next7days2 = document.getElementById("next7days");
try {next7days2.innerHTML = next7days();} catch (e) {console.log("ERROR next7days")};

//=============================================================================
    const userLocation = "waterford";
    let currentCity = "";
    try {currentCity = getFocusCity();} catch (e) {console.log("ERROR getFocusCity")}
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
    const wind_for_this_day = document.getElementById("wind_for_this_day_png");

    //I felt like a genius when I wrote it hahah
    let indexDaily = 0;
    indexDaily = (getDayKeyValue()!=null) ? (getDayKeyValue()==="today") ? 0:getDayKeyValue().slice(getDayKeyValue().length-1):0;

    const indexDaily7D = 0;

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
    try {wind_for_this_day.style = `rotate: -${currentCityData.daily.wind_direction_10m_dominant[indexDaily]}deg;`; } catch (e) {"ERROR WIND FOR THIS DAY"}
    
   
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
    try {weather_now.src = "/img/" + weatherCodeToIcon(currentCityDataHourly.hourly.weather_code[indexHourly]);} catch (e) {console.log("ERROR weather_now")}

    const weather_today = document.getElementById("weather_today_png");
    try {weather_today.src = "/img/" + weatherCodeToIcon(currentCityData.daily.weather_code[indexDaily]);} catch (e) {console.log("ERROR weather_today")}


    //=============================week cards========================================

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weekdayToday = () => {
        const weekdayForThisDay = document.getElementById("chosenDayWeekday");
        try { weekdayForThisDay.className = `weekday${indexDaily}`;} catch (e) {console.log("ERROR weekdayToday")}
        for (let i = 0; i < 7; i++) {
            const weekday = document.getElementsByClassName(`weekday${i}`);
            const day = new Date();
            day.setDate(day.getDate() + i);
            [...weekday].forEach(element => {
                element.innerHTML = dayNames[day.getDay()];
            })

        }
    }
    
    //https://stackoverflow.com/questions/23081158/javascript-get-date-of-the-next-day
    const dateToday = () => {
        const dateForThisDay = document.getElementById("chosenDayDate");
        try { dateForThisDay.className = `date${indexDaily}`;} catch (e) {console.log("ERROR dateToday")}
        console.log(dateForThisDay);
        for (let i = 0; i < 7; i++) {
            const date = document.getElementsByClassName(`date${i}`);
            const day = new Date();
            day.setDate(day.getDate() + i);
            //https://www.youtube.com/watch?v=RuDdltsfaVc&ab_channel=BroCode
            [...date].forEach(element => {
                element.innerHTML = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();
            });
        }
    }
    

    //==========================next7days==============================================


    const weatherForWeek = () => {
        for (let i = 0; i < 7; i++) {
            const weather_today = document.getElementById(`weather_today+${i}_png`);
            try { weather_today.src = "/img/" + weatherCodeToIcon(currentCityData.daily.weather_code[indexDaily7D+i]);} catch (e) {console.log(`ERROR weather_today+${i}`)}
        }
    }

    const windForWeek = () => {
        for (let i = 0; i < 7; i++) {
            const wind_today = document.getElementsByClassName(`wind_today+${i}_png`);
            [...wind_today].forEach(element => {
                element.style = `rotate: -${currentCityData.daily.wind_direction_10m_dominant[indexDaily7D+i]}deg;`;
            })

        }
    }
    const dailyTemperatureForWeek = () => {
        for (let i = 0; i < 7; i++) {
            const daily_temperature_2m_max_forWeek = document.getElementById(`daily_temperature_2m_max_forWeek+${i}`);
            const daily_temperature_2m_min_forWeek = document.getElementById(`daily_temperature_2m_min_forWeek+${i}`);
            try {daily_temperature_2m_max_forWeek.innerHTML = currentCityData.daily.temperature_2m_max[indexDaily7D+i] + currentCityData.daily_units.temperature_2m_max;} catch (e) {console.log(`ERROR daily_temperature_2m_max_today+${i}`)}
            try {daily_temperature_2m_min_forWeek.innerHTML = currentCityData.daily.temperature_2m_min[indexDaily7D+i] + currentCityData.daily_units.temperature_2m_min;} catch (e) {console.log(`ERROR daily_temperature_2m_min_today+${i}`)}
        }
    }
    const dailyPrecipitationProbabilityForWeek = () => {
        for (let i = 0; i < 7; i++) {
            const precipitation_probability_max_forWeek = document.getElementById(`precipitation_probability_max_forWeek+${i}`);
            try {precipitation_probability_max_forWeek.innerHTML = currentCityData.daily.precipitation_probability_max[indexDaily7D+i] + currentCityData.daily_units.precipitation_probability_max;} catch (e) {console.log(`ERROR precipitation_probability_max_forWeek+${i}`)}
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
    
    //===============functions for data==============================================

    weekdayToday();
    dateToday();
    windForWeek();
    weatherForWeek();
    dailyTemperatureForWeek();
    cityNameConverter();
    dailyPrecipitationProbabilityForWeek();
    getLocation();
    
    
    //===========================favorites===========================================
    
    document.querySelectorAll("[id^=fave-]").forEach(heart => {
        heart.addEventListener('click', (event)=> {
            const city = event.target.id.slice(5);
            const isFav = localStorage.getItem(city) === 'true';
            localStorage.setItem(city, !isFav); 
            heart.classList = !isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
        })
        const city = heart.id.slice(5); 
        const isAlreadyFav = localStorage.getItem(city) === 'true';
        heart.classList = isAlreadyFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
    });

    
})