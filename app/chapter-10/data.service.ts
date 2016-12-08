// Observable DataService
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

  getCustomers(): Observable<Customer[]> {
    const customers = createTestCustomers();
    return of(customers)
      .delay(1500) // simulate server response latency
      .do(custs => this.logger.log(`Got ${custs.length} customers as an observable`));
  }
}
