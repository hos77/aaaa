import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register !:FormGroup;

  constructor(private fb :FormBuilder , private log :LoginService , private r :Router) { }


  ngOnInit(): void {
    this.register = this.fb.nonNullable.group(
      {
        email :['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],

      }
      );
  }
  addProduit()
  {
    console.log(this.register.value);

    this.log.addCompte(this.register.value).subscribe
    (value => console.log(value));
    this.r.navigate(['login']);





  };

}
