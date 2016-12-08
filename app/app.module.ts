import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// import './rxjs-extensions';

import { AppModule as Final }       from './final/app.module';
import { AppModule as C01Module }   from './chapter-01/app.module';
import { AppModule as C02Module }   from './chapter-02/app.module';
import { AppModule as C02ecModule } from './chapter-02-exercise-completed/app.module';
import { AppModule as C03Module }   from './chapter-03/app.module';
import { AppModule as C03ecModule } from './chapter-03-exercise-completed/app.module';
import { AppModule as C04Module }   from './chapter-04/app.module';
import { AppModule as C05Module }   from './chapter-05/app.module';
import { AppModule as C06Module }   from './chapter-06/app.module';
import { AppModule as C06ecModule } from './chapter-06-exercise-completed/app.module';
import { AppModule as C07Module }   from './chapter-07/app.module';
import { AppModule as C07ecModule } from './chapter-07-exercise-completed/app.module';
import { AppModule as C08Module }   from './chapter-08/app.module';
import { AppModule as C09Module }   from './chapter-09/app.module';
import { AppModule as C09ecModule } from './chapter-09-exercise-completed/app.module';
import { AppModule as C10Module }   from './chapter-10/app.module';
import { AppModule as C11Module }   from './chapter-11/app.module';
import { AppModule as C98Module }   from './chapter-98/app.module';
import { AppModule as C99Module }   from './chapter-99/app.module';

import { AppComponent, ChapterViewDirective } from './app.component';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    C06Module, C06ecModule,
    C07Module, C07ecModule,
    C08Module,
    C09Module, C09ecModule,
    C10Module,
    C11Module,
    C98Module,
    C99Module,

    InMemoryWebApiModule.forRoot(InMemoryDataService) // <-- register in-mem-web-api and its data
 ],

  declarations: [ AppComponent, ChapterViewDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
