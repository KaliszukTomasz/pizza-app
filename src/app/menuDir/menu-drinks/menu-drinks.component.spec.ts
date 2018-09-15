import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDrinksComponent } from './menu-drinks.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

describe('MenuDrinksComponent', () => {
  let component: MenuDrinksComponent;
  let fixture: ComponentFixture<MenuDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDrinksComponent ],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
