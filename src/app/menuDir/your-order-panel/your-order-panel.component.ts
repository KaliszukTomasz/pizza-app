import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-your-order-panel',
  templateUrl: './your-order-panel.component.html',
  styleUrls: ['./your-order-panel.component.scss']
})
export class YourOrderPanelComponent implements OnInit {

  isThisOrderView = false;

  constructor(public menuService: MenuService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/order') {
      this.isThisOrderView = true;
    }
  }

  getSumCountInBasket() {
    return this.menuService.getSumCountInBasket();
  }

  getDishesInBasket() {
    return this.menuService.dishesInBasket;
  }
}
