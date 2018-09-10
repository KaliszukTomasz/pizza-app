import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';
import {Location} from '@angular/common';
import {Order} from '../shared/order';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.scss']
})
export class AdminOrderDetailsComponent implements OnInit {

  order: Order;

  constructor(private readonly route: ActivatedRoute,
              private readonly service: MenuService,
              private readonly location: Location,) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOneOrder(+id)
      .subscribe(res => this.order = res);
  }

  goBack(): void {
    this.location.back();
  }
}
