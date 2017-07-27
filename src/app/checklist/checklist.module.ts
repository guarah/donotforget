import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChecklistComponent } from 'app/checklist/checklist.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';

import { EditComponent } from 'app/checklist/task/edit/edit.component';
import { PanelComponent } from 'app/checklist/panel/panel.component';

const componentes = [
  ChecklistComponent,
  PanelComponent,
  EditComponent,
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
