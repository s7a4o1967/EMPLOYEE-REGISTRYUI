import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any;
createdBy:any;
// router:Router;
  constructor(private router:Router) { }

  ngOnInit() {
   this.user=localStorage.getItem('userName');
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
  view()
  {
    this.createdBy=localStorage.getItem('userName');
    localStorage.setItem('view',this.createdBy);
    this.router.navigate(['view']);
  }
  logout(){
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
