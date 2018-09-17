import {TestBed, inject, fakeAsync} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {Dish} from '../shared/dish';


import {Observable, of} from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Order} from '../shared/order';


describe('MenuService', () => {

  const mockedPizza1: Dish = {
    id: 1,
    name: 'pizza1',
    isAvailable: true,
    type: 'pizza',
    description: 'ser, szynka',
    price: 10,
  };
  const mockedPizza2: Dish = {
    id: 2,
    name: 'pizza2',
    isAvailable: true,
    type: 'pizza',
    description: 'ser, szynka',
    price: 15,
  };
  const mockedSpagetti1: Dish = {
    id: 1,
    name: 'spagetti1',
    isAvailable: true,
    type: 'spagetti',
    description: 'makaron',
    price: 10,
  };
  const mockedSpagetti2: Dish = {
    id: 2,
    name: 'spagetti2',
    isAvailable: false,
    type: 'spagetti',
    description: 'makaron2',
    price: 15,
  };
  const mockedDrink1: Dish = {
    id: 1,
    name: 'drink1',
    isAvailable: false,
    type: 'drink',
    description: 'drink2',
    price: 5,
  };
  const mockedDrink2: Dish = {
    id: 2,
    name: 'drink2',
    isAvailable: false,
    type: 'drink',
    description: 'drink2',
    price: 5,
  };
  const mockedDrink3: Dish = {
    id: 3,
    name: 'drink3',
    isAvailable: true,
    type: 'drink',
    description: 'drink2',
    price: 5,
  };
  const mockedPizzas: Dish[] = [mockedPizza1];
  const mockedSpagetti: Dish[] = [mockedSpagetti1, mockedSpagetti2];
  const mockedDrinks: Dish[] = [mockedDrink1, mockedDrink2, mockedDrink3];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Pizzas equals mockedPizzas', inject([MenuService], (menuService: MenuService) => {
    // given
    let pizzas: Dish[] = [];
    const clientModule = TestBed.get(HttpClient);

    const getSpy = spyOn(clientModule, 'get').and.returnValue(of(mockedPizzas));

    // when
    menuService.getPizzas().subscribe(pizza => pizzas = pizza);

    expect(getSpy).toHaveBeenCalled();
    expect(pizzas).toEqual(mockedPizzas);
  }));

  it('should get Spagetti equals mockedSpagetti', inject([MenuService], (menuService: MenuService) => {
    // given
    let spagetti: Dish[] = [];
    const clientModule = TestBed.get(HttpClient);

    const getSpy = spyOn(clientModule, 'get').and.returnValue(of(mockedSpagetti));

    // when
    menuService.getSpagetti().subscribe(res => spagetti = res);

    expect(getSpy).toHaveBeenCalled();
    expect(spagetti).toEqual(mockedSpagetti);
  }));

  it('should get Drinks equals mockedDrinks', inject([MenuService], (menuService: MenuService) => {
    // given
    let drinks: Dish[] = [];
    const clientModule = TestBed.get(HttpClient);

    const getSpy = spyOn(clientModule, 'get').and.returnValue(of(mockedDrinks));

    // when
    menuService.getSpagetti().subscribe(res => drinks = res);

    expect(getSpy).toHaveBeenCalled();
    expect(drinks).toEqual(mockedDrinks);
  }));

  it('should get Drink equals mockedDrink', inject([MenuService], (menuService: MenuService) => {
    // given
    let drink1: Dish;
    let drink2: Dish;
    const httpClient: HttpTestingController = TestBed.get(HttpTestingController);
    // when
    menuService.getOneDrink(1).subscribe(res => drink1 = res);
    httpClient.expectOne('http://localhost:3000/drinks/' + mockedDrink1.id).flush(mockedDrink1);

    menuService.getOneDrink(2).subscribe(res => drink2 = res);
    httpClient.expectOne('http://localhost:3000/drinks/' + mockedDrink2.id).flush(mockedDrink2);

    // then
    expect(drink1).toEqual(mockedDrink1);
    expect(drink2).toEqual(mockedDrink2);
  }));

  it('should get Pizza equals mockedPizza', inject([MenuService], (menuService: MenuService) => {
    // given
    let pizza1: Dish;
    let pizza2: Dish;
    const httpClient: HttpTestingController = TestBed.get(HttpTestingController);
    // when
    menuService.getOnePizza(1).subscribe(res => pizza1 = res);
    httpClient.expectOne('http://localhost:3000/pizzas/' + mockedPizza1.id).flush(mockedPizza1);

    menuService.getOnePizza(2).subscribe(res => pizza2 = res);
    httpClient.expectOne('http://localhost:3000/pizzas/' + mockedPizza2.id).flush(mockedPizza2);

    // then
    expect(pizza1).toEqual(mockedPizza1);
    expect(pizza2).toEqual(mockedPizza2);
  }));

  it('should add new order to database', inject([MenuService], (menuService: MenuService) => {
    // given
    const order = new Order();
    const clientModule = TestBed.get(HttpClient);
    const postSpy = spyOn(clientModule, 'post').and.returnValue(of(new Order()));

    // when
    menuService.addNewOrder(order);

    // then
    expect(postSpy).toHaveBeenCalled();
  }));

  it('should add one new dish to basket', inject([MenuService], (menuService: MenuService) => {
    // given
    menuService.dishesInBasket = [];

    // when
    menuService.addToBasket(mockedDrink1);

    // then
    expect(menuService.dishesInBasket.length).toBe(1);
  }));

  it('should add two new dish to basket', inject([MenuService], (menuService: MenuService) => {
    // given
    menuService.dishesInBasket = [];

    // when
    menuService.addToBasket(mockedDrink1);
    menuService.addToBasket(mockedPizza1);

    // then
    expect(menuService.dishesInBasket.length).toBe(2);
  }));

  it('should check summary price in basket', inject([MenuService], (menuService: MenuService) => {
    // given
    menuService.dishesInBasket = [];
    const expectedTotalPrice: number = mockedDrink1.price + mockedPizza1.price;

    // when
    menuService.addToBasket(mockedDrink1);
    menuService.addToBasket(mockedPizza1);
    const totalPrice: number = menuService.getSumCountInBasket();

    // then
    expect(totalPrice).toBe(expectedTotalPrice);
  }));


});
