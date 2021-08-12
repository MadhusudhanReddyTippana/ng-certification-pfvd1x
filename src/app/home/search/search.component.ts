import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() onSearch = new EventEmitter();

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  addZipCode(zipCodeInput: HTMLInputElement) {
    // Saving the zipcode user entered in local storage and emiting that value to parent(Home) component
    let zipcode = zipCodeInput.value;

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

    zipCodeInput.value = '';
  }
  
  ngOnInit() {
    // console.log("SearchComponent initialized");
  }

}
