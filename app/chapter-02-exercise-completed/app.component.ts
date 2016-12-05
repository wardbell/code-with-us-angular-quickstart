import { Component } from '@angular/core';

// [] means property binding - Component to DOM
// () means event binding - DOM to Component

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is in the {{region}} region.</i></p>

  <br>
  <button (click)="addressClick()">Show/Hide address</button>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset>
      <label>Street: </label>{{street}}
    </fieldset>
    <fieldset>
      <label>City: </label>{{city}}
    </fieldset>
    <fieldset>
      <label>
        Region:
        <select (change)="regionChange($event.target.value)">
          <option>East</option>
          <option>North</option>
          <option>South</option>
          <option>West</option>
        </select>
      </label>
    </fieldset>
  </div>

  <fieldset>
    <img [src]="image"/>
  </fieldset>

  <fieldset>
    <button (click)="clicked()">Toggle color</button>
    <label [style.color]="color">
      Favorite color:
      <select (change)="colorChange($event.target.value)">
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>
    </label>
  </fieldset>

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
