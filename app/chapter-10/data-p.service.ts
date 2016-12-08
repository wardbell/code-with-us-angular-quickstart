// Promise DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { customers } from '../test-data';

@Injectable()
export class DataServiceP {

  getCustomers(): Promise<Customer[]> {
    return new Promise(resolve => {
      // simulate server response latency
      setTimeout(() => resolve(customers), 1500);
    });
  }
}
