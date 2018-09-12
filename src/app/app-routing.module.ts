import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuPizzaComponent} from './menuDir/menu-pizza/menu-pizza.component';
import {MenuSpagettiComponent} from './menuDir/menu-spagetti/menu-spagetti.component';
import {MenuDrinksComponent} from './menuDir/menu-drinks/menu-drinks.component';
import {MenuComponent} from './menuDir/menu/menu.component';
import {DrinksDetailsComponent} from './dishDetailsDir/drinks-details/drinks-details.component';
import {PizzasDetailsComponent} from './dishDetailsDir/pizzas-details/pizzas-details.component';
import {SpagettiDetailsComponent} from './dishDetailsDir/spagetti-details/spagetti-details.component';
import {OrderComponent} from './order/order.component';
import {AdminOrdersComponent} from './adminViewsDir/admin-orders/admin-orders.component';
import {AdminOrderDetailsComponent} from './adminViewsDir/admin-order-details/admin-order-details.component';
import {AdminDishesComponent} from './adminViewsDir/admin-dishes/admin-dishes.component';
import {LoginComponent} from './login/login.component';
import {RoleGuard} from './shared/roleGuard';

const routes: Routes = [
  {path: 'pizzas', component: MenuPizzaComponent},
  {path: 'drinks', component: MenuDrinksComponent},
  {path: 'spagetti', component: MenuSpagettiComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'drinks/:id', component: DrinksDetailsComponent},
  {path: 'spagetti/:id', component: SpagettiDetailsComponent},
  {path: 'pizzas/:id', component: PizzasDetailsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [RoleGuard]},
  {path: 'admin/orders/:id', component: AdminOrderDetailsComponent, canActivate: [RoleGuard]},
  {path: 'admin/dishes', component: AdminDishesComponent, canActivate: [RoleGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'menu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
