import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuPizzaComponent} from './menu-pizza.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MenuService} from '../../service/menu.service';
import {Observable, of} from 'rxjs';
import {Dish} from '../../shared/dish';
import createSpy = jasmine.createSpy;

describe('MenuPizzaComponent', () => {
  let component: MenuPizzaComponent;
  let fixture: ComponentFixture<MenuPizzaComponent>;
 `const variable2;`
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MenuPizzaComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [MenuService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // const menuService = TestBed.get(MenuService);
    // const variable2 = spyOn(menuService, 'getPizzas').and.returnValue(new Observable<Dish[]>());

    // const menuService = TestBed.get(MenuService);
    // const getAvailablePizzasSpy = spyOn(menuService, 'getPizzas').and.returnValue( new Observable<Dish[]>());
    // const menuServiceMock = createSpy('MenuService', getPizzas);
    // menuServiceMock.getPizzas.and.returnValue( new Observable<Dish[]>());
    // const menuServiceMock = createSpy('MenuService', 'getPizzas').and.returnValue(new Observable<Dish[]>());
    // const menuService = TestBed.get(MenuService);
    // expect(variable2)
    expect(component).toBeTruthy();

  });
});
