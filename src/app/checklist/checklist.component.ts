import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from 'app/checklist/checklist';
import { Task } from "app/checklist/task/task";

@Component({
  selector: 'df-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public checklists: FirebaseListObservable<any>;

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) {
    this.checklists = db.list('/checklists', { preserveSnapshot: true });

    // const checklists = new Array<Checklist>();

    this.checklists.subscribe(snapshots => {
      // snapshots.forEach(snapshot => {
      //   const checklist = new Checklist();
      //   checklist.id = snapshot.key;
      //   checklist.name = (snapshot.val() as Checklist).name;
      //   // console.log('check snap value', snapshot.val())
      //   snapshot.child('tasks').forEach(x => {
      //     const task: Task = x.val();
      //     checklist.tasks.push(task);
      //     // console.log('task value', x.val())
      //   });
      //   checklists.push(checklist);
    });

    // console.log('checklists', checklists);
  }

  ngOnInit() {
    // this.db.database.ref('/checklists').on('value', (snapshot) => {
    //   this.checklistService.loadChecklists(snapshot);
    // });
    // debugger;
    // this.checklists = this.db.object('/checklists');
    // this.checklistService.loadChecklists(this.checklists);
  }

}
