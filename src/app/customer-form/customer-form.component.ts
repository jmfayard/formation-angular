import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = new Customer('', '', '');
  @Output() submit : EventEmitter<Customer>= new EventEmitter<Customer>();
  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submit.emit(this.customer);
  }
}
