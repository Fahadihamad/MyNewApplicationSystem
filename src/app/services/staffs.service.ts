import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staffs } from '../staffs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {

  private basUrl="http://localhost:8898/allstaffs"

  private createUrl="http://localhost:8898/createStaffs"

  private getById="http://localhost:8898/findstaff"

  private update ="http://localhost:8898/updateStaff"

  private delete ="http://localhost:8898/deletestaff"

  constructor(private http:HttpClient) { 

  }

  getStaffsList():Observable<Staffs[]>{
     
    return this.http.get<Staffs[]>(`${this.basUrl}`)
  }

  createStaff(staffs:Staffs):Observable<Object>{
    
    return this.http.post(`${this.createUrl}`,staffs);
  }

  getStaffById(id:number):Observable<Staffs>{

     return this.http.get<Staffs>(`${this.getById}/${id}`);
  }

  updateStaff(id:number, staffs:Staffs):Observable<Object>{

    return this.http.put(`${this.update}/${id}`,staffs);
  }

  deleteStaff(id:number):Observable<Object>{

    return this.http.delete(`${this.delete}/${id}`);

  }
}
