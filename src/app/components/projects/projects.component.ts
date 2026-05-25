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
      title: 'Menu Digital - Ruso Bar',
      description: 'Aplicación web fullstack para la gestión y visualización del menú de un bar. Permite a los clientes explorar bebidas con filtros dinámicos, y al administrador gestionar el catálogo completo desde un panel protegido',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Vercel', 'Railway', 'Express', 'JWT-Bcryptjs', 'Vite'],
      github: 'https://github.com/angelmg777/menu-bar',
      live: 'https://menu-bar-pied.vercel.app/',
      featured: false,
      color: 'linear-gradient(135deg, #0a0e1a, #1a0a2e)',
      image: 'assets/Images/WebMenuBar.png'
    },
    {
      title: 'Finanzas Web',
      description: 'Aplicación web fullstack de gestión financiera personal con autenticación completa, dashboard con gráficas interactivas y diseño responsive',
      tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'JWT-Bcryptjs', 'Brevo','Vercel', 'Railway' ],
      github: 'https://github.com/angelmg777/Finanzas-App',
      live: 'https://finanzas-app-eight-jade.vercel.app/',
      featured: true,
      color: 'linear-gradient(135deg, #0a0e1a, #1a0a2e)',
      image: 'assets/Images/WebFinanzas.png'
    },
    {
      title: 'StudentRent  Aplicación móvil',
      description: 'Desarrollo de app multiplataforma para renta de alojamientos para estudiantes. Implementación de registro de usuarios, navegación, gestión de datos y filtros avanzados ',
      tags: ['React Native', 'Firebase', 'Git', 'JavaScript','Maps SDK', 'Expo'],
      github: 'https://github.com/angelmg777',
      featured: false,
      color: 'linear-gradient(135deg, #0a1a1a, #001a2e)',
      image: 'assets/Images/StudenRent.png'
    },
    
    {
      title: 'Portafolio Web',
      description: 'Portafolio web personal con informacion sobre experiencia, habilidades y datos de contacto. Implementa animaciones con Canvas API, IntersectionObserver y efectos CSS avanzados.',
      tags: ['Angular', 'Typescript', 'Vercel' ],
      github: 'https://github.com/angelmg777/Portafolio-Personal',
      live : 'https://portafolio-personal-mu-hazel.vercel.app/',
      featured: false,
      color: 'linear-gradient(135deg, #0a1a0a, #001a10)',
      image: 'assets/Images/portafolio.png'
    }

  ];
}