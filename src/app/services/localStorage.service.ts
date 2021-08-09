import { Injectable } from '@angular/core';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  weatherDetailsArray: WeatherDetails[] = [];

  getFromLocalStorage(): WeatherDetails[] {
    var retrievedObject = localStorage.getItem('localData');
    console.log(JSON.parse(retrievedObject));
    return JSON.parse(retrievedObject);
  }

  addToLocalData(WeatherDetails: WeatherDetails) {
    this.weatherDetailsArray.push(WeatherDetails);
    localStorage.setItem('localData', JSON.stringify(this.weatherDetailsArray));
  }

  removeFromLocalStorage(): void {
    this.weatherDetailsArray = [];
  }

  removeZipCodeFromLocalStorage(zipCode: string): void {
    this.weatherDetailsArray.splice(
      this.weatherDetailsArray.findIndex(x => x.zipCode === zipCode),
      1
    );
    localStorage.setItem('localData', JSON.stringify(this.weatherDetailsArray));
  }
}
