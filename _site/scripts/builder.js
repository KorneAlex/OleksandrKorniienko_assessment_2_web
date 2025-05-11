export function next6days() {
  let code = "";
  for (let i = 1; i < 7; i++) {
    code += `
      <figure class="card image is-4by5" style="width: 15%; height: 100%;">
        <div class=""><p id="date${i}">sun</p></div>
        <div class="card-content">
        <figure class="image is-96x96">
        <img
          id="weather_today+${i}_png"
          alt="weather_today+${i}"
          class="image is-64x64 is-offset-one-fifth"
          style="margin-left: 20px">
        </figure>
        </div>
      </figure>
  `;
  }
  return code;
}
