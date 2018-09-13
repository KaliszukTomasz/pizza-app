import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetailsComponent } from './pizzas-details.component';
import {AdminOrdersComponent} from '../../adminViewsDir/admin-orders/admin-orders.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PizzasDetailsComponent', () => {
  let component: PizzasDetailsComponent;
  let fixture: ComponentFixture<PizzasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasDetailsComponent ],
      imports: [ RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
