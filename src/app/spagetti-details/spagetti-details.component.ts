import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-spagetti-details',
  templateUrl: './spagetti-details.component.html',
  styleUrls: ['./spagetti-details.component.scss']
})
export class SpagettiDetailsComponent implements OnInit {

  spagetti: Dish;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MenuService,
    private readonly location: Location,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOneSpagetti(+id)
      .subscribe(res => this.spagetti = res);
  }

  goBack(): void {
    this.location.back();
  }
}
