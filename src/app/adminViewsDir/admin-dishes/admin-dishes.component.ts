import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Dish} from '../../shared/dish';
import {DishType} from '../../shared/dishType';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './admin-dishes.component.html',
  styleUrls: ['./admin-dishes.component.scss']
})
export class AdminDishesComponent implements OnInit {

  drinks: Dish[];
  pizzas: Dish[];
  spagetti: Dish[];

  constructor(private readonly menuService: MenuService,
              private readonly adminService: AdminService) {
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
      this.adminService.sendNewAvailabilityOfPizza(dish);
    }
    if (dish.type === 'spagetti') {
      this.adminService.sendNewAvailabilityOfSpagetti(dish);
    }
    if (dish.type === 'drink') {
      this.adminService.sendNewAvailabilityOfDrink(dish);
    }
  }
}
