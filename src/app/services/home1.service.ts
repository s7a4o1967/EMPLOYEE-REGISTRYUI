import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Home1Service {

  constructor( private http:Http) { }
 getResponse(value:string){
      return this.http.get('http://localhost:8888/search/'+value).pipe(map(res=>{
        return res
      }))
   
 }
}
