//===========================time=============================================

/**
 * Converts a given hour to a two-character string.
 * If the hour is less than 10, it prepends a "0" to the hour.
 *
 * @param {number} currentTimeHours - The hour to be converted (0-23).
 * @returns {string} A two-character string representing the hour.
 */
export function hoursToTwoChars(currentTimeHours) {
  if (currentTimeHours < 10) {
      return "0" + currentTimeHours;
  } else {
      return currentTimeHours;
  }
}

/**
* Converts a number representing minutes into a two-character string.
* If the number is less than 10, it prepends a "0" to ensure a two-character format.
*
* @param {number} currentTimeMinutes - The number of minutes to format.
* @returns {string|number} A two-character string if the input is less than 10, 
*                          otherwise returns the input number as is.
*/
export function minToTwoChars(currentTimeMinutes) {
  if (currentTimeMinutes < 10) {
      return "0" + currentTimeMinutes;
  } else {
      return currentTimeMinutes;
  }
}

// strings

export function nameFix(name) {
  name = name.toLowerCase();
  let fixedName = "";
  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i) === "_") {
      fixedName += " ";
    } else if (i === 0 || name.charAt(i - 1) === " " || name.charAt(i - 1) === "_") {
      fixedName += name.charAt(i).toUpperCase();
    } else {
      fixedName += name.charAt(i);
    }
  }
  return fixedName;
}



//===========================weather=============================================
// https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTML
/**
* Converts a weather code to the corresponding weather icon filename.
*
* @param {number} weather_code - The weather code representing specific weather conditions.
* @returns {string} The filename of the weather icon corresponding to the given weather code.
*
* Weather Code Mapping:
* - 0: "sunny.png"
* - 1: "partly_cloudy.png"
* - 2: "cloudy.png"
* - 3: "overcast.png"
* - 10: "mist.png"
* - 20-29: "thunderstorm.png"
* - 30-39: "sand_storm.png"
* - 40-49: "fog.png"
* - 50-59: "drizzle.png"
* - 60-65: "rain_showers.png"
* - 66-69: "freezing_rain_showers.png"
* - 70-79: "snow_fall.png"
* - 80: "rain_shower_slight.png"
* - 81: "rain_shower_moderate.png"
* - 82: "rain_shower_violent.png"
* - 85: "snow_shower_light.png"
* - 86: "snow_shower_heavy.png"
* - 87-95: "thunderstorm.png"
* - 96-99: "thunderstorm_hail.png"
* - Any other value: "error.png"
*/
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
  else if (weather_code >= 60 && weather_code <= 65) return "rain_showers.png";
  else if (weather_code >= 66 && weather_code <= 69) return "freezing_rain_showers.png";
  else if (weather_code >= 70 && weather_code <= 79) return "snow_fall.png";
  else if (weather_code >= 80 && weather_code <= 80) return "rain_shower_slight.png";
  else if (weather_code >= 81 && weather_code <= 81) return "rain_shower_moderate.png";
  else if (weather_code >= 82 && weather_code <= 82) return "rain_shower_violent.png";
  else if (weather_code >= 85 && weather_code <= 85) return "snow_shower_light.png";
  else if (weather_code >= 86 && weather_code <= 86) return "snow_shower_heavy.png";
  else if (weather_code >= 87 && weather_code <= 95) return "thunderstorm.png";
  else if (weather_code >= 96 && weather_code <= 99) return "thunderstorm_hail.png";
  else return "error.png";
}


//============================key_values=============================================

/**
* Retrieves the value of the "focus_city" parameter from the current page's URL query string.
*
* @returns {string | null} The value of the "focus_city" parameter if present, or `null` if not found.
*/
export function getFocusCity() {
  const keyValues = window.location.search;
  const urlParams = new URLSearchParams(keyValues);
  return urlParams.get("focus_city");
}

export function getDayKeyValue() {
  const keyValues = window.location.search;
  const urlParams = new URLSearchParams(keyValues);
  return urlParams.get("day");
}


//=============================location=================================================



let x = document.getElementById("demo");

export function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  } else {
      try {
          x.innerHTML = "Geolocation is not supported by this browser.";
      } catch (e) {
          "ERRORR location"
      }
  }
}

function success(position) {
  try {
      x.innerHTML = "Latitude: " + position.coords.latitude +
          "<br>Longitude: " + position.coords.longitude;
  } catch (e) {
      "ERRORR location"
  }
}

function error() {
  alert("Sorry, no position available.");
}