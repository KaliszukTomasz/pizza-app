import {Component, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';
import {Router} from '@angular/router';
import {DishType} from '../../shared/dishType';

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


  dishType: DishType = DishType.PIZZA;
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
  }

  addNewSpagetti() {
    this.menuService.addNewDish(this.newSpagetti);
  }


}
