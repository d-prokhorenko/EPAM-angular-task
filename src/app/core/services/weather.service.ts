import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a73451a8444ee4e5138ed821773deab`
    );
  }
}
