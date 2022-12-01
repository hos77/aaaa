import { Component, OnInit } from '@angular/core';
import { PageTicket } from 'src/app/classes/page-ticket';
import { PageTicketService } from 'src/app/service/page-ticket.service';

@Component({
  selector: 'app-pageticket',
  templateUrl: './pageticket.component.html',
  styleUrls: ['./pageticket.component.css']
})
export class PageticketComponent implements OnInit {
  tickets !:PageTicket[];


  constructor(private ticketS :PageTicketService) { }

  ngOnInit(): void {
    this.ticketS.getTicket().subscribe(
      data =>this.tickets =data
    );
  }

}
