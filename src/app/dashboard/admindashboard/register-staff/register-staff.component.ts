import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  msg='';
  constructor(private staffservice:StaffsService, private router:Router,private snack:MatSnackBar){

  }
  ngOnInit(): void {
 
  }

  saveStaff(){
    this.staffservice.createStaff(this.staffs).subscribe(data=>{
       console.log(data);
       this.goToStaffList();
       this.snack.open('Succesfull staff regestered','',{
        duration:3000,
      });
    },
    error=>{
      console.log('exception occured');
    this.msg= error.error;
    }
    )
    
    
  }
  goToStaffList(){
    return this.router.navigate(['/userdashh/stafflist'])
  }
  formSubmit(){
    console.log(this.staffs);
    this.saveStaff();
  }

}
