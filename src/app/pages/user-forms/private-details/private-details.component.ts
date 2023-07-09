import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Private } from 'src/app/private';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-private-details',
  templateUrl: './private-details.component.html',
  styleUrls: ['./private-details.component.css']
})
export class PrivateDetailsComponent implements OnInit{
  id:number;
   privates:Private;
   imageUrl: SafeUrl;
  fileUrl: SafeUrl;
  constructor( private rout:ActivatedRoute,private priServ:PrivateServiceService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.rout.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getPrivateDetails(id)
      this.getImage(id);
      this.getFile(id);
    });
    
  }
  getImage(id: number): void {
    this.priServ.getImage(id).subscribe(
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
    this.priServ.getFile(id).subscribe(
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

    getPrivateDetails(id: number): void {
      this.priServ.getPrivateById(id).subscribe(
        (data: Private) => {
          this.privates = data;
        },
        error => {
          console.error('Error retrieving masjid details:', error);
        }
      );
    }
   
}
