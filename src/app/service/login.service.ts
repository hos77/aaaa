import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../classes/login';
const URL = "http://localhost:3000/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http :HttpClient) { }
  role =false;
  getlogin():Observable<Login[]>{
    return this.http.get<Login[]>(URL);
    };
    addCompte(p:Login):Observable<Login>{
      return this.http.post<Login>(URL, p);
      };
      updateCompte(id:number, p:Login):Observable<Login>{
        return this.http.put<Login>(URL+"/"+ id, p);
        }
}
