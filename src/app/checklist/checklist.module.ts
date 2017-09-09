import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Services
import { ChecklistService } from 'app/checklist/checklist.service';
// Modules
import { ComponentsModule } from 'app/lib/components/components.module';
// Components
import { ChecklistComponent } from 'app/checklist/checklist.component';
import { PanelComponent } from 'app/checklist/panel/panel.component';
import { TaskListComponent } from 'app/checklist/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [
    ChecklistComponent,
    PanelComponent,
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
