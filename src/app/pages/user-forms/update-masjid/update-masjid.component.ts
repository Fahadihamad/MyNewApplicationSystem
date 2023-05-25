import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Masjid } from 'src/app/masjid';
import { MasjidServiceService } from 'src/app/services/masjid-service.service';

@Component({
  selector: 'app-update-masjid',
  templateUrl: './update-masjid.component.html',
  styleUrls: ['./update-masjid.component.css']
})
export class UpdateMasjidComponent implements OnInit {
  date= new Date().toLocaleDateString();
   time= new Date().toLocaleTimeString();
  id:number;
  masjid:Masjid= new Masjid();
  constructor(private masjidservice:MasjidServiceService, private rout:ActivatedRoute, private router:Router, private snack:MatSnackBar ){}

ngOnInit(): void {
  this.id = this.rout.snapshot.params['id'];

   this.masjidservice.getMasjidById(this.id).subscribe(data=>{
    this.masjid= data;
   },
   error=>console.log(error)) ;
   
   
}

onSubmitForm(){
  this.masjidservice.updateMasjid(this.id, this.masjid).subscribe(data=> {
    this.snack.open('Updated successfull !! Wait for response','',{
      duration:3000,
    });
   
    this.goToMasjidList();
  },
   error=>console.log(error));
   
}
goToMasjidList(){
  return this.router.navigate(['/userdashh/masjidreq'])
}
}
