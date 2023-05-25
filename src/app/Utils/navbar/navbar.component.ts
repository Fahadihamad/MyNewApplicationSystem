import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginServiceService, 
    private router:Router){

  }
  menuVariable:boolean=false;
  ngOnInit():void{
    
  }

  public isLoggedIn(){
   return this.login.isLoggedIn();
  
  }
  public logout(){
     this.login.clear();
     this.router.navigate(['/'])
    
  }
  // public getUsers(){
  //   this.login.getUsers();
  // }

  // openMenu(){
  //   this.menuVariable=! this.menuVariable;
  // }
}

