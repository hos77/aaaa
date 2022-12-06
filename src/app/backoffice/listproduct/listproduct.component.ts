import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTicket } from 'src/app/classes/page-ticket';
import { PageTicketService } from 'src/app/service/page-ticket.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  listP !:PageTicket[];
  product !:PageTicket;
  form !: FormGroup;
  val = true ;
  searchTerm = '';
  term = '';


  constructor( private p :PageTicketService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.p.getTicket().subscribe(
      data =>this.listP =data
    );
    this.form = this.fb.nonNullable.group(
      {
        id:['',Validators.required],
      description:['',Validators.required],
      stade:['',Validators.required],
      prix:[100,Validators.required],
      date :[,Validators.required],
      image :['',Validators.required]
      }
      );



  }

  update()
  {
    this.product =this.form.value;
    console.log(this.product);
  }

  addProduit()
  {
    console.log(this.form.value);

    this.p.addProduit(this.form.value).subscribe
    (value => this.listP.push(value));





  };
  deleteP(p:number)
  {
    this.p.deleteProduit(p).subscribe();
  }
  modifyP(id:number)
  {

    this.p.updateProduit(id, this.product).subscribe();


  };

  onh()
  {
    this.val = !this.val;
  };
  search(value: string): void {
    this.listP .filter((val) =>
      val.description.toLowerCase().includes(value)
    );
  }
}







