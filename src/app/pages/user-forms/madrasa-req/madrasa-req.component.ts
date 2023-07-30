import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Madrasa } from 'src/app/madrasa';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-madrasa-req',
  templateUrl: './madrasa-req.component.html',
  styleUrls: ['./madrasa-req.component.css']
})
export class MadrasaReqComponent implements OnInit{
  
  

  madrasa={
    id:'',
    
    date:'',
    file:null,
    image:null,
    discription:'',
     region:'',
     shehia:'',
     street:'',
     district:'',
     head_firstName:'',
     head_sectName:'',
     head_lasttName:'',
     head_phone:'',
     assisthead_firstName:'',
     assisthead_secName:'',
     assisthead_lastName:'',
     assissthead_phone:'',
     name:''
  }

  constructor(private madrasaService:MadrasaServiceService, private snack:MatSnackBar, private http:HttpClient){}
  ngOnInit(): void {
    
  }
  
  onSubmitForm(): void {
    const formData = new FormData();
    
    formData.append('date', this.madrasa.date);
    formData.append('discription', this.madrasa.discription);
    formData.append('region', this.madrasa.region);
    formData.append('shehia', this.madrasa.shehia);
    formData.append('street', this.madrasa.street);
    formData.append('district', this.madrasa.district);
    formData.append('head_firstName', this.madrasa.head_firstName);
    formData.append('head_sectName', this.madrasa.head_sectName);
    formData.append('head_lasttName', this.madrasa.head_lasttName);
    formData.append('head_phone', this.madrasa.head_phone);
    formData.append('assisthead_firstName', this.madrasa.assisthead_firstName);
    formData.append('assisthead_secName', this.madrasa.assisthead_secName);
    formData.append('assisthead_lastName', this.madrasa.assisthead_lastName);
    formData.append('assissthead_phone', this.madrasa.assissthead_phone);
    
    if (this.madrasa.file) {
      formData.append('file', this.madrasa.file);
    }
    
    if (this.madrasa.image) {
      formData.append('image', this.madrasa.image);
    }

    this.http.post('http://localhost:8898/api/madrasa/add', formData).subscribe(
      (response: any) => {
        console.log('Masjid_build created successfully:', response);
        Swal.fire("Thank you",'You submitted succefully','success');
        
        // Reset the form
        this.madrasa = {
          id:'',
          
          date:'',
          discription:'',
           region:'',
           shehia:'',
           street:'',
           district:'',
           head_firstName:'',
           head_sectName:'',
           head_lasttName:'',
           head_phone:'',
           assisthead_firstName:'',
           assisthead_secName:'',
           assisthead_lastName:'',
           assissthead_phone:'',
           name:'',
           image:null,
          file: null
        };
        
      },
      (error: any) => {
        console.error('Error creating Masjid_build:', error);
        Swal.fire("Error",'Something went wrong','success');
      }
    );
  }

  onImagesChange(event: any): void {
    this.madrasa.image = event.target.files[0];
    console.log(event.target.files); // Check if files are correctly logged
  
  }

  onFilesChange(event: any): void {
    this.madrasa.file = event.target.files[0];
    console.log(event.target.files);
  }

}

