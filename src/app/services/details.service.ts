import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {  
  currentpage: number;
  // http:Http;
  constructor(private http:Http) { }
 
getFirstDetails(){
  let createdBy = localStorage.getItem('userName');
  let header = new Headers({ 'Content-Type': 'application/json' });
  let pageNo=0;
  let pageSize=5;
    header.append('access-control-allow-origin', '*');
   let body=JSON.stringify({createdBy,pageNo,pageSize})
  return   this.http.post('http://localhost:8888/details',body,{ headers: header })
  .pipe(map(res=>{
        return res;
  }))
}

pageChange(event) {
  this.currentpage = event;
  // event = event - 1;
  let createdBy = localStorage.getItem('userName');
  let header = new Headers({ 'Content-Type': 'application/json' });
  let pageNo=event;
  let pageSize=5;
    header.append('access-control-allow-origin', '*');
   let body=JSON.stringify({createdBy,pageNo,pageSize})
 return this.http.post('http://localhost:8888/details',body,{ headers: header }).pipe(map(res=>{
    return res;
  }))
    
}

}
