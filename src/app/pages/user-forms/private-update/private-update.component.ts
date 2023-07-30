import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Private } from 'src/app/private';
import { PrivateServiceService } from 'src/app/services/private-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-private-update',
  templateUrl: './private-update.component.html',
  styleUrls: ['./private-update.component.css']
})
export class PrivateUpdateComponent {
   

  date= new Date().toLocaleDateString();
  time= new Date().toLocaleTimeString();
 id:number;
 private:Private= new Private();
 constructor(private privateservice:PrivateServiceService, private rout:ActivatedRoute, private router:Router,private snack:MatSnackBar ){}

ngOnInit(): void {
 this.id = this.rout.snapshot.params['id'];

  this.privateservice.getPrivateById(this.id).subscribe(data=>{
   this.private= data;
  },
  error=>console.log(error)) ;
  
  
}

onSubmitForm(){
 this.privateservice.updatePrivate(this.id,this.private).subscribe(data=> {
  // this.snack.open('Successfull Updated!!','Wait for respond',{
  //   duration:3000,
  // });
  Swal.fire("Thank you",'Application updated succesfully','success');
   this.goToPrivateList();
 },
  error=>console.log(error));
  Swal.fire("Error",'Application not updated','error');
}
goToPrivateList(){
 return this.router.navigate(['/userdashh/privatereq'])
}
}
