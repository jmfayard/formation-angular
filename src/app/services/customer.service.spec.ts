import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import {configureTestBed} from '../testing';

describe('CustomerService', () => {
  let service: CustomerService;
  const product = {
    stock: 2,
    description: 'Men Sweatshirt',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
    price: 39,
    title: 'Men Sweatshirt'
  }

  beforeEach(() => {
    configureTestBed();
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add products and compute total', function() {
    service.addProduct(product);
    expect(service.getTotal()).withContext('total price').toBe(product.price);
    service.addProduct(product);
    expect(service.getTotal()).withContext('total price').toBe(product.price * 2);
  });
});
