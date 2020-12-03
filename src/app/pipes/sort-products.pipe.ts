import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../model/product';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    if (!products) {
      return [];
    }
    return products.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a == b) {
        return 0;
      } else {
        return 1;
      }
    });
  }

}
