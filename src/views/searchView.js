import { dom } from './base';
import { correctTemp } from '../models/search';

export const getInput = () => {
  let city = dom.cityInput.value;
  city = city.charAt(0).toUpperCase() + city.slice(1);
  const country = dom.countryInput.value;
  return { city, country };
};

export const clearForm = () => {
  dom.cityInput.value = '';
  dom.countryInput.value = 'NP';
};

const clearInfoSection = () => {
  dom.infoSection.innerHTML = '';
};

export const getCountry = (shortName) => {
  const countryTag = document.querySelector(`option[value = ${shortName}]`);
  return countryTag.textContent;
};

export const renderCurrentData = (data, type) => {
  clearInfoSection();
  const html = `<div class="info-section__location">
   <p class="city">${data.city}, ${getCountry(data.country)}</p>
    <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="icon for the weather" class="icon" id ="weather-icon" >
    <p id="weather-description"> ${data.weatherDes}</p>
    </div>
  <div class="info-section__temp">
      <p class="current-temp temp">${correctTemp(data.temp, type)}</p>
      <p class="min-temp temp">Min: ${correctTemp(data.minTemp, type)}</p>
      <p class="max-temp temp">Max: ${correctTemp(data.maxTemp, type)}</p>
      <p class="current-speed">wind: ${data.windSpeed} m/s</p> 
  </div >
   <div class="info-section__sun">
     <div><img src="image/sunrise.png" alt="sunrise icon" class="icon"><span class="sunrise-time">${data.sunrise}</span></div >
    <div><img src="image/sunset.png" alt="sunset icon" class="icon"><span class="sunset-time">${data.sunset}</span></div>
    </div>`;
  dom.infoSection.insertAdjacentHTML('beforeend', html);
  dom.unitbtn.classList.add('visible');
};


export const renderLoader = () => {
  const html = '<div class="loader"><i class="fa fa-refresh fa-spin"></i></div>';
  dom.infoSection.insertAdjacentHTML('afterbegin', html);
};

export const clearLoader = () => {
  dom.infoSection.innerHTML = ' ';
};