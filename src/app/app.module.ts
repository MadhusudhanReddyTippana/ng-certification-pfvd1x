import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './home/weather/weather.component';
import { SearchComponent } from './home/search/search.component';
import { HomeComponent } from './home/home.component';
import { FivedayWeatherComponent } from './fivedayWeather/fivedayWeather.component';
import { ForecastResolver } from './services/forecast-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'forecast/:zipcode',
    component: FivedayWeatherComponent,
    resolve: { forecast: ForecastResolver }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    SearchComponent,
    FivedayWeatherComponent
  ],
  providers: [ForecastResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
