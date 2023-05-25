import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-masjid-details',
  templateUrl: './masjid-details.component.html',
  styleUrls: ['./masjid-details.component.css']
})
export class MasjidDetailsComponent implements OnInit {
  id:number;
  masjid:Masjid;
  constructor(private rout:ActivatedRoute,private masjidser:MasjidServiceService){

  }
  ngOnInit(): void {
    this.id= this.rout.snapshot.params['id'];

    this.masjid = new Masjid();
    this.masjidser.getMasjidById(this.id).subscribe(data=>{
      this.masjid=data;
    })

  }

}
