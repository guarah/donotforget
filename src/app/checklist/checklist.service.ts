import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Checklist } from 'app/checklist/checklist';
import { Task } from 'app/checklist/task/task';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChecklistService {

  private selectedChecklistSource = new Subject<Checklist>();
  private selectedTaskSource = new Subject<Task>();
  private addedChecklistSource = new Subject<Checklist>();
  private addedTaskSource = new Subject<Task>();
  private checkedTaskSource = new Subject<Task>();
  private checklistsSource = new Subject<FirebaseListObservable<Checklist[]>>();

  selectedChecklist$ = this.selectedChecklistSource.asObservable();
  selectedTask$ = this.selectedTaskSource.asObservable();
  addedChecklist$ = this.addedChecklistSource.asObservable();
  addedTask$ = this.addedTaskSource.asObservable();
  checkedTask$ = this.checkedTaskSource.asObservable();
  checklists$ = this.checklistsSource.asObservable();

  selectChecklist(checklist: Checklist) {
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

  loadChecklists() {
    // const checklists = this.db.list('/checklists');
    // this.checklistsSource.next(checklists);
  }

  constructor(private db: AngularFireDatabase) { }

}
