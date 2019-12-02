import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 
  constructor( private http:Http) { }
  view_details(){
    // console.log(localStorage.getItem('view'));
    var enteredString = localStorage.getItem('view')

    return this.http.get('http://localhost:8888/view/' + enteredString).
    pipe(map(res=>{
      return res;
    }))
  }
  
}
