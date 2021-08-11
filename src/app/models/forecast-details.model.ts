import { WeatherDetails } from "./weather-details.model";

export class ForecastDetails {
  list: WeatherDetails[];
  name: string;

  constructor(list: any, name:string) {
    let dt = list[0].dt;
    let dateArray = [];
    for(let i=0; i<5; i++) {
      dateArray.push(dt+86400*i)
    }
    // console.log(dateArray);
    let forecastArray = dateArray.map(el=>{
      for(let i=0; i<list.length; i++) {
        if(list[i].dt == el) {
          let weatherDetails: WeatherDetails = new WeatherDetails(
            list[i]?.main,
            list[i]?.weather[0],
            list[i]?.name,
            list[i]?.dt,
            list[i]?.zipCode,
            list[i]?.dt_txt
          );
          return weatherDetails;
        }
      }
    });
    this.list = forecastArray;
    // console.log(this.list);
    this.name = name;
  }
}