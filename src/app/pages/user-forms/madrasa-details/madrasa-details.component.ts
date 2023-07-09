import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  
  imageUrl: SafeUrl;
  fileUrl: SafeUrl;
  madrasa: Madrasa;
  constructor(private rout:ActivatedRoute,private madser:MadrasaServiceService,private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
    this.rout.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getMadrasaBuildDetails(id)
      this.getImage(id);
      this.getFile(id);
    });
  }
  getImage(id: number): void {
    this.madser.getImage(id).subscribe(
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
    this.madser.getFile(id).subscribe(
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
    getMadrasaBuildDetails(id: number): void {
      this.madser.getMadrasaById(id).subscribe(
        (data: Madrasa) => {
          this.madrasa = data;
        },
        error => {
          console.error('Error retrieving masjid details:', error);
        }
      );
    }

}
