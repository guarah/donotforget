import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChecklistPageComponent } from './checklist-page.component';

import { ChecklistPanelComponent } from 'app/checklist/checklist-panel/checklist-panel.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskEditComponent } from 'app/checklist/task/task-edit/task-edit.component';

describe('EventsPageComponent', () => {
  let component: ChecklistPageComponent;
  let fixture: ComponentFixture<ChecklistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChecklistPageComponent,
        ChecklistPanelComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskEditComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
