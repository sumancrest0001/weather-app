import convertCelsius from '../models/search';
import dom from './base';
function renderDays(data) {
  let html;
  for (let i = 0; i < 5; i += 1) {
    html += `<div class="day-section__item" id= "day-${id}">
  <h3 class="forecast-date">${getDate(data[i * 8])}</h3>
  <div class="item-info">
    <div class="item-temp">
      <p class="item-maxtemp">Max: ${convertCelsius(data[0].temp_max)} &#8451;</p>
      <p class="item-mintemp">Min: ${convertCelsius(data[0].temp_min)}&#8451;</p>
    </div>
  <img src="http://openweathermap.org/img/w/${data[i * 8].weather[0].icon}.png" alt="icon for the weather" class="icon">
</div>`;
  }
  dom.daySection.insertAdjacentHTML('beforeend', html);
}