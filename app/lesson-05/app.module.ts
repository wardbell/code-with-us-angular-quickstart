import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [                  // What stuff do I need?
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],  // What's in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }
