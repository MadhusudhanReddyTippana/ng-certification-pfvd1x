import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForecastDetails } from '../models/forecast-details.model';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  zipcode: string;
  private apiKey: string = '5a4b2d457ecbef9eb2a71e480b947604';
  forecastData: ForecastDetails;
  
  constructor(private httpClient: HttpClient) {}

  getWeather(zipCode: string): Observable<WeatherDetails> {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${this.apiKey}`;

    return this.httpClient.get(baseUrl).pipe(
      map((data: any) => {
        let weatherDetails: WeatherDetails = new WeatherDetails(
          data?.main,
          data?.weather[0],
          data?.name,
          data?.dt,
          zipCode,
          data?.dt_txt
        );
        return weatherDetails;
      })
    );
  }

  getForecast(zipCode: string): Observable<ForecastDetails> {
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&appid=${this.apiKey}`;
    return this.httpClient.get(baseUrl)
      .pipe(
        map((data: any)=> {
          let forecastData: ForecastDetails = new ForecastDetails(data?.list, data?.city.name);
          return forecastData;
        })
      );
  }
}
