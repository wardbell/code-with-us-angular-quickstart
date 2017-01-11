import {
  Component, ComponentFactoryResolver, Directive, ViewContainerRef
} from '@angular/core';

import { Location }       from '@angular/common';
import { Router, Routes } from '@angular/router';

import { AppComponent as C01Component }   from './lesson-01/app.component';
import { AppComponent as C02Component }   from './lesson-02/app.component';
import { AppComponent as C02ecComponent } from './lesson-02-exercise-completed/app.component';
import { AppComponent as C03Component }   from './lesson-03/app.component';
import { AppComponent as C03ecComponent } from './lesson-03-exercise-completed/app.component';
import { AppComponent as C04Component }   from './lesson-04/app.component';
import { AppComponent as C05Component }   from './lesson-05/app.component';
import { AppComponent as C06Component }   from './lesson-06/app.component';
import { AppComponent as C06ecComponent } from './lesson-06-exercise-completed/app.component';
import { AppComponent as C07Component }   from './lesson-07/app.component';
import { AppComponent as C07ecComponent } from './lesson-07-exercise-completed/app.component';
import { AppComponent as C08Component }   from './lesson-08/app.component';
import { AppComponent as C09Component }   from './lesson-09/app.component';
import { AppComponent as C09ecComponent } from './lesson-09-exercise-completed/app.component';
import { AppComponent as C10Component }   from './lesson-10/app.component';
import { AppComponent as C11Component }   from './lesson-11/app.component';
import { AppComponent as C12Component }   from './lesson-12/app.component';
import { AppComponent as C12ecComponent } from './lesson-12-exercise-completed/app.component';
import { AppComponent as C13Component }   from './lesson-13/app.component';

const noRoutes: Routes = [];

// lessons: lesson components, some of which which have routes
const lessons = [
  /* 0*/ { title: 'Lesson 1: Install QuickStart', component: C01Component, routes: noRoutes },
  /* 1*/ { title: 'Lesson 2: Simple binding', component: C02Component, routes: noRoutes },
  /* 2*/ { title: 'Lesson 2: Simple binding exercise (completed)', component: C02ecComponent, routes: noRoutes },
  /* 3*/ { title: 'Lesson 3: Two-way binding', component: C03Component, routes: noRoutes },
  /* 4*/ { title: 'Lesson 3: Two-way binding exercise (completed)', component: C03ecComponent, routes: noRoutes },
  /* 5*/ { title: 'Lesson 4: Model', component: C04Component, routes: noRoutes },
  /* 6*/ { title: 'Lesson 5: Template file', component: C05Component, routes: noRoutes },
  /* 7*/ { title: 'Lesson 6: List binding', component: C06Component, routes: noRoutes },
  /* 8*/ { title: 'Lesson 6: List binding exercise (completed)', component: C06ecComponent, routes: noRoutes },
  /* 9*/ { title: 'Lesson 7: Multiple components and @Input:', component: C07Component, routes: noRoutes },
  /*10*/ { title: 'Lesson 7: Multiple components exercise (completed)', component: C07ecComponent, routes: noRoutes },
  /*11*/ { title: 'Lesson 8: @Output', component: C08Component, routes: noRoutes },
  /*12*/ { title: 'Lesson 9: Services and DI', component: C09Component, routes: noRoutes },
  /*13*/ { title: 'Lesson 9: Services exercise (completed)', component: C09ecComponent, routes: noRoutes },
  /*14*/ { title: 'Lesson 10: Async with promises', component: C10Component, routes: noRoutes },
  /*15*/ { title: 'Lesson 11: Async with observables', component: C11Component, routes: noRoutes },
  /*16*/ { title: 'Lesson 12: Http', component: C12Component, routes: noRoutes },
  /*17*/ { title: 'Lesson 12: Http exercise (completed)', component: C12ecComponent, routes: noRoutes },
  /*18*/ { title: 'Lesson 13: Http update (bonus)', component: C13Component, routes: noRoutes },
];

@Directive( {selector: '[lessonView]'})
export class LessonViewDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'my-app',
  template: `
    <label>Lesson to run:
      <select [value]="currentLessonIx" (change)="onLessonChange($event.target.selectedIndex)">
        <option *ngFor="let lesson of lessons; let i = index" [value]="i">{{lesson.title}}</option>
      </select>
    </label>
    <hr>
    <div lessonView></div>`
})
export class AppComponent {

  lessons = lessons;
  currentLessonIx = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
      // Set initial view
      const resetRouterConfig = true;
      this.onLessonChange(this.currentLessonIx, resetRouterConfig);
    }

  onLessonChange(index: number, resetRouterConfig = true) {
    this.currentLessonIx = index;
    const {component, routes} = lessons[index];
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
