import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuPizzaComponent} from './menu-pizza/menu-pizza.component';
import {MenuSpagettiComponent} from './menu-spagetti/menu-spagetti.component';
import {MenuDrinksComponent} from './menu-drinks/menu-drinks.component';
import {MenuComponent} from './menu/menu.component';
import {DrinksDetailsComponent} from './drinks-details/drinks-details.component';
import {PizzasDetailsComponent} from './pizzas-details/pizzas-details.component';
import {SpagettiDetailsComponent} from './spagetti-details/spagetti-details.component';
import {OrderComponent} from './order/order.component';
import {AdminOrdersComponent} from './admin-orders/admin-orders.component';
import {AdminOrderDetailsComponent} from './admin-order-details/admin-order-details.component';
import {AdminDishesComponent} from './admin-dishes/admin-dishes.component';

const routes: Routes = [
  {path: 'pizzas', component: MenuPizzaComponent},
  {path: 'drinks', component: MenuDrinksComponent},
  {path: 'spagetti', component: MenuSpagettiComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'drinks/:id', component: DrinksDetailsComponent},
  {path: 'spagetti/:id', component: SpagettiDetailsComponent},
  {path: 'pizzas/:id', component: PizzasDetailsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'admin/orders/:id', component: AdminOrderDetailsComponent},
  {path: 'admin/dishes', component: AdminDishesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
