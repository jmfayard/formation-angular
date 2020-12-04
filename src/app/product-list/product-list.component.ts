import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  get total(): number {
    return this.customerService.getTotal();
  }
  title = 'formation-angular';
  products: Product[];
  json: string = 'Fetching json...';

  constructor(private productService: ProductService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getBasket().subscribe()
    this.productService.fetchProducts().subscribe(
      (products) => this.products = products
    );
  }

  updateBasket(product: Product) {
    this.customerService.addProduct(product).subscribe(

    )
  }

}
