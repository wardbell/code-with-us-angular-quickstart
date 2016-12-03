import { Component } from '@angular/core';

@Component({
  selector: 'step-1',
  template: `<h1>{{appTitle}}</h1>`,
})
export class AppComponent  {
  appTitle = 'Customer Management';
}
