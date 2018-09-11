import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishesComponent } from './admin-dishes.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

describe('AdminDishesComponent', () => {
  let component: AdminDishesComponent;
  let fixture: ComponentFixture<AdminDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishesComponent ],
      imports: [ RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
