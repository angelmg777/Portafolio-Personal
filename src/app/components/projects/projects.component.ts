import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commmerce Fox Shop',
      description: 'Desarrollo de e-commerce completo para tienda de ropa con catálogo dinámico, integración con CMS headless y contacto directo vía WhatsApp. Diseño mobile-first optimizado para iOS y Android. Arquitectura JAMstack con CMS headless. ',
      tags: ['Next.js', 'React', 'Sanity CMS', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/angelmg777/Tienda-ropa',
      live: 'https://tienda-ropa-wine.vercel.app/',
      featured: true,
      color: 'linear-gradient(135deg, #0a0e1a, #1a0a2e)',
      image: 'assets/Images/Fox-shop.png'
    },
    {
      title: 'StudentRent  Aplicación móvil',
      description: 'Desarrollo de app multiplataforma para renta de alojamientos para estudiantes. Implementación de registro de usuarios, navegación, gestión de datos y filtros avanzados ',
      tags: ['React Nativve', 'Firebase', 'Git', 'JavaScript','Maps SDK'],
      github: 'https://github.com/angelmg777',
      featured: false,
      color: 'linear-gradient(135deg, #0a1a1a, #001a2e)',
      image: 'assets/Images/StudenRent.png'
    },
    
    {
      title: 'Portafolio Web',
      description: 'Portafolio web personal con informacion sobre experiencia, habilidades y datos de contacto. Implementa animaciones con Canvas API, IntersectionObserver y efectos CSS avanzados.',
      tags: ['Angular', 'Node.js', 'Typescript', 'Vercel' ],
      github: 'https://github.com/angelmg777/Portafolio-Personal',
      featured: false,
      color: 'linear-gradient(135deg, #0a1a0a, #001a10)',
      image: 'assets/Images/portafolio.png'
    }
  ];
}