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
  
  orphan:Orphans=new Orphans();

  constructor(private orphanServ:OrphansServiceService,private http:HttpClient,private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }
  onSubmitForm(){
    this.orphanServ.addOrphanReq(this.orphan).subscribe(data=>{
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

