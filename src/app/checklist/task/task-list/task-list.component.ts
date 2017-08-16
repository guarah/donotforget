import { Component, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from 'app/checklist/checklist';


@Component({
  selector: 'df-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];
  tasksObservable: FirebaseListObservable<any[]>;
  taskModel;

  fields = [{label: 'Task...', field: 'description', type: 'text'}];
  formEdit = new FormEdit(this.fields, 'Salvar', 'Cancelar');

  public checkList = new Checklist();
  addMode = false;

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
     this.checklistService.selectedChecklist$.subscribe((checklist) => {
      this.checkList = checklist;
      this.tasks = [];

      this.tasksObservable = this.db.list('/tasks', {
        query: {
          orderByChild: 'checklist',
          equalTo: checklist.$key
        }
      });

      // const a = this.tasksObservable.$ref
      // .orderByChild('checklist')
      // .equalTo(checklist.$key)
      // .on('child_added', (snapshot) => {
      //   this.tasks.push(snapshot.val());
      // });

    });

    this.checklistService.addedChecklist$.subscribe((data) => {
      console.log('from addedChecklist', data);
    });
  }

  selectTask(task: Task) {
    this.checklistService.selectTask(task);
    this.checklistService.checkTask(task);
  }

  addTask() {
    this.addMode = true;
    this.taskModel = new Task();
  }

  onAddEvent(task: Task) {
    this.addMode = false;
    if (this.checkList) {
      task.checklist = this.checkList.$key;
      this.tasksObservable.push(task);
    }
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
