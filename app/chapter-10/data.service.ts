// Observable DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { customers } from '../test-data';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {

  getCustomers(): Observable<Customer[]> {
    // simulate server response latency
    return of(customers).delay(1500);
  }
}
