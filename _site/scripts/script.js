document.addEventListener("DOMContentLoaded", () => {
    console.log("RABOTAET SUKA");
    const currentCity = "amsterdam";
    const title = document.getElementById("title");
    // title.innerHTML = currentCity + " weather forecast"; //ERROR
    console.log("TYT");
    const currentCityData = weatherData[currentCity + "_daily"] // amsterdam_daily
    const currentCityDataHourly = weatherData[currentCity + "_hourly"] // amsterdam_daily
    const day = document.getElementById("day");               // <span id="day">Today</span>
    // const cityName = document.getElementById("cityName");       // TODO: make a script to have all city names correct
    // const indexForHourly = currentCityDataHourly.hourly.day.findIndex((element) => element === "TodayT" + hoursToTwoChars() + ":" + "00");

    //==========================daily==========================================
    const daily_weather_code = document.getElementById("daily_weather_code");
    const daily_temperature_2m_max = document.getElementById("daily_temperature_2m_max");
    const daily_temperature_2m_min = document.getElementById("daily_temperature_2m_min");
    const daily_apparent_temperature_max = document.getElementById("daily_apparent_temperature_max");
    const daily_apparent_temperature_min = document.getElementById("daily_apparent_temperature_min");
    const daily_sunrise = document.getElementById("daily_sunrise");
    const daily_sunset = document.getElementById("daily_sunset");
    const daily_precipitation_hours = document.getElementById("daily_precipitation_hours");
    const daily_precipitation_probability_max = document.getElementById("daily_precipitation_probability_max");
    const daily_wind_speed_10m_max = document.getElementById("daily_wind_speed_10m_max");
    const daily_wind_gusts_10m_max = document.getElementById("daily_wind_gusts_10m_max");
    const daily_wind_direction_10m_dominant = document.getElementById("daily_wind_direction_10m_dominant");
    
    //==========================hourly==========================================

    const hourly_temperature_2m = document.getElementById("hourly_temperature_2m");
    const hourly_relative_humidity_2m = document.getElementById("hourly_relative_humidity_2m");
    const hourly_apparent_temperature = document.getElementById("hourly_apparent_temperature");
    const hourly_precipitation_probability = document.getElementById("hourly_precipitation_probability");
    const hourly_precipitation = document.getElementById("hourly_precipitation");
    const hourly_weather_code = document.getElementById("hourly_weather_code");
    const hourly_wind_speed_10m = document.getElementById("hourly_wind_speed_10m");
    const hourly_wind_gusts_10m = document.getElementById("hourly_wind_gusts_10m");

    //===========================time=============================================
    const currentTime = document.getElementById("currentTime");
    const currentTimeHours = new Date().getHours();
    const currentTimeMinutes = new Date().getMinutes();
    currentTime.innerHTML = currentTimeHours + ":" + currentTimeMinutes;
    

    function hoursToTwoChars() {
        if (currentTimeHours < 12) {
            return "0" + currentTimeHours;
        }
    }

    //===========================daily=============================================
    const indexDaily = 0;
    const indexHourly = 0;
    // day.innerHTML = currentCityData.daily.day[0]; //error
    cityName.innerHTML = currentCity;

    daily_weather_code.innerHTML = currentCityData.daily.weather_code[indexDaily];
    daily_temperature_2m_max.innerHTML = currentCityData.daily.temperature_2m_max[indexDaily] + currentCityData.daily_units.temperature_2m_max;
    daily_temperature_2m_min.innerHTML = currentCityData.daily.temperature_2m_min[indexDaily] + currentCityData.daily_units.temperature_2m_min;
    daily_apparent_temperature_max.innerHTML = currentCityData.daily.apparent_temperature_max[indexDaily] + currentCityData.daily_units.apparent_temperature_max;
    daily_apparent_temperature_min.innerHTML = currentCityData.daily.apparent_temperature_min[indexDaily] + currentCityData.daily_units.apparent_temperature_min;
    daily_sunrise.innerHTML = currentCityData.daily.sunrise[indexDaily] + currentCityData.daily_units.sunrise;
    daily_sunset.innerHTML = currentCityData.daily.sunset[indexDaily] + currentCityData.daily_units.sunset;
    daily_precipitation_hours.innerHTML = currentCityData.daily.precipitation_hours[indexDaily] + currentCityData.daily_units.precipitation_hours;
    daily_precipitation_probability_max.innerHTML = currentCityData.daily.precipitation_probability_max[indexDaily] + currentCityData.daily_units.precipitation_probability_max;
    daily_wind_speed_10m_max.innerHTML = currentCityData.daily.wind_speed_10m_max[indexDaily] + currentCityData.daily_units.wind_speed_10m_max;
    daily_wind_gusts_10m_max.innerHTML = currentCityData.daily.wind_gusts_10m_max[indexDaily] + currentCityData.daily_units.wind_gusts_10m_max;
    daily_wind_direction_10m_dominant.innerHTML = currentCityData.daily.wind_direction_10m_dominant[indexDaily] + currentCityData.daily_units.wind_direction_10m_dominant;
    

    //=============================hourly============================================

    hourly_temperature_2m.innerHTML = currentCityDataHourly.hourly.temperature_2m[indexHourly];
    hourly_relative_humidity_2m.innerHTML = currentCityDataHourly.hourly.relative_humidity_2m[indexHourly];
    hourly_apparent_temperature.innerHTML = currentCityDataHourly.hourly.apparent_temperature[indexHourly];
    hourly_precipitation_probability.innerHTML = currentCityDataHourly.hourly.precipitation_probability[indexHourly];
    hourly_precipitation.innerHTML = currentCityDataHourly.hourly.precipitation[indexHourly];
    hourly_weather_code.innerHTML = currentCityDataHourly.hourly.weather_code[indexHourly];
    hourly_wind_speed_10m.innerHTML = currentCityDataHourly.hourly.wind_speed_10m[indexHourly];
    hourly_wind_gusts_10m.innerHTML = currentCityDataHourly.hourly.wind_gusts_10m[indexHourly];

    

    // maxWind.innerHTML = currentCityData.daily.wind_speed_10m_max[0] + " " + currentCityData.daily_units.wind_speed_10m_max;

    //============================now==============================================
    // currentTemp.innerHTML = currentCityDataHourly.hourly.temperature_2m[indexForHourly] + " " + currentCityDataHourly.hourly_units.temperature_2m;
    // currentTempFeel.innerHTML = currentCityDataHourly.hourly.apparent_temperature[indexForHourly] + " " + currentCityDataHourly.hourly_units.apparent_temperature;
    // currentWind.innerHTML = currentCityDataHourly.hourly.wind_speed_10m[indexForHourly] + " " + currentCityDataHourly.hourly_units.wind_speed_10m;
    
    console.log("DO KONCA");

});