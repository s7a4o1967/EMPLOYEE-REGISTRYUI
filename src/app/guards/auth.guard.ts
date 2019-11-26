import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 // constructor(private authService: LoginComponent, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
