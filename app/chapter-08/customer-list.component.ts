import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent  {

  customer: Customer;

  customers: Customer[] = [
    {
      id:       1,
      name:    'Alex Smith',
      address: {
        street:  '123 Main Street',
        city:    'Anytown',
        state:   'California',
        region:  'West'
      }
    },
    {
      id:       2,
      name:    'Pierre Pasmal',
      address: {
        street:  '456 Rue de Main',
        city:    'Quebec City',
        state:   'Quebec',
        region:  'East'
      }
    },
    {
      id:       3,
      name:    'Margarita Nadie',
      address: {
        street:  '789 Calle Principal',
        city:    'Guadalajara',
        state:   'Jalisco',
        region:  'South'
      }
    },
    {
      id:       4,
      name:    'Katie O\'Leary',
      address: {
        street:  '137 DeKoven Street',
        city:    'Chicago',
        state:   'Illinois',
        region:  'Midwest'
      }
    },
  ];

  shift(increment: number) {
    // shift the index of the current customer by the increment
    let ix = increment + this.customers.findIndex(c => c === this.customer);

    // prevent index overflow
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));

    // set next customer
    this.customer = this.customers[ix];
  }
}
