import { Component } from '@angular/core';

import { Customer } from './model';

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
    /*
    "The Great Chicago Fire" started October 8th, 1871,
     allegedly caused by lantern kicked over by a cow belonging to
     Katie O'Leary, living at 137 DeKoven Street, Chicago, Illinois.
     Add her to the customer list.
    */
    {
      name:    'Katie O\'Leary',
      street:  '137 DeKoven Street',
      city:    'Chicago',
      state:   'Illinois',
      country: 'USA',
      region:  'Midwest'
    },
  ];

  customer: Customer;

  hideAddress = false;

  /* Create an array of the same countries */
  countries = ['Canada', 'Mexico', 'USA'];

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];

  /* Create an array of states that includes previous states PLUS Illinois */
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
