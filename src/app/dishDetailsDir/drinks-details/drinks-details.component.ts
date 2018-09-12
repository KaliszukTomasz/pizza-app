import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss']
})
export class DrinksDetailsComponent implements OnInit, OnDestroy {

  drink: Dish;
  private readonly destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MenuService,
    private readonly location: Location,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOneDrink(+id).pipe(takeUntil(this.destroy$))
      .subscribe(res => this.drink = res);
  }

  goBack(): void {
    this.location.back();
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
