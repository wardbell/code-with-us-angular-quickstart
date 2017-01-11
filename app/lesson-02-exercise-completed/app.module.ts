import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ], // What stuff do I need?
  declarations: [ AppComponent ],  // What's in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }
