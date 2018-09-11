import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {YourOrderPanelComponent} from './menuDir/your-order-panel/your-order-panel.component';
import {MenuComponent} from './menuDir/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuPizzaComponent} from './menuDir/menu-pizza/menu-pizza.component';
import {MenuDrinksComponent} from './menuDir/menu-drinks/menu-drinks.component';
import {MenuSpagettiComponent} from './menuDir/menu-spagetti/menu-spagetti.component';
import {DrinksDetailsComponent} from './dishDetailsDir/drinks-details/drinks-details.component';
import {PizzasDetailsComponent} from './dishDetailsDir/pizzas-details/pizzas-details.component';
import {SpagettiDetailsComponent} from './dishDetailsDir/spagetti-details/spagetti-details.component';
import { OrderComponent } from './order/order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminOrdersComponent } from './adminViewsDir/admin-orders/admin-orders.component';
import { AdminOrderDetailsComponent } from './adminViewsDir/admin-order-details/admin-order-details.component';
import { AdminDishesComponent } from './adminViewsDir/admin-dishes/admin-dishes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

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
    NavBarComponent,
    AdminOrdersComponent,
    AdminOrderDetailsComponent,
    AdminDishesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
