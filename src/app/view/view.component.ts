import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ViewService } from '../services/view.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[HomeComponent]
})
export class ViewComponent implements OnInit {

  view: any;
  // private view_Service:ViewService;
  //  private router: Router;
  //   private home: HomeComponent;
  constructor( private view_Service:ViewService,
    private router: Router,
     private home: HomeComponent) {
  }

  ngOnInit() {
    // console.log('entered view')
    // this.http.get('http://localhost:8888/view/' + enteredString).subscribe(res => {
    //   this.view = res.json() as Applications;
    //   //console.log(this.view);
    //   localStorage.setItem('viewdetails', JSON.stringify(this.view));
    // })
      this.view_Service.view_details().subscribe(res=>{
        this.view=res.json() as Applications;
        localStorage.setItem('viewdetails', JSON.stringify(this.view));
      })
  }
  viewpage() {
    this.router.navigate(['edit']);
  }
  back() {
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
