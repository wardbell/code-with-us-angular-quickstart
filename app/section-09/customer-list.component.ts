import { Component, OnInit } from '@angular/core';

import { Customer } from './model';

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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number) {
    let ix = increment + this.customers.findIndex(c => c === this.customer);
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
