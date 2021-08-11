import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  zipcodes: string[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    // Getting zipcodes data from local storage when application reloads and storing it in the "zipcodes" variable
    this.zipcodes = this.localStorageService.getFromLocalStorage();
  }

  getLatestList(data: string) {
    
    this.localStorageService.addToLocalData();
    this.zipcodes = this.localStorageService.getFromLocalStorage();
  }

  getLatestAfterRemove() {
    this.zipcodes = this.localStorageService.getFromLocalStorage();
  }
}