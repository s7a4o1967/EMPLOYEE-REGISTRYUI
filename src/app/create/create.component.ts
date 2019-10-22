import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  //  create_form = new FormGroup({
  //   empId: new FormControl(),
  //   firstName:new FormControl()
  // });
  // markFormTouched(group: FormGroup | FormArray) {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const control = group.controls[key];
  //     if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
  //     else { control.markAsTouched(); };
  //   });
  // };

  formGroup: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private http: Http, private router: Router, private formbuilder: FormBuilder) {
    // this.create_form = fb.group({
    //   'empId': [null, Validators.compose([Validators.required])]
    // })
  }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formbuilder.group({
      'empId': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'gender': ['', Validators.required],
      'age': ['', Validators.required]
    });
  }
  getError(el) {
    switch (el) {
      case 'empid':
        if (this.formGroup.get('empId').hasError('required')) {
          return 'required';
        }
        break;
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
  create(value) {
    let empId = value.empId;
    let firstName = value.firstName;
    let lastName = value.lastName;
    let email = value.email;
    let gender = value.gender;
    let age = value.age;
    let createdTime = new Date();
    let createdBy = localStorage.getItem('userName');
    let body = JSON.stringify({ empId, firstName, lastName, email, gender, age, createdBy, createdTime });
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('access-control-allow-origin', '*');
    this.http.post('http://localhost:8888/register', body, { headers: header })
      .subscribe(res => {
        if (res.status === 200) {
          alert('successfully registered');
          this.router.navigate(['home1']);
        }
      },
        err => {
          if (err.status === 409) {
            alert('User already exists.Try with different ID');
          }
        })
  }
}







  //create(empId,firstName,lastName,email,gender,age){
    //console.log(this.create_form.controls['empId'].errors.required)
    // this.create_form.errors
    //this.markFormTouched(this.create_form);
    //if (this.create_form.valid) {
      // You will get form value if your form is valid
    //   var formValues = this.create_form.getRawValue;
    //   console.log(formValues)
    // }
    //  else {
    //   this.create_form.controls['empId'].errors.required = false;

    // }

    // let createdBy = localStorage.getItem('userName');
    // // console.log('create componenet')
    // let createdTime=new Date();
    // let body=JSON.stringify({empId,firstName,lastName,email,gender,age,createdBy,createdTime});
    // console.log(body);

    // console.log(user);
    //     let header=new Headers({'Content-Type': 'application/json'});
    // header.append('access-control-allow-origin','*');
    // this.http.post('http://localhost:8888/register',body,{headers:header})
    //  .subscribe(res => {
    //    if(res.status === 200){
    //     alert('successfully registered');
    //     this.router.navigate(['home1']);
    //    }   
    //  },
    //  err=>{
    //    if(err.status===409){
    //      alert('User already exists.Try with different ID');
    //    }
    //  })
 // }
 
