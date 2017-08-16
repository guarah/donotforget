import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from 'app/checklist/checklist';
import { Task } from 'app/checklist/task/task';

@Component({
  selector: 'df-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public checklists: FirebaseListObservable<any>;

  constructor(private checklistService: ChecklistService) {
  }

  ngOnInit() {
    // this.checklistService.addedTask$.subscribe((taskAdded) => {
    //   const checklistObservable = this.db.object(`/checklists/${taskAdded.Checklist.$key}`);
    //   if (checklistObservable) {
    //     const tasks = taskAdded.Checklist.tasks || [];
    //     tasks.push(taskAdded.Task);
    //     checklistObservable.update({tasks: tasks});
    //   }
    // });

  }

}
