import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Orphans } from '../orphans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrphansServiceService  {
  addOrphan="http://localhost:8898/api/orphan/add"
  listOrphan="http://localhost:8898/api/orphan/all"
  getById="http://localhost:8898/api/orphan/get"
  update="http://localhost:8898/api/orphan/update"
  delete="http://localhost:8898/api/orphan/delete"
  apiUrlAcc="http://localhost:8898/api/orphan/accept"
  apiUrlRej="http://localhost:8898/api/orphan/reject"

  constructor(private http:HttpClient) { }

  addOrphanReq(orphan:Orphans):Observable<Object>{

    return this.http.post(`${this.addOrphan}`, orphan);
  }
  getOrphanList():Observable<Orphans[]>{
     
    return this.http.get<Orphans[]>(`${this.listOrphan}`)
  }
  getOrphanById(id:number):Observable<Orphans>{

    return this.http.get<Orphans>(`${this.getById}/${id}`);
 }

 updateOrphan(id:number, orphan:Orphans):Observable<Object>{

   return this.http.put(`${this.update}/${id}`,orphan);
 }

 deleteOrphan(id:number):Observable<Object>{

   return this.http.delete(`${this.delete}/${id}`);

 }
 acceptApplication(id: number) {
  return this.http.put(`${this.apiUrlAcc}/${id}`, null);
}

rejectApplication(id: number) {
  return this.http.put(`${this.apiUrlRej}/${id}`, null);
}
getAcceptedList():Observable<Orphans[]>{
     
  return this.http.get<Orphans[]>(`${this.apiUrlAcc}`);
}
getRejectedList():Observable<Orphans[]>{
     
  return this.http.get<Orphans[]>(`${this.apiUrlRej}`)
}

}
