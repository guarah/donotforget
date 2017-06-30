import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChecklistPageComponent } from './checklist-page.component';
import { ChecklistPanelComponent } from 'app/checklist/checklist-panel/checklist-panel.component';
import { TaskModule } from 'app/task/task.module';

describe('EventsPageComponent', () => {
  let component: ChecklistPageComponent;
  let fixture: ComponentFixture<ChecklistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChecklistPageComponent,
        ChecklistPanelComponent,
      ],
      imports: [
        FormsModule,
        TaskModule
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
