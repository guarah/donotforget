import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { PageComponent } from 'app/page/page.component';
import { ChecklistModule } from 'app/checklist/checklist.module';
import { SharedModule } from 'app/shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageComponent
      ],
      imports: [
        ChecklistModule,
        SharedModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
