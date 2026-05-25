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
    { name: 'Angular', level: 75, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="#DD0031">  <path d="M12 0L1.605 3.75l1.582 13.568L12 24l8.813-6.682L22.395 3.75 12 0zm0 2.18l7.385 2.664-1.225 10.51L12 21.82l-6.16-4.466L4.615 4.844 12 2.18zm0 3.64L8.22 15h1.98l.74-2.02h2.12l.74 2.02h1.98L12 5.82z"/> </svg>`) },
    { name: 'React', level: 90, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5"> <circle cx="12" cy="12" r="2"/> <ellipse rx="11" ry="4.2" cx="12" cy="12"/> <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)"/>  <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)"/> </svg>`)},
    { name: 'TypeScript', level: 75, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24"><rect width="24" height="24" fill="#3178C6"/><text x="12" y="16" text-anchor="middle" font-size="9" fill="#fff" font-family="Arial" font-weight="bold">TS</text></svg>`)},
    { name: 'JavaScript', level: 85, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24"><rect width="24" height="24" fill="#F7DF1E"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#000" font-family="Arial" font-weight="bold">JS</text></svg>`)},
    { name: 'HTML5 & CSS3', level: 90, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>' )},
    { name: 'Responsive Design', level: 95, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml( '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>' )},
    { name: 'Node.js', level: 80, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.3l7.5 3.75v7.9L12 19.7l-7.5-3.75v-7.9L12 4.3z"/></svg>`) },
    { name: 'Next.js',level: 80,category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#000"/><path d="M8 16V8h2.5l3.5 5V8H16v8h-2.5l-3.5-5v5H8z" fill="#fff"/></svg>`)},
    { name: 'MySQL', level: 70, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#00758F"><path d="M4 16c2-4 6-6 10-6 2 0 4 1 6 2-2 2-5 4-8 4-3 0-5-1-8-0z"/></svg>`)},
    { name: 'PHP', level: 70, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#777BB4"><ellipse cx="12" cy="12" rx="10" ry="6"/><text x="12" y="14" text-anchor="middle" font-size="6" fill="#fff" font-family="Arial">PHP</text></svg>`)},
    { name: 'Git & GitHub', level: 95, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml( `<svg viewBox="0 0 24 24" fill="#F05032"><path d="M23.5 11.5L12.5.5a1.7 1.7 0 0 0-2.4 0l-2.2 2.2 2.8 2.8a2 2 0 1 1-2.8 2.8L5.1 5.5.5 10.1a1.7 1.7 0 0 0 0 2.4l11 11a1.7 1.7 0 0 0 2.4 0l10.6-10.6a1.7 1.7 0 0 0 0-2.4z"/> </svg>` )},
    { name: 'Firebase', level: 80, category: 'tools', icon:  this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#FFCA28"> <path d="M5 20l7-18 7 18-7 4z"/> </svg>` )},
    { name: 'Vercel', level: 85, category: 'tools', icon:  this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#000"> <path d="M12 2l10 20H2z"/> </svg>` )},
    { name: 'Sanity', level: 70, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#F03E2F"> <path d="M12 2C7 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-3-7-8-7z"/> </svg>` )},
    { name: 'VS Code', level: 95, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="#007ACC" width="28" height="28"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>' )},
    { name: 'REST APIs', level: 90, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#00f5ff" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' )},
    { name: 'Tailwind CSS', level: 82, category: 'frontend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#06B6D4" width="28" height="28"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>`) },
    { name: 'Railway', level: 70, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#0B0D0E" width="28" height="28" style="background:#7B2FBE;border-radius:4px;padding:2px"><path fill="white" d="M2.106 17.294A10.93 10.93 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.93 10.93 0 0 1-1.106 4.765l-2.007-.627A8.934 8.934 0 0 0 20.917 12C20.917 7.067 16.933 3.083 12 3.083S3.083 7.067 3.083 12c0 1.43.337 2.78.924 3.98zm3.199 2.87A10.956 10.956 0 0 0 12 23c2.43 0 4.68-.786 6.506-2.114l-1.52-1.52A8.934 8.934 0 0 1 12 20.917a8.934 8.934 0 0 1-5.27-1.703zM12 7.5a4.5 4.5 0 0 1 4.383 5.521l-2.09-.652A2.417 2.417 0 1 0 9.583 12c0 .24.035.473.1.692l-2.097.618A4.5 4.5 0 0 1 12 7.5zm-.5 4.917v5.875l-4.855-1.516.638-2.042L10 15.44V12.5z"/></svg>`) },
    { name: 'Express', level: 80, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#ffffff" width="28" height="28"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.013-.484-.082-.968-.082-1.453V11.5zm1.137-.95H11.13c-.185-3.09-2.261-5.086-4.956-5.012-2.912.083-4.964 2.069-5.036 5.012z"/></svg>`) },
    { name: 'MongoDB', level: 60, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#47A248" width="28" height="28"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>`) },
    { name: 'PostgreSQL', level: 70, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#4169E1" width="28" height="28"><path d="M23.5 12.02c-.128-1.035-.53-1.9-1.198-2.574a4.678 4.678 0 0 0-.282-.256 6.164 6.164 0 0 0 .432-1.083c.31-1.136.232-2.197-.024-2.664-.86-1.565-2.716-1.7-4.11-1.527-.42.052-.876.16-1.35.316a5.888 5.888 0 0 0-.762-.454C15.128 3.176 13.95 3 12.69 3c-1.3 0-2.51.19-3.49.566a5.5 5.5 0 0 0-.637.304c-.542-.17-1.066-.286-1.553-.34C5.617 3.358 3.762 3.493 2.9 5.059c-.257.467-.335 1.528-.023 2.664.1.365.24.715.417 1.043a4.602 4.602 0 0 0-.33.305c-.672.676-1.076 1.54-1.203 2.577-.183 1.47.169 3.14 1.47 4.617.768.87 1.737 1.548 2.876 2.017.09.543.21 1.06.36 1.516.373 1.128.876 1.794 1.498 1.98.193.058.392.087.59.087.684 0 1.377-.338 2.044-.997.328-.325.644-.706.944-1.135.214.02.432.03.653.03.234 0 .465-.01.691-.033.304.434.622.818.952 1.144.668.659 1.36.997 2.044.997.198 0 .396-.029.588-.086.623-.186 1.128-.852 1.5-1.98.15-.454.27-.97.36-1.512 1.15-.47 2.125-1.15 2.895-2.025 1.3-1.475 1.652-3.145 1.47-4.617zM4.785 17.63c-.107-.323-.197-.688-.27-1.084a8.267 8.267 0 0 0 1.04.403c-.245.23-.504.45-.77.68zm14.668.005c-.269-.232-.53-.453-.778-.686.367-.12.72-.263 1.056-.424-.074.397-.163.762-.278 1.11zm1.555-5.61c-.636.72-1.481 1.288-2.51 1.686l-.44.164-.127.456c-.121.437-.264.848-.424 1.22a7.04 7.04 0 0 1-.36.716 8.11 8.11 0 0 1-1.07-.787l-.38-.33-.484.15c-.44.136-.905.205-1.385.205-.467 0-.92-.066-1.348-.196l-.486-.148-.383.327c-.342.292-.697.546-1.058.762a7.12 7.12 0 0 1-.366-.726 8.577 8.577 0 0 1-.42-1.212l-.127-.458-.44-.163c-1.033-.396-1.882-.964-2.52-1.685-.974-1.104-1.25-2.37-1.103-3.528.087-.7.347-1.282.774-1.726.088-.09.178-.172.27-.248.37.762.883 1.508 1.542 2.208l.456.49.54-.404c.168-.127.558-.37 1.342-.608.025.27.077.543.16.81.282.9.855 1.617 1.7 2.134a4.11 4.11 0 0 0 2.073.56c.743 0 1.455-.193 2.063-.558.85-.515 1.426-1.233 1.71-2.134.082-.267.135-.54.16-.81.76.235 1.148.474 1.317.6l.54.407.457-.488c.663-.704 1.178-1.452 1.548-2.218.1.08.196.167.29.263.426.444.687 1.024.774 1.726.148 1.156-.127 2.42-1.1 3.525z"/></svg>`) },
    { name: 'Prisma ORM', level: 75, category: 'backend', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" fill="#2D3748" width="28" height="28"><path fill="#ffffff" d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-9.997 16.5a1.313 1.313 0 0 0 .027 1.375l4.571 7.152a1.315 1.315 0 0 0 1.394.588l13.728-3.027a1.316 1.316 0 0 0 .866-1.931zm-2.46.517l-11.78 2.597-3.535-5.533 8.592-14.182 6.723 17.118z"/></svg>`) },
    { name: 'Vite', level: 80, category: 'tools', icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="#646CFF" d="M23.5 6.535L12.847 23.5a.618.618 0 0 1-1.073.003L.5 6.538a.618.618 0 0 1 .564-.871l11.27 2.083a.618.618 0 0 0 .226 0L22.938 5.67a.618.618 0 0 1 .563.866z"/><path fill="#FF9800" d="M17.518.5l-7.48 1.382a.309.309 0 0 0-.253.278l-.458 5.455a.309.309 0 0 0 .337.334l2.07-.235a.309.309 0 0 1 .34.38l-.614 2.97a.309.309 0 0 0 .373.364l1.278-.388a.309.309 0 0 1 .372.364l-.976 4.721c-.06.293.327.454.493.207l.107-.163 5.938-11.85a.309.309 0 0 0-.335-.44l-2.13.41a.309.309 0 0 1-.357-.363L17.85.89A.309.309 0 0 0 17.518.5z"/></svg>`) },
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