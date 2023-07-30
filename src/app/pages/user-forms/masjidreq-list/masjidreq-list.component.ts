import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title:'Are you want to delete?',
      text:'You will not able to recover it',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes delete it',
      cancelButtonText:'Not keep it',
    }).then((result)=>{
      if(result.value){
        this.masjid.deleteMasjid(id).subscribe(data=>{
          console.log(data);
         this.getAllMasjid();
       });

        Swal.fire(
          'deleted!',
          'Application has been deleted.',
          'success'
        );
      }else if(result.dismiss==Swal.DismissReason.cancel){
        Swal.fire('Cancelled','Your Application is safe:)','error');
      }
    })
 
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
  getStatusStyle(status:any): {[key:string]:string}{
    switch (status){
      case 'Accepted':
        return {'color':'green'};
      case 'Rejected':
        return {'color':'red'};
      case 'Pending':
        return {'color':'blue'};
      default:
        return {};      
    }
  }
  }

