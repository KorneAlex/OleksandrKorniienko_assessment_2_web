import {
  weatherCodeToIcon,
  hoursToTwoChars,
  getFocusCity,
  getDayKeyValue,
} from "./utils.js";

/**
* Generates HTML code for a 7-day weather forecast display.
*
* This function creates a series of HTML figure elements, each representing
* a day in the next 7 days, starting from today. Each figure includes weather
* information such as the day, date, temperature, and wind details.
*
* @returns {string} The generated HTML code as a string.
*/
export function next7days() {
  let code = "";
  for (let i = 0; i < 7; i++) {
      const daySelector = i === 0 ? "day=today" : "day=today+" + i;
      code += `
  <figure class="column image" style="min-width: 150px; max-width: 120px; height: 100%; ${
    daySelector.slice(10) === getDayKeyValue().slice(6)
      ? "border: solid;"
      : "border: none;"
  }">
  <a href="?focus_city=${getFocusCity()}&${daySelector}">
      <div class="has-text-centered" style="padding-top: 5px;"><p class="weekday${i}">weekday</p></div>
      <div class="has-text-centered" style="padding-top: 0px;"><p class="date${i}">date</p></div>
      <div class="is-flex is-justify-content-center">
      <figure class="image is-96x96">
      <img
        id="weather_today+${i}_png"
        alt="weather_today+${i}"
      </figure></div>
      <div class="card-content is-flex" style="padding: 15px;">
      <div class="is-flex is-flex-direction-column">
      <p><span class="has-text-weight-bold" id="daily_temperature_2m_max_forWeek+${i}">XX°C</span>
      <span id="daily_temperature_2m_min_forWeek+${i}">xx°C</span></p>
      <div class="is-flex is-align-items-center">
      <p>Wind:&nbsp</p>
      <figure class="image is-16x16">
      <img
      src="/img/wind_unselected.svg"
        class="wind_today+${i}_png"
        alt="wind_today+${i}"
        style="rotate: -0deg;"
      </figure>
      </div>
      <div><p>Rain:&nbsp<span class="has-text-weight-bold" id="precipitation_probability_max_forWeek+${i}">%</span></p></div>
      </div>
      </div>
      </a>
    </figure>
`;
  }
  return code;
}

/**
* Retrieves a list of city names derived from the keys of the `weatherData` object.
* Assumes that the keys in `weatherData` contain city names followed by a 6-character suffix.
*
* @returns {string[]} An array of city names extracted from the keys of `weatherData`.
*/
export function getCitiesList() {
  const cities = [];
  const cities_keys = Object.keys(weatherData);
  for (let i = 0; i < cities_keys.length; i += 2) {
      cities.push(cities_keys[i].slice(0, cities_keys[i].length - 6));
  }
  return cities;
}

/**
* Generates an HTML string for a dropdown item representing a city.
*
* @param {string} city - The name of the city to include in the dropdown item.
* @returns {string} The HTML string for the dropdown item, with the city name capitalized.
*/
export function citiesListDropdown(city) {
  let code = "";
  code += `
  <div class="dropdown-item">
        <a href="/?focus_city=${city}&day=today"><p>${
  city.charAt(0).toUpperCase() + city.slice(1)
}</p></a>
  </div>`;
  return code;
}

// about wind direction: https://www.researchgate.net/figure/Explanation-of-wind-direction_fig2_350209908

