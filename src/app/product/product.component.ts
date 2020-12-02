import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.addToBasket.emit(this.product);
  }

}
