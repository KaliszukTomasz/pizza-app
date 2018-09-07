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
import {DetailsComponent} from './details/details.component';
import {DrinksDetailsComponent} from './drinks-details/drinks-details.component';
import {PizzasDetailsComponent} from './pizzas-details/pizzas-details.component';
import {SpagettiDetailsComponent} from './spagetti-details/spagetti-details.component';

@NgModule({
  declarations: [
    AppComponent,
    YourOrderPanelComponent,
    MenuComponent,
    MenuPizzaComponent,
    MenuDrinksComponent,
    MenuSpagettiComponent,
    DetailsComponent,
    DrinksDetailsComponent,
    PizzasDetailsComponent,
    SpagettiDetailsComponent
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
