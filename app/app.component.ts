import {
  Component, ComponentFactoryResolver, Directive, ViewContainerRef
} from '@angular/core';

import { Location }       from '@angular/common';
import { Router, Routes } from '@angular/router';

import { AppComponent as FinalComponent } from './final/app.component';
import { AppComponent as C01Component }   from './chapter-01/app.component';
import { AppComponent as C01ecComponent } from './chapter-01-exercise-completed/app.component';
import { AppComponent as C08Component }   from './chapter-08/app.component';
import { AppComponent as C09Component }   from './chapter-09/app.component';

import { routes as finalRoutes } from './final/app-routing.module';
import { routes as c08Routes }   from './chapter-08/app.module';
import { routes as c09Routes }   from './chapter-09/app.module';

const noRoutes: Routes = [];

// chapters: chapter components, some of which which have routes and their routes
const chapters: { [index: string]: { component: any, routes: Routes } } = {

  'Final':    { component: FinalComponent, routes: finalRoutes },
  'Chapter 1': { component: C01Component, routes: noRoutes },
  'Chapter 1: exercise (completed)': { component: C01ecComponent, routes: noRoutes },
  'Chapter 8': { component: C08Component, routes: c08Routes },
  'Chapter 9': { component: C09Component, routes: c09Routes },
};

@Directive( {selector: '[chapterView]'})
export class ChapterViewDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'my-app',
  template: `
    <label>Chapter to run:
      <select (change)="onChapterChange($event.target.value)">
        <option *ngFor="let chapter of chapters">{{chapter}}</option>
      </select>
    </label>
    <hr>
    <div chapterView></div>`
})
export class AppComponent {

  chapters = Object.keys(chapters);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
      this.setView(chapters[this.chapters[0]].component); // Set initial view
    }

  onChapterChange(chapter: string) {
    const {component, routes} = chapters[chapter];
    this.setView(component);
    this.router.resetConfig(routes);
    this.location.go('/');
  }

  setView(component?: { new(): any }): void {
    this.viewContainerRef.clear();

    if (component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      this.viewContainerRef.createComponent(factory);
    }
  }
}
