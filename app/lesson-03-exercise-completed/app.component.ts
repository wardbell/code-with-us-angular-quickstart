import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>

  <fieldset>
    <label>
      Name:
      <input [(ngModel)]="name" placeholder="Customer name">
    </label>
  </fieldset>

  <br>
  <label><input type="checkbox" [(ngModel)]="hideAddress"/>Hide address</label>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset>
      <label>
        Street:
        <input [(ngModel)]="street" placeholder="Street">
      </label>
    </fieldset>
    <fieldset>
      <label>
        City:
        <input [(ngModel)]="city" placeholder="City">
      </label>
    </fieldset>
    <fieldset>
      <label>
        Region:
        <select [(ngModel)]="region">
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </label>
    </fieldset>
  </div>
  `,
})

export class AppComponent  {
  name = 'Alex Smith';
  city = 'Anytown';
  street = '123 Main Street';
  region = 'East';
  hideAddress = false;
}
