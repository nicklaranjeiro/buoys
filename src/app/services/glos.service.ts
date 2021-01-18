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

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }


}
