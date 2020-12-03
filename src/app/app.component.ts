import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {ProductService} from './product.service';
import {CustomerService} from './customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  get total(): number {
    return this.customerService.getTotal();
  }
  title = 'formation-angular';
  products: Product[];

  constructor(private productService: ProductService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  updateBasket(product: Product) {
    this.customerService.addProduct(product);
  }
}
