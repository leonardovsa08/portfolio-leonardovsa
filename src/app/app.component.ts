import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private routeSubscription?: Subscription;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      disable: reduceMotion,
    });

    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => AOS.refresh(), 50);
      });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
}
