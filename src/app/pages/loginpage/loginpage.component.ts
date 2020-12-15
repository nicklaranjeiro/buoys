import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser = () => {
    // Create loggedin variable on local storage and set to true
    window.localStorage.setItem('greatLakes_isLoggedIn', 'true')
    // Redirect user to home screen
    this.router.navigateByUrl(`/buoyportal/all-lakes`);
  }



}
