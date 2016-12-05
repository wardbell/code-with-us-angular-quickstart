import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppModule as Final }       from './final/app.module';
import { AppModule as C01Module }   from './chapter-01/app.module';
import { AppModule as C02Module }   from './chapter-02/app.module';
import { AppModule as C02ecModule } from './chapter-02-exercise-completed/app.module';
import { AppModule as C03Module }   from './chapter-03/app.module';
import { AppModule as C03ecModule } from './chapter-03-exercise-completed/app.module';
import { AppModule as C04Module }   from './chapter-04/app.module';
import { AppModule as C05Module }   from './chapter-05/app.module';
import { AppModule as C08Module }   from './chapter-08/app.module';
import { AppModule as C09Module }   from './chapter-09/app.module';

import { AppComponent, ChapterViewDirective } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    Final,
    C01Module,
    C02Module, C02ecModule,
    C03Module, C03ecModule,
    C04Module,
    C05Module,
    C08Module,
    C09Module,
 ],

  declarations: [ AppComponent, ChapterViewDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
