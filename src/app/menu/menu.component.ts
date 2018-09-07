import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // private destroy$: Subject<void> = new Subject<void>();
  // ngOnDestroy(){
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
  // @ts-ignore
  dishType: DishType = 'PIZZA';
  dishes: Dish[];
  spagetti: Dish[];
  drinks: Dish[];

  newSpagetti: Dish = {
    isAvailable: true,
    price: 20,
    name: 'noweDanie',
    description: 'nowy opis',
    type: 'spagetti',
  };

  constructor(private readonly menuService: MenuService, private router: Router) {
  }

  ngOnInit() {
    // this.menuService.getPizzas().subscribe(dishes => {
    //   this.dishes = dishes;
    // });
    //
    // this.menuService.getDrinks().subscribe(drinks => {
    //   this.drinks = drinks;
    // });

    // this.menuService.dishes$.subscribe(dishes =>
    //   this.spagetti = dishes);
    // this.menuService.getSpagetti();


  }

  addNewSpagetti() {
    this.menuService.addNewDish(this.newSpagetti);
  }


}
