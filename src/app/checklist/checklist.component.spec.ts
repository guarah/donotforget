import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChecklistComponent } from './checklist.component';
import { PanelComponent } from 'app/checklist/panel/panel.component';
import { EditComponent } from 'app/checklist/task/edit/edit.component';
import { TaskItemComponent } from 'app/checklist/task/task-item/task-item.component';
import { TaskListComponent } from 'app/checklist/task/task-list/task-list.component';

describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChecklistComponent,
        PanelComponent,
        EditComponent,
        TaskItemComponent,
        TaskListComponent
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
