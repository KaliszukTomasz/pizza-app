import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Order} from '../../shared/order';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders: Order[];

  constructor(private readonly menuService: MenuService,
              private readonly adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getOrders().subscribe(order => {
      this.orders = order;
    });
  }

  changeToDoneStatus(order: Order) {
    order.status = true;
    this.adminService.changeStatusOrderToDone(order);
  }

}
