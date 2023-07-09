import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Private } from 'src/app/private';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {


  privates:Private[]=[
    
  ];

  constructor(private privateSrve:PrivateServiceService,private router:Router,public match:LoginServiceService, private snack:MatSnackBar){

  }
  ngOnInit(): void {
    this.getAllPrivate();
  }
  PrivateDetails(id:number){
    this.router.navigate(['/userdashh/priView', id]);
  }

  private getAllPrivate(){
    this.privateSrve.getPrivateList().subscribe(data=>{
      this.privates=data;
    });
  }
  updatePrivate(id:number){
  this.router.navigate(['/userdashh/updateprivate', id]);
  
  }
  deletePrivate(id:number){
  this.privateSrve.deletePrivate(id).subscribe(data=>{
     console.log(data);
    this.getAllPrivate();
  });
  }
  acceptApplication(id: number) {
    this.privateSrve.acceptApplication(id).subscribe(
      () => {
        // Success handling (e.g., display success message, update UI)
        this.snack.open('Application accepted','',{
          duration:3000,
        });
        this.getAllPrivate();
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }

  rejectApplication(id: number) {
    this.privateSrve.rejectApplication(id).subscribe(
      () => {
        this.snack.open('Application rejected','',{
          duration:3000,
        });
        // Success handling (e.g., display success message, update UI)
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }
  getAccepted(){
    this.privateSrve.getAcceptedList().subscribe(data=>{
      this.privates= data;
    })
  }

}
