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

  private:Private= new Private();

  constructor(private privateServ:PrivateServiceService,private http:HttpClient,private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }
  onSubmitForm(){
 this.privateServ.addPrivateReq(this.private).subscribe(data=>{
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
    
  }

