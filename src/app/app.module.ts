import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {YourOrderPanelComponent} from './your-order-panel/your-order-panel.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuPizzaComponent} from './menu-pizza/menu-pizza.component';
import {MenuDrinksComponent} from './menu-drinks/menu-drinks.component';
import {MenuSpagettiComponent} from './menu-spagetti/menu-spagetti.component';
import {DrinksDetailsComponent} from './drinks-details/drinks-details.component';
import {PizzasDetailsComponent} from './pizzas-details/pizzas-details.component';
import {SpagettiDetailsComponent} from './spagetti-details/spagetti-details.component';
import { OrderComponent } from './order/order.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminOrderDetailsComponent } from './admin-order-details/admin-order-details.component';
import { AdminDishesComponent } from './admin-dishes/admin-dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    YourOrderPanelComponent,
    MenuComponent,
    MenuPizzaComponent,
    MenuDrinksComponent,
    MenuSpagettiComponent,
    DrinksDetailsComponent,
    PizzasDetailsComponent,
    SpagettiDetailsComponent,
    OrderComponent,
    SuccessAlertComponent,
    NavBarComponent,
    AdminOrdersComponent,
    AdminOrderDetailsComponent,
    AdminDishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
