import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderComponent} from './order.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {YourOrderPanelComponent} from '../menuDir/your-order-panel/your-order-panel.component';
import {NgModel, ReactiveFormsModule} from '@angular/forms';
import {MenuService} from '../service/menu.service';
import {By} from '@angular/platform-browser';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent, YourOrderPanelComponent, NgModel],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [HttpClient, HttpHandler, MenuService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call menuService to send new Order', () => {
    // given
    const menuService = TestBed.get(MenuService);
    const getDishesInBasketSpy = spyOn(menuService, 'getDishesInBasket').and.returnValue([]);
    const addNewOrderSpy = spyOn(menuService, 'addNewOrder');

    // when
    component.sendOrderToBase();

    // then
    expect(getDishesInBasketSpy).toHaveBeenCalled();
    expect(addNewOrderSpy).toHaveBeenCalled();

  });

  it('should clear basket', () => {
    // given
    const menuService = TestBed.get(MenuService);
    const clearDishesInBasketSpy = spyOn(menuService, 'clearBasket');

    // when
    component.clearBasket();

    // then
    expect(clearDishesInBasketSpy).toHaveBeenCalled();
  });

  it('form should be clear on start', async(() => {

    // given
    const fname = fixture.debugElement.query(By.css('input[id=fname]'));
    const lname = fixture.debugElement.query(By.css('input[id=lname]'));
    const address = fixture.debugElement.query(By.css('input[id=address]'));
    const el1 = fname.nativeElement;
    const el2 = lname.nativeElement;
    const el3 = address.nativeElement;

    // then
    expect(el1.value).toBe('');
    expect(el2.value).toBe('');
    expect(el3.value).toBe('');
  }));

  it('form should work with new data in form', async(() => {

    // given
    const input = fixture.debugElement.query(By.css('input[id=fname]'));
    const el = input.nativeElement;

    // when
    el.value = 'someName';
    el.dispatchEvent(new Event('input'));

    // then
    expect(fixture.componentInstance.order.firstName).toBe('someName');
  }));

  it('method valid should return true, address over 4 signs', () => {

    // given
    component.order.firstName = 'fname';
    component.order.lastName = 'lname';
    component.order.address = 'address';

    // then
    expect(component.valid()).toBe(true);
  });

  it('method valid should return false, address under 4 signs', () => {

    // given
    component.order.firstName = 'fname';
    component.order.lastName = 'lname';
    component.order.address = 'add';

    // then
    expect(component.valid()).toBe(false);
  });


});
