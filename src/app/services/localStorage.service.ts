import { Injectable } from '@angular/core';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  weatherDetailsArray: WeatherDetails[] = [];
  zipcodes: string[] = [];


  getFromLocalStorage(): string[] {
    let retrievedObject = localStorage.getItem('zipcodes');
    if(JSON.parse(retrievedObject)) {
      this.zipcodes = JSON.parse(localStorage.getItem('zipcodes'));
      return JSON.parse(retrievedObject);
    }
    
  }

  addToLocalData() {
    // this.weatherDetailsArray.push(WeatherDetails);
    // localStorage.setItem('localData', JSON.stringify(this.weatherDetailsArray));
    localStorage.setItem('zipcodes', JSON.stringify(this.zipcodes));
  }


  removeZipCodeFromLocalStorage(zipCode: string): void {
    this.zipcodes.splice(this.zipcodes.indexOf(zipCode),1);
    // console.log(this.zipcodes);
    localStorage.setItem('zipcodes', JSON.stringify(this.zipcodes));

    localStorage.setItem('localData', JSON.stringify(this.weatherDetailsArray));
  }
}
