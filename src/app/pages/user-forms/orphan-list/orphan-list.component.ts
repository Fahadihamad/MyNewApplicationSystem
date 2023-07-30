import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orphan-list',
  templateUrl: './orphan-list.component.html',
  styleUrls: ['./orphan-list.component.css']
})
export class OrphanListComponent implements OnInit{
orphan:Orphans[]=[];

  constructor(private orphanSrve:OrphansServiceService,private router:Router,public match:LoginServiceService, private snack:MatSnackBar){

  }
  ngOnInit(): void {
    this.getAllOrphans();
  }
  OrphansDetails(id:number){
    this.router.navigate(['/userdashh/orpView', id]);
  }

  private getAllOrphans(){
    this.orphanSrve.getOrphanList().subscribe(data=>{
      this.orphan=data;
    });
  }
  updateOrphans(id:number){
  this.router.navigate(['/userdashh/updateorphan', id]);
  
  }
  deleteOrphans(id:number){
    Swal.fire({
      title:'Are you want to delete?',
      text:'You will not able to recover it',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes delete it',
      cancelButtonText:'Not keep it',
    }).then((result)=>{
      if(result.value){
        this.orphanSrve.deleteOrphan(id).subscribe(data=>{
          console.log(data);
         this.getAllOrphans();
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
    this.orphanSrve.acceptApplication(id).subscribe(
      () => {
        // Success handling (e.g., display success message, update UI)
        this.snack.open('Application accepted','',{
          duration:3000,
        });
        this.getAllOrphans();
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }

  rejectApplication(id: number) {
    this.orphanSrve.rejectApplication(id).subscribe(
      () => {
        this.snack.open('Application rejected','',{
          duration:3000,
        });
        this.getAllOrphans();
        // Success handling (e.g., display success message, update UI)
      },
      (error) => {
        // Error handling (e.g., display error message)
      }
    );
  }
  getAccepted(){
    this.orphanSrve.getAcceptedList().subscribe(data=>{
      this.orphan= data;
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
