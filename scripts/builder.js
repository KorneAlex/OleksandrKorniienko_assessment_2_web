import { weatherCodeToIcon } from "./utils.js";

export function next6days() {
  let code = "";
  for (let i = 1; i < 7; i++) {
    code += `
      <figure class="card image is-4by5" style="width: 15%; height: 100%;">
        <div class="has-text-centered" style="padding: 10px;"><p id="date${i}">sun</p></div>
        <div class="is-flex is-justify-content-center">
        
        <figure class="image is-96x96">
        <img
          id="weather_today+${i}_png"
          alt="weather_today+${i}"
        </figure></div>
        <div class="card-content is-flex" style="padding: 15px;">

        <div class="is-flex is-flex-direction-column">
        <p><span class="has-text-weight-bold" id="daily_temperature_2m_max_today+${i}">XX°C</span>
        <span id="daily_temperature_2m_min_today+${i}">xx°C</span></p>

        <div class="is-flex is-align-items-center">
        <p>Wind:&nbsp</p>
        <figure class="image is-16x16">
        <img
        src="/img/wind_unselected.svg"
          id="wind_today+${i}_png"
          alt="wind_today+${i}"
          style="rotate: -0deg;"
        </figure>
        </div>

        </div>
        
        
        </div>
      </figure>
  `;
  }
  return code;
}

export function getCitiesList() {
  const cities = [];
  const cities_keys = Object.keys(weatherData);
  for (let i = 0; i < cities_keys.length; i+=2) {
    cities.push(cities_keys[i].slice(0, cities_keys[i].length - 6));
  }
  return cities;
}

export function citiesListDropdown(city) {
  let code = "";
    code += `
    <div class="dropdown-item">
          <a href="/?focus_city=${city}"><p>${city.charAt(0).toUpperCase() + city.slice(1)}</p></a>
    </div>`;
  return code;
}

// about wind direction: https://www.researchgate.net/figure/Explanation-of-wind-direction_fig2_350209908



    export function createCityTile(city) {
      let code = "";
        const currentCityData = weatherData[city+"_daily"];
        const currentCityDataHourly = weatherData[city+"_hourly"];
        const temperature_now = currentCityDataHourly.hourly.temperature_2m[0];
        const wind_direction = currentCityData.daily.wind_direction_10m_dominant[0];
        const weather_now = currentCityDataHourly.hourly.weather_code[0];
        console.log(weatherCodeToIcon(weather_now));
        const weather_now_png = `/img/${weatherCodeToIcon(weather_now)}`;
        code += `
        <figure class="card image is-4by5" style="width: 15%; height: 100%; margin: 0">

        <button class="card-header-icon" id="heart">
            <i id="fave-${city}" class="fa-regular fa-heart"></i>
        </button>
      
        <a href="/?focus_city=${city}" style="display: block;">
     
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
          
    
        </figure>
    
    `;
      return code;
    }