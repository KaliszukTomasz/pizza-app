import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuPizzaComponent} from './menu-pizza.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MenuService} from '../../service/menu.service';
import {Observable} from 'rxjs';
import {Dish} from '../../shared/dish';

describe('MenuPizzaComponent', () => {
  let component: MenuPizzaComponent;
  let fixture: ComponentFixture<MenuPizzaComponent>;

  beforeEach(async(() => {
    const menuServiceMock = jasmine.createSpyObj('MenuService', ['getPizzas']);
    menuServiceMock.getPizzas.and.returnValue( new Observable<Dish[]>());
    TestBed.configureTestingModule({
      declarations: [MenuPizzaComponent],
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler, {provide: MenuService, useValue: menuServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
