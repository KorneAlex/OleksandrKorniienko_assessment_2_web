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
          style="rotate: 0deg;"
        </figure>
        </div>

        </div>
        
        
        </div>
      </figure>
  `;
  }
  return code;
}

function get_cities_list() {
  const cities = [];
  const cities_keys = Object.keys(weatherData);
  for (let i = 0; i < cities_keys.length; i+=2) {
    cities.push(cities_keys[i].slice(0, cities_keys[i].length - 6));
  }
  return cities;
}

export function cities_list() {
  const cities = get_cities_list();
  console.log(get_cities_list);
  let code = "";
  for (let i = 0; i < cities.length; i++) {
    code += `
    <div class="dropdown-item">
          <a href="/?focus_city=${cities[i]}"><p>${cities[i].charAt(0).toUpperCase() + cities[i].slice(1)}</p></a>
    </div>`;
  }
  return code;
}