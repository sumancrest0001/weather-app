import axios from 'axios';
import { key } from './config';
//import { searchData } from './searchdata';
export default class Search {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  }

  async getCurrentData() {
    try {
      const data = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${key}`
      );
      const searchData = data.data;
      this.city = searchData.name;
      this.country = searchData.sys.country;
      this.temp = searchData.main.temp;
      this.maxTemp = searchData.main.temp_max;
      this.minTemp = searchData.main.temp_min;
      this.windSpeed = searchData.wind.speed;
      this.weather = searchData.weather[0].main;
      this.icon = searchData.weather[0].icon;
      this.sunrise = formatTime(searchData.sys.sunrise);
      this.sunset = formatTime(searchData.sys.sunset);
      this.weatherDes = searchData.weather[0].description;
    } catch (error) {
      alert(error);
    }

  }
}

function formatTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime;
}


function correctTemp(temp, type) {
  const convertedTemp = type === '℉' ? (temp * (9 / 5) + 32) : temp;
  const result = `${convertedTemp.toFixed(2)} ${type}`;
  return result;
}

export { correctTemp };