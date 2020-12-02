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
    const product: Product = {
      description: 'Men Sweatshirt',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      price: 39,
      title: 'Men Sweatshirt'
    };
    return [product];
  }

}
