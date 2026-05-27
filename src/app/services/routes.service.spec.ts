import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { RoutesService } from './routes.service';
import { RoutesData } from '../models/route.model';

describe('RoutesService', () => {
  let service: RoutesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        RoutesService,
      ],
    });

    service = TestBed.inject(RoutesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('loads route data from the public routes JSON file', () => {
    const routesData: RoutesData = {
      categories: [
        {
          id: 'long',
          label: 'Long Routes',
          routes: [],
        },
      ],
    };

    service.getRoutes().subscribe((data) => {
      expect(data).toEqual(routesData);
    });

    const request = httpMock.expectOne('routes.json');
    expect(request.request.method).toBe('GET');
    request.flush(routesData);
  });
});
