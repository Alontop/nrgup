import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentPrincipalComponent } from '../content-principal/content-principal.component';
declare var particlesJS: any;

@Component({
  selector: 'app-pantalla-principal',
  imports: [ContentPrincipalComponent],
  templateUrl: './pantalla-principal.component.html',
  styleUrl: './pantalla-principal.component.css',
})
export class PantallaPrincipalComponent implements OnInit {
  ngOnInit(): void {
    particlesJS.load('particles-js', 'particles.json', () => {
      console.log('Particles.js cargado');
    });
  }
}
