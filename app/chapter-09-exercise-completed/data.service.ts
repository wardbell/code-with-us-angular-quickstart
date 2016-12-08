// Observable DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { customers } from '../test-data';

import { LoggerService } from './logger.service';

@Injectable()
export class DataService {

  constructor(private logger: LoggerService) { }

  getCustomers(): Customer[] {
    this.logger.log(`Got ${customers.length} customers`);
    return customers;
  }
}
