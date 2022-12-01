import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav/nav.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageticketComponent } from './pageTicket/pageticket/pageticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TicketComponent,
    PageticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
