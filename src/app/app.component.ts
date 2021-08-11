import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // constructor(private localStorageService: LocalStorageService) {}

  // weatherDetailsArray: WeatherDetails[] = [];
  // ngOnInit() {
  //   this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
  // }

  // getLatestList(data: WeatherDetails) {
  //   //this.weatherDetailsArray.push(data);
  //   this.localStorageService.addToLocalData(data);
  //   this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
  //   // console.log(this.weatherDetailsArray);
  //   // console.log(data.name);
  //   // console.log(data.weatherCondition);
  //   // console.log(data.temperature.temp_min);
  //   // console.log(data.temperature.temp_min);
  //   // console.log(data.temperature.temp_max);
  // }

  // getLatestAfterRemove() {
  //   this.weatherDetailsArray = this.localStorageService.getFromLocalStorage();
  // }

  ngOnInit() {
    // console.log("AppComponent initialized");
  }
}
