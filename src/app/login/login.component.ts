import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:Http,private router:Router) { }
 
  login(empId,password){
    
    let header=new Headers({'Content-Type': 'application/json'});
    header.append('access-control-allow-origin','*');
    let body=JSON.stringify({empId,password});
    // let response = '';
     // console.log(body)
     this.http.post('http://localhost:8888/login',body,{headers:header})
     .subscribe(result => {
       if(result.status === 200){
         localStorage.setItem('userName',empId);
       }
       this.router.navigate(['home1']);
     },error=>{
       alert('Invalid Username or Password');

     }

     )
  }
 

}
