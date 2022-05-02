import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  weatherInfo: any = null;

  weatherImgURL: string = '';

  constructor(
    private readonly weatherService: WeatherService,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getWeather('Mozyr');
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe((weather) => {
      console.log(weather);
      this.weatherInfo = weather;
      this.weatherImgURL =
        'http://openweathermap.org/img/wn/' +
        this.weatherInfo?.weather[0].icon +
        '@2x.png';
      this.cd.markForCheck();
    });
  }
}
