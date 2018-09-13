import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});
