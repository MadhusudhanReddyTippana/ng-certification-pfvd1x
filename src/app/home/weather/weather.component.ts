import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
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
    private weatherService: WeatherService
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
}
