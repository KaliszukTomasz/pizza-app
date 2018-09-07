import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss']
})
export class DrinksDetailsComponent implements OnInit {

  drink: Dish;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MenuService,
    private readonly location: Location,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOneDrink(+id)
      .subscribe(res => this.drink = res);
  }

  goBack(): void {
    this.location.back();
  }

  /*
  project: Project;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProjectsService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getProject(+id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.project = res);
  }
}
   */
}
