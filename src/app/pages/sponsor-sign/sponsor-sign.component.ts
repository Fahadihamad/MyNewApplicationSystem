import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SponsorsService } from 'src/app/services/sponsors.service';
import { UserService } from 'src/app/services/user.service';
import { Sponsor } from 'src/app/sponsor';

@Component({
  selector: 'app-sponsor-sign',
  templateUrl: './sponsor-sign.component.html',
  styleUrls: ['./sponsor-sign.component.css']
})
export class SponsorSignComponent implements OnInit{

  sponsor:Sponsor= new Sponsor();
  constructor(private sponsorService:SponsorsService, private snack:MatSnackBar,private router:Router){}
  ngOnInit(): void {
    
  }
  formSubmit(){
    console.log(this.sponsor);

    if(this.sponsor.userName=='' || this.sponsor.userName == null){

      // alert("username is required !!");

      this.snack.open("User name is required !!",' ',{
        duration:300,
      });

      return;


  }

   this.sponsorService.createSponsor(this.sponsor).subscribe(
    (data)=>{

      console.log(data);

      // alert("succesfull")
      this.snack.open("success !!",'',{
        duration:300
        
      });

      this.router.navigate(['/login']);

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
