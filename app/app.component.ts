import { Component } from '@angular/core';
import { Location }  from '@angular/common';
import { Router }    from '@angular/router';

import { routes as finalRoutes }  from './final/app-routing.module';
import { routes as step98Routes } from './step-98/app.module';
import { routes as step99Routes } from './step-99/app.module';

// Steps which have routes and their routes
const stepRoutes = {
    'Final' : finalRoutes,
    'Step 98': step98Routes,
    'Step 99': step99Routes,
};

// Todo: Inject components dynamically rather than list them in template

@Component({
  selector: 'my-app',
  template: `
    Step to run:
    <select [value]="step" (change)="onStepChange($event.target.value)">
      <option *ngFor="let step of steps">{{step}}</option>
    </select>
    <hr>
    <final   *ngIf="isVisible('Final')"></final>
    <step-0  *ngIf="isVisible('Step 0')"></step-0>
    <step-1  *ngIf="isVisible('Step 1')"></step-1>
    <step-98 *ngIf="isVisible('Step 98')"></step-98>
    <step-99 *ngIf="isVisible('Step 99')"></step-99>
  `
})
export class AppComponent {

  steps = [
    'Final',
    'Step 0',
    'Step 1',
    'Step 98',
    'Step 99',
  ];

  step = this.steps[0];

  constructor(private router: Router, private location: Location) { }

  isVisible(step: string) { return step === this.step; }

  onStepChange(step: string) {
    this.step = step;
    this.location.go('/');

    const routes = stepRoutes[this.step];

    if (routes) {
      // Re-configure the router with routes for this step
      this.router.resetConfig(routes);

      // Crashes if go from routed component to routed component
      // but if pass briefly through non-routed component, all is well (weird)
      const trueStep = this.step;
      this.step = 'nada'; // non-routed component
      setTimeout(() => this.step = trueStep, 0);
    }
  }

}
