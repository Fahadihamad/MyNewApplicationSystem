import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffsService } from 'src/app/services/staffs.service';
import { Staffs } from 'src/app/staffs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit{

  staff:Staffs[];
    

  constructor(private staffservice:StaffsService,private router:Router){

  }
  ngOnInit(){

    this.getAllStaff();
  }
    staffDetails(id:number){
      this.router.navigate(['/userdashh/viewStaff', id]);
    }
  
  private getAllStaff(){
    this.staffservice.getStaffsList().subscribe(data=>{
      this.staff=data;
    });
}
updateStaff(id:number){
  this.router.navigate(['/userdashh/updatestaff', id]);

}
deleteStaff(id:number){
  Swal.fire({
    title:'Are you want to delete?',
    text:'You will not able to recover it',
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'Yes delete it',
    cancelButtonText:'Not keep it',
  }).then((result)=>{
    if(result.value){
      this.staffservice.deleteStaff(id).subscribe(data=>{
        console.log(data);
       this.getAllStaff();
     });

      Swal.fire(
        'deleted!',
        'Staff has been deleted.',
        'success'
      );
    }else if(result.dismiss==Swal.DismissReason.cancel){
      Swal.fire('Cancelled','Staff is safe:)','error');
    }
  })

}
}