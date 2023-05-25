import { Injectable } from '@angular/core';
import { Madrasa } from '../madrasa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MadrasaServiceService {
  addmadrasa="http://localhost:8898/api/madrasa/add"
  listMadrasa="http://localhost:8898/api/madrasa/all"
  getById="http://localhost:8898/api/madrasa/get"
  update="http://localhost:8898/api/madrasa/update"
  delete="http://localhost:8898/api/madrasa/delete"
  apiUrlAcc="http://localhost:8898/api/madrasa/accept"
  apiUrlRej="http://localhost:8898/api/madrasa/reject"
  // accepted="http://localhost:8898/api/madrasa/accepted"

  constructor(private http:HttpClient) { }

  addMadrasaReq(madrasa:Madrasa):Observable<Object>{

    return this.http.post(`${this.addmadrasa}`, madrasa);
  }
  getMadrasaList():Observable<Madrasa[]>{
     
    return this.http.get<Madrasa[]>(`${this.listMadrasa}`)
  }
  getMadrasaById(id:number):Observable<Madrasa>{

    return this.http.get<Madrasa>(`${this.getById}/${id}`);
 }

 updateMadrasa(id:number, madrasa:Madrasa):Observable<Object>{

   return this.http.put(`${this.update}/${id}`,madrasa);
 }

 deleteMadrasa(id:number):Observable<Object>{

   return this.http.delete(`${this.delete}/${id}`);

 }
 acceptApplication(id: number) {
  return this.http.put(`${this.apiUrlAcc}/${id}`, null);
}

rejectApplication(id: number) {
  return this.http.put(`${this.apiUrlRej}/${id}`, null);
}
getAcceptedList():Observable<Madrasa[]>{
     
  return this.http.get<Madrasa[]>(`${this.apiUrlAcc}`)
}
}
