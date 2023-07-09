import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-masjidreq-list',
  templateUrl: './masjidreq-list.component.html',
  styleUrls: ['./masjidreq-list.component.css']
})
export class MasjidreqListComponent implements OnInit {

  masjids:Masjid[];
  constructor(private masjid:MasjidServiceService,private router:Router,public match:LoginServiceService,private snack:MatSnackBar,public login:LoginServiceService){}
  ngOnInit(): void {
    this.getAllMasjid();
    
    
  }
  MasjidDetails(id:number){
    this.router.navigate(['/userdashh/view', id]);
  }

  private getAllMasjid(){
    this.masjid.getMasjidList().subscribe(data=>{
      this.masjids=data;
    });
  }
  updateMasjid(id:number){
  this.router.navigate(['/userdashh/updatemasjid', id]);
  
  }
  deleteMasjid(id:number){
  this.masjid.deleteMasjid(id).subscribe(data=>{
     console.log(data);
    this.getAllMasjid();
  });
  }
  acceptApplication(id: number) {
    this.masjid.acceptApplication(id).subscribe(
      () => {
        // Success handling (e.g., display success message, update UI)
        this.snack.open('Application accepted','',{
          duration:3000,
        });
        this.getAllMasjid();
      },
      (error) => {
        // Error handling (e.g., display error message)
        this.snack.open('Application accepted','',{
          duration:3000,
        });
      }
    );
  }

  rejectApplication(id: number) {
    this.masjid.rejectApplication(id).subscribe(
      () => {
        // Success handling (e.g., display success message, update UI)
        this.snack.open('Application rejected','',{
          duration:3000,
        });
        this.getAllMasjid();
      },
      (error) => {
        // Error handling (e.g., display error message)
       
      }
    );
  }
  getAccepted(){
    this.masjid.getAcceptedList().subscribe(data=>{
      this.masjids= data;
    })
  }
  }

