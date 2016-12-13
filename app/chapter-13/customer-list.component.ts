import { Component, OnInit } from '@angular/core';

import { Customer } from './model';

import { DataService }   from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customer: Customer;
  customers: Customer[];
  isBusy = false;

  constructor(
    private dataService: DataService,
    private logger: LoggerService) { }

  ngOnInit() { this.getCustomers(); }

  getCustomers() {
    this.customer = undefined;  // <-- clear before refresh
    this.customers = undefined;

    this.isBusy = true;
    this.logger.log('Getting customers ...');

    // this.dataService.getCustomersP().then(  // Promise version
    this.dataService.getCustomers().subscribe( // Observable version
        custs => {
          this.isBusy = false;
          this.customers = custs;
        },
        (errorMsg: string) => {
          this.isBusy = false;
          alert(errorMsg); // Don't use alert!
        }
      );
  }

  save(customer: Customer) {
    if (!customer) { return; }
    this.isBusy = true;
    this.logger.log(`Saving ${customer.name} ...`);
    this.dataService.update(customer).subscribe(
      () => this.isBusy = false,
      () => {
        this.isBusy = false;
        alert('Save failed; please check the console'); // Don't use alert!
      }
    );
  }

  shift(increment: number) {
    let ix = increment + this.customers.findIndex(c => c === this.customer);
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
