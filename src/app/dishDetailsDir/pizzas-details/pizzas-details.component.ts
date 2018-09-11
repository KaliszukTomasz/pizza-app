import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.scss']
})
export class PizzasDetailsComponent implements OnInit {

  pizzas: Dish;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MenuService,
    private readonly location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOnePizza(+id)
      .subscribe(res => this.pizzas = res);
  }


  goBack(): void {
    this.location.back();
}
}
