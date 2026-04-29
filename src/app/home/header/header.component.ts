import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  showMessage = true;

  isOverBanner = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    setTimeout(() => (this.showMessage = true), 5000); // aparece aos 5s
    setTimeout(() => (this.showMessage = false), 15000); // some aos 15s
    setTimeout(() => (this.showMessage = true), 25000); // volta aos 25s
  }

  hideMessage() {
    this.showMessage = false;
  }

  ngAfterViewInit(): void {
    const banner = document.getElementById('banner');
    if (!banner) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isOverBanner = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
  
    observer.observe(banner);
  }
}
