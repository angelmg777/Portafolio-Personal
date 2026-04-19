import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: SafeHtml;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  activeCategory = 'all';

  categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Herramientas' },
  ];

  skills: Skill[] = [];

  constructor(private sanitizer: DomSanitizer) {

  this.skills = [
    { name: 'Angular', level: 80, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="#DD0031">  <path d="M12 0L1.605 3.75l1.582 13.568L12 24l8.813-6.682L22.395 3.75 12 0zm0 2.18l7.385 2.664-1.225 10.51L12 21.82l-6.16-4.466L4.615 4.844 12 2.18zm0 3.64L8.22 15h1.98l.74-2.02h2.12l.74 2.02h1.98L12 5.82z"/> </svg>`) },
    { name: 'React', level: 90, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5"> <circle cx="12" cy="12" r="2"/> <ellipse rx="11" ry="4.2" cx="12" cy="12"/> <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)"/>  <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)"/> </svg>`)},
    { name: 'TypeScript', level: 80, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24"><rect width="24" height="24" fill="#3178C6"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="Arial" font-weight="bold">TS</text></svg>`)},
    { name: 'JavaScript', level: 90, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24"><rect width="24" height="24" fill="#F7DF1E"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#000" font-family="Arial" font-weight="bold">JS</text></svg>`)},
    { name: 'HTML5 & CSS3', level: 90, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>' )},
    { name: 'Responsive Design', level: 95, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>' )},
    { name: 'Node.js', level: 80, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.3l7.5 3.75v7.9L12 19.7l-7.5-3.75v-7.9L12 4.3z"/></svg>`) },
    { name: 'Next.js',level: 80,category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#000"/><path d="M8 16V8h2.5l3.5 5V8H16v8h-2.5l-3.5-5v5H8z" fill="#fff"/></svg>`)},
    { name: 'MySQL', level: 70, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#00758F"><path d="M4 16c2-4 6-6 10-6 2 0 4 1 6 2-2 2-5 4-8 4-3 0-5-1-8-0z"/></svg>`)},
    { name: 'PHP', level: 70, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#777BB4"><ellipse cx="12" cy="12" rx="10" ry="6"/><text x="12" y="14" text-anchor="middle" font-size="6" fill="#fff" font-family="Arial">PHP</text></svg>`)},
    { name: 'Git & GitHub', level: 90, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="#F05032"><path d="M23.5 11.5L12.5.5a1.7 1.7 0 0 0-2.4 0l-2.2 2.2 2.8 2.8a2 2 0 1 1-2.8 2.8L5.1 5.5.5 10.1a1.7 1.7 0 0 0 0 2.4l11 11a1.7 1.7 0 0 0 2.4 0l10.6-10.6a1.7 1.7 0 0 0 0-2.4z"/> </svg>` )},
    { name: 'Firebase', level: 85, category: 'tools', icon:  this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#FFCA28"> <path d="M5 20l7-18 7 18-7 4z"/> </svg>` )},
    { name: 'Vercel', level: 85, category: 'tools', icon:  this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#000"> <path d="M12 2l10 20H2z"/> </svg>` )},
    { name: 'Sanity', level: 80, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#F03E2F"> <path d="M12 2C7 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-3-7-8-7z"/> </svg>` )},
    { name: 'VS Code', level: 95, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="#007ACC" width="28" height="28"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>' )},
    { name: 'REST APIs', level: 90, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#00f5ff" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' )},
  ];
}

  get filteredSkills() {
    if (this.activeCategory === 'all') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(id: string) {
    this.activeCategory = id;
  }
}