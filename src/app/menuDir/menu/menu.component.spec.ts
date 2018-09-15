import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {YourOrderPanelComponent} from '../your-order-panel/your-order-panel.component';
import {MenuDrinksComponent} from '../menu-drinks/menu-drinks.component';
import {MenuPizzaComponent} from '../menu-pizza/menu-pizza.component';
import {MenuSpagettiComponent} from '../menu-spagetti/menu-spagetti.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent, YourOrderPanelComponent, MenuDrinksComponent, MenuPizzaComponent, MenuSpagettiComponent],
      imports: [RouterTestingModule, HttpClientModule]


    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
