import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish';
import {MenuService} from '../../service/menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-menu-spagetti',
  templateUrl: './menu-spagetti.component.html',
  styleUrls: ['./menu-spagetti.component.scss']
})
export class MenuSpagettiComponent implements OnInit, OnDestroy {

  spagetti: Dish[];
  filteredSpagetti: Dish[];
  private readonly destroy$ = new Subject();

  constructor(private readonly menuService: MenuService) {
  }

  filterAvailableSpagetti(): void {
    this.filteredSpagetti = this.spagetti.filter(spagetti => spagetti.isAvailable === true);
  }

  ngOnInit() {
    this.menuService.getSpagetti().pipe(takeUntil(this.destroy$)).subscribe(spagetti => {
      this.spagetti = spagetti;
      this.filterAvailableSpagetti();
    });
  }

  addToBasket(dish: Dish) {
    this.menuService.addToBasket(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
