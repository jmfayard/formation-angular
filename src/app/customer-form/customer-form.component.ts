import {Component, OnInit, Output} from '@angular/core';
import {Customer} from '../model/customer';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = new Customer('', '', '');
  @Output() submit : EventEmitter<Customer>
  constructor() {
    this.submit = new EventEmitter<Customer>();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submit.emit(this.customer);
  }
}