/**
* Generates an HTML string representing a city tile with weather information.
*
* @param {string} city - The name of the city for which the tile is created.
* @returns {string} An HTML string representing the city tile.
*
* @description
* This function creates a city tile that displays the current weather information
* for a given city. The tile includes the city's name, current temperature, wind
* direction, and a weather icon. It also includes a favorite button and a link
* to focus on the city's detailed weather page.
*
* The function relies on global `weatherData` to fetch the city's daily and hourly
* weather data and uses the `weatherCodeToIcon` function to determine the appropriate
* weather icon.
*
* https://emojidb.org/hour-emojis?utm_source=user_search
*/
export function createCityTile(city) {
  let code = "";
  const currentCityData = weatherData[city + "_daily"];
  const currentCityDataHourly = weatherData[city + "_hourly"];
  const temperature_now = currentCityDataHourly.hourly.temperature_2m[0];
  const wind_direction = currentCityData.daily.wind_direction_10m_dominant[0];
  const weather_now = currentCityDataHourly.hourly.weather_code[0];
  const weather_now_png = `/img/${weatherCodeToIcon(weather_now)}`;
  code += `
   <div class="is-flex is-flex-direction-row is-flex-wrap-wrap card" style="background-color: #ffb901; margin: 0; gap: 15px">
      <div class="card is-flex-grow-1" style="width: 200px; margin: 0">
      <button class="card-header-icon" id="heart">
          <i id="fave-${city}" class="fa-regular fa-heart"></i>
      </button>
      <a href="/?focus_city=${city}&day=today" style="display: block;">
        <div class="has-text-centered" style="padding: 10px;"><p id="${city}_city">city</p></div>
        <div class="is-flex is-justify-content-center">
        <figure class="image is-96x96">
        <img
          src="${weather_now_png}"
          alt="weather_now_in_${city}"
        </figure></div>
        <div class="card-content is-flex" style="padding: 15px;">
        <div class="is-flex is-flex-direction-column">
        <p><span class="has-text-weight-bold">${temperature_now}°C</span></p>
        <div class="is-flex is-align-items-center">
        <p>Wind:&nbsp</p>
        <p>${wind_direction}°</p>
        <figure class="image is-16x16">
        <img
        src="/img/wind_unselected.svg"
          alt="${wind_direction}"
          style="rotate: -${wind_direction}deg;"
        </figure>
        </div>
        </div>
        </div>
        </a>
      </div>
    <div class="is-flex is-justify-content-space-evenly is-align-items-center is-flex-grow-3 is-flex-direction-row card cardInfo" style="margin: 0">
    <div>
<table>
  <tr><td><p>♨️Max°C today:</td><td>${
    currentCityData.daily.temperature_2m_max[0] +
    currentCityData.daily_units.temperature_2m_max
  }</p></td></tr>
  <tr><td><p>❄️Min°C today:</td><td>${
    currentCityData.daily.temperature_2m_min[0] +
    currentCityData.daily_units.temperature_2m_min
  }</p></td></tr>
  <tr><td><p>🥵Fells like max:</td><td>${
    currentCityData.daily.apparent_temperature_max[0] +
    currentCityData.daily_units.apparent_temperature_max
  }</p></td></tr>
  <tr><td><p>🥶Fells like min:</td><td>${
    currentCityData.daily.apparent_temperature_min[0] +
    currentCityData.daily_units.apparent_temperature_min
  }</p></td></tr>
  <tr><td><p>🌅Sunrise:</td><td>${currentCityData.daily.sunrise[0].slice(
    currentCityData.daily.sunrise[0].length - 5
  )}</p></td></tr>
  <tr><td><p>🌇Sunset:</td><td>${currentCityData.daily.sunset[0].slice(
    currentCityData.daily.sunset[0].length - 5
  )}</p></td></tr>
</table>
  </div>
  <div>
  <table>
  <tr><td><p>💧Precipitation hours:</td><td>${
    currentCityData.daily.precipitation_hours[0] +
    currentCityData.daily_units.precipitation_hours
  }</p></td></tr>
  <tr><td><p>💧Precipitation probability:</td><td>${
    currentCityData.daily.precipitation_probability_max[0] +
    currentCityData.daily_units.precipitation_probability_max
  }</p></td></tr>
  <tr><td><p>💨Wind speed max:</td><td>${
    currentCityData.daily.wind_speed_10m_max[0] +
    currentCityData.daily_units.wind_speed_10m_max
  }</p></td></tr>
  <tr><td><p>💨Wind gusts max:</td><td>${
    currentCityData.daily.wind_gusts_10m_max[0] +
    currentCityData.daily_units.wind_gusts_10m_max
  }</p></td></tr>
  <tr><td><p>🧭Wind direction:</td><td>${
    currentCityData.daily.wind_direction_10m_dominant[0] +
    currentCityData.daily_units.wind_direction_10m_dominant
  }</p></td></tr>
  </table>
  </div>
</div>
    </div>
   
</div>
</div>
  `;
  return code;
}

