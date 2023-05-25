import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffsService } from 'src/app/services/staffs.service';
import { Staffs } from 'src/app/staffs';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit{

  id:number;
  staffs:Staffs= new Staffs();
  constructor(private staffsservice:StaffsService, private rout:ActivatedRoute, private router:Router ){}

ngOnInit(): void {
  this.id = this.rout.snapshot.params['id'];

   this.staffsservice.getStaffById(this.id).subscribe(data=>{
    this.staffs= data;
   },
   error=>console.log(error)) ;
   
   
}

formSubmit(){
  this.staffsservice.updateStaff(this.id, this.staffs).subscribe(data=> {
   
    this.goToStaffList();
  },
   error=>console.log(error));
   
}
goToStaffList(){
  return this.router.navigate(['/admindashh/stafflist'])
}

}
