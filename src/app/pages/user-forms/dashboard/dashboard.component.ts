import { Component, OnInit } from '@angular/core';
import { Madrasa } from 'src/app/madrasa';
import { Masjid } from 'src/app/masjid';
import { Orphans } from 'src/app/orphans';
import { Private } from 'src/app/private';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  masjid: Masjid[];
  totalMasjid: number;
  madrasa: Madrasa[];
  totalMadrasa: number;
  privates: Private[];
  totalPrivate: number;
  orphan: Orphans[];
  totalOrphans: number;
  totalAcceptedMadrasa:number;
  totalAcceptedMasjid:number;
  totalAcceptedOrphan:number;
  totalAcceptedPrivate:number;
  totalRejecttedMadrasa:number;
  totalRejecttedMasjid:number;
  totalRejecttedOrphan:number;
  totalRejecttedPrivate:number;

  constructor(private masjidServ:MasjidServiceService,public match:LoginServiceService, private madrasaServ:MadrasaServiceService,private privServ:PrivateServiceService,private orphServ:OrphansServiceService){

  }
  ngOnInit(): void {
    this.masjidServ.getMasjidList().subscribe(masjidd => {
      this.masjid = masjidd;
      this.totalMasjid = masjidd.length;
    });
    this.madrasaServ.getMadrasaList().subscribe(madrasa => {
      this.madrasa = madrasa;
      this.totalMadrasa = madrasa.length;
    });
    this.madrasaServ.getAcceptedList().subscribe(madrasa => {
      this.madrasa = madrasa;
      this.totalAcceptedMadrasa= madrasa.length;
    });
    this.masjidServ.getAcceptedList().subscribe(masjid => {
      this.masjid = masjid;
      this.totalAcceptedMasjid = masjid.length;
    });
      this.orphServ.getOrphanList().subscribe(orphan =>{
        this.orphan = orphan;
        this.totalOrphans = orphan.length;
      });
      this.privServ.getPrivateList().subscribe(privater =>{
        this.privates = privater;
        this.totalPrivate = privater.length;
      });
      this.orphServ.getAcceptedList().subscribe(orphan => {
        this.orphan = orphan;
        this.totalAcceptedOrphan = orphan.length;
      });
      this.privServ.getAcceptedList().subscribe(privates => {
        this.privates = privates;
        this.totalAcceptedPrivate = privates.length;
      });
      this.madrasaServ.getRejectedList().subscribe(madrasa => {
        this.madrasa = madrasa;
        this.totalRejecttedMadrasa = madrasa.length;
      });
      this.masjidServ.getRejectedList().subscribe(masjid => {
        this.masjid = masjid;
        this.totalRejecttedMasjid = masjid.length;
      });
      this.orphServ.getRejectedList().subscribe(orphan => {
        this.orphan = orphan;
        this.totalRejecttedOrphan = orphan.length;
      });
      this.privServ.getRejectedList().subscribe(privates => {
        this.privates = privates;
        this.totalRejecttedPrivate = privates.length;
      });

  }

}
