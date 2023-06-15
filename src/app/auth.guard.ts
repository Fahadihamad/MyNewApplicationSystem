import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { 
  constructor(private login:LoginServiceService, private router:Router, private userServise:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.getToken() !== null){
       const role = route.data["roles"] as Array<string>;

       if(role){
         const match = this.login.roleMatch(role);

         if(match){
          return true;
         }else{
          this.router.navigate(['/login']);
         }
       }
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
