import {Component, OnInit} from '@angular/core';
import {MenuService} from '../service/menu.service';
import {Router} from '@angular/router';
import {Order} from '../shared/order';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  confirmed = false;
  order: Order = new Order();

  constructor(private readonly menuService: MenuService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.confirmed = false;
    this.order.firstName = '';
  }


  sendOrderToBase() {
    this.order.status = false;
    this.order.dishes = this.menuService.dishesInBasket;
    this.menuService.addNewOrder(this.order);
    this.clearBasket();
  }

  clearBasket() {
    this.confirmed = true;
    this.menuService.dishesInBasket = [];
    this.order.firstName = '';
    this.order.lastName = '';
    this.order.subject = '';
    this.order.address = '';
  }

  goBack(): void {
    this.location.back();
  }

  valid() {
    return this.order.firstName.length > 3 && this.order.lastName.length > 3 && this.order.address.length > 4;
  }

  validationError() {
    alert('Wprowadź odpowiednie dane!');
  }
}
