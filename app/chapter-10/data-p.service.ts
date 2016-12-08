// Promise DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { createTestCustomers } from '../test-data';

import { LoggerService } from './logger.service';

@Injectable()
export class DataServiceP {

  constructor(private logger: LoggerService) { }

  getCustomers(): Promise<Customer[]> {
    const customers = createTestCustomers();
    return new Promise(resolve => {
      setTimeout(() => {
        this.logger.log(`Got ${customers.length} customers as a promise`);
        resolve(customers);
      }, 1500); // simulate server response latency
    });
  }
}
