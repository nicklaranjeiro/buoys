import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlosService {
  constructor(private http: HttpClient) {}

  getGlos() {
    return this.http.get<any>(
      'https://glbuoys.glos.us/static/Buoy_tool/data/meta_english.json'
    );
  }

  // Need to filter through the array to see if obsLongName exists. 
  // if it does, find the index of the string that corresponds with water temp or wave height, etc. 
  // Using the index, find the value on obsValue that corresponds to that name, and returning the value.
  filterValues(name, string) {
    // Name is this.currentBuoy
    // String will be "Water Temp" or "Wave Height" etc
    // If obsLongName exists, find the index of the string
    if (name.includes(string)) {
      let position = name.findIndex(string);
      // when we find the index we need to go to the obsValues and find the number from the same index
    }
  }
  
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
