import { Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { AboutComponent } from './about/about.component';

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
        component: RegistroComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'rutina',
        component: RutinasComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];
