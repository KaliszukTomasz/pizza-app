import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../shared/order';
import {Dish} from '../shared/dish';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(readonly httpClient: HttpClient) { }



  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:3000/orders');
  }

  changeStatusOrderToDone(order: Order) {
    const id: number = order.id;
    return this.httpClient.put(`http://localhost:3000/orders/${id}`, order).subscribe(res => console.log(res));
  }

  getOneOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`http://localhost:3000/orders/${id}`);
  }

  sendNewAvailabilityOfPizza(dish: Dish) {
    const id: number = dish.id;
    return this.httpClient.put(`http://localhost:3000/pizzas/${id}`, dish).subscribe();
  }

  sendNewAvailabilityOfSpagetti(dish: Dish) {
    const id: number = dish.id;
    return this.httpClient.put(`http://localhost:3000/spagetti/${id}`, dish).subscribe();
  }

  sendNewAvailabilityOfDrink(dish: Dish) {
    const id: number = dish.id;
    return this.httpClient.put(`http://localhost:3000/drinks/${id}`, dish).subscribe();
  }
}
