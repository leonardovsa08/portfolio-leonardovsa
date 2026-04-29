import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Inicializa o AOS a primeira vez
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Atualiza AOS sempre que muda de rota
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          AOS.refresh();
        }, 50); // pequeno delay para garantir que o DOM está renderizado
      });
  }
}
