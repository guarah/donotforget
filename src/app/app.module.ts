import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

import { ChecklistModule } from 'app/checklist/checklist.module';
import { SharedModule } from 'app/shared/shared.module';
import { PageComponent } from 'app/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    ChecklistModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
