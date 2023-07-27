import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Masjid } from '../masjid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasjidServiceService {
 

  addmasjid="http://localhost:8898/api/masjid/add"
  listMasjid="http://localhost:8898/api/masjid/all"
  getById="http://localhost:8898/api/masjid/find"
  update="http://localhost:8898/api/masjid/update"
  delete="http://localhost:8898/api/masjid/delete"
  pending="http://localhost:8898/api/masjid/pending"
  apiUrlAcc="http://localhost:8898/api/masjid/accept"
  apiUrlRej="http://localhost:8898/api/masjid/reject"
  private baseUrl = 'http://localhost:8898/api/masjid'
  constructor(private http:HttpClient) { }

  // addMasjidReq(massjidBuild:any):Observable<any>{

  //   return this.http.post(`${this.addmasjid}`, massjidBuild);
  // }
  
  getMasjidList():Observable<Masjid[]>{
     
    return this.http.get<Masjid[]>(`${this.listMasjid}`)
  }
  getMasjidById(id:number):Observable<Masjid>{

    return this.http.get<Masjid>(`${this.getById}/${id}`);
 }

 updateMasjid(id:number, masjid:Masjid):Observable<Object>{

   return this.http.put(`${this.update}/${id}`,masjid);
 }
 getImage(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/image/${id}`, { responseType: 'blob' });
}

getFile(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/file/${id}`, { responseType: 'blob' });
}
 deleteMasjid(id:number):Observable<Object>{

   return this.http.delete(`${this.delete}/${id}`);

 }
 acceptApplication(id: number) {
  return this.http.put(`${this.apiUrlAcc}/${id}`, null);
}

rejectApplication(id: number) {
  return this.http.put(`${this.apiUrlRej}/${id}`, null);
}
getAcceptedList():Observable<Masjid[]>{
     
  return this.http.get<Masjid[]>(`${this.apiUrlAcc}`);
}
getRejectedList():Observable<Masjid[]>{
     
  return this.http.get<Masjid[]>(`${this.apiUrlRej}`)
}
getPendingList():Observable<Masjid[]>{
     
  return this.http.get<Masjid[]>(`${this.pending}`)
}
}
