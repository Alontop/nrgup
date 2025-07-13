import { Component } from '@angular/core';
import { BloqueLoginComponent } from '../bloque-login/bloque-login.component';

@Component({
  selector: 'app-login',
  imports: [BloqueLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
