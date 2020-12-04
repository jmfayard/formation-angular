import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {ProductService} from './services/product.service';
import {CustomerService} from './services/customer.service';


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
  json: string = 'Fetching json...';

  constructor(private productService: ProductService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.products = this.productService.initialProducts();
  }

  updateBasket(product: Product) {
    this.customerService.addProduct(product);
  }

  fetchProducts() {
    this.productService.fetchProducts().subscribe(
      (products) => {
        this.products = products;
        this.json = JSON.stringify(products)
      }
    );
  }
}
