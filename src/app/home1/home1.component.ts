import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormControl}  from '@angular/forms';
import{ MatAutocompleteModule} from '@angular/material';
import { Observable } from 'rxjs';
import { Home1Service } from '../services/home1.service';
// import {map, startWith, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
// import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
// import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  stateControl : FormControl = new FormControl();
  items:any[];
  options:any[];
  // private router: Router;
  // private home1_service:Home1Service
  //filteredOptions:Observable<Applications[]>;
  constructor( private router: Router,
    private home1_service:Home1Service) {
  }

  ngOnInit() {
    this.valueChange();
  }
  valueChange(){
    this.stateControl.valueChanges
    .subscribe(data=>{
      if(data!==''){
          this.getdata(data)
      }
    })
  }
  // getdata(term){
  //   return this.http.get('http://localhost:8888/search/' + term).subscribe(res => {
  //     console.log(res)
  //       return res.json().map(options => {
  //         console.log(options)
  //           return options.firstName
  //       })
  //   })
  // }
//  getdata(value:string){
//     this.http.get('http://localhost:8888/search/'+value).subscribe(res=>{
//           this.options=res.json() as Applications[];
//     })
//  }
getdata(value:string){
  this.home1_service.getResponse(value).subscribe(res=>{
    this.options=res.json() as Applications[];
  })
}

 search(empinp){
   if(empinp){
    localStorage.setItem('view',empinp);
   }
    this.router.navigate(['view']);
 }
  // search_emp(value){
    //    var data=this.items.filter(item=>{
    //         return item.empId.toLowerCase().includes(value);
    //     }) 
    //   var data=this.items.filter(item=>{
    //     return item.firstName.toLowerCase().includes(value);
    // })
  //   this.data=this.items.filter(item=>{
  //      console.log(item)
  //     // if(item.empId.includes(value)||item.firstName.toLowerCase().includes(value)||item.lastName.toLowerCase().includes(value)){
  //       if(item.empId.includes(value)){
  //       return item.empId;
  //     } else if(item.firstName.includes(value)){
  //       return item.firstName;
  //     }else if(item.lastName.includes(value)){
  //       return item.lastName;
  //     }
  //   })
  // }
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

