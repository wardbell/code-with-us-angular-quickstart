import { Component } from '@angular/core';

// [] means property binding - Component to DOM
// () means event binding - DOM to Component

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>

  <div>
    <!-- <img src="{{image}}"/> -->
    <img [src]="image"/>
  </div>

  <div>
    <button (click)="clicked()">Toggle color</button>
    <label [style.color]="color">
      Favorite color:

      <!-- <select #selector (change)="colorChange(selector.value)"> -->

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
  image = 'favicon.ico';
  color = 'red';

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }
}
