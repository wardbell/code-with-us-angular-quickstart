import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }            from './app.component';
import { AddressComponent }        from './address.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent }   from './customer-list.component';

// import { DataService } from './data-p.service';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [ DataService ],  // <-- provide it here
  bootstrap: [ AppComponent ]
})
export class AppModule { }
