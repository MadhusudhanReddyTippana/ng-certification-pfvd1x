import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDetails } from '../../models/weather-details.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
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
    // Doing API call when the component is initialised to get data.
    this.weatherService.getWeather(this.zipcode)
      .subscribe((weatherDetails: WeatherDetails) => {
        this.weatherDetails = weatherDetails;
      });
  }
  

  onLoadFivedayWeather() {
    // saving current component zipcode and moving to forecast/'zipcode'.
    this.weatherService.zipcode = this.weatherDetails.zipCode;
    this.router.navigate(['/forecast', this.weatherDetails.zipCode]);
  }
}
