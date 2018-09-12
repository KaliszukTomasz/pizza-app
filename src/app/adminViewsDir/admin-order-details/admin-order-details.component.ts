import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Location} from '@angular/common';
import {Order} from '../../shared/order';
import {AdminService} from '../../service/admin.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.scss']
})
export class AdminOrderDetailsComponent implements OnInit, OnDestroy {

  order: Order;

  private readonly destroy$ = new Subject();

  constructor(private readonly route: ActivatedRoute,
              private readonly location: Location,
              private readonly adminService: AdminService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.adminService.getOneOrder(+id).pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.order = res;
        // this.isListLoaded = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
