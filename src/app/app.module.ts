import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherComponent } from './home/weather/weather.component';
import { SearchComponent } from './home/search/search.component';
import { HomeComponent } from './home/home.component';
import { FivedayWeatherComponent } from './fivedayWeather/fivedayWeather.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'forecast', component: FivedayWeatherComponent}
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
    HelloComponent,
    WeatherComponent,
    SearchComponent,
    FivedayWeatherComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
