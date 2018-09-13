import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminOrderDetailsComponent} from './admin-order-details.component';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AdminOrderDetailsComponent', () => {
  let component: AdminOrderDetailsComponent;
  let fixture: ComponentFixture<AdminOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderDetailsComponent],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
