import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-your-order-panel',
  templateUrl: './your-order-panel.component.html',
  styleUrls: ['./your-order-panel.component.scss']
})
export class YourOrderPanelComponent implements OnInit {

  dishListInBasket: Dish[];


  constructor(public menuService: MenuService) {
    // this.menuService.getBasketObs().subscribe(dish => this.dishListInBasket = dish);
  }

  ngOnInit() {

  }

}
