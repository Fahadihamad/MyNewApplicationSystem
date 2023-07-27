import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Madrasa } from 'src/app/madrasa';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';

@Component({
  selector: 'app-rejected-madrasa',
  templateUrl: './rejected-madrasa.component.html',
  styleUrls: ['./rejected-madrasa.component.css']
})
export class RejectedMadrasaComponent implements OnInit {
  madrast:Madrasa[];

  constructor(private router:Router, public match:LoginServiceService,private madraser:MadrasaServiceService){}
  ngOnInit(): void {
  this.getRejected();
  }
  MadrasaDetails(id:number){
    this.router.navigate(['/userdashh/madrasaView', id]);
  }

  getRejected(){
    this.madraser.getRejectedList().subscribe(data=>{
      this.madrast=data;
    });
  }
}
