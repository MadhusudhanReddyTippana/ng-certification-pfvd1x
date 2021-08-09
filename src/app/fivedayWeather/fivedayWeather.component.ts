import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-fivedayWeather',
  templateUrl: './fivedayWeather.component.html',
  styleUrls: [ './fivedayWeather.component.css' ]
})
export class FivedayWeatherComponent implements OnInit {
  zipcode: string = '95742';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    console.log("ForecastCOMPONENT initialized");
    // this.weatherService
    //   .getForecast("95742")
    //   .subscribe(data => {
    //     console.log('fivedayWeather: '+ data);
    // }, error => {
    //   console.log(error);
    // })
  }
  
}