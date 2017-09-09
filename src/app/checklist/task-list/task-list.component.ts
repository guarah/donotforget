import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from 'app/checklist/models/checklist';
import { ChecklistService } from 'app/checklist/checklist.service';
import { QuestionBase } from 'app/lib/components/form/question-models/question-base';
import { Subject } from 'rxjs/Subject';
import { Task } from 'app/checklist/models/task';
import { TextboxQuestion } from 'app/lib/components/form/question-models/question-textbox';


@Component({
  selector: 'df-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];
  tasksObservable: FirebaseListObservable<any[]>;

  public addMode = false;
  public checkList = null;
  public loading = false;
  public noData = true;

  private checklistKey = new Subject();

  public questions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'description',
      label: 'Task description name...',
      value: '',
      required: true,
      order: 1
    }),
  ];

  constructor(
    private checklistService: ChecklistService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {

    this.tasksObservable = this.db.list('/tasks', {
      query: {
        orderByChild: 'checklist',
        equalTo: this.checklistKey
      }
    });

    this.tasksObservable.subscribe(data => {
      this.loading = false;
      this.tasks = data;
      this.noData = data.length === 0;
    });

    this.checklistService.selectedChecklist$.subscribe((checklist) => {
      this.loading = true;
      this.checklistKey.next(checklist.$key);
      this.checkList = checklist;
      this.tasks = [];
      this.noData = false;
    });

    this.checklistService.addedChecklist$.subscribe((data) => {
      this.checklistService.selectChecklist(data);
    });
  }

  selectTask(task) {
    task.checked = !task.checked;
    this.tasksObservable.update(task.$key, task);
    this.checklistService.checkTask(task);
  }

  addTask() {
    this.addMode = true;
  }

  resetCompleted() {
    this.tasks.forEach(t => {
      this.tasksObservable.update(t.$key, {checked: false});
    });
  }

  onSubmitted(task: Task) {
    if (this.checkList) {
      task.checklist = this.checkList.$key;
      task.checked = false;
      this.tasksObservable.push(task);
    }
  }

  onCancel(event) {
    this.addMode = false;
  }

}
