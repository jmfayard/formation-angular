import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from './product.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';

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

  getBasket(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${ProductService.REST}/basket`, {})
      .pipe(tap((basket) => this.basket = basket));
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${ProductService.REST}/basket`, product)
      .pipe(tap((p) => {
        this.basket.push(p);
        this.productService.decreaseStock(product);
      }));
  }



}
