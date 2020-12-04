import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: Product[] = []
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getBasket().subscribe(
      (basket) => this.basket = basket
    )
  }

  removeFromBasket(product: Product) {

  }
}
