import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImage = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  temperature = 0;
  humidity = 0;
  weather = '';
  city = '';
  loading = false;
  query = false;
  showError = false;
  
  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  obtainWeather(): void{
    this.loading = true;
    this.query = false;

    this._weatherService.getWeather(this.city).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperature = data.main.temp - 273;
      this.humidity = data.main.humidity;
      this.weather = data.weather[0].main;
    }, error => {
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.showError = true;
    setTimeout(() =>{
      this.showError = false;
      this.city = '';
    }, 3000);
  }
}