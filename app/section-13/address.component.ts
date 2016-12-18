import { Component, Input, OnInit } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {
  @Input() address: Address;

  regions = ['East', 'Midwest', 'North', 'South', 'West'];
  states: string[];
  // states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];

  constructor(private dataService: DataService) { }

  /*
   * Mistakenly neglects to rebind the state _after_states arrive!
   * Populating the state selector later breaks the binding
   * causing the address to show the wrong state.
   *
   * See this by toggling address when it shows Katie O'Leary;
   * notice that Chicago is shown in California (oops).
   *
   * Fixed in section 13.
   */
  // ngOnInit() {
  //   this.dataService.getStates()
  //     .subscribe(states => this.states = states);
  // }

  /*
    * State binding problem "fixed".
    * Hides current address state until `states` arrive.
    *
    * A better design: cache `states` in the data service,
    * load them in the AppComponent,
    * and retrieve synchronously here.
    */
  ngOnInit() {
    const previousState = this.address.state;
    this.address.state = undefined;

    this.dataService.getStates()
      .subscribe(states => {
        this.states = states;
        this.address.state = previousState;
      });
  }
}
