import { Component } from '@angular/core';

// [] means property binding - Component to DOM
// () means event binding - DOM to Component

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>

  <p>{{name}} is in the {{region}} region</p>

  <h3>Address:</h3>
  <button (click)="addressClick()">Show/Hide address</button>

  <div [hidden]="hideAddress">
    <div><label>Street: </label>{{street}}</div>
    <div><label>City: </label>{{city}}</div>
    <div>
      <label>
        Region:
        <select (change)="regionChange($event.target.value)">
          <option>East</option>
          <option>North</option>
          <option>South</option>
          <option>West</option>
        </select>
      </label>
    </div>
  </div>

  <div>
    <img [src]="image"/>
  </div>

  <div>
    <button (click)="clicked()">Toggle color</button>
    <label [style.color]="color">
      Favorite color:
      <select (change)="colorChange($event.target.value)">
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>
    </label>
  </div>

  `,
})

export class AppComponent  {
  name = 'Alex Smith';

  hideAddress = false;
  street = '123 Main Street';
  city = 'Anytown';
  region = 'East';

  image = 'favicon.ico';
  color = 'red';

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  regionChange(region: string) {
    this.region = region;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }
}
