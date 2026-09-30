import { Injectable, signal } from '@angular/core';

export type RouteCategoryId = 'long' | 'short';

@Injectable({ providedIn: 'root' })
export class RouteNavigationService {
  readonly activeCategory = signal<RouteCategoryId>('long');

  selectCategory(category: RouteCategoryId) {
    this.activeCategory.set(category);
  }
}
