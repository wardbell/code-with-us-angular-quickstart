import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }            from './app.component';
import { AddressComponent }        from './address.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent }   from './customer-list.component';

import { DataService }   from './data.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [                  // What stuff do I need?
    BrowserModule,
    FormsModule
  ],
  declarations: [             // What's in my app module?
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [                // What services do I provide?
    DataService,
    LoggerService
  ],
  bootstrap: [ AppComponent ] // Where do I start?
})
export class AppModule { }
