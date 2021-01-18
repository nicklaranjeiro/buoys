import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlosService } from '../../../services/glos.service'

@Component({
  selector: 'app-lake-erie',
  templateUrl: './lake-erie.component.html',
  styleUrls: ['./lake-erie.component.scss']
})
export class LakeErieComponent implements OnInit {

  allLakeBounds: google.maps.MapRestriction = {
    latLngBounds: {
      north: 44,
      south: 40,
      west: -85,
      east: -77,
    }
  }

  mapWidth = 1200;
  mapHeight = 540;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 42.25, lng: -81 },
    zoom: 8,
    maxZoom: 13,
    minZoom: 8,
    restriction: this.allLakeBounds,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
  };

  constructor(private glosService: GlosService, private router: Router) { }
  
  buoys;
  filteredBuoys = [];
  tabledBuoys = [];
  rows = [];
  ngOnInit(): void {
    this.glosService.getGlos().subscribe((result: any) => {
      this.buoys = result;  
      console.log(this.buoys);
      
      for(let i = 1; i < this.buoys.length; i++){
        if(this.buoys[i].lake == "ER"){
          this.filteredBuoys.push(this.buoys[i])
        }
      }

      for(let i = 1; i < this.filteredBuoys.length; i++){
        this.tabledBuoys.push(this.filteredBuoys[i]);
        if(i % 6 == 0){
          this.rows.push(this.tabledBuoys);
          this.tabledBuoys = [];
        }
      }
      this.rows.push(this.tabledBuoys)

    });
  }

  titleChange(name){
    document.getElementById("title").innerHTML = name;
  }

  routeToBuoy(buoy){
    this.router.navigateByUrl(`/buoyportal/${buoy.id}`);
  }
}
