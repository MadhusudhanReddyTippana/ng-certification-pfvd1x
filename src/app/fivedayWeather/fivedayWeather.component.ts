import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ForecastDetails } from '../models/forecast-details.model';
import { WeatherDetails } from '../models/weather-details.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-fivedayWeather',
  templateUrl: './fivedayWeather.component.html',
  styleUrls: [ './fivedayWeather.component.css' ]
})
export class FivedayWeatherComponent implements OnInit {
  zipcode: string;
  name: string;
  forecastData: ForecastDetails;

  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("ForecastCOMPONENT initialized");
    this.route.data
      .subscribe(
        (data: Data) => {
          this.forecastData = data['forecast']
        }
      );
    this.zipcode = this.weatherService.zipcode;
    // this.forecastData = this.weatherService.forecastData.list;
    // this.name = this.weatherService.forecastData.name;
    // console.log(this.forecastData);
  }
  
}