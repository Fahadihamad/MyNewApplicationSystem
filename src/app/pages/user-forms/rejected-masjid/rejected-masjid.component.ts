import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-rejected-masjid',
  templateUrl: './rejected-masjid.component.html',
  styleUrls: ['./rejected-masjid.component.css']
})
export class RejectedMasjidComponent implements OnInit {
  masjids:Masjid[];
  constructor(private router:Router, private masjidser:MasjidServiceService){}
  ngOnInit(): void {
    this.getRejected();
  }
  MasjidDetails(id:number){
    this.router.navigate(['/userdashh/view', id]);
  }
  getRejected(){
    this.masjidser.getRejectedList().subscribe(data=>{
      this.masjids=data;
    })
  }
}
