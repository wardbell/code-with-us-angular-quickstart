import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>`
})
export class AppComponent  { title = 'Customer Management'; }
