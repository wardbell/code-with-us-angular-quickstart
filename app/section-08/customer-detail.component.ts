import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './model';

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

  left()  { this.shift.emit(-1); }
  right() { this.shift.emit(1); }
}
