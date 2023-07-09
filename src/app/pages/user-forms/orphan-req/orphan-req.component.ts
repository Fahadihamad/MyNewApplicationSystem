import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';

@Component({
  selector: 'app-orphan-req',
  templateUrl: './orphan-req.component.html',
  styleUrls: ['./orphan-req.component.css']
})
export class OrphanReqComponent implements OnInit {
  
  orphan={
    id:'',
    
    date:'',
    discription:'',
     region:'',
     shehia:'',
     street:'',
     district:'',
     orp_phone:'',
     houseNo:'',
     orp_lasttName:'',
     orp_sectName:'',
     orp_firstName:'',
     image: null,
    file:null
  }

  constructor(private orphanServ:OrphansServiceService,private http:HttpClient,private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }
  // onSubmitForm(){
  //   this.orphanServ.addOrphanReq(this.orphan).subscribe(data=>{
  //     console.log(data);
  //     this.snack.open('Your Application sent successfull !! Wait for response','',{
  //       duration:3000,
  //     });
  //   },
  //   error=>console.log(error));
  //   this.snack.open('Error Occurred','',{
  //     duration:3000,
  //   })
  // }

  onSubmitForm(): void {
    const formData = new FormData();
    
    formData.append('date', this.orphan.date);
    formData.append('discription', this.orphan.discription);
    formData.append('region', this.orphan.region);
    formData.append('shehia', this.orphan.shehia);
    formData.append('street', this.orphan.street);
    formData.append('district', this.orphan.district);
    formData.append('orp_firstName', this.orphan.orp_firstName);
    formData.append('orp_sectName', this.orphan.orp_sectName);
    formData.append('orp_lasttName', this.orphan.orp_lasttName);
    formData.append('orp_phone', this.orphan.orp_phone);
    formData.append('houseNo', this.orphan.houseNo);
    
    if (this.orphan.file) {
      formData.append('file', this.orphan.file);
    }
    
    if (this.orphan.image) {
      formData.append('image', this.orphan.image);
    }

    this.http.post('http://localhost:8898/api/orphan/add', formData).subscribe(
      (response: any) => {
        console.log('Masjid_build created successfully:', response);
        // Reset the form
        this.orphan = {
          id:'',
    
          date:'',
          discription:'',
           region:'',
           shehia:'',
           street:'',
           district:'',
           orp_phone:'',
           houseNo:'',
           orp_lasttName:'',
           orp_sectName:'',
           orp_firstName:'',
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
    this.orphan.image = event.target.files[0];
    console.log(event.target.files); // Check if files are correctly logged
  
  }

  onFilesChange(event: any): void {
    this.orphan.file = event.target.files[0];
    console.log(event.target.files);
  }

}


  

