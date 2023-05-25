import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-masjid-req',
  templateUrl: './masjid-req.component.html',
  styleUrls: ['./masjid-req.component.css']
})
export class MasjidReqComponent implements OnInit {
   masjid:Masjid = new Masjid();

   selectedFile={
     image:'',
     letter:''
   }

   date= new Date().toLocaleDateString();
   time= new Date().toLocaleTimeString();
  constructor(private masjidServ:MasjidServiceService,private http:HttpClient,private snack:MatSnackBar){

  }
  ngOnInit(): void {
    
  }
  onSubmitForm(){
    // this.onUpload();
    this.masjidServ.addMasjidReq(this.masjid).subscribe(data=>{
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
    this.selectedFile.image = event.target.files[0];
    this.selectedFile.letter = event.target.files[0];
  }

  onUpload() {
    
    const formData = new FormData();
      formData.append('image', this.selectedFile.image);
      formData.append('file', this.selectedFile.letter);

      this.http.post<any>('http://localhost:8898/api/masjid/upload', formData)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
    }
  }


