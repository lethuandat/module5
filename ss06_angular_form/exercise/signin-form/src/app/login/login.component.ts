import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('angular@gmail.com')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('123456')]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
    alert('Sign-in successful!');
  }
}
