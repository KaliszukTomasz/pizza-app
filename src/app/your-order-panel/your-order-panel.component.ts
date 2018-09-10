import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-your-order-panel',
  templateUrl: './your-order-panel.component.html',
  styleUrls: ['./your-order-panel.component.scss']
})
export class YourOrderPanelComponent implements OnInit {

  dishListInBasket: Dish[];
  isThisOrderView = false;

  constructor(public menuService: MenuService,
              private router: Router) {
    // this.menuService.getBasketObs().subscribe(dish => this.dishListInBasket = dish);
  }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url === '/order') {
      this.isThisOrderView = true;
    }
  }

}
