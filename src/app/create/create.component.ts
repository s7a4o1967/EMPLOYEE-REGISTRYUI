import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NotificationsService } from 'angular2-notifications';
import { CreateService } from '../services/create.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formGroup: FormGroup;
  
  
  
  constructor(private   _notificationservice:NotificationsService
,private service:CreateService,private dialog:MatDialog,private formbuilder:FormBuilder
   //private router: Router,
  ) {

  }
  // types = ['alert', 'error', 'info', 'warn', 'success'];
  // animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
  
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formbuilder.group({
      'empId': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      // 'gender': ['', Validators.required],
      'age': ['', Validators.compose([Validators.required, Validators.maxLength(2)])]
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
        if (this.formGroup.get('email').hasError('email')) {
          return 'Invalid Email';
        }
        break;
      // case 'gender':
      //   if (this.formGroup.get('gender').hasError('required')) {
      //     return 'required';
      //   }
      //   break;
      case 'age':
        if (this.formGroup.get('age').hasError('required')) {
          return 'required';
        }
        if (this.formGroup.get('age').hasError('maxlength')) {
          return 'Enter valid number';
        }
        break;

      default:
        return '';
    }
  }
  onSubmit(value) {
    this.service.create(value).subscribe(res => {
      if (res.status === 200) {
        this._notificationservice.success('User registered successfully', '', {
          position: ["bottom", "left"],
          timeOut: 1000,
          clickToClose: true,
          animate: 'fromRight'
        });
      }
    },
      err => {
        if (err.status === 409) {
          this._notificationservice.error('User already exists', '', {
            position: ["bottom", "left"],
            timeOut: 1000,
            clickToClose: true,
            animate: 'fromRight'
          });

        }
      })
  }

  // create(value) {
  //   let empId = value.empId;
  //   let firstName = value.firstName;
  //   let lastName = value.lastName;
  //   let email = value.email;
  //   let gender = value.gender;
  //   let age = value.age;
  //   let createdTime = new Date();
  //   let createdBy = localStorage.getItem('userName');

  //   let body = JSON.stringify({ empId, firstName, lastName, email, gender, age, createdBy, createdTime });
  //   let header = new Headers({ 'Content-Type': 'application/json' });
  //   header.append('access-control-allow-origin', '*');
  //   this.http.post('http://localhost:8888/register', body, { headers: header })
  //     .subscribe(res => {
  //       if (res.status === 200) {
  //         this._notificationservice.success('User registered successfully','', {
  //           position: ["bottom", "left"],
  //           timeOut: 1000,
  //           clickToClose: true,
  //           animate: 'fromRight'
  //         });

  //       }
  //     },
  //       err => {
  //         if (err.status === 409) {
  //           this._notificationservice.error('User already exists','', {
  //             position: ["bottom", "left"],
  //             timeOut: 1000,
  //             clickToClose: true,
  //             animate: 'fromRight'
  //           });

  //         }
  //       })+
  // }


}



interface Applications {
  empId: string,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  age: string,
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

