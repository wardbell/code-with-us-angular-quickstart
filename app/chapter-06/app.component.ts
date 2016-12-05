import { Component } from '@angular/core';

import { Customer } from './customer';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent  {

  customers: Customer[] = [
    {
      name:    'Alex Smith',
      street:  '123 Main Street',
      city:    'Anytown',
      state:   'California',
      country: 'USA',
      region:  'West'
    },
    {
      name:    'Pierre Pasmal',
      street:  '456 Rue de Main',
      city:    'Quebec City',
      state:   'Quebec',
      country: 'Canada',
      region:  'East'
    },
    {
      name:    'Margarita Nadie',
      street:  '789 Calle Principal',
      city:    'Guadalajara',
      state:   'Jalisco',
      country: 'Mexico',
      region:  'South'
    },
  ];

  customer: Customer;

  hideAddress = false;

  regions = ['East', 'Midwest', 'North', 'South', 'West'];
}
