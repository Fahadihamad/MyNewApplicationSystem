import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginData={
    userName:"",
    password:""
  }

  constructor(private snack:MatSnackBar,private login:LoginServiceService,private router:Router){

  }

  ngOnInit(): void {
    
  }

  formSubmit(){

    console.log("login button clicked");

    if(this.LoginData.password.trim()=="" || this.LoginData.password==null){
      this.snack.open("Password is required !!",'',{
        duration:3000,
      });

      return;
    }
      this.login.generateToken(this.LoginData).subscribe(
        (data:any)=>{
          Swal.fire("Thank you",'Login success','success');
          console.log("succesfull");
          console.log(data);

          //login
          this.login.generateToken(this.LoginData).subscribe((response: any) => {
            console.log(response.jwtToken);
            console.log(response.users.role)
            // localStorage.setItem('token', response.jwtToken);

            this.login.setRoles(response.users.role);
            this.login.setToken(response.jwtToken);
            this.login.setUser(response.users);

            // const role = response.users.role[0].roleName;

            // if(role === "Applicant"){
            //   this.router.navigate(['/userdashh']);
            // }
            // else if(role === "Admin"){
            //   this.router.navigate(['/admindashh']);
            // }
            // else if(role === "Staff"){
            //   this.router.navigate(['/stafdashboard'])
            // }
            // else if(role === "Sponsors"){
            //   this.router.navigate(['/sponsor']);
            // }else{
            //   this.router.navigate(['/login']);
            // }
            // localStorage.setItem('role', response.roleName);

            this.router.navigate(['/userdashh'])
          })
          // this.login.loginUser(data.token);
          // this.login.getCurrentUser().subscribe(
          //   (user:any)=>{
          //     this.login.setUser(user);
          //     console.log(user);
          //   }
          // )
          // if(this.login.getUserRoles()=='Applicant'){
          //   window.location.href='/userdashh';
          // }else if(
          //   this.login.getUserRoles()=='Admin'){
          //     window.location.href='/admindashh';
          // }else if(this.login.getUserRoles()=='Sponsors'){
          //   window.location.href='/spondashh';
          // }else {  
          // this.login.getUserRoles()=='Staff'
          //   window.location.href='/stafdashh';
          // }else{
          //   this.login.logout();
          
          // }
          
        },
        (error)=>{
          console.log("error");
          console.log(error);
          // this.snack.open('Invalid details !! try again','',{
          //   duration:3000,
          // });
          Swal.fire("Error",'Invalid details!! try again','error');

        }
      )
    
      }

}
