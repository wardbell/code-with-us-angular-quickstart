import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { AppModule as Final }        from './final/app.module';
import { AppModule as Step0Module }  from './step-0/app.module';
import { AppModule as Step1Module }  from './step-1/app.module';
import { AppModule as Step98Module } from './step-98/app.module';
import { AppModule as Step99Module } from './step-99/app.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    Final,
    Step0Module,
    Step1Module,
    Step98Module,
    Step99Module,
 ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
