import {Component} from '@angular/core';
import {Product} from './model/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-angular';
  total = 0;
  products: Product[] = this.initialProducts();

  initialProducts(): Product[] {
    const one: Product = {
      description: 'Men Sweatshirt',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      price: 39,
      title: 'Men Sweatshirt'
    };
    const two: Product = {
      description: 'BIO T-SHIRT WITH CREWNECK - MEN.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
      price: 19,
      title: 'Men T-Shirt'
    };
    const three: Product = {
      description: 'BIO T-SHIRT WITH CREWNECK - WOMEN.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
      price: 30,
      title: 'T-Shirt women'
    };
    const four: Product = {
      description: 'C0D1NG_TH3_W0RLD, BIO TOTE BAG.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
      price: 12.50,
      title: 'Tote bag'
    };
    return [one, two, three, four];
  }

  add(product: Product) {
    this.total += product.price;
  }
}
