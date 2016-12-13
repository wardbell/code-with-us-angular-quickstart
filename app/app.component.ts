import {
  Component, ComponentFactoryResolver, Directive, ViewContainerRef
} from '@angular/core';

import { Location }       from '@angular/common';
import { Router, Routes } from '@angular/router';

import { AppComponent as C01Component }   from './chapter-01/app.component';
import { AppComponent as C02Component }   from './chapter-02/app.component';
import { AppComponent as C02ecComponent } from './chapter-02-exercise-completed/app.component';
import { AppComponent as C03Component }   from './chapter-03/app.component';
import { AppComponent as C03ecComponent } from './chapter-03-exercise-completed/app.component';
import { AppComponent as C04Component }   from './chapter-04/app.component';
import { AppComponent as C05Component }   from './chapter-05/app.component';
import { AppComponent as C06Component }   from './chapter-06/app.component';
import { AppComponent as C06ecComponent } from './chapter-06-exercise-completed/app.component';
import { AppComponent as C07Component }   from './chapter-07/app.component';
import { AppComponent as C07ecComponent } from './chapter-07-exercise-completed/app.component';
import { AppComponent as C08Component }   from './chapter-08/app.component';
import { AppComponent as C09Component }   from './chapter-09/app.component';
import { AppComponent as C09ecComponent } from './chapter-09-exercise-completed/app.component';
import { AppComponent as C10Component }   from './chapter-10/app.component';
import { AppComponent as C11Component }   from './chapter-11/app.component';
import { AppComponent as C12Component }   from './chapter-12/app.component';
import { AppComponent as C12ecComponent } from './chapter-12-exercise-completed/app.component';
import { AppComponent as C13Component }   from './chapter-13/app.component';

const noRoutes: Routes = [];

// chapters: chapter components, some of which which have routes
const chapters = [
  /* 1*/ { title: 'Chapter 1: Install QuickStart', component: C01Component, routes: noRoutes },
  /* 2*/ { title: 'Chapter 2: Simple binding', component: C02Component, routes: noRoutes },
  /* 3*/ { title: 'Chapter 2: Simple binding exercise (completed)', component: C02ecComponent, routes: noRoutes },
  /* 4*/ { title: 'Chapter 3: Two-way binding', component: C03Component, routes: noRoutes },
  /* 5*/ { title: 'Chapter 3: Two-way binding exercise (completed)', component: C03ecComponent, routes: noRoutes },
  /* 6*/ { title: 'Chapter 4: Model', component: C04Component, routes: noRoutes },
  /* 7*/ { title: 'Chapter 5: Template file', component: C05Component, routes: noRoutes },
  /* 8*/ { title: 'Chapter 6: List binding', component: C06Component, routes: noRoutes },
  /* 9*/ { title: 'Chapter 6: List binding exercise (completed)', component: C06ecComponent, routes: noRoutes },
  /*10*/ { title: 'Chapter 7: Multiple components and @Input:', component: C07Component, routes: noRoutes },
  /*11*/ { title: 'Chapter 7: Multiple components exercise (completed)', component: C07ecComponent, routes: noRoutes },
  /*12*/ { title: 'Chapter 8: @Output', component: C08Component, routes: noRoutes },
  /*13*/ { title: 'Chapter 9: Services and DI', component: C09Component, routes: noRoutes },
  /*14*/ { title: 'Chapter 9: Services exercise (completed)', component: C09ecComponent, routes: noRoutes },
  /*15*/ { title: 'Chapter 10: Async with promises', component: C10Component, routes: noRoutes },
  /*16*/ { title: 'Chapter 11: Async with observables', component: C11Component, routes: noRoutes },
  /*17*/ { title: 'Chapter 12: Http', component: C12Component, routes: noRoutes },
  /*18*/ { title: 'Chapter 12: Http exercise (completed)', component: C12ecComponent, routes: noRoutes },
  /*19*/ { title: 'Chapter 13: Http update (bonus)', component: C13Component, routes: noRoutes },
];

@Directive( {selector: '[chapterView]'})
export class ChapterViewDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'my-app',
  template: `
    <label>Chapter to run:
      <select [value]="currentChapter" (change)="onChapterChange($event.target.selectedIndex)">
        <option *ngFor="let chapter of chapters">{{chapter.title}}</option>
      </select>
    </label>
    <hr>
    <div chapterView></div>`
})
export class AppComponent {

  chapters = chapters;
  currentChapterIx = 0;

  get currentChapter() { return chapters[this.currentChapterIx].title; }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
      // Set initial view
      const resetRouterConfig = true;
      this.onChapterChange(this.currentChapterIx, resetRouterConfig);
    }

  onChapterChange(index: number, resetRouterConfig = true) {
    this.currentChapterIx = index;
    const {component, routes} = chapters[index];
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
