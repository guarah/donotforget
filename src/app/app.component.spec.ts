import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { NavBarComponent } from 'app/nav-bar/nav-bar.component';
import { PageComponent } from 'app/page/page.component';

import { ChecklistModule } from 'app/checklist/checklist.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        PageComponent
      ],
      imports: [
        ChecklistModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
