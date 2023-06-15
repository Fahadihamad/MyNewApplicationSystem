import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  
  
  constructor(private router:Router, public match:LoginServiceService){

  }
  isDropdownOpen: boolean = false;
  isDropdownOpenList:boolean=false;
  isDropdownOpenAvail:boolean=false;
  isDropdownOpenStaff:boolean=false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  listDropdown() {
    this.isDropdownOpenList = !this.isDropdownOpenList;
  }
  availDropdown(){
    this.isDropdownOpenAvail = !this.isDropdownOpenAvail;
  }
  staffDropdown(){
    this.isDropdownOpenStaff = !this.isDropdownOpenStaff;
  }

  
  ngOnInit(){
  
  }
 

}
