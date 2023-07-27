import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';

@Component({
  selector: 'app-rejected-orphan',
  templateUrl: './rejected-orphan.component.html',
  styleUrls: ['./rejected-orphan.component.css']
})
export class RejectedOrphanComponent implements OnInit{

  orphans:Orphans[];
  constructor(private router:Router, private orphServ:OrphansServiceService){}
  ngOnInit(): void {
    this.getRejected();
  }
  OrphanDetails(id:number){
    this.router.navigate(['/userdashh/orpView', id]);
  }
  getRejected(){
    this.orphServ.getRejectedList().subscribe(data=>{
      this.orphans=data;
    })
  }
}
