import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather = (lat, lon, imperial): any => {
    let filterParam = new HttpParams();
    filterParam = filterParam.set('lat', lat);
    filterParam = filterParam.set('lon', lon);
    filterParam = filterParam.set('units', imperial);
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?appid=a2eff9aa00866bdec6f039157000e1b7',
      { params: filterParam }
    );
  }
}
