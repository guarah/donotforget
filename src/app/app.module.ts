import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { EventsModule } from 'app/events/events.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
