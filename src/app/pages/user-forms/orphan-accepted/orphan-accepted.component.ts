import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';

@Component({
  selector: 'app-orphan-accepted',
  templateUrl: './orphan-accepted.component.html',
  styleUrls: ['./orphan-accepted.component.css']
})
export class OrphanAcceptedComponent implements OnInit {
    
  orphans:Orphans[];
  constructor(private router:Router, private orphansser:OrphansServiceService){}
  ngOnInit(): void {
    this.getAccepted();
  }
  orphansDetails(id:number){
    this.router.navigate(['/userdashh/orpView', id]);
  }
  getAccepted(){
    this.orphansser.getAcceptedList().subscribe(data=>{
      this.orphans=data;
    })
  }
}
