import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { RouteCardComponent } from './route-card.component';
import { Route } from '../../models/route.model';

const route: Route = {
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
};

describe('RouteCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCardComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();
  });

  it('renders route stats and download link', () => {
    const fixture = TestBed.createComponent(RouteCardComponent);
    fixture.componentRef.setInput('route', route);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Volta Puig');
    expect(fixture.nativeElement.textContent).toContain('42 km');
    expect(fixture.nativeElement.textContent).toContain('500 m');

    const download = fixture.debugElement.query(By.css('.gpx-download'))
      .nativeElement as HTMLAnchorElement;
    expect(download.getAttribute('href')).toBe('assets/volta.gpx');
    expect(download.getAttribute('download')).toBe('Volta Puig.gpx');
  });

  it('opens the image preview with the selected image details', () => {
    const fixture = TestBed.createComponent(RouteCardComponent);
    fixture.componentRef.setInput('route', route);
    fixture.detectChanges();

    fixture.componentInstance.openImagePreview(
      route.extraImage,
      'Volta Puig elevation profile',
      'Volta Puig Elevation Profile',
    );

    expect(fixture.componentInstance.previewVisible).toBeTrue();
    expect(fixture.componentInstance.previewImage).toBe(route.extraImage);
    expect(fixture.componentInstance.previewAlt).toBe(
      'Volta Puig elevation profile',
    );
    expect(fixture.componentInstance.previewTitle).toBe(
      'Volta Puig Elevation Profile',
    );
  });
});
