import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidUser: boolean = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login() {

    if(this.loginForm.value['email'] == "admin" && this.loginForm.value['password'] == "123") {
      this.router.navigate(["/app"])
    } else {
      this.invalidUser = true;
    }

  }
}
