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
  filter !:PageTicket[];
  stade = ['Al Bayt Stadium, Al Khor, Qatar', 'Al-Thumama Stadium, Doha, Qatar',
   'Khalifa International Stadium, Doha, Qatar','Al-Janoub Stadium , Al Wakair, Qatar',
   'Stadium 974, Doha, Qatar','Lusail Stadium, Lusail, Qatar',
   'Educatinal City Stadium, Doha, Qatar'
  ];
  val:string ="all";
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;


  constructor(private ticketS :PageTicketService) { }

  ngOnInit(): void {
    this.ticketS.getTicket().subscribe(
      data =>this.tickets =data
    );
    this.ticketS.getTicket().subscribe(
      data =>this.filter =data
    );
  }
  filterS(event :any)
  {if (event.target.value !=="all")

     {this.filter=this.tickets.filter(v =>v.stade==event.target.value );}
     else{
      this.filter =this.tickets;
     }
  }
  filterP(event :any)
  {
    if(event.target.value =="under 150")
    {
      this.filter=this.tickets.filter(v =>v.prix<=150);
    }
    else if (event.target.value =="over 150")
    {
      this.filter=this.tickets.filter(v =>v.prix>=150);

    }


  }

}
