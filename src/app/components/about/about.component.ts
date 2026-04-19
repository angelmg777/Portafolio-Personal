import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  infoItems = [
    { key: 'Nombre', value: 'Angel Gabriel Munguia Gonzalez' },
    { key: 'Carrera', value: 'Ing. Desarrollo de Software' },
    { key: 'Ubicación', value: 'Guadalajara, Jalisco' },
    { key: 'Email', value: 'agmg.angel@gmail.com' },
    { key: 'Estado', value: 'Disponible para trabajar' },
  ];
}