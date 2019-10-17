import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view:any[];
  constructor(public http:Http,private router:Router) {
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/view/2').subscribe(res=>{
      this.view=res.json();
      localStorage.setItem('emp',JSON.stringify(this.view));
    })
  }
  edit(){
    this.router.navigate(['edit']);
  }
  back(){
    this.router.navigate(['home1']);
  }

}
