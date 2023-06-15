import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-accepted-masjid',
  templateUrl: './accepted-masjid.component.html',
  styleUrls: ['./accepted-masjid.component.css']
})
export class AcceptedMasjidComponent implements OnInit{

  masjids:Masjid[];
  constructor(private router:Router, private masjidser:MasjidServiceService){}
  ngOnInit(): void {
    this.getAccepted();
  }
  MasjidDetails(id:number){
    this.router.navigate(['/userdashh/view', id]);
  }
  getAccepted(){
    this.masjidser.getAcceptedList().subscribe(data=>{
      this.masjids=data;
    })
  }
}
