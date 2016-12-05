import { Component } from '@angular/core';

import { Customer } from './model';

// [] means property binding - Component to DOM
// () means event binding - DOM to Component

@Component({
  selector: 'my-app',
  template: `
  <h1>{{customer.name}}</h1>

  <p><i>{{customer.name}} is at {{customer.street}} in {{customer.city}} in the {{customer.region}} region.</i></p>

  <fieldset>
    <label>
      Name:
      <input [(ngModel)]="customer.name" placeholder="Customer name">
    </label>
  </fieldset>

  <br>
  <label><input type="checkbox" [(ngModel)]="hideAddress"/>Hide address</label>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset>
      <label>
        Street:
        <input [(ngModel)]="customer.street" placeholder="Street">
      </label>
    </fieldset>
    <fieldset>
      <label>
        City:
        <input [(ngModel)]="customer.city" placeholder="City">
      </label>
    </fieldset>
    <fieldset>
      <label>
        State:
        <select [(ngModel)]="customer.state">
          <option>California</option>
          <option>Jalisco</option>
          <option>Quebec</option>
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label>
        Country:
        <select [(ngModel)]="customer.country">
          <option>Canada</option>
          <option>Mexico</option>
          <option>USA</option>
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label>
        Region:
        <select [(ngModel)]="customer.region">
          <option>East</option>
          <option>North</option>
          <option>South</option>
          <option>West</option>
        </select>
      </label>
    </fieldset>
  </div>
  `,
})

export class AppComponent  {

  customer: Customer = {
    name:    'Alex Smith',
    street:  '123 Main Street',
    city:    'Anytown',
    state:   'California',
    country: 'USA',
    region:  'West'
  };

  hideAddress = false;
}
