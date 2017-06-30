import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChecklistPanelComponent } from 'app/checklist/checklist-panel/checklist-panel.component';
import { ChecklistPageComponent } from 'app/checklist/checklist-page/checklist-page.component';
import { TaskModule } from 'app/task/task.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskModule
  ],
  declarations: [
    ChecklistPanelComponent,
    ChecklistPageComponent
  ],
  exports: [
    ChecklistPanelComponent,
    ChecklistPageComponent
  ]
  // providers:    [ ...Service ]
})
export class ChecklistModule { }
