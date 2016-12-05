import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './customer';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent {
  @Input()
  customer: Customer;

  @Output()
  shift = new EventEmitter<number>();

  hideAddress = false;

  countries = ['Canada', 'Mexico', 'USA'];
  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];

  left()  { this.shift.next(-1); }
  right() { this.shift.next(1); }
}
