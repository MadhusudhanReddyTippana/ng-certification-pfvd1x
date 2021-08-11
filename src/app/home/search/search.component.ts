import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ForecastDetails } from '../../models/forecast-details.model';
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
    let zipcode = zipCodeInput.value;
    // console.log(zipcode);
    // this.weatherApiCall(zipCodeInput.value);
    if(this.localStorageService.zipcodes === []) {
      this.localStorageService.zipcodes.push(zipCodeInput.value);
      this.onSearch.emit(zipcode);
    } else {
      if(this.localStorageService.zipcodes.indexOf(zipcode) === -1) {
        this.localStorageService.zipcodes.push(zipCodeInput.value);
        this.onSearch.emit(zipcode);
      } 
      else {
        console.log('zipcode already in storage');
      }
    }

    // console.log(this.localStorageService.zipcodes);
    zipCodeInput.value = '';
  }
  
  ngOnInit() {
    // console.log("SearchComponent initialized");
  }

  // weatherApiCall(zipcode: string) {
  //   this.weatherService
  //     .getWeather(zipcode)
  //     .subscribe((weatherDetails: WeatherDetails) => {
  //       // console.log('weatherdetails: ', weatherDetails);
  //       this.onSearch.emit(weatherDetails);
  //     });
  // }
}
