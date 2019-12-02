import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: LoginService,private home:HomeComponent,private router:Router) { }
    headers = new Headers({
        'Content-Type': 'application/json',
        'Token': localStorage.getItem("token")
    });
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");
        const authReq = request.clone({ headers: request.headers.set("Token", localStorage.getItem("token")) });
        console.log("Sending request with new header now ...");

        return next.handle(request).pipe(catchError(err => {
            console.log(err);
            if (err.status === 401) {
                this.home.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}