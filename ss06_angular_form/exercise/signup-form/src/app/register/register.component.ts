import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.pattern('[1-9]+\\d*'), Validators.max(99)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
  }, this.checkPassword);

  checkPassword(control: AbstractControl) {
    const passwordValue = control.value.password;
    const confirmPasswordValue = control.value.confirmPassword;

    if (passwordValue !== confirmPasswordValue) {
      return {password: true};
    }

    return null;
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.registerForm);
    alert('Sign-up successful');
  }
}
