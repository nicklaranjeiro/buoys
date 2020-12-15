import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlosService } from 'src/app/services/glos.service';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Component({
  selector: 'app-buoy-details',
  templateUrl: './buoy-details.component.html',
  styleUrls: ['./buoy-details.component.scss'],
})
export class BuoyDetailsComponent implements OnInit {
  weatherForecast;
  buoyInformation;
  lon;
  lat;
  id;
  currentBuoy;
  obsName;
  waveHeight;
  windSpeed;
  waterTemp;

  mapWidth = 144;
  mapHeight = 144;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 44.75, lng: -82 },
    zoom: 10,
    maxZoom: 10,
    minZoom: 10,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    draggable: false,
  };

  constructor(
    private weatherService: WeatherForecastService,
    private buoyService: GlosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Routing from the click event
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      // Getting the GLOS API and using the long and lat to call the weather API
      this.buoyService.getGlos().subscribe((response: any) => {
        this.buoyInformation = response;
        this.currentBuoy = this.buoyInformation.find((x) => {
          return x.id === this.id;
        });
        console.log(this.currentBuoy, 'buoy information');
        this.obsName = this.currentBuoy.obsLongName;

        this.weatherService
        // Using the lat and lon from currentBuoy to get the weater for that buoy
          .getWeather(this.currentBuoy.lat, this.currentBuoy.lon, "imperial")
          .subscribe((response: any) => {
            this.weatherForecast = response;
          });
      });
    });
    this.filterValues();
  }
  filterValues() {
    this.buoyService.filterValues(this.obsName, 'Water Temp');
  }
  
  toggleFavorite = (buoyId) => {
    let favorites = JSON.parse(window.localStorage.getItem('favorites'));
    if (!favorites) {
      favorites = [];
    }
    if (favorites.includes(buoyId)) {
      // remove from favorites
      const indexOfBuoyToRemove = favorites.findIndex((favorite) => favorite === buoyId);
      favorites.splice(indexOfBuoyToRemove, 1);
      window.localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      favorites.push(buoyId);
      window.localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  isFavorite = (buoyId) => {
    let favorites = JSON.parse(window.localStorage.getItem('favorites'));
    return favorites.includes(buoyId);
  }

}
