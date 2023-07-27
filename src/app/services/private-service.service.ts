import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Private } from '../private';

@Injectable({
  providedIn: 'root'
})
export class PrivateServiceService {

  addPrivate="http://localhost:8898/api/private/add"
  listPrivate="http://localhost:8898/api/private/all"
  getById="http://localhost:8898/api/private/get"
  update="http://localhost:8898/api/private/update"
  delete="http://localhost:8898/api/private/delete"
  pending="http://localhost:8898/api/private/pending"
  apiUrlAcc="http://localhost:8898/api/private/accept"
  apiUrlRej="http://localhost:8898/api/private/reject"
  private baseUrl = 'http://localhost:8898/api/private'
  constructor(private http:HttpClient) { }

  addPrivateReq(privates:Private):Observable<Object>{

    return this.http.post(`${this.addPrivate}`, privates);
  }
  getPrivateList():Observable<Private[]>{
     
    return this.http.get<Private[]>(`${this.listPrivate}`)
  }
  getPrivateById(id:number):Observable<Private>{

    return this.http.get<Private>(`${this.getById}/${id}`);
 }

 getImage(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/image/${id}`, { responseType: 'blob' });
}

getFile(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/file/${id}`, { responseType: 'blob' });
}

 updatePrivate(id:number, privats:Private):Observable<Object>{

   return this.http.put(`${this.update}/${id}`,privats);
 }

 deletePrivate(id:number):Observable<Object>{

   return this.http.delete(`${this.delete}/${id}`);

 }
 acceptApplication(id: number) {
  return this.http.put(`${this.apiUrlAcc}/${id}`, null);
}

rejectApplication(id: number) {
  return this.http.put(`${this.apiUrlRej}/${id}`, null);
}
getAcceptedList():Observable<Private[]>{
     
  return this.http.get<Private[]>(`${this.apiUrlAcc}`);
}
getRejectedList():Observable<Private[]>{
     
  return this.http.get<Private[]>(`${this.apiUrlRej}`)
}
getPendingList():Observable<Private[]>{
     
  return this.http.get<Private[]>(`${this.pending}`)
}

}
