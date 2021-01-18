import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlosService } from '../../../services/glos.service'

@Component({
  selector: 'app-lake-huron',
  templateUrl: './lake-huron.component.html',
  styleUrls: ['./lake-huron.component.scss']
})
export class LakeHuronComponent implements OnInit {

  allLakeBounds: google.maps.MapRestriction = {
    latLngBounds: {
      north: 47,
      south: 42,
      west: -86,
      east: -78,
    }
  }

  mapWidth = 1200;
  mapHeight = 540;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 44.75, lng: -82 },
    zoom: 7,
    maxZoom: 13,
    minZoom: 7,
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
        if(this.buoys[i].lake == "HU"){
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