/**
* Generates an HTML string representing the hourly weather breakdown for a given city.
*
* @param {string} city - The name of the city for which to generate the hourly weather breakdown.
* @returns {string} An HTML string containing weather information for each hour of the day.
*
* The function retrieves hourly weather data for the specified city from a global `weatherData` object.
* It highlights the current hour's weather data with a distinct style and includes information such as:
* - Time of the hour
* - Weather icon based on the weather code
* - Temperature with units
* - Wind speed with units
*
* Note: The function assumes the existence of helper functions `hoursToTwoChars` and `weatherCodeToIcon`,
* as well as a `weatherData` object containing the necessary weather data.
*/
export function hourlyBreakdown(city, dayFromToday) {
  const hourlyData = weatherData[city + "_hourly"];
  const localTime = new Date().getHours();
  // I wanted to make timeshift depending on the city (-12 - +12) but we dont have this data ¯\_(° ͜ʖ °)_/¯
  const timeHoursInTheCurrentCityNow = hoursToTwoChars(localTime);
  let code = "";
  dayFromToday =
      dayFromToday === "today" ? 0 : dayFromToday.slice(dayFromToday.length - 1);
  let i = dayFromToday * 24;
  let j = i + 24;
  for (i; i < j; i++) {
      if (hoursToTwoChars(i) === hoursToTwoChars(timeHoursInTheCurrentCityNow)) {
          code += `
        <figure class="image" style="border: solid; padding: 3px">
        <p class="has-text-centered">${hourlyData.hourly.time[i].slice(
          hourlyData.hourly.time[i].length - 5
        )}</p>
          <div class="is-flex is-justify-content-center">
          <figure class="image is-32x32">
          <img
            src="/img/${weatherCodeToIcon(hourlyData.hourly.weather_code[i])}"
            id="weather_at_time+${hourlyData.hourly.weather_code[i]}_png"
          </figure></div>
          <div class="card-content is-flex is-justify-content-center">
          <div class="is-flex is-flex-direction-column">
          <p><span class="has-text-weight-bold">${
            hourlyData.hourly.temperature_2m[i] +
            hourlyData.hourly_units.temperature_2m
          }</span>

          <div class="is-flex is-align-items-center">
          <p>${
            hourlyData.hourly.wind_speed_10m[i] +
            hourlyData.hourly_units.wind_speed_10m
          }</p>
          </div>
          <p>💧${
            hourlyData.hourly.precipitation_probability[i] +
            hourlyData.hourly_units.precipitation_probability
          }</p>
          </div>
          </div>
          <div class="has-text-centered"<p>🔺Now🔺</p></div>
        </figure>
    `;
      } else {
          code += `
        <figure class="image" style="border: solid; border-color: transparent; padding: 3px">
        <p class="has-text-centered">${hourlyData.hourly.time[i].slice(
          hourlyData.hourly.time[i].length - 5
        )}</p>
          <div class="is-flex is-justify-content-center">
          <figure class="image is-32x32">
          <img
            src="/img/${weatherCodeToIcon(hourlyData.hourly.weather_code[i])}"
            id="weather_at_time+${hourlyData.hourly.weather_code[i]}_png"
          </figure></div>
           <div class="card-content is-flex is-justify-content-center">
          <div class="is-flex is-flex-direction-column">
          <p><span class="has-text-weight-bold">${
            hourlyData.hourly.temperature_2m[i] +
            hourlyData.hourly_units.temperature_2m
          }</span>
          <div class="is-flex is-align-items-center">
          <p>${
            hourlyData.hourly.wind_speed_10m[i] +
            hourlyData.hourly_units.wind_speed_10m
          }</p>
          </div>
          </div>
          </div>
          <p>💧${
            hourlyData.hourly.precipitation_probability[i] +
            hourlyData.hourly_units.precipitation_probability
          }</p>
        </figure>
    `;
      }
  }
  return code;
}