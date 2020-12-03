import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let node: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    node = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'formation-angular'`, () => {
    expect(component.title).toEqual('formation-angular');
  });

  it('should render title', () => {
    expect(node.querySelector('h1').textContent).toContain('Welcome to Zenika Ecommerces');
  });

  it('should update the title when the user clicks on a product', () => {
    const product = component.products[0];
    component.updateBasket(product);
    fixture.detectChanges();
    expect(node.querySelector('header p').innerHTML).toContain(`${product.price}$`)

  });
});
