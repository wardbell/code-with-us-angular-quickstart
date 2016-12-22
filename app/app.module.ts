import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppModule as C01Module }   from './section-01/app.module';
import { AppModule as C02Module }   from './section-02/app.module';
import { AppModule as C02ecModule } from './section-02-exercise-completed/app.module';
import { AppModule as C03Module }   from './section-03/app.module';
import { AppModule as C03ecModule } from './section-03-exercise-completed/app.module';
import { AppModule as C04Module }   from './section-04/app.module';
import { AppModule as C05Module }   from './section-05/app.module';
import { AppModule as C06Module }   from './section-06/app.module';
import { AppModule as C06ecModule } from './section-06-exercise-completed/app.module';
import { AppModule as C07Module }   from './section-07/app.module';
import { AppModule as C07ecModule } from './section-07-exercise-completed/app.module';
import { AppModule as C08Module }   from './section-08/app.module';
import { AppModule as C09Module }   from './section-09/app.module';
import { AppModule as C09ecModule } from './section-09-exercise-completed/app.module';
import { AppModule as C10Module }   from './section-10/app.module';
import { AppModule as C11Module }   from './section-11/app.module';
import { AppModule as C12Module }   from './section-12/app.module';
import { AppModule as C12ecModule } from './section-12-exercise-completed/app.module';
import { AppModule as C13Module }   from './section-13/app.module';


import { AppComponent, SectionViewDirective } from './app.component';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // <-- for future routing features

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
    C12Module, C12ecModule,
    C13Module,

    // By making this the last thing that we import,
    // it always overrides whatever in memory data a previous module loaded
    InMemoryWebApiModule.forRoot(InMemoryDataService) // <-- register in-mem-web-api and its data
  ],

  declarations: [AppComponent, SectionViewDirective],
  // entryComponents: would list the dynamically loaded components
  // for AOT/dead-code-removal but not needed for this JIT-only harness
  bootstrap: [AppComponent]
})
export class AppModule { }
