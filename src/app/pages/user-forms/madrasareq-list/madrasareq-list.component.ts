import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Madrasa } from 'src/app/madrasa';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-madrasareq-list',
  templateUrl: './madrasareq-list.component.html',
  styleUrls: ['./madrasareq-list.component.css']
})
export class MadrasareqListComponent implements OnInit {

  madrast:Madrasa[];

  // madrasa:Madrasa = new Madrasa();

constructor(private madrasaSrve:MadrasaServiceService,private router:Router,public match:LoginServiceService, private snack:MatSnackBar){}

  ngOnInit(): void {
    this.getAllMadrasa();
    // this.getAccepted();
    
    
  }
  MadrasaDetails(id:number){
    this.router.navigate(['/userdashh/madrasaView', id]);
  }

  private getAllMadrasa(){
    this.madrasaSrve.getMadrasaList().subscribe(data=>{
      this.madrast=data;
    });
  }
  updateMadrasa(id:number){
  this.router.navigate(['/userdashh/updateMadrasa', id]);
  
  }
  deleteMadrasa(id:number){
    Swal.fire({
      title:'Are you want to delete?',
      text:'You will not able to recover it',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes delete it',
      cancelButtonText:'Not keep it',
    }).then((result)=>{
      if(result.value){
        this.madrasaSrve.deleteMadrasa(id).subscribe(data=>{
          console.log(data);
         this.getAllMadrasa();
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
    this.madrasaSrve.acceptApplication(id).subscribe(
      () => {
        // Success handling (e.g., display success message, update UI)
        this.snack.open('Application accepted','',{
          duration:3000,
        });
        this.getAllMadrasa();
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }

  rejectApplication(id: number) {
    this.madrasaSrve.rejectApplication(id).subscribe(
      () => {
        this.snack.open('Application rejected','',{
          duration:3000,
        });
        this.getAllMadrasa();
        // Success handling (e.g., display success message, update UI)
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }
  getAccepted(){
    this.madrasaSrve.getAcceptedList().subscribe(data=>{
      this.madrast= data;
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




