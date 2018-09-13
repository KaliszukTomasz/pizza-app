import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.scss']
})
export class MenuPizzaComponent implements OnInit, OnDestroy {

  pizzas: Dish[];
  filteredPizzas: Dish[];
  private readonly destroy$ = new Subject();

  constructor(private readonly menuService: MenuService) {
  }

  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

  filterAvailablePizzas(): void {
    this.filteredPizzas = this.pizzas.filter(pizza => pizza.isAvailable === true);
  }

  ngOnInit(): void {
    this.menuService.getPizzas().pipe(takeUntil(this.destroy$)).subscribe(pizza => {
      this.pizzas = pizza;
      this.filterAvailablePizzas();
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
