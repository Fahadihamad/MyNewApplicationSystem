import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffsService } from 'src/app/services/staffs.service';
import { Staffs } from 'src/app/staffs';

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
      this.router.navigate(['/admindashh/view', id]);
    }
  
  private getAllStaff(){
    this.staffservice.getStaffsList().subscribe(data=>{
      this.staff=data;
    });
}
updateStaff(id:number){
  this.router.navigate(['/admindashh/updatestaff', id]);

}
deleteStaff(id:number){
  this.staffservice.deleteStaff(id).subscribe(data=>{
     console.log(data);
    this.getAllStaff();
  });
}
}