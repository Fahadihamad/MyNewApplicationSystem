import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';

@Component({
  selector: 'app-orphan-details',
  templateUrl: './orphan-details.component.html',
  styleUrls: ['./orphan-details.component.css']
})
export class OrphanDetailsComponent implements OnInit {
  id:number;
  orphan:Orphans;
  imageUrl: SafeUrl;
  fileUrl: SafeUrl;

  constructor(private rout:ActivatedRoute, private service:OrphansServiceService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {

    this.rout.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getOrphanDetails(id)
      this.getImage(id);
      this.getFile(id);
    });
    
  }
  getImage(id: number): void {
    this.service.getImage(id).subscribe(
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
    this.service.getFile(id).subscribe(
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

    getOrphanDetails(id: number): void {
      this.service.getOrphanById(id).subscribe(
        (data: Orphans) => {
          this.orphan = data;
        },
        error => {
          console.error('Error retrieving masjid details:', error);
        }
      );
    }

}
