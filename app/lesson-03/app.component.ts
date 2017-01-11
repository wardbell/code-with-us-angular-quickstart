/* tslint:disable:max-line-length */
import { Component } from '@angular/core';

// [] means property binding - Component to DOM
// () means event binding - DOM to Component

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is in the {{region}} region.</i></p>

  <fieldset>
    <label>
      Name:<br>
      <input [value]="name" placeholder="Customer name"> [value]="name"<br>

      <input #nameBox [value]="name" (input)="name=nameBox.value" placeholder="Customer name">           #nameBox [value]="name" (input)="name=nameBox.value" <br>

      <input [value]="name" (keyup)="nameChange($event.target.value)" placeholder="Customer name">       [value]="name" (keyup)="nameChange($event.target.value)"<br>

      <input [value]="name" (keyup.enter)="nameChange($event.target.value)" placeholder="Customer name"> [value]="name" (keyup.enter)="..."<br>

      <input [value]="name"
             (keyup.enter)="nameChange($event.target.value)"
             (blur)="nameChange($event.target.value)"
             placeholder="Customer name">                                                                [value]="name" (keyup.enter)="..." (blur)="..."<br>

      <input [(ngModel)]="name" placeholder="Customer name">                                             [(ngModel)]="name"<br>

      <input [ngModel]="name" (ngModelChange)="name=$event" placeholder="Customer name">                 [ngModel]="name" (ngModelChange)="name=$event"<br>
    </label>
  </fieldset>

  <br>
  <label><input type="checkbox" [(ngModel)]="hideAddress"/>Hide address</label>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset><label>Street: </label>{{street}}</fieldset>
    <fieldset><label>City: </label>{{city}}</fieldset>
    <fieldset>
      <label>
        Region:
        <select (change)="regionChange($event.target.value)">
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

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  nameChange(name: string) {
    this.name = name;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
