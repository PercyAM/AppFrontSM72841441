import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    const lowercaseUsername = this.username.toLowerCase();
    if ((lowercaseUsername === 'sm72841441' || lowercaseUsername === 'SM72841441') && this.password === '30042005') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Autenticación fallida. Verifique su ususario y contraseña.');
    }
  }
}
