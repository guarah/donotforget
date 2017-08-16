import { Component, OnInit } from '@angular/core';

import { Checklist } from 'app/checklist/checklist';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { ChecklistService } from 'app/checklist/checklist.service';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  fields = [{label: 'Checklist name...', field: 'name', type: 'text'}];
  formEdit = new FormEdit(this.fields, 'Salvar', 'Cancelar');

  addMode = false;

  checklists: FirebaseListObservable<Checklist[]>;
  checklistModel;

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) {
    this.checklists = db.list('/checklists');
  }

  ngOnInit() {}

  selectChecklist(checklist: FirebaseObjectObservable<Checklist>) {
    this.checklistService.selectChecklist(checklist);
  }

  addChecklist() {
    this.addMode = true;
    this.checklistModel = new Checklist();
  }

  onAddEvent(event) {
    this.addMode = false;
    // this.checklistService.addCheckList(event);
    this.checklists.push(event);
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
