import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinksDetailsComponent} from './drinks-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DrinksDetailsComponent', () => {
  let component: DrinksDetailsComponent;
  let fixture: ComponentFixture<DrinksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksDetailsComponent],
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
