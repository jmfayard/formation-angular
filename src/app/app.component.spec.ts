import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {configureTestBed} from './testing';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let element: HTMLElement;


  beforeEach(async () => {
    await configureTestBed();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'formation-angular'`, () => {
    expect(component.title).toEqual('formation-angular');
  });

  it('should render title', () => {
    expect(element.querySelector('h1').textContent).toContain('Welcome to Zenika Ecommerces');
  });

  it('should update the title when the user clicks on a product', () => {
    const product = component.products[0];
    component.updateBasket(product);
    fixture.detectChanges();
    expect(element.querySelector('header p').innerHTML).toContain(`$39.00`);
  });

});
