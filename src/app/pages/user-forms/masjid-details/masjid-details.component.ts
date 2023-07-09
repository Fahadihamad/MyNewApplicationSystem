import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  massjidBuild: Masjid;
  imageUrl: SafeUrl;
  fileUrl: SafeUrl;
  masjid:Masjid;
  constructor(private rout:ActivatedRoute,private masjidser:MasjidServiceService, private http:HttpClient,private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
    
    // this.id= this.rout.snapshot.params['id'];

    // this.masjid = new Masjid();
    
    // this.masjidser.getMasjidById(this.id).subscribe(data=>{
    //   this.masjid=data;
    // });
    this.rout.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getMassjidBuildDetails(id)
      this.getImage(id);
      this.getFile(id);
    });
  
  }
  getImage(id: number): void {
    this.masjidser.getImage(id).subscribe(
      (data: Blob) => {
        const objectURL = URL.createObjectURL(data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(data);
      },
      error => {
        console.error('Error retrieving image:', error);
      }
    );
  }
  getFile(id: number): void {
    this.masjidser.getFile(id).subscribe(
      (data: Blob) => {
        const objectURL = URL.createObjectURL(data);
        this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(data);
      },
      error => {
        console.error('Error retrieving file:', error);
      }
    );
    }

    getAllMasjid(id:number){
      this.masjidser.getMasjidById(id).subscribe(data=>{
        this.masjid=data;
      });
    }
    getMassjidBuildDetails(id: number): void {
      this.masjidser.getMasjidById(id).subscribe(
        (data: Masjid) => {
          this.massjidBuild = data;
        },
        error => {
          console.error('Error retrieving masjid details:', error);
        }
      );
    }
}
