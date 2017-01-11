import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent  {
  name = 'Angular';
}
