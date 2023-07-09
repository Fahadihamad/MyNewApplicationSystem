import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Private } from 'src/app/private';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-private-req',
  templateUrl: './private-req.component.html',
  styleUrls: ['./private-req.component.css']
})
export class PrivateReqComponent implements OnInit {

  private={
    id:'',
    time:'',
    
    date:'',
    discription:'',
     region:'',
     shehia:'',
     street:'',
     district:'',
     per_firstName:'',
     per_sectName:'',
     per_lasttName:'',
     per_phone:'',
     per_houseNo:'',
     image: null,
     file:null

  }

  constructor(private privateServ:PrivateServiceService,private http:HttpClient,private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }
//   onSubmitForm(){
//  this.privateServ.addPrivateReq(this.private).subscribe(data=>{
//       console.log(data);
//       this.snack.open('Your Application sent successfull !! Wait for response','',{
//         duration:3000,
//       });
//     },
//     error=>console.log(error));
//     this.snack.open('Error Occurred','',{
//       duration:3000,
//     })

onSubmitForm(): void {
  const formData = new FormData();
  
  formData.append('date', this.private.date);
  formData.append('discription', this.private.discription);
  formData.append('region', this.private.region);
  formData.append('shehia', this.private.shehia);
  formData.append('street', this.private.street);
  formData.append('district', this.private.district);
  formData.append('per_firstName', this.private.per_firstName);
  formData.append('per_sectName', this.private.per_sectName);
  formData.append('per_lasttName', this.private.per_lasttName);
  formData.append('per_phone', this.private.per_phone);
  formData.append('per_houseNo', this.private.per_houseNo);
  
  if (this.private.file) {
    formData.append('file', this.private.file);
  }
  
  if (this.private.image) {
    formData.append('image', this.private.image);
  }

  this.http.post('http://localhost:8898/api/private/add', formData).subscribe(
    (response: any) => {
      console.log('Masjid_build created successfully:', response);
      // Reset the form
      this.private = {
        id:'',
    time:'',
    
    date:'',
    discription:'',
     region:'',
     shehia:'',
     street:'',
     district:'',
     per_firstName:'',
     per_sectName:'',
     per_lasttName:'',
     per_phone:'',
     per_houseNo:'',
     image: null,
     file:null
      };
      
    },
    (error: any) => {
      console.error('Error creating Masjid_build:', error);
    }
  );
}

onImagesChange(event: any): void {
  this.private.image = event.target.files[0];
  console.log(event.target.files); // Check if files are correctly logged

}

onFilesChange(event: any): void {
  this.private.file = event.target.files[0];
  console.log(event.target.files);
}


  }
    
  

