// Promise DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { customers } from '../test-data';

import { LoggerService } from './logger.service';

@Injectable()
export class DataServiceP {

  constructor(private logger: LoggerService) { }

  getCustomers(): Promise<Customer[]> {
    return new Promise(resolve => {
      // simulate server response latency
      setTimeout(() => {
        this.logger.log(`Got ${customers.length} customers as a promise`);
        resolve(customers);
      }, 1500);
    });
  }
}
