import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChecklistComponent } from 'app/checklist/checklist.component';
import { ChecklistService } from 'app/checklist/checklist.service';
import { ComponentsModule } from 'app/lib/components/components.module';
import { PanelComponent } from 'app/checklist/panel/panel.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    ChecklistComponent,
    PanelComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  exports: [
    ChecklistComponent
  ],
  providers: [
    ChecklistService
  ]
})
export class ChecklistModule { }
