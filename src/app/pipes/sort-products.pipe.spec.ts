import { SortProductsPipe } from './sort-products.pipe';
import {TestBed} from '@angular/core/testing';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from '../app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SortProductsPipe', () => {
  let productService: ProductService;
  let client : HttpClient
  let products: Product[]

  beforeEach(async function() {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        AppComponent, SortProductsPipe
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    productService = TestBed.inject(ProductService);
    products = productService.initialProducts();
  });


  it('create an instance', () => {
    const pipe = new SortProductsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort products', function() {
    const pipe = new SortProductsPipe();
    const actual = pipe.transform(products).map((p) => p.title);
    expect(actual).toEqual([ 'Men Sweatshirt', 'Men T-Shirt', 'T-Shirt women', 'Tote bag' ]);
  });
});
