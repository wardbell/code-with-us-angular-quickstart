import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent  {

  customer: Customer = {
    id:      1,
    name:    'Alex Smith',
    street:  '123 Main Street',
    city:    'Anytown',
    state:   'California',
    country: 'USA',
    region:  'West'
  };

  hideAddress = false;
}
