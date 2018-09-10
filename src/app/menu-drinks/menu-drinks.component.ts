import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.scss']
})
export class MenuDrinksComponent implements OnInit {

  drinks: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDrinks().subscribe(drink => {
      this.drinks = drink;
    });
  }

  getAvailableDrinks() {
    return this.drinks.filter(drink => drink.isAvailable === true);
  }
  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

}
