import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';
import { ChecklistPanelComponent } from 'app/checklist/checklist-panel/checklist-panel.component';
import { ChecklistPageComponent } from 'app/checklist/checklist-page/checklist-page.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    ChecklistPanelComponent,
    ChecklistPageComponent,
    TaskItemComponent,
    TaskEditComponent
  ],
  exports: [
    TaskListComponent,
    ChecklistPanelComponent,
    ChecklistPageComponent,
    TaskItemComponent,
    TaskEditComponent
  ]
  // providers:    [ ...Service ]
})
export class ChecklistModule { }
