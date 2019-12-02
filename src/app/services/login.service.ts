import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
// import { user } from '../models/user';
import * as jwt_token from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public currentUser: any;
  // private currentUserSubject: BehaviorSubject<user>;
  // public currentUser: Observable<user>;
  constructor(private http: Http) {
    // this.currentUserSubject=new BehaviorSubject<user>(JSON.parse(localStorage.getItem('userName')));
    // this.currentUser=this.currentUserSubject.asObservable();
  }
  //   public get currentUserValue(): user {
  //     return this.currentUserSubject.value;
  // }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_token(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }











  login(empId: string, password: string) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('access-control-allow-origin', '*');
    let body = JSON.stringify({ empId, password });
    return this.http.post('http://localhost:8888/login', body, { headers: header })
      .pipe(map(res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        // console.log(resJSON._body);
        localStorage.setItem('userName', empId);
        var token = resJSON._body;
        localStorage.setItem('token', token);
        var decoded = jwt_token(token);
        if (resJSON._body && decoded.sub) {

          localStorage.setItem('userName', empId);
          localStorage.setItem('usertoken', decoded.sub)
          this.currentUser = decoded.sub;
        }
        return res;
      }
      ))
  }
}
