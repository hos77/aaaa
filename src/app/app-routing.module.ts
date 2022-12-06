import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductComponent } from './backoffice/listproduct/listproduct.component';
import { LoginComponent } from './backoffice/login/login.component';
import { PasswordComponent } from './backoffice/password/password.component';
import { SignupComponent } from './backoffice/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsPComponent } from './details-p/details-p.component';
import { NavComponent } from './navbar/nav/nav.component';
import { PageticketComponent } from './pageTicket/pageticket/pageticket.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [

  {path:'nav', title:'nav', component:NavComponent},
  {path:'listproduct', title:'product', component:ListproductComponent  },
  {path:'password', title:'password', component:PasswordComponent},

{path:'login', title:'login', component:LoginComponent},
{path:'signup', title:'signup', component:SignupComponent},

{path:'détails',title:'détails',component:TicketComponent},
  {path:'contact',title:'Contact',component:ContactComponent},
  {path:'ticket',title:'Ticket',component:PageticketComponent},
  {path:'détails/:id',title:'détails',component:TicketComponent},
  {path:'détails-p',title:'détailsp',component:DetailsPComponent},
  {path:'détails-p/:id',title:'détailsp',component:DetailsPComponent},

  {path:'', redirectTo:'ticket', pathMatch:'full'},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
