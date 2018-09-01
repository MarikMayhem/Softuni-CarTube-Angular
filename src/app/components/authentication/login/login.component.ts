import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../models/login.model';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean;
  errMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.model = new LoginModel('', '')
  }

  form = new FormGroup({
    "username": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
    "password": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), Validators.minLength(4)])
  })

  ngOnInit() {
  }

  get diagnostics() {
    return JSON.stringify(this.form.value);
  }


  login() {
    this.authService.login(this.model)
      .subscribe(
        data => {
          console.log(data)
        },
        err => {
          this.form.reset();
          this.loginFailed = true;
          this.errMessage = err['error']['description']
        })
  }

  get f () {
    return this.form.controls;
  }


}
