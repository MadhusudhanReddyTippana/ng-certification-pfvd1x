import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherDetails } from '../../models/weather-details.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() onSearch = new EventEmitter();
  constructor(
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService
  ) {}
  addZipCode(zipCodeInput: HTMLInputElement) {
    // console.log(zipCodeInput.value);
    this.weatherService
      .getWeather(zipCodeInput.value)
      .subscribe((weatherDetails: WeatherDetails) => {
        // console.log(weatherDetails);
        this.onSearch.emit(weatherDetails);
      });

    zipCodeInput.value = '';
  }
  
  ngOnInit() {
    console.log("SearchComponent initialized");
  }
}