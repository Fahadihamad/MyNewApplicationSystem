import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Madrasa } from 'src/app/madrasa';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';

@Component({
  selector: 'app-madrasa-req',
  templateUrl: './madrasa-req.component.html',
  styleUrls: ['./madrasa-req.component.css']
})
export class MadrasaReqComponent implements OnInit{
  selectedFile: File | null = null;
  imageUrl: any = null;
  

  madrasa:Madrasa = new Madrasa();

  constructor(private madrasaService:MadrasaServiceService, private snack:MatSnackBar, private http:HttpClient){}
  ngOnInit(): void {
    
  }
  onSubmitForm(){
    this.madrasaService.addMadrasaReq(this.madrasa).subscribe(data=>{
      console.log(data);
      this.snack.open('Your Application sent successfull !! Wait for response','',{
        duration:3000,
      });
    },
    error=>console.log(error));
    this.snack.open('Error Occurred','',{
      duration:3000,
    })
  }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    // this.previewImage();
  }

  
    onUpload() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('name', this.madrasa.letter);
  
        this.http.post('http://localhost:8898/api/madrasa/upload', formData)
          .subscribe((response: any) => {
            console.log('File uploaded successfully');
            // Handle response if needed
        });
    }
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.imageUrl = event.target?.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }
}

