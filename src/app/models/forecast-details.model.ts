import { WeatherDetails } from "./weather-details.model";

export class ForecastDetails {
  list: WeatherDetails[];
  name: string;

  constructor(list: WeatherDetails[], name:string) {
    let dt = list[0].dt;
    let dateArray = [];
    for(let i=0; i<5; i++) {
      dateArray.push(dt+86400*i)
    }
    // console.log(dateArray);
    let forecastArray = dateArray.map(el=>{
      for(let i=0; i<list.length; i++) {
        if(list[i].dt == el) {
          return list[i];
        }
      }
    });
    this.list = forecastArray;
    // console.log(this.list);
    this.name = name;
  }
}