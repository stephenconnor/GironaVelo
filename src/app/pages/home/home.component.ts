import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';

import { TabsModule } from 'primeng/tabs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RoutesService } from '../../services/routes.service';
import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RouteCategory } from '../../models/route.model';

interface HomeViewModel {
  categories: RouteCategory[];
  loading: boolean;
  error: string | null;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, TabsModule, ProgressSpinnerModule, RouteCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  private routesService = inject(RoutesService);

  readonly viewModel$ = this.routesService.getRoutes().pipe(
    map((data): HomeViewModel => ({
      categories: data.categories,
      loading: false,
      error: null,
    })),
    startWith({
      categories: [],
      loading: true,
      error: null,
    }),
    catchError(() =>
      of({
        categories: [],
        loading: false,
        error: 'Failed to load routes. Please try refreshing.',
      }),
    ),
  );
}
