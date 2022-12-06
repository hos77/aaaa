import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  pass !:FormGroup;
  tabuser !:Login[];
  val=0;

  constructor(private fb :FormBuilder , private log :LoginService , private r :Router) { }

  ngOnInit(): void {
    this.pass = this.fb.nonNullable.group(
      {
        id :[,Validators.required],
        email :['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],

      }
      );
      this.log.getlogin().subscribe(
        data =>this.tabuser = data
      );




  }
  loginsubmit(data :any)
  {
    this.tabuser.forEach((item :any) =>
    {
      if (data.email !== item.email )
      { this.val =1;
        this.pass.reset();



      }

      else if (data.email === item.email ) {
        this.log. updateCompte(this.pass.get('id')?.value, this.pass.value).subscribe(
          data=> console.log(data)
        );
        this.val =0;
        this.r.navigate(['login']);




      }
    })

  }




}
