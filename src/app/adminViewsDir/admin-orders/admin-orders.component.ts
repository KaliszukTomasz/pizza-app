import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Order} from '../../shared/order';
import {AdminService} from '../../service/admin.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {

  orders: Order[];
  private readonly destroy$ = new Subject();

  constructor(private readonly menuService: MenuService,
              private readonly adminService: AdminService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.adminService.getOrders().pipe(takeUntil(this.destroy$)).subscribe(order => {
      this.orders = order;
    });
  }

  changeToDoneStatus(order: Order) {
    order.status = true;
    this.adminService.changeStatusOrderToDone(order);
  }

  deleteOrder(id: number) {
    this.adminService.deleteOrder(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
      this.loadOrders();
    });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
