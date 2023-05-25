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

  madrasa:Madrasa = new Madrasa();

  constructor(private madrasaService:MadrasaServiceService, private snack:MatSnackBar){}
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
  onFileSelected(event:any){

  }
}
