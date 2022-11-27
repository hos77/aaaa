import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tickets } from '../classes/tickets';
const URL = "http://localhost:3000/tickets";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http :HttpClient) { }
  getTickets():Observable<Tickets[]>{
    return this.http.get<Tickets[]>(URL);
    };



}
