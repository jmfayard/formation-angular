import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {Product} from '../model/product';
import {SortProductsPipe} from '../pipes/sort-products.pipe';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {configureTestBed} from '../testing';

describe('ProductService', () => {
  let service: ProductService;
  let http: HttpTestingController

  const product = {
    stock: 2,
    description: 'Men Sweatshirt',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
    price: 39,
    title: 'Men Sweatshirt'
  }

  beforeEach(async () => {
    await configureTestBed();
    service = TestBed.inject(ProductService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be available and not the last when stock = 2', function() {
    product.stock = 2;
    expect(service.isAvailable(product)).toBe(true);
    expect(service.isTheLast(product)).toBe(false);

  });

  it('should be available and the last when stock is 1', function() {
    product.stock = 1;
    expect(service.isAvailable(product)).withContext('isAvailable').toBe(true);
    expect(service.isTheLast(product)).withContext('isTheLast').toBe(true);
  });

  it('should be the last and not available when stock is 0', function() {
    product.stock = 0;
    expect(service.isAvailable(product)).withContext('isAvailable').toBe(false);
    expect(service.isTheLast(product)).withContext('isTheLast').toBe(false);
  });

  it('should return 2 users', function() {
    service.fetchProducts().subscribe((products: Product[]) => {
      console.log('%O', products);
    })

    http.expectOne(`${ProductService.REST}/products`).flush([product, product]);
  });
});
