import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffsService } from 'src/app/services/staffs.service';
import { Staffs } from 'src/app/staffs';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit{

  staffs:Staffs= new Staffs();
  constructor(private staffservice:StaffsService, private router:Router){

  }
  ngOnInit(): void {
 
  }

  saveStaff(){
    this.staffservice.createStaff(this.staffs).subscribe(data=>{
       console.log(data);
       this.goToStaffList();
    },
    error=>console.log(error));
  }
  goToStaffList(){
    return this.router.navigate(['/admindashh/stafflist'])
  }
  formSubmit(){
    console.log(this.staffs);
    this.saveStaff();
  }

}
