import { Component, OnInit } from '@angular/core';

import { Checklist } from 'app/checklist/checklist';
import { ChecklistService } from 'app/checklist/checklist.service';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent {

  public addMode = false;
  public checklists: FirebaseListObservable<Checklist[]>;
  public checklistModel;
  public formFields = [{label: 'Checklist name...', field: 'name', type: 'text'}];
  public formEdit = new FormEdit(this.formFields, 'Salvar', 'Cancelar');

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) {
    this.checklists = db.list('/checklists');
  }

  selectChecklist(checklist: FirebaseObjectObservable<Checklist>) {
    this.checklistService.selectChecklist(checklist);
  }

  addChecklist() {
    this.addMode = true;
    this.checklistModel = new Checklist();
  }

  onAddEvent(event) {
    this.addMode = false;
    const checklist = this.checklists.push(event);
    event.$key = checklist.key;
    this.checklistService.addCheckList(event);
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
