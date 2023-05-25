import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Madrasa } from 'src/app/madrasa';
import { MadrasaServiceService } from 'src/app/services/madrasa-service.service';

@Component({
  selector: 'app-update-madrasa',
  templateUrl: './update-madrasa.component.html',
  styleUrls: ['./update-madrasa.component.css']
})
export class UpdateMadrasaComponent {
  date= new Date().toLocaleDateString();
  time= new Date().toLocaleTimeString();
 id:number;
 madrasa:Madrasa= new Madrasa();
 constructor(private madrasaservice:MadrasaServiceService, private rout:ActivatedRoute, private router:Router,private snack:MatSnackBar ){}

ngOnInit(): void {
 this.id = this.rout.snapshot.params['id'];

  this.madrasaservice.getMadrasaById(this.id).subscribe(data=>{
   this.madrasa= data;
  },
  error=>console.log(error)) ;
  
  
}

onSubmitForm(){
 this.madrasaservice.updateMadrasa(this.id, this.madrasa).subscribe(data=> {
  this.snack.open('Successfull Updated!!','Wait for respond',{
    duration:3000,
  });
   this.goToMadrasaList();
 },
  error=>console.log(error));
  
}
goToMadrasaList(){
 return this.router.navigate(['/userdashh/madrasareq'])
}
}
