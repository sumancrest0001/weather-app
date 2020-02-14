import { axios } from 'axios';
import key from './config';

export default class Future {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  }

  async getFutureData() {
    try {
      const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&units=metric&appid=${key}`);
      this.result = res.data.list;
    } catch (error) {
      alert(error);
    }
  }
}