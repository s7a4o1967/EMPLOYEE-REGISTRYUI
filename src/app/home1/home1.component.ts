import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  items:any[];
  data:any[];
  constructor(private router: Router,private http :Http) {
    this.router = router;
    this.http=http;
  }

  ngOnInit() {
    let createdBy=localStorage.getItem('userName');
    this.http.get('http://localhost:8888/details/'+createdBy).subscribe(
      res=>{
        this.items=res.json() as Applications[];
        console.log(this.items)
      }
    );
  }
  search_emp(value){
    //    var data=this.items.filter(item=>{
    //         return item.empId.toLowerCase().includes(value);
    //     })
       
      
    //   var data=this.items.filter(item=>{
    //     return item.firstName.toLowerCase().includes(value);
    // })
    this.data=this.items.filter(item=>{
       console.log(item)
      // if(item.empId.includes(value)||item.firstName.toLowerCase().includes(value)||item.lastName.toLowerCase().includes(value)){
        if(item.empId.includes(value)){
        return item.empId;
      } else if(item.firstName.includes(value)){
        return item.firstName;
      }else if(item.lastName.includes(value)){
        return item.lastName;
      }
    })
   
   
    
    
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
