import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EventsPageComponent } from './events-page.component';

import { EventsPanelComponent } from 'app/events/events-panel/events-panel.component';
import { TaskListComponent } from 'app/events/task-list/task-list.component';

describe('EventsPageComponent', () => {
  let component: EventsPageComponent;
  let fixture: ComponentFixture<EventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsPageComponent,
        EventsPanelComponent,
        TaskListComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
