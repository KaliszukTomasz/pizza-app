import {TestBed, inject} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
