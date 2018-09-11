import {Component, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';


@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.scss']
})
export class MenuPizzaComponent implements OnInit {

  pizzas: Dish[];
  filteredPizzas: Dish[];


  // availablePizzas: Dish[];

  constructor(private readonly menuService: MenuService) {
  }


  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }



  filterAvailablePizzas(): void {
    this.filteredPizzas = this.pizzas.filter(pizza => pizza.isAvailable === true);
  }

//TODO sprawdzenie czy jest nullem, jeśli tak, to zaciągnięcie

  ngOnInit(): void {
    this.menuService.getPizzas().subscribe(pizza => {
      this.pizzas = pizza;
      this.filterAvailablePizzas();
    });

  }




  // getAvailablePizzas() {
  //   this.pizzas.forEach(pizza => {
  //     if (pizza.isAvailable) {
  //       this.availablePizzas.push(pizza);
  //     }
  //   });
  // }

}
