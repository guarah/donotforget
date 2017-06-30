import { Component, OnInit } from '@angular/core';
import { Checklist } from 'app/checklist/checklist';

@Component({
  selector: 'app-checklist-panel',
  templateUrl: './checklist-panel.component.html',
  styleUrls: ['./checklist-panel.component.css']
})
export class ChecklistPanelComponent implements OnInit {

  checklists: Array<Checklist>;

  constructor() { }

  ngOnInit() {
    this.loadChecklists();
  }

  loadChecklists() {
    this.checklists = [
      new Checklist('CheckList 1'),
      new Checklist('CheckList 2'),
      new Checklist('CheckList 3'),
      new Checklist('CheckList 4'),
      new Checklist('CheckList 5'),
      new Checklist('CheckList 6')
    ]
  }

  selectChecklist(checklist: Checklist) {
    alert(checklist.name);
  }

}
