import { Component, OnInit } from '@angular/core';
import { Http,Headers} from '@angular/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  constructor(private http:Http) { }
  create(empId,firstName,lastName,email,gender,age){
    let createdBy = localStorage.getItem('userName');
    // console.log('create componenet')
    let createdTime=new Date();
    let body=JSON.stringify({empId,firstName,lastName,email,gender,age,createdBy,createdTime});
    // console.log(body);
    
    // console.log(user);
        let header=new Headers({'Content-Type': 'application/json'});
    header.append('access-control-allow-origin','*');
    this.http.post('http://localhost:8888/register',body,{headers:header})
     .subscribe(res => {
        alert('successfully registered');
     })
  }
}
