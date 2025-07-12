import { Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: '',
        component: PantallaPrincipalComponent,
      },
      {
        path: 'poto',
        component: LoginComponent,
      },
    ],
  },
];
