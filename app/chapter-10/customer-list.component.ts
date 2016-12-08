/* tslint:disable:no-unused-variable */
import { Component, OnInit } from '@angular/core';

import { Customer } from './model';

import { DataServiceP } from './data-p.service';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  customer: Customer;
  customers: Customer[];

  // inject the DataService
  constructor(private dataService: DataServiceP) { }

  ngOnInit() {
    this.dataService.getCustomers().then(custs => this.customers = custs);
    // this.dataService.getCustomers().subscribe(custs => this.customers = custs);
  }

  shift(increment: number) {
    let ix = increment + this.customers.findIndex(c => c === this.customer);
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
