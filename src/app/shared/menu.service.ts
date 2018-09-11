import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './dish';
import {Observable, Subject} from 'rxjs';
import {Order} from './order';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();
  private dishesInBasket$ = new Subject<Dish[]>();
  dishesInBasket: Dish[] = [];
  authenticated: boolean = false;
  // authenticated2: Observable<boolean>;

  constructor(readonly httpClient: HttpClient) {
  }

  getPizzas(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/pizzas');
  }

  getDrinks(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/drinks');
  }

  getOneDrink(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/drinks/${id}`);

  }


  getSpagetti(): Observable<Dish[]> {
    // this.httpClient.get<Dish[]>('http://localhost:3000/spagetti').subscribe(dishes => this.dishes$.next(dishes));
    return this.httpClient.get<Dish[]>('http://localhost:3000/spagetti');
  }

  getOneSpagetti(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/spagetti/${id}`);

  }

  getOnePizza(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/pizzas/${id}`);

  }

  addNewDish(newSpagetti): void {
    console.log(this.httpClient.post('http://localhost:3000/spagetti', newSpagetti).subscribe(res => this.getSpagetti()));
  }

  addNewOrder(newOrder: Order): void {
    console.log(this.httpClient.post('http://localhost:3000/orders', newOrder).subscribe());
  }

  addToBasket(dish: Dish): void {
    this.dishesInBasket.push(dish);
    // this.dishesInBasket$.next(this.dishesInBasket);
  }

  getSumCountInBasket(): number {
    let sumCount: number = 0;
    this.dishesInBasket.forEach(value => sumCount = +sumCount + +value.price);
    return sumCount;
  }

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

  getAccountFromDataBase(): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:3000/users/1');

  }

  setAuthenticatedUser() {
    this.authenticated = true;
  }

  setUnauthenticatedUser() {
    this.authenticated = false;
  }

  getAuthenticatedStatus(): boolean {
    return this.authenticated;
  }
}

