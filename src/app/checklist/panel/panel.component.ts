import { MdSnackBar } from '@angular/material';
import { ColorQuestion } from './../../lib/components/form/question-models/question-color-selector';
import { TextboxQuestion } from './../../lib/components/form/question-models/question-textbox';
import { QuestionBase } from './../../lib/components/form/question-models/question-base';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Checklist } from 'app/checklist/models/checklist';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  public addMode = false;
  public checklists: FirebaseListObservable<Checklist[]>;

  public questions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'name',
      label: 'Checklist name...',
      value: '',
      required: true,
      order: 1
    }),
    new ColorQuestion({
      key: 'color',
      label: 'color',
      value: '#673ab7',
      required: true,
      order: 2
    })
  ];

  constructor(
    private checklistService: ChecklistService,
    private db: AngularFireDatabase,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MdSnackBar
  ) {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.checklists = db.list(`/checklists/${user.uid}`);
       }
    });
  }

  ngOnInit(): void {
    this.checklistService.deletedChecklist$.subscribe(c => {
      this.deleteChecklist(c);
    });
  }

  selectChecklist(checklist: FirebaseObjectObservable<Checklist>) {
    this.checklistService.selectChecklist(checklist);
  }

  deleteChecklist(checklist: FirebaseObjectObservable<Checklist>) {
    if (this.checklists) {
      this.checklists.remove(checklist['$key']);
      const snackBarRef = this.snackBar.open('Checklist deleted', 'Undo', {
        duration: 3000
      });
      // TODO: Undo
    }
  }

  editChecklist(checklist: FirebaseObjectObservable<Checklist>) {
    // this.checklistService.selectChecklist(checklist);
  }

  addChecklist() {
    this.addMode = true;
  }

  onSubmitted(event) {
    const checklist = this.checklists.push(event);
    event.$key = checklist.key;
    this.checklistService.addCheckList(event);
    const snackBarRef = this.snackBar.open('New checklist added', null, {
      duration: 3000
    });
  }

  onCancel(event) {
    this.addMode = false;
  }

}
