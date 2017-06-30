import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskEditComponent } from 'app/task/task-edit/task-edit.component';
import { TaskItemComponent } from 'app/task/task-item/task-item.component';
import { TaskListComponent } from 'app/task/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent
  ]
})
export class TaskModule { }
