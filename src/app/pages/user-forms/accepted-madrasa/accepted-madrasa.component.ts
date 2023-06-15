import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Madrasa } from 'src/app/madrasa';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';

@Component({
  selector: 'app-accepted-madrasa',
  templateUrl: './accepted-madrasa.component.html',
  styleUrls: ['./accepted-madrasa.component.css']
})
export class AcceptedMadrasaComponent implements OnInit{
  madrast:Madrasa[];

  constructor(private router:Router, public match:LoginServiceService,private madraser:MadrasaServiceService){}
  ngOnInit(): void {
  this.getAccepted();
  }
  MadrasaDetails(id:number){
    this.router.navigate(['/userdashh/madrasaView', id]);
  }

  getAccepted(){
    this.madraser.getAcceptedList().subscribe(data=>{
      this.madrast=data;
    });
  }
}
