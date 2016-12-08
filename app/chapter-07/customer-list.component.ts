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
      street:  '123 Main Street',
      city:    'Anytown',
      state:   'California',
      country: 'USA',
      region:  'West'
    },
    {
      id:       2,
      name:    'Pierre Pasmal',
      street:  '456 Rue de Main',
      city:    'Quebec City',
      state:   'Quebec',
      country: 'Canada',
      region:  'East'
    },
    {
      id:       3,
      name:    'Margarita Nadie',
      street:  '789 Calle Principal',
      city:    'Guadalajara',
      state:   'Jalisco',
      country: 'Mexico',
      region:  'South'
    },
    {
      id:       4,
      name:    'Katie O\'Leary',
      street:  '137 DeKoven Street',
      city:    'Chicago',
      state:   'Illinois',
      country: 'USA',
      region:  'Midwest'
    },
  ];
}
