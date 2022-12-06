import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login !:FormGroup;
  tabuser !:Login[];
  val =true;

  constructor(private fb :FormBuilder , private log :LoginService , private r :Router) {  }

  ngOnInit(): void {
    this.login = this.fb.nonNullable.group(
      {
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
      if (data.email === item.email && item.password === data.password)
      {
        this.r.navigate(['listproduct']);
        this.val =true;
        this.log.role=true;
      }
      else{
        this.login.reset();
        this.val =false;





      }
    })

  }
}


