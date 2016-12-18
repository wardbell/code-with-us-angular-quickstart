import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { createTestCustomers } from '../test-data';

import { LoggerService } from './logger.service';

@Injectable()
export class DataService {

  constructor(private logger: LoggerService) { }

  /** Get existing customers as a Promise */
  getCustomers(): Promise<Customer[]> {
    this.logger.log('Getting customers as a Promise ...');

    const customers = createTestCustomers();

    return new Promise(resolve => {
      setTimeout(() => {
        this.logger.log(`Got ${customers.length} customers`);
        resolve(customers);
      }, 1500); // simulate server response latency
    });
  }
}
