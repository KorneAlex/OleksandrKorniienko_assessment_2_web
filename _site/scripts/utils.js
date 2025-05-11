//===========================time=============================================

export function hoursToTwoChars(currentTimeHours) {
    if (currentTimeHours < 10) {
        return "0" + currentTimeHours;
    } else {
        return currentTimeHours;
    }
}

export function minToTwoChars(currentTimeMinutes) {
    if (currentTimeMinutes < 10) {
        return "0" + currentTimeMinutes;
    } else {
        return currentTimeMinutes;
    }
}

//===========================weather=============================================
// https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTML
export function weatherCodeToIcon(weather_code) {
    if (weather_code === 0) return "sunny.png";
    else if (weather_code === 1) return "partly_cloudy.png";
    else if (weather_code === 2) return "cloudy.png";
    else if (weather_code === 3) return "overcast.png";
    else if (weather_code === 10) return "mist.png";
    else if (weather_code >= 20 && weather_code <= 29) return "thunderstorm.png";
    else if (weather_code >= 30 && weather_code <= 39) return "sand_storm.png";
    else if (weather_code >= 40 && weather_code <= 49) return "fog.png";
    else if (weather_code >= 50 && weather_code <= 59) return "drizzle.png";
    else if (weather_code >= 60 && weather_code <= 69) return "rain_showers.png";
    else if (weather_code >= 70 && weather_code <= 79) return "snow_showers.png";
    else if (weather_code >= 80 && weather_code <= 99) return "thunderstorm.png";
    else return "error.png";
}


//============================key_values=============================================

export function getFocusCity() {
    const keyValues = window.location.search;
    const urlParams = new URLSearchParams(keyValues);
    return urlParams.get("focus_city");
}

// hourly breakdown
// export function getHourlyData(city) {
//     const hourlyData = weatherData[city + "_hourly"];
//     const hourly2 =  hourlyData.hourly.time[0];

//     return("HourlyData from utils: ." + hourly2);
// }