import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persons } from "../interfaces/Persons.interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private apiURL ='http://localhost:3000/Personas';
  constructor( private http:HttpClient) { }

  getpersons():Observable<Persons[]>{
    return this.http.get<Persons[]>(this.apiURL);
    
  }
}
