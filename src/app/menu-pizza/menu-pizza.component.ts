import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.scss']
})
export class MenuPizzaComponent implements OnInit {

  pizzas: Dish[];

  // availablePizzas: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getPizzas().subscribe(pizza => {
      this.pizzas = pizza;
      // this.getAvailablePizzas();
    });


  }

  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

  // getAvailablePizzas() {
  //   this.pizzas.forEach(pizza => {
  //     if (pizza.isAvailable) {
  //       this.availablePizzas.push(pizza);
  //     }
  //   });
  // }

}
