import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChecklistComponent } from 'app/checklist/checklist.component';
import { ChecklistPanelComponent } from 'app/checklist/checklist-panel/checklist-panel.component';
import { TaskEditComponent } from 'app/checklist/task/task-edit/task-edit.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';

const componentes = [
  ChecklistComponent,
  ChecklistPanelComponent,
  TaskEditComponent,
  TaskItemComponent,
  TaskListComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...componentes
  ],
  exports: [
    ...componentes
  ]
})
export class ChecklistModule { }
