import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Order} from '../../shared/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders: Order[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getOrders().subscribe(order => {
      this.orders = order;
    });
  }

  changeToDoneStatus(order: Order) {
    order.status = true;
    this.menuService.changeStatusOrderToDone(order);
  }

}
