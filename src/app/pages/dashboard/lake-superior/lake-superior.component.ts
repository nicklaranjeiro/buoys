import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlosService } from '../../../services/glos.service'


@Component({
  selector: 'app-lake-superior',
  templateUrl: './lake-superior.component.html',
  styleUrls: ['./lake-superior.component.scss']
})
export class LakeSuperiorComponent implements OnInit {

  allLakeBounds: google.maps.MapRestriction = {
    latLngBounds: {
      north: 50,
      south: 45.75,
      west: -93.5,
      east: -83,
    }
  }

  mapWidth = 1200;
  mapHeight = 540;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 47.25, lng: -87.5 },
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
        if(this.buoys[i].lake == "SUP"){
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
