import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  details:Applications;
 
  constructor(private http:Http,private router:Router,private formbuilder:FormBuilder,public dialog: MatDialog){ }
  openDialog(key) {
    let dialogRef = this.dialog.open(DialogComponent,
      {
        height: '25%',
        width: '40%',

      });
  }
  ngOnInit() {
    this.details=JSON.parse(localStorage.getItem('viewdetails')) as Applications;
    
      this.createForm();
  }
  save(empId,firstName,lastName,email,gender,age){
      // if(email === null || email === ''){
      //   this.editForm.controls['email'].setErrors({'email': true});
      // } else{
      //   this.editForm.controls['email'].setErrors(null);
      // }
    // let empId=this.details.empId;
    // let firstName=value.firstName;
    // let lastName=value.lastName;
    // let email=value.email;
    // let gender=value.gender;
    // let age=value.age;
    
    let edited_data=JSON.stringify(({empId,firstName,lastName,email,gender,age}));
      // console.log(edited_data);
      let header=new Headers({'Content-Type': 'application/json'});
      header.append('access-control-allow-origin','*');
      this.http.post('http://localhost:8888/edit',edited_data,{ headers:header}).subscribe(
          res=>{
            // let dialogRef = this.dialog.open(DialogComponent);
            // alert('Employee Data updated succesfully');
            this.router.navigate(['home1']);
          },
          error=>{
              alert('Error');
          }
      )

  }
  createForm(){
    this.editForm = this.formbuilder.group({
  
      'firstName': [this.details.firstName, Validators.required],
     'lastName': [this.details.lastName, Validators.required],
      'email': [this.details.email, Validators.compose([Validators.required, Validators.email])],
      'gender': [this.details.gender, Validators.required],
      'age': [this.details.age, Validators.compose([Validators.required, Validators.maxLength(2)])]
    });
  }

  
getError(el) {
    switch (el) {
      case 'firstname':
        if (this.editForm.get('firstName').hasError('required')  ) {
          return 'required';
        }
        break;
      case 'lastname':
        if (this.editForm.get('lastName').hasError('required')) {   
          return 'required';
        }
        break;
      case 'email':
        if (this.editForm.get('email').hasError('required')) {
          return 'required';
        }
        if(this.editForm.get('email').hasError('email')){
          return 'Invalid Email'
        }
        break;
      case 'gender':
        if (this.editForm.get('gender').hasError('required')) {
          return 'required';
        }
        break;
      case 'age':
        if (this.editForm.get('age').hasError('required')) {
          return 'required';
        }
        if(this.editForm.get('age').hasError('maxlength')){
          return 'Enter valid number';
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
  