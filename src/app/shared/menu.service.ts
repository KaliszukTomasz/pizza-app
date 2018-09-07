import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './dish';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();
  private dishesInBasket$ = new Subject<Dish[]>();
  dishesInBasket: Dish[] = [];

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


  getSpagetti() {
    this.httpClient.get<Dish[]>('http://localhost:3000/spagetti').subscribe(dishes => this.dishes$.next(dishes));
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

  addToBasket(dish: Dish): void {
    this.dishesInBasket.push(dish);
    // this.dishesInBasket$.next(this.dishesInBasket);
  }

  getSumCountInBasket(): number {
    let sumCount: number = 0;
    this.dishesInBasket.forEach(value => sumCount = +sumCount + +value.price);
    return sumCount;
  }

  getBasketObs(): Observable<Dish[]> {
    return this.dishesInBasket$;
  }
}
