import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rutinas',
  imports: [NgClass, NgFor],
  templateUrl: './rutinas.component.html',
  styleUrl: './rutinas.component.css',
})
export class RutinasComponent {
  bloques = [
    {
      nombre: 'Full Body Express',
      descripcion:
        'Rutina de cuerpo completo en 30 minutos. Incluye sentadillas, flexiones, abdominales y burpees. Ideal para tonificar y quemar grasa rápidamente.',
    },
    {
      nombre: 'Piernas de Acero',
      descripcion:
        'Enfocada en tren inferior. Incluye sentadillas, zancadas, peso muerto rumano y elevaciones de talón para fortalecer glúteos y piernas',
    },
    {
      nombre: 'Tren Superior Explosivo',
      descripcion:
        'Fortalece pecho, espalda y brazos con flexiones, dominadas, remo con mancuernas y fondos de tríceps.',
    },
    {
      nombre: 'Core y Estabilidad',
      descripcion:
        'Mejora tu equilibrio y fuerza abdominal con planchas, abdominales en bicicleta, elevaciones de piernas y bird-dog.',
    },
    {
      nombre: 'Cardio HIIT',
      descripcion:
        'Circuito de 20 minutos con jumping jacks, sprints, mountain climbers y burpees. Mejora resistencia y quema calorías.',
    },
    {
      nombre: 'Quema Grasa en Casa',
      descripcion:
        'Entrenamiento sin equipo con saltos, sentadillas, escaladores y jumping lunges. Perfecto para espacios reducidos.',
    },
    {
      nombre: 'Calentamiento Dinámico',
      descripcion:
        'Preparación física con movilidad articular, skipping, estocadas y rotaciones. Ideal antes de entrenar.',
    },
    {
      nombre: 'Estiramientos y Relajación',
      descripcion:
        'Post-entrenamiento o días de descanso. Incluye estiramientos estáticos de todo el cuerpo y respiración consciente.',
    },
    {
      nombre: 'Circuito Funcional 3x3',
      descripcion:
        'Tres rondas de tres ejercicios (tracción, empuje y piernas). Por ejemplo: remo, flexiones y sentadillas. Mejora fuerza y coordinación.',
    },
  ];

  descripcion = 'Pasa el mouse sobre un bloque para ver su descripción';
  nombre = '';
  ocultando = false;

  setDescripcion(nuevaDescripcion: string, nuevoNombre: string = '') {
    this.ocultando = true;
    setTimeout(() => {
      this.descripcion = nuevaDescripcion;
      this.nombre = nuevoNombre;
      this.ocultando = false;
    }, 250);
  }
}
