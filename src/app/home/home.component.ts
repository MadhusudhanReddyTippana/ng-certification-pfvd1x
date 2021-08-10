import { Component, OnInit } from '@angular/core';
import { WeatherDetails } from '../models/weather-details.model';
import { LocalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {}

  weatherDetailsArray: WeatherDetails[] = [];

  ngOnInit() {
    console.log("HomeComponent initialized");
    this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
  }

  getLatestList(data: WeatherDetails) {
    //this.weatherDetailsArray.push(data);
    this.localStorageService.addToLocalData(data);
    this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
    console.log(data.zipCode);
    console.log(this.weatherDetailsArray);
    // console.log(data.name);
    // console.log(data.weatherCondition);
    // console.log(data.temperature.temp_min);
    // console.log(data.temperature.temp_min);
    // console.log(data.temperature.temp_max);
  }

  getLatestAfterRemove() {
    this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
  }
}