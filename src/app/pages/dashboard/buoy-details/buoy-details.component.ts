import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlosService } from 'src/app/services/glos.service';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-buoy-details',
  templateUrl: './buoy-details.component.html',
  styleUrls: ['./buoy-details.component.scss'],
})
export class BuoyDetailsComponent implements OnInit, OnChanges {
  weatherForecast;
  buoyInformation;
  lon;
  lat;
  id;
  currentBuoy;
  waveHeight = [5];
  waterTemp = [56, 52, 50, 45, 55];
  // waveHeightValue;
  // waterTempValue;
  buoysWithLinks = [];
  buoysWithLinkNames = [];
  webcamStream;

  mapWidth = 144;
  mapHeight = 144;
  mapOptions: google.maps.MapOptions = {
    // center: { lat: 44.75, lng: -82 },
    // center: { lat: this.currentBuoy.lat, lng: this.currentBuoy.lon},
    zoom: 8,
    maxZoom: 8,
    minZoom: 8,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    draggable: false,
  };

  constructor(
    private weatherService: WeatherForecastService,
    private buoyService: GlosService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(changes){
    console.log(changes, "changes");
  }

  ngOnInit(): void {
    // Routing from the click event
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      // Getting the GLOS API and using the long and lat to call the weather API
      this.buoyService.getGlos().subscribe((response: any) => {
        this.buoyInformation = response;
        // Set currentBuoy to the Buoy ID
        this.currentBuoy = this.buoyInformation.find((x) => {
          return x.id === this.id;
        });
        this.mapOptions.center = { lat: this.currentBuoy.lat, lng: this.currentBuoy.lon};
        // console.log(this.currentBuoy, 'buoy information');
        if(this.currentBuoy.webcamLink[0] !== undefined){
          let webcam = this.currentBuoy.webcamLink[0].split('/');
          this.webcamStream =
            'https://www.limnotechdata.com/stations/albums/' +
            webcam[4] +
            '/' +
            webcam[4] +
            '720p.mp4';
        }

        this.weatherService
          // Using the lat and lon from currentBuoy to get the weather for that buoy
          .getWeather(this.currentBuoy.lat, this.currentBuoy.lon)
          .subscribe((response: any) => {
            this.weatherForecast = response;
          });
      });
    });
  }

  swimConditions = () => {
    const waterTempValue = this.waterTemp[
      Math.floor(Math.random() * this.waterTemp.length)
    ];
    const waveHeightValue = this.waveHeight[
      Math.floor(Math.random() * this.waveHeight.length)
    ];
    
    if (waterTempValue > 70 && waveHeightValue < 3) {
    
      return true;
    }
  };

  kayakConditions = () => {
    const waveHeightValue = this.waveHeight[
      Math.floor(Math.random() * this.waveHeight.length)
    ];
    console.log(waveHeightValue, 'wave height kayak')
    if (waveHeightValue < 3) {
      
      return true;
    }
    return false;
  };

  fishingConditions = () => {
    const waterTempValue = this.waterTemp[
      Math.floor(Math.random() * this.waterTemp.length)
    ];
    if (waterTempValue >=50 || waterTempValue <= 75) {
      return true;
    }
  };

  boatingConditions = () => {
    const waveHeightValue = this.waveHeight[
      Math.floor(Math.random() * this.waveHeight.length)
    ];
    if (waveHeightValue <= 5) {
      console.log(waveHeightValue, 'boat wave height');
      return true;
    }
  };  

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleFavorite = (buoyId) => {
    let favorites = JSON.parse(window.localStorage.getItem('favorites'));
    if (!favorites) {
      favorites = [];
    }
    if (favorites.includes(buoyId)) {
      // remove from favorites
      const indexOfBuoyToRemove = favorites.findIndex(
        (favorite) => favorite === buoyId
      );
      favorites.splice(indexOfBuoyToRemove, 1);
      window.localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      favorites.push(buoyId);
      window.localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  isFavorite = (buoyId) => {
    let favorites = JSON.parse(window.localStorage.getItem('favorites'));
    if (favorites) {
      return favorites.includes(buoyId);
    }
  };
}
 