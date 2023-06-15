import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';

@Component({
  selector: 'app-orphan-update',
  templateUrl: './orphan-update.component.html',
  styleUrls: ['./orphan-update.component.css']
})
export class OrphanUpdateComponent {
   

  date= new Date().toLocaleDateString();
  time= new Date().toLocaleTimeString();
 id:number;
 orphan:Orphans= new Orphans();
 constructor(private orphanservice:OrphansServiceService, private rout:ActivatedRoute, private router:Router,private snack:MatSnackBar ){}

ngOnInit(): void {
 this.id = this.rout.snapshot.params['id'];

  this.orphanservice.getOrphanById(this.id).subscribe(data=>{
   this.orphan= data;
  },
  error=>console.log(error)) ;
  
  
}

onSubmitForm(){
 this.orphanservice.updateOrphan(this.id, this.orphan).subscribe(data=> {
  this.snack.open('Successfull Updated!!','Wait for respond',{
    duration:3000,
  });
   this.goToOrphanList();
 },
  error=>console.log(error));
  
}
goToOrphanList(){
 return this.router.navigate(['/userdashh/orphanreq'])
}
}
