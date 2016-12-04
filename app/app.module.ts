import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppModule as Final }      from './final/app.module';
import { AppModule as C01Module }   from './chapter-01/app.module';
import { AppModule as C01ecModule } from './chapter-01-exercise-completed/app.module';
import { AppModule as C08Module }   from './chapter-08/app.module';
import { AppModule as C09Module }   from './chapter-09/app.module';

import { AppComponent, ChapterViewDirective } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    Final,
    C01Module,
    C01ecModule,
    C08Module,
    C09Module,
 ],

  declarations: [ AppComponent, ChapterViewDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
