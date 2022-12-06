import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageTicket } from '../classes/page-ticket';
const URL = "http://localhost:3000/pageTicket";

@Injectable({
  providedIn: 'root'
})
export class PageTicketService {

  constructor( private http :HttpClient) { }
  getTicket():Observable<PageTicket[]>{
    return this.http.get<PageTicket[]>(URL);
    };


    addProduit(p:PageTicket):Observable<PageTicket>{
      return this.http.post<PageTicket>(URL, p);
      };
      deleteProduit(id:number){
        return this.http.delete(`${URL}/${id}`);
        };
        updateProduit(id:number, p:PageTicket):Observable<PageTicket>{
          return this.http.put<PageTicket>(`${URL}/${id}`, p);
          };

}
