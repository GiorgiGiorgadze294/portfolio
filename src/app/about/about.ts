import { Component, HostListener } from '@angular/core';

interface Certificate {
  src: string;
  title: string;
}

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  selectedCert: Certificate | null = null;

  openCert(src: string, title: string): void {
    this.selectedCert = { src, title };
    // სქროლის დაბლოკვა, როცა მოდალი გახსნილია
    document.body.style.overflow = 'hidden';
  }

  closeCert(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.selectedCert = null;
    // სქროლის დაბრუნება ნორმალურ რეჟიმში
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    if (this.selectedCert) {
      this.closeCert();
    }
  }
}