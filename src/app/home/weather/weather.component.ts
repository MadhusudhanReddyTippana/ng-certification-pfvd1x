import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDetails } from '../../models/weather-details.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  weatherDetails: WeatherDetails;
  // @Input() weatherDetails: WeatherDetails;
  @Input() zipcode: string;
  @Output() onweatherRemoved = new EventEmitter();


  constructor(
    private localStorageService: LocalStorageService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  removeItem(): void {
    this.localStorageService.removeZipCodeFromLocalStorage(
      this.weatherDetails.zipCode
    );
    this.onweatherRemoved.emit();
  }
  
  ngOnInit() {
    // console.log("WeatherComponent initialized");
    // console.log(this.weatherDetails, this.zipcode);
    this.weatherService.getWeather(this.zipcode)
      .subscribe((weatherDetails: WeatherDetails) => {
        this.weatherDetails = weatherDetails;
        // console.log('weathercomponent: ', this.weatherDetails);
      });
    //   console.log('after api call');
  }
  

  onLoadFivedayWeather() {
    this.weatherService.zipcode = this.weatherDetails.zipCode;
    // this.weatherService
    //   .getForecast(this.zipcode)
    //   .subscribe((forecastData:ForecastDetails)=>{
    //       // console.log(forecastData);
    //       this.weatherService.forecastData = forecastData;
    //       // console.log(this.weatherService.forecastData);
    //       this.router.navigate(['/forecast', this.zipcode]);
    //     }
    //   );
    this.router.navigate(['/forecast', this.weatherDetails.zipCode]);

  }
}
