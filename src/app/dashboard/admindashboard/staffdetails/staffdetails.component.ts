import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from 'src/app/services/staffs.service';
import { Staffs } from 'src/app/staffs';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent implements OnInit{
  id:number;
  staff:Staffs
  constructor(private rout:ActivatedRoute,private staffserv:StaffsService){

  }
  ngOnInit(): void {
    this.id= this.rout.snapshot.params['id'];

    this.staff = new Staffs()
    this.staffserv.getStaffById(this.id).subscribe(data=>{
      this.staff=data;
    })

  }

}
