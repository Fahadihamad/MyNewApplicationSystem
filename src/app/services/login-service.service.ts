import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
   
  requestheader = new HttpHeaders({
    "NO-AUTH":"True"
  })
  constructor(private http:HttpClient) { }

  //current user: which is logged
  public getCurrentUser(){

    return this.http.get(`${baseUrl}/current-user`)
  }

  //generate token

  public generateToken(LoginData:any){

    return this.http.post(`${baseUrl}/authenticate`,LoginData,{headers:this.requestheader});
  }

  // public roleMatch(allowedRoles:any): boolean{
    
  //   let isMatch = false;
  //   const userRoles:any = this.getRoles();
  //   if(userRoles != null && userRoles){
  //     for(let i =0; i< userRoles.length; i++){
  //       for(let j=0; i< allowedRoles.length; j++){
  //         if(userRoles[i].roleName=== allowedRoles[j]){
  //           isMatch = true;

  //         }
  //       }
  //     }
  //   }
  //   return isMatch;
  // }
  public roleMatch(allowedRoles: string[]): boolean {
    let isMatch = false;
    const userRoles: any[] | null = this.getRoles();
  
    if (userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
          }
        }
      }
    }
  
    return isMatch;
  }

  //login user: set token in local storage

  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
   }

   ///isLogin: user is logged or not

  //  public isLoggedIn(){
  //   let tokenStr=localStorage.getItem('token');

  //   if(tokenStr==undefined || tokenStr=="" || tokenStr==null){

  //     return false;
  //   }else{
  //     return true;
  //   }
    
  //  }

  //  // logout: remove token from local storage
  //  public logout(){
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('users')

  //   return true;
  //  }
   
  //  // get token
  //  public getToken(){
  //   return localStorage.getItem('token');
  //  }
   
   // set userdetails
   public setUser(users: any){
     return localStorage.setItem('users',JSON.stringify(users));
   }

   //gtUsers
   public getUsers(){
    let userStr = localStorage.getItem('users');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      // this.logout();
      return null;
    }
   }

  //  //get user roles
  //  public getUserRoles(){
  //   let users = this.getUsers();
  //   return users.role[0].roleName;
  //  }

  public setRoles(roles:[]){

    localStorage.setItem('roles', JSON.stringify(roles));

  }
  public getRoles(){
   let str = localStorage.getItem('roles')
    return JSON.parse(str!);
  }

  public setToken(jwtToken:any){
     localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken():any{
    return localStorage.getItem('jwtToken')
  }

  public clear(){
   return localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
}
