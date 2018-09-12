import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.scss']
})
export class MenuDrinksComponent implements OnInit, OnDestroy {

  drinks: Dish[];
  filteredDrinks: Dish[];
  private readonly destroy$ = new Subject();

  constructor(private readonly menuService: MenuService) {
  }

  filterAvailableDrinks(): void {
    this.filteredDrinks = this.drinks.filter(drink => drink.isAvailable === true);
  }

  ngOnInit() {
    this.menuService.getDrinks().pipe(takeUntil(this.destroy$)).subscribe(drink => {
      this.drinks = drink;
      this.filterAvailableDrinks();
    });
  }

  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
