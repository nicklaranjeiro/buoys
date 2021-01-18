import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: string = window.localStorage.getItem('greatLakes_isLoggedIn');
  menuIsOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser = () => {
    // Remove loggedin variable from local storage
    window.localStorage.removeItem('greatLakes_isLoggedIn')
    // Redirect user to home screen
    // Not using router because need to force a reload for the state to change
    window.location.href = '/buoyportal/all-lakes';
  }

  toggleMenu = () => {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }

  routeToBuoy(buoy){
    this.router.navigateByUrl(`/buoyportal/${buoy}`);
  }

  // closeMenu = () => {
  //   const sideNav = document.querySelector('.nav-side-ctn');
  //   sideNav.style.display = 'none';
  // }

}
