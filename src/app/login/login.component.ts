import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, private login_service: LoginService, private router: Router) { }
  ngOnInit() {
    this.createForm();
  }
  onSubmit():boolean {
    this.login_service.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {

          this.router.navigate(['home1']);
          
        },
        error => {
          alert('Invalid Username or Password');
          return false;
        });
        return true 
  }
  // login(value){
  //  let empId=value.username;
  //  let password=value.password;
  //   let header=new Headers({'Content-Type': 'application/json'});
  //   header.append('access-control-allow-origin','*');
  //   let body=JSON.stringify({empId,password});
  //   // let response = '';
  //    // console.log(body)
  //    this.http.post('http://localhost:8888/login',body,{headers:header})
  //    .subscribe(result => {console.log(result)
  //      if(result.status === 200){

  //        localStorage.setItem('userName',empId);
  //        this.router.navigate(['home1']);
  //      }

  //    },error=>{
  //      alert('Invalid Username or Password');

  //    }

  //   )
  // }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'required';
        }
        break;
      default:
        return '';
    }
  }

  get f() {
    return this.formGroup.controls;
  }
  createForm() {
    this.formGroup = this.formbuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
}
