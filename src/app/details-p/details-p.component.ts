import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTicket } from '../classes/page-ticket';
import { PageTicketService } from '../service/page-ticket.service';

@Component({
  selector: 'app-details-p',
  templateUrl: './details-p.component.html',
  styleUrls: ['./details-p.component.css']
})
export class DetailsPComponent implements OnInit {
  id!: number;
  ticketsd !:PageTicket[];

  constructor(private activat :ActivatedRoute,private ticketS :PageTicketService) { }

  ngOnInit(): void {
    this.id = this.activat.snapshot.params['id'];
    this.ticketS.getTicket().subscribe(
      data =>this.ticketsd =data
    );
}
  }


