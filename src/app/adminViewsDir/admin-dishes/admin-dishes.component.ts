import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Dish} from '../../shared/dish';
import {DishType} from '../../shared/dishType';

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './admin-dishes.component.html',
  styleUrls: ['./admin-dishes.component.scss']
})
export class AdminDishesComponent implements OnInit {

  drinks: Dish[];
  pizzas: Dish[];
  spagetti: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDrinks().subscribe(drink => this.drinks = drink);
    this.menuService.getPizzas().subscribe(pizza => this.pizzas = pizza);
    this.menuService.getSpagetti().subscribe(spagetti => this.spagetti = spagetti);
  }

  changeAvailability(dish: Dish) {
    if (dish.isAvailable === true) {
      dish.isAvailable = false;
    } else {
      dish.isAvailable = true;
    }

    if (dish.type === 'pizza') {
      this.menuService.sendNewAvailabilityOfPizza(dish);
    }
    if (dish.type === 'spagetti') {
      this.menuService.sendNewAvailabilityOfSpagetti(dish);
    }
    if (dish.type === 'drink') {
      this.menuService.sendNewAvailabilityOfDrink(dish);
    }
  }
}
