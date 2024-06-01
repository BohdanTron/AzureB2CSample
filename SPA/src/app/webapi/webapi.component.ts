import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

type WeatherForecast = {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string | null;
}

type WeatherForecastResult = {
  result: WeatherForecast[]
};

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit {
  apiEndpoint: string = protectedResources.api.endpoint;
  failEndpoint: string = protectedResources.api.failingEndpoint;

  weatherForecast: WeatherForecast[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.http.get(this.apiEndpoint)
      .subscribe((forecast: any) => {
        this.weatherForecast = forecast;
      });
  }
}