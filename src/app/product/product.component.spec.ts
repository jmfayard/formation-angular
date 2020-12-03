import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {Product} from '../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let  element: HTMLElement

  const product: Product = {
    description: 'Men Sweatshirt',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
    price: 39,
    title: 'Men Sweatshirt',
    stock: 1
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show the price', function() {
    expect(element.querySelector('.caption h3').textContent).toContain('39$');
  });

  it('should show the description', function() {
    expect(element.querySelector('.caption p').innerHTML).toContain(product.description);
  });

  it('should show the title', function() {
    expect(element.querySelector('.caption h3').innerHTML).toContain(product.title);
  });

  it('should show the image', function() {
    expect(element.querySelector('img').src).toBe(product.photo);
  });

  it('should forward clicks to its output', function() {
    product.stock = 1;
    fixture.detectChanges();
    spyOn(component.addToBasket, 'emit');
    element.querySelector('button').click();
    expect(component.addToBasket.emit).toHaveBeenCalledWith(product);
  });

  it('should not add to basket if the stock is empty', function() {
    product.stock = 0;
    fixture.detectChanges();
    spyOn(component.addToBasket, 'emit');
    element.querySelector('button').click();
    expect(component.addToBasket.emit).toHaveBeenCalledTimes(0);
  });

});
