import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Private } from 'src/app/private';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-rejected-private',
  templateUrl: './rejected-private.component.html',
  styleUrls: ['./rejected-private.component.css']
})
export class RejectedPrivateComponent implements OnInit {
  privates:Private[];
  constructor(private router:Router, private priServ:PrivateServiceService){}
  ngOnInit(): void {
    this.getRejected();
  }
  PrivateDetails(id:number){
    this.router.navigate(['/userdashh/priView', id]);
  }
  getRejected(){
    this.priServ.getRejectedList().subscribe(data=>{
      this.privates=data;
    })
  }
}
