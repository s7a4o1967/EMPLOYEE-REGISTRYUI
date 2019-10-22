import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formGroup: FormGroup;
  details:Applications;
  constructor(private http:Http,private router:Router,private formbuilder:FormBuilder){ }

  ngOnInit() {
    this.details=JSON.parse(localStorage.getItem('viewdetails')) as Applications;
      this.createForm();
  }
  save(empId,firstName,lastName,email,gender,age){
    // let empId=this.details.empId;
    // let firstName=value.firstName;
    // let lastName=value.lastName;
    // let email=value.email;
    // let gender=value.gender;
    // let age=value.age;
      let edited_data=JSON.stringify(({empId,firstName,lastName,email,gender,age}));
      console.log(edited_data);
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
  createForm(){
    this.formGroup = this.formbuilder.group({
  
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'gender': ['', Validators.required],
      'age': ['', Validators.required]
    });
  }

getError(el) {
    switch (el) {
     
      case 'firstname':
        if (this.formGroup.get('firstName').hasError('required')) {
          return 'required';
        }
        break;
      case 'lastname':
        if (this.formGroup.get('lastName').hasError('required')) {
          return 'required';
        }
        break;
      case 'email':
        if (this.formGroup.get('email').hasError('required')) {
          return 'required';
        }
        break;
      case 'gender':
        if (this.formGroup.get('gender').hasError('required')) {
          return 'required';
        }
        break;
      case 'age':
        if (this.formGroup.get('age').hasError('required')) {
          return 'required';
        }
        break;

      default:
        return '';
    }
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
  