import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, Subject, of, throwError } from 'rxjs';

import { HomeComponent } from './home.component';
import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RoutesService } from '../../services/routes.service';
import { RoutesData, Route } from '../../models/route.model';

@Component({
  selector: 'app-route-card',
  standalone: true,
  template: '<article class="route-card-stub">{{ route.title }}</article>',
})
class RouteCardStubComponent {
  @Input({ required: true })
  route!: Route;
}

class RoutesServiceStub {
  routes$!: Observable<RoutesData>;

  getRoutes() {
    return this.routes$;
  }
}

describe('HomeComponent', () => {
  let routesService: RoutesServiceStub;

  beforeEach(async () => {
    routesService = new RoutesServiceStub();

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: RoutesService, useValue: routesService }],
    })
      .overrideComponent(HomeComponent, {
        remove: {
          imports: [RouteCardComponent],
        },
        add: {
          imports: [RouteCardStubComponent],
        },
      })
      .compileComponents();
  });

  it('shows a loading state while routes are pending', () => {
    routesService.routes$ = new Subject<RoutesData>();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Loading routes...');
  });

  it('renders loaded route categories', () => {
    routesService.routes$ = of({
      categories: [
        {
          id: 'short',
          label: 'Short Routes',
          routes: [
            {
              id: 'sr1',
              title: 'Volta Puig',
              image: 'assets/bike_icon.ico',
              distance: 42,
              ascent: 500,
              maxAltitude: 250,
              description: 'Easy spin.',
              detailedDescription: 'A pleasant loop.',
              extraImage: 'assets/bike_icon.ico',
              gpxFile: 'assets/volta.gpx',
            },
          ],
        },
      ],
    });

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Short Routes');
    expect(fixture.nativeElement.textContent).toContain('1 routes available');
    expect(fixture.debugElement.query(By.css('app-route-card'))).toBeTruthy();
  });

  it('shows an error state when route loading fails', () => {
    routesService.routes$ = throwError(() => new Error('No routes today'));

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Failed to load routes. Please try refreshing.',
    );
  });
});
