// Observable DataService
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';  // <-- import Http & Headers

import { Customer }      from './model';
import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'; // <-- add rxjs operator extensions used here
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw'; // <-- add rxjs Observable extensions used here

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,  // <-- inject http
    private logger: LoggerService) { }

  /** Get existing customers as a Promise */
  getCustomersP(): Promise<Customer[]> {
    this.logger.log('Getting customers as a Promise ...');

    return this.http.get(this.customersUrl) // <-- returns an observable
      .toPromise()  // <-- convert immediately to a promise
      .then(response => {
        const custs = response.json().data as Customer[]; // <-- extract data from the response
        this.logger.log(`Got ${custs.length} customers`);
        return custs;
      })
      .catch((error: any) => {
        this.logger.log(`An error occurred ${error}`); // for demo purposes only
        // re-throw user-facing message
        return Promise.reject('Something bad happened; check the console');
      });
  }


  /** Get existing customers as an Observable */
  getCustomers(): Observable<Customer[]> {
    this.logger.log('Getting customers as an Observable ...');

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])  // <-- extract data
      .do(custs => this.logger.log(`Got ${custs.length} customers`))
      .catch(error => this.handleError(error));
  }

  /** Common Http Observable error handler */
  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred ${error}`); // for demo purposes only
    // re-throw user-facing message
    return Observable.throw('Something bad happened; check the console');
  }


  /** Update existing customer */
  update(customer: Customer): Observable<any> {
    const url = `${this.customersUrl}/${customer.id}`;
    const result = this.http.put(url, customer, { headers: this.headers })
      // .do(() => this.logger.log(`Saved customer ${customer.name}`))
      .catch(error => this.handleError(error));

    // Result is "cold". Ensure logging even if caller doesn't subscribe
    result.subscribe(() => this.logger.log(`Saved customer ${customer.name}`));

    return result;
  }
}
