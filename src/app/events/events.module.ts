import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from 'app/events/task-list/task-list.component';
import { EventsPanelComponent } from 'app/events/events-panel/events-panel.component';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    EventsPanelComponent,
    EventsPageComponent
  ],
  exports: [
    TaskListComponent,
    EventsPanelComponent,
    EventsPageComponent
  ]
  // providers:    [ ...Service ]
})
export class EventsModule { }
