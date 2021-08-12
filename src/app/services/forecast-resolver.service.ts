import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ForecastDetails } from '../models/forecast-details.model';
import { WeatherService } from './weather.service';

@Injectable()
export class ForecastResolver implements Resolve<ForecastDetails> {
  constructor(private weatherService: WeatherService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ForecastDetails> | Promise<ForecastDetails> | ForecastDetails {
    return this.weatherService.getForecast(route.params['zipcode']);
  }
}
