import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteCategoryId, RouteNavigationService } from './services/route-navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  readonly navigation = inject(RouteNavigationService);
  currentYear = new Date().getFullYear();
  readonly menuOpen = signal(false);

  selectCategory(category: RouteCategoryId) {
    this.navigation.selectCategory(category);
    this.menuOpen.set(false);
  }
}
