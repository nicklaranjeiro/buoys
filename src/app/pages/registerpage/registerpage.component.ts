import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createUser = () => {
    // If we're using ZIP for finding recommended buoys, we'll need to create variable on localStorage
    // window.localStorage.setItem('greatLakes_zipCode', '')
    // Create favorite buoys in localStorage
    window.localStorage.setItem('greatLakes_favBuoys', '')
    // Redirect user to favorite buoy screen
    this.router.navigateByUrl(`/favorite`);
  }

}
