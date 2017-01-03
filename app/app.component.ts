import {
  Component, ComponentFactoryResolver, Directive, ViewContainerRef
} from '@angular/core';

import { Location }       from '@angular/common';
import { Router, Routes } from '@angular/router';

import { AppComponent as C01Component }   from './section-01/app.component';
import { AppComponent as C02Component }   from './section-02/app.component';
import { AppComponent as C02ecComponent } from './section-02-exercise-completed/app.component';
import { AppComponent as C03Component }   from './section-03/app.component';
import { AppComponent as C03ecComponent } from './section-03-exercise-completed/app.component';
import { AppComponent as C04Component }   from './section-04/app.component';
import { AppComponent as C05Component }   from './section-05/app.component';
import { AppComponent as C06Component }   from './section-06/app.component';
import { AppComponent as C06ecComponent } from './section-06-exercise-completed/app.component';
import { AppComponent as C07Component }   from './section-07/app.component';
import { AppComponent as C07ecComponent } from './section-07-exercise-completed/app.component';
import { AppComponent as C08Component }   from './section-08/app.component';
import { AppComponent as C09Component }   from './section-09/app.component';
import { AppComponent as C09ecComponent } from './section-09-exercise-completed/app.component';
import { AppComponent as C10Component }   from './section-10/app.component';
import { AppComponent as C11Component }   from './section-11/app.component';
import { AppComponent as C12Component }   from './section-12/app.component';
import { AppComponent as C12ecComponent } from './section-12-exercise-completed/app.component';
import { AppComponent as C13Component }   from './section-13/app.component';

const noRoutes: Routes = [];

// sections: section components, some of which which have routes
const sections = [
  /* 0*/ { title: 'Section 1: Install QuickStart', component: C01Component, routes: noRoutes },
  /* 1*/ { title: 'Section 2: Simple binding', component: C02Component, routes: noRoutes },
  /* 2*/ { title: 'Section 2: Simple binding exercise (completed)', component: C02ecComponent, routes: noRoutes },
  /* 3*/ { title: 'Section 3: Two-way binding', component: C03Component, routes: noRoutes },
  /* 4*/ { title: 'Section 3: Two-way binding exercise (completed)', component: C03ecComponent, routes: noRoutes },
  /* 5*/ { title: 'Section 4: Model', component: C04Component, routes: noRoutes },
  /* 6*/ { title: 'Section 5: Template file', component: C05Component, routes: noRoutes },
  /* 7*/ { title: 'Section 6: List binding', component: C06Component, routes: noRoutes },
  /* 8*/ { title: 'Section 6: List binding exercise (completed)', component: C06ecComponent, routes: noRoutes },
  /* 9*/ { title: 'Section 7: Multiple components and @Input:', component: C07Component, routes: noRoutes },
  /*10*/ { title: 'Section 7: Multiple components exercise (completed)', component: C07ecComponent, routes: noRoutes },
  /*11*/ { title: 'Section 8: @Output', component: C08Component, routes: noRoutes },
  /*12*/ { title: 'Section 9: Services and DI', component: C09Component, routes: noRoutes },
  /*13*/ { title: 'Section 9: Services exercise (completed)', component: C09ecComponent, routes: noRoutes },
  /*14*/ { title: 'Section 10: Async with promises', component: C10Component, routes: noRoutes },
  /*15*/ { title: 'Section 11: Async with observables', component: C11Component, routes: noRoutes },
  /*16*/ { title: 'Section 12: Http', component: C12Component, routes: noRoutes },
  /*17*/ { title: 'Section 12: Http exercise (completed)', component: C12ecComponent, routes: noRoutes },
  /*18*/ { title: 'Section 13: Http update (bonus)', component: C13Component, routes: noRoutes },
];

@Directive( {selector: '[sectionView]'})
export class SectionViewDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'my-app',
  template: `
    <label>Section to run:
      <select [value]="currentSectionIx" (change)="onSectionChange($event.target.selectedIndex)">
        <option *ngFor="let section of sections; let i = index" [value]="i">{{section.title}}</option>
      </select>
    </label>
    <hr>
    <div sectionView></div>`
})
export class AppComponent {

  sections = sections;
  currentSectionIx = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
      // Set initial view
      const resetRouterConfig = true;
      this.onSectionChange(this.currentSectionIx, resetRouterConfig);
    }

  onSectionChange(index: number, resetRouterConfig = true) {
    this.currentSectionIx = index;
    const {component, routes} = sections[index];
    this.setView(component);
    if (resetRouterConfig) {
      this.router.resetConfig(routes);
      this.location.go('/');
    }
  }

  setView(component?: { new(): any }): void {
    this.viewContainerRef.clear();

    if (component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      this.viewContainerRef.createComponent(factory);
    }
  }
}
