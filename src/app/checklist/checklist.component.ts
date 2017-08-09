import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from 'app/checklist/checklist';

@Component({
  selector: 'df-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public checklists: FirebaseListObservable<Checklist[]>;

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) { }

  ngOnInit() {
    // this.db.database.ref('/checklists').on('value', (snapshot) => {
    //   this.checklistService.loadChecklists(snapshot);
    // });
    // debugger;
    // this.checklists = this.db.object('/checklists');
    // this.checklistService.loadChecklists(this.checklists);
  }

}
