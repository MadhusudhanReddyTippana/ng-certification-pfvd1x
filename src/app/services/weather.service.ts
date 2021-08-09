import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  zipcode: string;
  
  constructor(private httpClient: HttpClient) {}

  getWeather(zipCode: string): Observable<WeatherDetails> {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=5a4b2d457ecbef9eb2a71e480b947604`;
    // this.httpClient.get(baseUrl).subscribe((data: any) => {
    //   // let weatherDetails:WeatherDetails={
    //   //   temperature:data?.main,
    //   //   condition:data?.weather[0]
    //   // }

    // });
    return this.httpClient.get(baseUrl).pipe(
      map((data: any) => {
        // console.log(data);
        //  console.log();
        let weatherDetails: WeatherDetails = new WeatherDetails(
          data?.main,
          data?.weather[0],
          data?.name,
          zipCode
        );
        return weatherDetails;
      })
    );
  }

  // getForecast(zipCode: string) {
  //   const baseUrl = `api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=5a4b2d457ecbef9eb2a71e480b947604`;
  //   return this.httpClient.get(baseUrl);
  // }
}
