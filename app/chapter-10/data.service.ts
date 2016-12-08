// Observable DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { customers } from '../test-data';

import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  constructor(private logger: LoggerService) { }

  getCustomers(): Observable<Customer[]> {
    // simulate server response latency
    return of(customers)
      .delay(1500)
      .do(() => this.logger.log(`Got ${customers.length} customers as an observable`));
  }
}
