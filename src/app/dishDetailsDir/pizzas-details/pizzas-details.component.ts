import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Location} from '@angular/common';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.scss']
})
export class PizzasDetailsComponent implements OnInit, OnDestroy {

  pizzas: Dish;
  private readonly destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MenuService,
    private readonly location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOnePizza(+id).pipe(takeUntil(this.destroy$))
      .subscribe(res => this.pizzas = res);
  }


  goBack(): void {
    this.location.back();
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
