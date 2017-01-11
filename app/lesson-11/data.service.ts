import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { createTestCustomers } from '../test-data';

import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {

  constructor(private logger: LoggerService) { }

  /** Get existing customers as a Promise */
  getCustomersP(): Promise<Customer[]> {
    this.logger.log('Getting customers as a Promise ...');

    const customers = createTestCustomers();

    return new Promise(resolve => {
      setTimeout(() => {
        this.logger.log(`Got ${customers.length} customers`);
        resolve(customers);
      }, 1500); // simulate server response latency
    });
  }

  /** Get existing customers as an Observable */
  getCustomers(): Observable<Customer[]> {
    this.logger.log('Getting customers as an Observable ...');

    const customers = createTestCustomers();

    return of(customers)
      .delay(1500) // simulate server response latency
      .do(custs => this.logger.log(`Got ${custs.length} customers`));
  }
}
