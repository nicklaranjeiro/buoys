import { Component, OnInit } from '@angular/core';
import { GlosService } from 'src/app/services/glos.service';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Component({
  selector: 'app-favorite-buoy',
  templateUrl: './favorite-buoy.component.html',
  styleUrls: ['./favorite-buoy.component.scss']
})
export class FavoriteBuoyComponent implements OnInit {
  weatherForecast;
  buoyInformation;
  currentBuoy;
  id;

  constructor(
    private weatherService: WeatherForecastService,
    private buoyService: GlosService
  ) { }

  ngOnInit(): void {
      // Getting the GLOS API and using the long and lat to call the weather API
      this.buoyService.getGlos().subscribe((response: any) => {
        this.buoyInformation = response;
        this.currentBuoy = this.buoyInformation.find((x) => {
          return x.id === this.id;
        });
        console.log(this.currentBuoy, 'buoy information');

        this.weatherService
        // Using the lat and lon from currentBuoy to get the weather for that buoy
          .getWeather(this.currentBuoy.lat, this.currentBuoy.lon)
          .subscribe((response: any) => {
            this.weatherForecast = response;
          });
      });
  }

  isFavorite = (buoyId) => {
    let favorites = JSON.parse(window.localStorage.getItem('favorites'));
    return favorites.includes(buoyId);
  }

}
