import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private productService: ProductService
  ) {

  }
  basket: Product[] = []

  getTotal(): number {
    let sum = 0;
    this.basket.forEach((p) => {
      sum += p.price;
    })
    return sum;
  }
  addProduct(product: Product) {
    if (!this.productService.isAvailable(product)) {
      return;
    }
    this.basket.push(product);
    this.productService.decreaseStock(product);
  }
}
