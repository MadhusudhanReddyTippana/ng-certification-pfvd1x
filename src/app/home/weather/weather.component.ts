import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ForecastDetails } from '../../models/forecast-details.model';
import { WeatherDetails } from '../../models/weather-details.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weatherDetails: WeatherDetails;
  @Output() onweatherRemoved = new EventEmitter();
  zipcode: string = "95742";

  constructor(
    private localStorageService: LocalStorageService,
    private weatherService: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  removeItem(): void {
    this.localStorageService.removeZipCodeFromLocalStorage(
      this.weatherDetails.zipCode
    );
    this.onweatherRemoved.emit();
  }
  
  ngOnInit() {
    console.log("WeatherComponent initialized");
  }

  onLoadFivedayWeather() {
    this.weatherService.zipcode = this.weatherDetails.zipCode;
    this.zipcode = this.weatherService.zipcode;
    this.weatherService
      .getForecast(this.zipcode)
      .subscribe((forecastData:ForecastDetails)=>{
          // console.log(forecastData);
          this.weatherService.forecastData = forecastData;
          // console.log(this.weatherService.forecastData);
          this.router.navigate(['/forecast']);
        }
      );
  }
}
