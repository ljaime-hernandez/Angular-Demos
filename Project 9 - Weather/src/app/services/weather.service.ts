import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
  weatherKey = '7f4ccc763bfbf4368dbcfdc82c64b61b';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const URL = this.weatherUrl + city + '&appid=' + this.weatherKey;
    return this.http.get(URL);
  }
}
