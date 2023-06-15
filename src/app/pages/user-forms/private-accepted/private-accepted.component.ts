import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Private } from 'src/app/private';
import { PrivateServiceService } from 'src/app/services/private-service.service';

@Component({
  selector: 'app-private-accepted',
  templateUrl: './private-accepted.component.html',
  styleUrls: ['./private-accepted.component.css']
})
export class PrivateAcceptedComponent implements OnInit {
  privates:Private[];
  constructor(private router:Router, private privatesser:PrivateServiceService){}
  ngOnInit(): void {
    this.getAccepted();
  }
  privatesDetails(id:number){
    this.router.navigate(['/userdashh/priView', id]);
  }
  getAccepted(){
    this.privatesser.getAcceptedList().subscribe(data=>{
      this.privates=data;
    })
  }

}
