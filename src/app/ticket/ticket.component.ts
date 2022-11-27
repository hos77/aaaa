import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tickets } from '../classes/tickets';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  lesticket !:Tickets[];
  FiltreStade !:Tickets[];
  productForm!:FormGroup;
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;

  constructor(private ticketService :TicketService,
    private fb :FormBuilder) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      data =>this.lesticket =data
    );

  }










  filtrerStade(chaine :string): Tickets[]
  {

     this.FiltreStade=this.lesticket.filter(v =>v.stade==chaine);
     return this.FiltreStade;


  };


}
