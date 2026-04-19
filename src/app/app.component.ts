import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cursor') cursorRef!: ElementRef;

  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animFrame: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    const dot = this.cursorRef?.nativeElement?.querySelector('.cursor-dot');
    if (dot) {
      dot.style.left = this.mouseX + 'px';
      dot.style.top = this.mouseY + 'px';
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isHoverable = target.closest('a, button, .card-glow, .skill-tag, .project-card');
    if (this.cursorRef?.nativeElement) {
      if (isHoverable) {
        this.cursorRef.nativeElement.classList.add('hovering');
      } else {
        this.cursorRef.nativeElement.classList.remove('hovering');
      }
    }
  }

  ngAfterViewInit() {
    this.animateRing();
    this.initScrollAnimations();
  }

  private animateRing() {
    const ease = 0.12;
    this.ringX += (this.mouseX - this.ringX) * ease;
    this.ringY += (this.mouseY - this.ringY) * ease;

    const ring = this.cursorRef?.nativeElement?.querySelector('.cursor-ring');
    if (ring) {
      ring.style.left = this.ringX + 'px';
      ring.style.top = this.ringY + 'px';
    }

    this.animFrame = requestAnimationFrame(() => this.animateRing());
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrame);
  }
}