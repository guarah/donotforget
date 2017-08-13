import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Checklist } from 'app/checklist/checklist';
import { Task } from 'app/checklist/task/task';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ChecklistService {

  private selectedChecklistSource = new Subject<any>();
  private selectedTaskSource = new Subject<Task>();
  private addedChecklistSource = new Subject<Checklist>();
  private addedTaskSource = new Subject<Task>();
  private checkedTaskSource = new Subject<Task>();
  private checklistsSource = new Subject<Checklist[]>();

  selectedChecklist$ = this.selectedChecklistSource.asObservable();
  selectedTask$ = this.selectedTaskSource.asObservable();
  addedChecklist$ = this.addedChecklistSource.asObservable();
  addedTask$ = this.addedTaskSource.asObservable();
  checkedTask$ = this.checkedTaskSource.asObservable();
  checklists$ = this.checklistsSource.asObservable();

  selectChecklist(checklist: any) {
    this.selectedChecklistSource.next(checklist);
  }

  selectTask(task: Task) {
    this.selectedTaskSource.next(task);
  }

  addCheckList(checklist: Checklist) {
    this.addedChecklistSource.next(checklist);
  }

  addTask(task: Task) {
    this.addedTaskSource.next(task);
  }

  checkTask(task: Task) {
    this.checkedTaskSource.next(task);
  }

  loadChecklists(checklists) {
  //   const checklists = new Array<Checklist>();

  //   checklistsSnap.forEach(s => {
  //     const checklist: Checklist = s.val();
  //     checklist.tasks = new Array<Task>();

  //     s.child('tasks').forEach(t => {
  //       checklist.tasks.push(t.val());
  //     });

  //     checklists.push(checklist);
  //  });


    this.checklistsSource.next(checklists);
  }

  constructor(private db: AngularFireDatabase) { }

}
