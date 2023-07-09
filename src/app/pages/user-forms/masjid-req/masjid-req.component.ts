import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-masjid-req',
  templateUrl: './masjid-req.component.html',
  styleUrls: ['./masjid-req.component.css']
})
export class MasjidReqComponent implements OnInit {
  //  masjid:Masjid = new Masjid();

  //  selectedFile={
  //    image:'',
  //    letter:''
  //  }

  massjidBuild={
    id:'',
    
    date:'',
    discription:'',
     region:'',
     shehia:'',
     street:'',
     district:'',
     imam_firstName:'',
     imam_sectName:'',
     imam_lasttName:'',
     imam_phone:'',
     assist_firstName:'',
     assist_secName:'',
     assist_lastName:'',
     assisst_phone:'',
     image: null,
    file:null
  }
  
  constructor(private masjidServ:MasjidServiceService,private http:HttpClient,private snack:MatSnackBar, private router:Router){

  }
  ngOnInit(): void {
    
  }
  onSubmitForm(): void {
    const formData = new FormData();
    
    formData.append('date', this.massjidBuild.date);
    formData.append('discription', this.massjidBuild.discription);
    formData.append('region', this.massjidBuild.region);
    formData.append('shehia', this.massjidBuild.shehia);
    formData.append('street', this.massjidBuild.street);
    formData.append('district', this.massjidBuild.district);
    formData.append('imam_firstName', this.massjidBuild.imam_firstName);
    formData.append('imam_sectName', this.massjidBuild.imam_sectName);
    formData.append('imam_lasttName', this.massjidBuild.imam_lasttName);
    formData.append('imam_phone', this.massjidBuild.imam_phone);
    formData.append('assist_firstName', this.massjidBuild.assist_firstName);
    formData.append('assist_secName', this.massjidBuild.assist_secName);
    formData.append('assist_lastName', this.massjidBuild.assist_lastName);
    formData.append('assisst_phone', this.massjidBuild.assisst_phone);
    
    if (this.massjidBuild.file) {
      formData.append('file', this.massjidBuild.file);
    }
    
    if (this.massjidBuild.image) {
      formData.append('image', this.massjidBuild.image);
    }

    this.http.post('http://localhost:8898/api/masjid/add', formData).subscribe(
      (response: any) => {
        console.log('Masjid_build created successfully:', response);
        // Reset the form
        this.massjidBuild = {
          id:'',
          
          date:'',
          discription:'',
           region:'',
           shehia:'',
           street:'',
           district:'',
           imam_firstName:'',
           imam_sectName:'',
           imam_lasttName:'',
           imam_phone:'',
           assist_firstName:'',
           assist_secName:'',
           assist_lastName:'',
           assisst_phone:'',
           image:null,
          file: null
        };
        
      },
      (error: any) => {
        console.error('Error creating Masjid_build:', error);
      }
    );
  }

  onImagesChange(event: any): void {
    this.massjidBuild.image = event.target.files[0];
    console.log(event.target.files); // Check if files are correctly logged
  
  }

  onFilesChange(event: any): void {
    this.massjidBuild.file = event.target.files[0];
    console.log(event.target.files);
  }

}
