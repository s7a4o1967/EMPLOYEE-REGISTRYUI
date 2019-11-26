import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  
  constructor(private http: Http) { }
  create(value: Applications) {
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
    return this.http.post('http://localhost:8888/register', body, { headers: header })
      .pipe(map(res => {
        return res;
      }
      ))
  }
}
interface Applications {
  empId: string,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  age: string,
}
