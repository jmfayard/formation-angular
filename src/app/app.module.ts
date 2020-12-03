import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import {CustomerService} from './customer.service';
import {ProductService} from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MenuComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CustomerService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
