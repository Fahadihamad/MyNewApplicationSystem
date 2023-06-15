import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


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
      this.snack.open("success !!",'',{
        duration:300
        
      });

      

    },
    (error)=>{

      console.log(error);

      // alert("something went wrong")
       this.snack.open("something went wrong !!",'',{
        duration:300
       });
    }
   );
}

}