import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../model/product';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[], column: keyof Product = "title"): Product[] {
    if (!products) {
      return [];
    }
    return [...products].sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      } else if (a[column] == b[column]) {
        return 0;
      } else {
        return 1;
      }
    });
  }

}
