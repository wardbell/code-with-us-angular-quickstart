import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{appTitle}}</h1>`,
})
export class AppComponent  {
  appTitle = 'Customer Management';
}
