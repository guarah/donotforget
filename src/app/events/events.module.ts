import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from 'app/events/task-list/task-list.component';
import { EventsPanelComponent } from 'app/events/events-panel/events-panel.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    EventsPanelComponent,
    EventsPageComponent,
    TaskItemComponent,
    TaskEditComponent
  ],
  exports: [
    TaskListComponent,
    EventsPanelComponent,
    EventsPageComponent,
    TaskItemComponent,
    TaskEditComponent
  ]
  // providers:    [ ...Service ]
})
export class EventsModule { }
