import { Component, OnInit } from '@angular/core';
import { GlosService } from '../../../services/glos.service'

@Component({
  selector: 'app-lake-michigan',
  templateUrl: './lake-michigan.component.html',
  styleUrls: ['./lake-michigan.component.scss']
})
export class LakeMichiganComponent implements OnInit {

  allLakeBounds: google.maps.MapRestriction = {
    latLngBounds: {
      north: 46.5,
      south: 41,
      west: -89,
      east: -84,
    }
  }

  mapWidth = 1200;
  mapHeight = 540;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 43.9, lng: -86 },
    zoom: 6,
    maxZoom: 13,
    minZoom: 6,
    restriction: this.allLakeBounds,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
  };

  constructor(private glosService: GlosService) { }
  
  buoys;
  filteredBuoys = [];
  tabledBuoys = [];
  rows = [];
  ngOnInit(): void {
    this.glosService.getGlos().subscribe((result: any) => {
      this.buoys = result;  
      console.log(this.buoys);
      
      for(let i = 1; i < this.buoys.length; i++){
        if(this.buoys[i].lake == "MI"){
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
}
