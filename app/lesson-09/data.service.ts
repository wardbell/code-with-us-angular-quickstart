// Observable DataService
import { Injectable } from '@angular/core';

import { Customer }  from './model';
import { createTestCustomers } from '../test-data';

@Injectable()
export class DataService {

  getCustomers(): Customer[] {
    return createTestCustomers();
  }
}
