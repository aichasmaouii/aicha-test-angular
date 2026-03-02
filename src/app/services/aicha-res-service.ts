import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class AichaResService {
  constructor(private http:HttpClient) { }
  showallres():Observable<Residence>
  {
    return this.http.get<Residence>('http://localhost:3000/residences')
  }

  showres(id:any):Observable<Residence>
  {
    return this.http.get<Residence>('http://localhost:3000/residences'+'/'+id)
  }

  delres(id:any):Observable<Residence>
  {
    return this.http.delete<Residence>('http://localhost:3000/residences'+'/'+id)
  }

  
  
}
