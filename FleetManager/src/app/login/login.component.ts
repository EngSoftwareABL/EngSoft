import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // importa o serviço

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidUser: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const email = this.loginForm.value['email'];
    const senha = this.loginForm.value['password'];

    this.authService.login({ email, senha }).subscribe({
      next: (user) => {
        console.log('Usuário logado:', user);
        this.invalidUser = false;
        this.router.navigate(['/app']); // redireciona para home
      },
      error: () => {
        this.invalidUser = true;
      }
    });
  }

  loginVisible = false;

  toggleLogin(event: Event): void {
    event.preventDefault();
    this.loginVisible = true;
  }

  closeLogin(): void {
    this.loginVisible = false;
  }

}
