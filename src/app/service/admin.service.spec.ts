import {TestBed, inject} from '@angular/core/testing';

import {AdminService} from './admin.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuService} from './menu.service';
import {Dish} from '../shared/dish';
import {of} from 'rxjs';
import {Order} from '../shared/order';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

const mockedOrder1: Order = {
  id: 1,
  address: 'NowaUlica',
  firstName: 'Adam',
  lastName: 'Konieczny',
  subject: '',
  status: false,
  dishes: [
    {
      id: 1,
      name: 'wegetariana',
      isAvailable: true,
      description: '',
      type: 'pizza',
      price: 22
    }
  ]
};
const mockedOrder2: Order = {
  id: 2,
  address: 'NowaUlica',
  firstName: 'Adam',
  lastName: 'Konieczny',
  subject: '',
  status: false,
  dishes: [
    {
      id: 1,
      name: 'wegetariana',
      isAvailable: true,
      description: '',
      type: 'pizza',
      price: 22
    }
  ]
};
const mockedOrders: Order[] = [mockedOrder1, mockedOrder2];

describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Orders equals mockedOrders', inject([AdminService], (adminService: AdminService) => {
    // given
    let orders: Order[] = [];
    const clientModule = TestBed.get(HttpClient);

    const getSpy = spyOn(clientModule, 'get').and.returnValue(of(mockedOrders));

    // when
    adminService.getOrders().subscribe(res => orders = res);

    expect(getSpy).toHaveBeenCalled();
    expect(orders).toEqual(mockedOrders);
  }));

  it('should get two Orders equals mockedOrder1 and mockedOrder2', inject([AdminService], (adminService: AdminService) => {
    // given
    let order1: Order;
    let order2: Order;
    const httpClient: HttpTestingController = TestBed.get(HttpTestingController);

    // when
    adminService.getOneOrder(1).subscribe(res => order1 = res);
    httpClient.expectOne('http://localhost:3000/orders/' + mockedOrder1.id).flush(mockedOrder1);

    adminService.getOneOrder(2).subscribe(res => order2 = res);
    httpClient.expectOne('http://localhost:3000/orders/' + mockedOrder2.id).flush(mockedOrder2);


    expect(order1).toEqual(mockedOrder1);
    expect(order2).toEqual(mockedOrder2);
  }));


});
