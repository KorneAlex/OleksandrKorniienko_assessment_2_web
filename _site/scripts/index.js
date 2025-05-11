import {hoursToTwoChars, minToTwoChars, weather_code_to_icon, get_focus_city} from "./utils.js";
import { next6days, cities_list} from "./builder.js";       

console.log("INDEX SCRIPT START <==========================================================="); // <<<<<===============================================


//==========================builder============================================

const cities_list2 = document.getElementById("cities_list");
try {cities_list2.innerHTML = cities_list();} catch (e) {console.log("cities_list error")};
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
    weather_now.src = "/img/" + weather_code_to_icon(currentCityDataHourly.hourly.weather_code[indexHourly]);

    const weather_today = document.getElementById("weather_today_png");
    weather_today.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily]);


    //=============================week cards========================================

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // const weekday0 = document.getElementById("weekday0");
    // const weekday1 = document.getElementById("weekday1");
    // const weekday2 = document.getElementById("weekday2");
    // const weekday3 = document.getElementById("weekday3");
    // const weekday4 = document.getElementById("weekday4");
    // const weekday5 = document.getElementById("weekday5");
    // const weekday6 = document.getElementById("weekday6");

    // try {weekday0.innerHTML = dayNames[new Date().getDay()];} catch (e) {console.log("ERROR weekday0")}
    // try {weekday1.innerHTML = dayNames[new Date().getDay() + 1];} catch (e) {console.log("ERROR weekday1")}
    // try {weekday2.innerHTML = dayNames[new Date().getDay() + 2];} catch (e) {console.log("ERROR weekday2")}
    // try {weekday3.innerHTML = dayNames[new Date().getDay() + 3];} catch (e) {console.log("ERROR weekday3")}
    // try {weekday4.innerHTML = dayNames[new Date().getDay() + 4];} catch (e) {console.log("ERROR weekday4")}
    // try {weekday5.innerHTML = dayNames[new Date().getDay() + 5];} catch (e) {console.log("ERROR weekday5")}
    // try {weekday6.innerHTML = dayNames[new Date().getDay() + 6];} catch (e) {console.log("ERROR weekday6")}

    const weekdday_today = () => {
        for (let i = 0; i < 7; i++) {
            const weekday = document.getElementById(`weekday${i}`);
            const day = new Date();
            day.setDate(day.getDate() + i);
            try {weekday.innerHTML = dayNames[day.getDay()];} catch (e) {console.log(`ERROR weekday${i}`)}
        }
    }
    
    //https://stackoverflow.com/questions/23081158/javascript-get-date-of-the-next-day

    // const date0 = document.getElementById("date0");
    // const date1 = document.getElementById("date1");
    // const date2 = document.getElementById("date2");
    // const date3 = document.getElementById("date3");
    // const date4 = document.getElementById("date4");
    // const date5 = document.getElementById("date5");
    // const date6 = document.getElementById("date6");

    // const day0 = new Date();
    // const day1 = new Date();
    // const day2 = new Date();
    // const day3 = new Date();
    // const day4 = new Date();
    // const day5 = new Date();
    // const day6 = new Date();

    // day1.setDate(day1.getDate() + 1);
    // day2.setDate(day2.getDate() + 2);
    // day3.setDate(day3.getDate() + 3);
    // day4.setDate(day4.getDate() + 4);
    // day5.setDate(day5.getDate() + 5);
    // day6.setDate(day6.getDate() + 6);

    // try {date0.innerHTML = day0.getDate() + "/" + (day0.getMonth() + 1) + "/" + day0.getFullYear();} catch (e) {console.log("ERROR day0")}
    // try {date1.innerHTML = day1.getDate() + "/" + (day1.getMonth() + 1) + "/" + day1.getFullYear();} catch (e) {console.log("ERROR day1")}
    // try {date2.innerHTML = day2.getDate() + "/" + (day2.getMonth() + 1) + "/" + day2.getFullYear();} catch (e) {console.log("ERROR day2")}
    // try {date3.innerHTML = day3.getDate() + "/" + (day3.getMonth() + 1) + "/" + day3.getFullYear();} catch (e) {console.log("ERROR day3")}
    // try {date4.innerHTML = day4.getDate() + "/" + (day4.getMonth() + 1) + "/" + day4.getFullYear();} catch (e) {console.log("ERROR day4")}
    // try {date5.innerHTML = day5.getDate() + "/" + (day5.getMonth() + 1) + "/" + day5.getFullYear();} catch (e) {console.log("ERROR day5")}
    // try {date6.innerHTML = day6.getDate() + "/" + (day6.getMonth() + 1) + "/" + day6.getFullYear();} catch (e) {console.log("ERROR day6")}

    const date_today = () => {
        for (let i = 0; i < 7; i++) {
        const date = document.getElementById(`date${i}`);
        const day = new Date();
        day.setDate(day.getDate() + i);
        try {date.innerHTML = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();} catch (e) {console.log(`ERROR day${i}`)}
        }
    }

    //==========================next6days==============================================

    // const weather_today1 = document.getElementById("weather_today+1_png");
    // const weather_today2 = document.getElementById("weather_today+2_png");
    // const weather_today3 = document.getElementById("weather_today+3_png");
    // const weather_today4 = document.getElementById("weather_today+4_png");
    // const weather_today5 = document.getElementById("weather_today+5_png");
    // const weather_today6 = document.getElementById("weather_today+6_png");

    // weather_today1.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+1]);
    // weather_today2.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+2]);
    // weather_today3.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+3]);
    // weather_today4.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+4]);
    // weather_today5.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+5]);
    // weather_today6.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+6]);

    const weather_for_week = () => {
        for (let i = 1; i < 7; i++) {
            const weather_today = document.getElementById(`weather_today+${i}_png`);
            weather_today.src = "/img/" + weather_code_to_icon(currentCityData.daily.weather_code[indexDaily+i]);
        }
    }

 // wind direction
    // const wind_today1 = document.getElementById("wind_today+1_png");
    // const wind_today2 = document.getElementById("wind_today+2_png");
    // const wind_today3 = document.getElementById("wind_today+3_png");
    // const wind_today4 = document.getElementById("wind_today+4_png");
    // const wind_today5 = document.getElementById("wind_today+5_png");
    // const wind_today6 = document.getElementById("wind_today+6_png");

    // wind_today1.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+1]}deg;`
    // wind_today2.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+2]}deg;`
    // wind_today3.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+3]}deg;`
    // wind_today4.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+4]}deg;`
    // wind_today5.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+5]}deg;`
    // wind_today6.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+6]}deg;`

    const wind_for_week = () => {
        for (let i = 0; i < 7; i++) {
            const wind_today = document.getElementById(`wind_today+${i}_png`);
            wind_today.style = `rotate: ${currentCityData.daily.wind_direction_10m_dominant[indexDaily+i]}deg;`;
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


    weekdday_today();
    date_today();
    wind_for_week();
    weather_for_week();
    daily_temperature_today();


    // daily_temperature_2m_max_today+${i}
console.log("INDEX SCRIPT END <==========================================================="); // <<<<<===============================================

