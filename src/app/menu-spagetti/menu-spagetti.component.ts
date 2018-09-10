import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-menu-spagetti',
  templateUrl: './menu-spagetti.component.html',
  styleUrls: ['./menu-spagetti.component.scss']
})
export class MenuSpagettiComponent implements OnInit {

  spagetti: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getSpagetti().subscribe(spagetti => {
      this.spagetti = spagetti;
    });
    // this.menuService.dishes$.subscribe(dishes =>
    //   this.spagetti = dishes);
    // this.menuService.getSpagetti();
  }

  getAvailableSpagetti() {
    return this.spagetti.filter(spagetti => spagetti.isAvailable === true);
  }

  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

}
