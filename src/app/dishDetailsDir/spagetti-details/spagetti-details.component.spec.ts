import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagettiDetailsComponent } from './spagetti-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('SpagettiDetailsComponent', () => {
  let component: SpagettiDetailsComponent;
  let fixture: ComponentFixture<SpagettiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpagettiDetailsComponent ],
      imports: [ RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpagettiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
