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
  forecastData: ForecastDetails;

  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.zipcode = this.route.snapshot.params['zipcode'];

    /**
     * To get the returned data from route resolver service "ForecastResolver"
     * Subscribing to data Observable to get data returned by resolver.
     */
    this.route.data
      .subscribe(
        (data: Data) => {
          this.forecastData = data['forecast']
          // console.log(this.forecastData);

        }
      );
  }
  
}