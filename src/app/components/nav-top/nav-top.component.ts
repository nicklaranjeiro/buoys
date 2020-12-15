import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  isLoggedIn: string = window.localStorage.getItem('greatLakes_isLoggedIn');

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  toHome = () => {
    this.router.navigateByUrl(`/buoyportal/all-lakes`);
  }

  logoutUser = () => {
        // Remove loggedin variable from local storage
        window.localStorage.removeItem('greatLakes_isLoggedIn')
        // Redirect user to home screen
        // Not using router because need to force a reload for the state to change
        window.location.href = '/buoyportal/all-lakes';
  }

  // openMenu = () => {
  //   const sideNav = document.querySelector('.nav-side-ctn');
  //   sideNav.style.display = 'block';
  // }
}
