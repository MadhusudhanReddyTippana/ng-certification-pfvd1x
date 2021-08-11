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

  // weatherDetailsArray: WeatherDetails[] = [];
  zipcodes: string[] = [];

  ngOnInit() {
    // Getting zipcodes data from local storage and storing it in the "zipcodes" variable
    this.zipcodes = this.localStorageService.getFromLocalStorage();
  }

  getLatestList(data: string) {
    //this.weatherDetailsArray.push(data);
    this.localStorageService.addToLocalData();
    // this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
    this.zipcodes = this.localStorageService.getFromLocalStorage();
    // console.log(this.zipcodes);
    // console.log(data);
  }

  getLatestAfterRemove() {
    // this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
    this.zipcodes = this.localStorageService.getFromLocalStorage();
  }
}