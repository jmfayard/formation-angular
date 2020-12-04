import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstComponent} from './first-component/first.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import {CustomerService} from './services/customer.service';
import {ProductService} from './services/product.service';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {SortProductsPipe} from './pipes/sort-products.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {HasBasketGuard} from './HasBasketGuard';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path:'', component: ProductListComponent },
  { path:'basket', component: BasketComponent, canActivate: [HasBasketGuard] }
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MenuComponent,
    ProductComponent,
    SortProductsPipe,
    ProductListComponent,
    BasketComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    CustomerService,
    ProductService,
    {provide: LOCALE_ID, useValue: navigator.language}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

registerLocaleData(localeFr);

