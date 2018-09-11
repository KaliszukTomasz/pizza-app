import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Location} from '@angular/common';
import {Order} from '../../shared/order';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.scss']
})
export class AdminOrderDetailsComponent implements OnInit {

  order: Order;

  constructor(private readonly route: ActivatedRoute,
              private readonly location: Location,
              private readonly adminService: AdminService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getOneOrder(+id)
      .subscribe(res => this.order = res);
  }

  goBack(): void {
    this.location.back();
  }
}
