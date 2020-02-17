import { correctTemp } from '../models/search';
import { dom } from './base';

function getDate(dataArr) {
  const newArr = dataArr.split(' ').shift();
  const arr = newArr.split('-').splice(1, 2);
  return arr.join('/');
}

function getHour(dataArr) {
  const newArr = dataArr.split(' ').pop();
  newArr.split(':').splice(2, 1).join(':');
  return newArr;
}

function renderDays(data, type) {
  dom.messageBox.textContent = '';
  dom.daySection.innerHTML = '';
  let html = ' ';
  for (let i = 0; i < 5; i += 1) {
    html += `<div class="day-section__item" id= "day-${i}">
    <h3 class="forecast-date">${getDate(data[i * 8].dt_txt)}</h3>
     <div class="item-info">
          <div class="item-temp">
            <p class="item-maxtemp temp">Max: ${correctTemp(data[i * 8].main.temp_max, type)} </p>
            <p class="item-mintemp temp">Min: ${correctTemp(data[i * 8].main.temp_min, type)}</p>
          </div>
        <img src="http://openweathermap.org/img/w/${data[i * 8].weather[0].icon}.png" alt="icon for the weather" class="icon">
      </div>
      </div>`;
  }
  dom.daySection.insertAdjacentHTML('afterbegin', html);
}

function hourItem(data, day, type) {
  dom.hourSection.innerHTML = '';
  const start = day * 8;
  const end = (day + 1) * 8;
  let html = '';
  for (let i = start; i < end; i += 1) {
    html += `<div class="card">
    <p class="card__time">${getHour(data[i].dt_txt)} h</p>
    <h2 class="temp">${correctTemp(data[i].main.temp, type)}</h2>
    <div><img src="http://openweathermap.org/img/w/${data[i].weather[0].icon}.png" alt="icon for the weather" class="icon"></div>
    <p>wind:${data[i].wind.speed} m/s</p>
  </div>`;
  }
  dom.hourSection.insertAdjacentHTML('afterbegin', html);
}

export { renderDays, hourItem };