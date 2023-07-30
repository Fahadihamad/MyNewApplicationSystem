import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
msg='';

  public users={
    userName:"",
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    phone:""
  }

  constructor(private userservice:UserService, private snack:MatSnackBar,private router:Router){

  }

  ngOnInit(): void {
    
  }

  formSubmit(){

    console.log(this.users);

    if(this.users.userName=='' || this.users.userName == null){

      // alert("username is required !!");

      this.snack.open("User name is required !!",' ',{
        duration:300,
      });

      return;


  }

   this.userservice.addApplicant(this.users).subscribe(
    (data)=>{

      console.log(data);
      this.router.navigate(['/login']);
      // alert("succesfull")
      // this.snack.open("success !!",'',{
      //   duration:300
        
      // });
      Swal.fire("Thank you",'Account registered succesfully','success');

      

    },
    (error)=>{

      console.log(error);

      // alert("something went wrong")
      //  this.snack.open("something went wrong OR userName is already exist !!",'',{
      //   duration:500
      //  });
      Swal.fire("Error",'Something went wrong Or UserName already exist','error');
    }
   );
}

}