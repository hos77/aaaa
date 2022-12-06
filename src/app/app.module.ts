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
import { LoginComponent } from './backoffice/login/login.component';
import { SignupComponent } from './backoffice/signup/signup.component';
import { RouterModule } from '@angular/router';
import { ListproductComponent } from './backoffice/listproduct/listproduct.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PasswordComponent } from './backoffice/password/password.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsPComponent } from './details-p/details-p.component';
import { PipePersoPipe } from './pipe-perso.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TicketComponent,
    PageticketComponent,
    LoginComponent,
    SignupComponent,
    ListproductComponent,
    SearchFilterPipe,
    PasswordComponent,
    ContactComponent,
    DetailsPComponent,
    PipePersoPipe
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
