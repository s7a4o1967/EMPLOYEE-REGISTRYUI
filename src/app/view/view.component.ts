import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view:any;
  constructor(public http:Http,private router:Router) {
   }

  ngOnInit() {
    console.log('entered view')
    var enteredString=localStorage.getItem('view');
    this.http.get('http://localhost:8888/view/'+enteredString).subscribe(res=>{
      this.view=res.json() as Applications;
      //console.log(this.view);
      localStorage.setItem('viewdetails',JSON.stringify(this.view));
    })
  }
  viewpage(){
    this.router.navigate(['edit']);
  }
  back(){
    this.router.navigate(['home1']);
  }

}
interface Applications {
  empId: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  createdBy: string;
  timeStamp: string;
  }
  