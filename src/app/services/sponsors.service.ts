import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  private baseUrl="http://localhost:8898/createSponsors"

  constructor(private http:HttpClient) { }

  createSponsor(sponsor:Sponsor):Observable<Object>{
    
    return this.http.post(`${this.baseUrl}`,sponsor);
  }
}
