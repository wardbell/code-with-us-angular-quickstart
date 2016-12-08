// Observable DataService
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';  // <-- import Http & Headers

import { Customer }      from './model';
import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'; // <-- add rxjs operator extensions used here
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/throw'; // <-- add rxjs Observable extensions used here

const customersUrl = 'api/customers';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,  // <-- inject http
    private logger: LoggerService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(customersUrl)
      .map(response => response.json().data as Customer[])  // <-- extract data
      .do(custs => this.logger.log(`Got ${custs.length} customers as an observable`))
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred ${error}`); // for demo purposes only
    // re-throw user-facing message
    return Observable.throw('Something bad happened; check the console');
  }

  /* Update existing customer */
  update(customer: Customer): Observable<any> {
    const url = `${customersUrl}/${customer.id}`;
    const result = this.http.put(url, customer, { headers: this.headers })
      // .do(() => this.logger.log(`Saved customer ${customer.name}`))
      .catch(this.handleError);

    // Result is "cold". Ensure logging even if caller doesn't subscribe
    result.subscribe(() => this.logger.log(`Saved customer ${customer.name}`));

    return result;
  }
}
