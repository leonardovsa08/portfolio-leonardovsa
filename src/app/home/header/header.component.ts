import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { navLinks } from '../portfolio.data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  readonly links = navLinks;
  isMenuOpen = false;

  @ViewChild('menuButton') menuButton?: ElementRef<HTMLButtonElement>;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.syncPageScroll();
    if (this.isMenuOpen) {
      setTimeout(() => document.getElementById('mobile-nav')?.querySelector('a')?.focus(), 50);
    }
  }

  closeMenu(restoreFocus = false) {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    this.syncPageScroll();
    if (restoreFocus) {
      setTimeout(() => this.menuButton?.nativeElement.focus());
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.isMenuOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu(true);
      return;
    }

    if (event.key !== 'Tab') return;

    const nav = document.getElementById('mobile-nav');
    const button = this.menuButton?.nativeElement;
    if (!nav || !button) return;

    const items = [button, ...nav.querySelectorAll<HTMLElement>('a')];
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private syncPageScroll() {
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
}
