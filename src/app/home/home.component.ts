import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  create(){
    this.router.navigate(['create']);
  }
  home(){
    this.router.navigate(['home1']);
  }
  details(){
    this.router.navigate(['details']);
   // this._details.employeedetails();
  }
  logout(){
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
