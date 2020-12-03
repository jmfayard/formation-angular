import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {Product} from '../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const product: Product = {
    description: 'Men Sweatshirt',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
    price: 39,
    title: 'Men Sweatshirt'
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show the price', function() {
    expect(fixture.nativeElement.querySelector('.caption h3').textContent).toContain('39$');
  });

  it('should show the description', function() {
    expect(fixture.nativeElement.querySelector('.caption p').textContent).toBe(product.description);
  });

  it('should show the title', function() {
    expect(fixture.nativeElement.querySelector('.caption h3').textContent).toContain(product.title);
  });

  it('should show the image', function() {
    expect(fixture.nativeElement.querySelector('img').src).toBe(product.photo);
  });

  it('should forward clicks to its output', function() {
    spyOn(component.addToBasket, 'emit');
    fixture.nativeElement.querySelector('button').click();
    expect(component.addToBasket.emit).toHaveBeenCalledWith(product);
  });
});
