import { SortProductsPipe } from './sort-products.pipe';
import {TestBed} from '@angular/core/testing';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

describe('SortProductsPipe', () => {
  let products: Product[] = new ProductService(TestBed.inject(HttpClient)).initialProducts();

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
