import { Temperature } from './temperature.model';
import { Weather } from './weather.model';

export class WeatherDetails {
  temperature: Temperature;
  condition: Weather;
  pic: string = 'https://www.angulartraining.com/images/weather/';
  weatherCondition: string;
  name: string;
  zipCode: string;
  dt: number;
  constructor(
    temperature: Temperature,
    condition: Weather,
    name: string,
    dt: number,
    zipCode: string
  ) {
    this.condition = condition;
    this.zipCode = zipCode;
    this.temperature = temperature;
    this.name = name;
    this.dt = dt;
    if (this.condition.main.includes('Clear')) {
      this.pic = this.pic + 'sun.png';
      this.weatherCondition = 'Sunny';
    } else if (this.condition.main.includes('Clouds')) {
      this.pic = this.pic + 'clouds.png';
      this.weatherCondition = 'Cloudy';
    } else if (this.condition.main.includes('Mist')) {
      this.pic = this.pic + 'clouds.png';
      this.weatherCondition = 'Cloudy';
    } else if (this.condition.main.includes('Smoke')) {
      this.pic = this.pic + 'clouds.png';
      this.weatherCondition = 'Cloudy';
    } else if (this.condition.main.includes('Rain')) {
      this.pic = this.pic + 'rain.png';
      this.weatherCondition = 'Rainy';
    } else if (this.condition.main.includes('Snow')) {
      this.pic = this.pic + 'snow.png';
      this.weatherCondition = 'Snowy';
    }
  }
}
