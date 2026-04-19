import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedText') typedTextRef!: ElementRef;
  @ViewChild('particlesCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private roles = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Angular Specialist',
    'React Specialist',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimeout: any;
  private particles: Particle[] = [];
  private animFrame: number = 0;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.startTyping();
    this.initParticles();

    setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }

  private startTyping() {
    const el = this.typedTextRef?.nativeElement;
    if (!el) return;

    const current = this.roles[this.roleIndex];
    const speed = this.isDeleting ? 60 : 120;
    const pauseTime = this.isDeleting ? 100 : 1800;

    if (!this.isDeleting && this.charIndex <= current.length) {
      el.textContent = current.slice(0, this.charIndex++);
      this.typeTimeout = setTimeout(() => this.startTyping(), speed);
    } else if (this.isDeleting && this.charIndex >= 0) {
      el.textContent = current.slice(0, this.charIndex--);
      this.typeTimeout = setTimeout(() => this.startTyping(), speed);
    } else {
      this.isDeleting = !this.isDeleting;
      if (!this.isDeleting) {
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
      this.typeTimeout = setTimeout(() => this.startTyping(), pauseTime);
    }
  }

  private initParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    for (let i = 0; i < 60; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height));
    }

    this.animateParticles();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private animateParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas || !this.ctx) return;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(this.ctx);
    });

    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 245, 255, ${0.08 * (1 - dist / 120)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      });
    });

    this.animFrame = requestAnimationFrame(() => this.animateParticles());
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimeout);
    cancelAnimationFrame(this.animFrame);
    window.removeEventListener('resize', () => this.resizeCanvas());
  }
}

class Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 245, 255, ${this.opacity})`;
    ctx.fill();
  }
}