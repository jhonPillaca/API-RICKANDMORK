import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlRick="https://rickandmortyapi.com/api/character/?";

  constructor(private http:HttpClient) { }


  getRickAndMory():Observable<any>{
    return this.http.get<any>(`${this.urlRick}`);

  }
}
