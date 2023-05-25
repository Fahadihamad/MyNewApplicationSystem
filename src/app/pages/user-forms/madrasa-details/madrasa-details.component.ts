import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Madrasa } from 'src/app/madrasa';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-madrasa-details',
  templateUrl: './madrasa-details.component.html',
  styleUrls: ['./madrasa-details.component.css']
})
export class MadrasaDetailsComponent implements OnInit{
  id:number;
  madrasa:Madrasa;
  constructor(private rout:ActivatedRoute,private madser:MadrasaServiceService){

  }
  ngOnInit(): void {
    this.id= this.rout.snapshot.params['id'];

    this.madrasa = new Madrasa();
    this.madser.getMadrasaById(this.id).subscribe(data=>{
      this.madrasa=data;
    })
  }

}
