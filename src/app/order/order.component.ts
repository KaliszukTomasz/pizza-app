import {Component, OnInit} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';
import {Order} from '../shared/order';
import {Dish} from '../shared/dish';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  firstName: string;
  lastName: string;
  address: string;
  subject: string;
  confirmed = false;

  constructor(private readonly menuService: MenuService, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.confirmed = false;
  }

  onKeyFirstName(event: any) {
    this.firstName = event.target.value;
  }

  onKeyLastName(event: any) {
    this.lastName = event.target.value;
  }

  onKeyAddress(event: any) {
    this.address = event.target.value;
  }

  onKeySubject(event: any) {
    this.subject = event.target.value;
  }


  sendOrderToBase() {
    const order1: Order = new class implements Order {
      address: string;
      dishes: Dish[];
      firstName: string;
      id: number;
      lastName: string;
      status: boolean;
      subject: string;
    };
    order1.address = this.address;
    order1.firstName = this.firstName;
    order1.lastName = this.lastName;
    order1.subject = this.subject;
    order1.status = false;
    order1.dishes = this.menuService.dishesInBasket;

    this.menuService.addNewOrder(order1);
    this.clearBasket();
  }

  clearBasket() {
    this.confirmed = true;
    this.menuService.dishesInBasket = [];
    this.firstName = '';
    this.lastName = '';
    this.subject = '';
    this.address = '';
  }

  goBack(): void {
    this.location.back();
  }
}
