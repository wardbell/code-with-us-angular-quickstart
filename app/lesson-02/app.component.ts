import { Component } from '@angular/core';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>

  <fieldset>
    <!-- <img src={{image}}/> -->
    <!-- <img src="{{image}}"/> -->
    <img [src]="image"/>
  </fieldset>

  <fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle color</button>

    <!-- <select #selector (change)="colorChange(selector.value)"> -->

    <select (change)="colorChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  </fieldset>
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
