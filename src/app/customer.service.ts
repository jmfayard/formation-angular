import { Injectable } from '@angular/core';
import {Product} from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }
  basket: Product[] = []

  getTotal(): number {
    let sum = 0;
    this.basket.forEach((p) => {
      sum += p.price;
    })
    return sum;
  }
  addProduct(product: Product) {
    this.basket.push(product);
  }
}
