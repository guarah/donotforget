import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChecklistComponent } from 'app/checklist/checklist.component';
import { ComponentsModule } from 'app/lib/components/components.module';
import { PanelComponent } from 'app/checklist/panel/panel.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';

const componentes = [
  ChecklistComponent,
  PanelComponent,
  TaskItemComponent,
  TaskListComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    ...componentes
  ],
  exports: [
    ...componentes
  ]
})
export class ChecklistModule { }
