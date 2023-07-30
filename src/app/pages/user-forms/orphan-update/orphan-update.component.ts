import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Orphans } from 'src/app/orphans';
import { OrphansServiceService } from 'src/app/services/orphans-service.service';
import Swal from 'sweetalert2';

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
  // this.snack.open('Successfull Updated!!','Wait for respond',{
  //   duration:3000,
  // });
  Swal.fire("Thank you",'Application updated successfully','error');
   this.goToOrphanList();
 },
  error=>console.log(error));
  Swal.fire("Error",'Application not updated','error');
}
goToOrphanList(){
 return this.router.navigate(['/userdashh/orphanreq'])
}
}
