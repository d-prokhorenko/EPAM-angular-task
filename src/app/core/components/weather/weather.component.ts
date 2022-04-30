import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherInfo: any = null;

  weatherImgURL: string = '';

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather('Mozyr');
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe((weather) => {
      console.log(weather);
      this.weatherInfo = weather;
      this.weatherImgURL =
        'http://openweathermap.org/img/wn/' +
        this.weatherInfo?.weather[0].icon +
        '@2x.png';
    });
  }
}
