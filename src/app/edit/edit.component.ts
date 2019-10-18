import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  details:Applications;
  constructor(private http:Http,private router:Router){ }

  ngOnInit() {
    this.details=JSON.parse(localStorage.getItem('viewdetails')) as Applications;
      console.log(this.details.empId);
  
  }
  save(empId,firstName,lastName,email,gender,age){
      let edited_data=JSON.stringify(({empId,firstName,lastName,email,gender,age}));
      
      let header=new Headers({'Content-Type': 'application/json'});
      header.append('access-control-allow-origin','*');
      this.http.post('http://localhost:8888/edit',edited_data,{ headers:header}).subscribe(
          res=>{
            alert('Employee Data updated succesfully');
            this.router.navigate(['home1']);
          },
          error=>{
              alert('Error');
          }
      )
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
  