import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather = { main: { temp_max: 0, temp_min: 0, temp: 0, humidity: 0 }, wind: { speed: 0 }, weather: [{ main: '' }] };
  image = '';
  city = '';

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      var city = params['city'];
      this.image = "assets/images/";
      // console.log(city);
      this.city = city;
      if (city == 'burbank') {
        this.image = this.image + city + '.jpg';
      } else {
        this.image = this.image + city + '.jpeg';
      }
      // console.log(this.image);
      this._httpService.getWeatherInfo(city).subscribe((data: any) => { this.weather = data; });
    });
  }

}

