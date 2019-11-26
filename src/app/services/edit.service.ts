import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  constructor(private http:Http) { }

  save(empId, firstName, lastName, email, gender, age){
    let edited_data = JSON.stringify({ empId, firstName, lastName, email, gender, age });
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('access-control-allow-origin', '*');
   return this.http.post('http://localhost:8888/edit', edited_data, { headers: header }).pipe(map(res=>{
      return res;
    }))
  }


}
