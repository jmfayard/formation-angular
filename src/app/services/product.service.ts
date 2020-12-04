import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public static REST = 'http://localhost:8080/rest'

  constructor(private httpClient: HttpClient) {
  }

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${ProductService.REST}/products`, {});
  }

  get products(): Product[] {
    return this._products;
  }
  private _products: Product[] = this.initialProducts();

  isTheLast(product: Product): boolean {
    return product.stock == 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  decreaseStock(product: Product) {
    product.stock--;
  }

  initialProducts() {
    const one: Product = {
      stock: 2,
      description: 'Men Sweatshirt',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      price: 39,
      title: 'Men Sweatshirt'
    };
    const two = {
      description: 'BIO T-SHIRT WITH CREWNECK - MEN.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
      price: 19,
      title: 'Men T-Shirt',
      stock: 4
    };
    const three: Product = {
      stock: 3,
      description: 'BIO T-SHIRT WITH CREWNECK - WOMEN.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
      price: 30,
      title: 'T-Shirt women'
    };
    const four: Product = {
      stock: 7,
      description: 'C0D1NG_TH3_W0RLD, BIO TOTE BAG.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
      price: 12.50,
      title: 'Tote bag'
    };
    return [one, four, two, three];
  }


}
