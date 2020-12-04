import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from './product.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private productService: ProductService,
    private httpClient: HttpClient
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
    this.addProductAsync(product).subscribe(
      (basket) => {
        this.basket = basket;
        this.productService.decreaseStock(product);
      },
      error => console.error('%O', error)
    )
  }

  getBasket(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${ProductService.REST}/basket`, {})
  }

  addProductAsync(product: Product): Observable<Product[]> {
    return this.httpClient.post<Product[]>(`${ProductService.REST}/basket`, product)
      .pipe(mergeMap(() => this.getBasket()));
  }



}
