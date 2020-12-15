import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlosService } from 'src/app/services/glos.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // Initialize variables
  allBuoys;
  supBuoys;
  bouyRoute;

  // Map view restriction data
  lakeBounds: google.maps.MapRestriction = {
    latLngBounds: {
      north: 51,
      south: 40,
      west: -100,
      east: -70,
    }
  }

  // Map default data
  @Input() buoyArray;
  @Input() mapWidth;
  @Input() mapHeight;
  @Input() mapOptions:
    google.maps.MapOptions = {
    center: { lat: 45, lng: -83.50 },
    zoom: 6,
    maxZoom: 13,
    minZoom: 6,
    restriction: this.lakeBounds,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
  };


  constructor(private buoyService: GlosService, private router: Router) { }

  ngOnInit(): void {
    this.buoyService.getGlos().subscribe(res => {
      // Set API data to "allBuoys"
      this.allBuoys = res;
      this.supBuoys = this.allBuoys.filter((buoy) => buoy.lake === 'SUP');
      // Get buoy position with lat-lng
      this.allBuoys.forEach(buoy => {
        buoy.position = {
          lat: buoy.lat,
          lng: buoy.lon
        },
        // Set buoy label
        buoy.label = {
          color: 'white',
          text: buoy.id
        },
        // Set buoy id to title
        buoy.title = buoy.id
        // Set custom icon and animation
        buoy.options = {
          icon: buoy.recovered ? '../assets/icon-buoy-recovered.svg' : '../assets/icon-buoy-active.svg',
          animation: google.maps.Animation.DROP
        }
      });

    });

    
  }

  routeToBuoy(buoy){
    this.router.navigateByUrl(`/buoyportal/${buoy.id}`);
  }





}
