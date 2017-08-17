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

  public addMode = false;
  public checkList = new Checklist();
  public cleanButtonVisible = false;

  constructor(private checklistService: ChecklistService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
     this.checklistService.selectedChecklist$.subscribe((checklist) => {
      this.checkList = checklist;
      this.tasks = [];
      this.cleanButtonVisible = false;

      this.tasksObservable = this.db.list('/tasks', {
        query: {
          orderByChild: 'checklist',
          equalTo: checklist.$key
        }
      });

      this.tasksObservable.subscribe(data => {
        this.tasks = data;
        this.cleanButtonVisible = data.length > 0;
      });

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
    this.taskModel = new Task();
  }

  resetCompleted() {
    this.tasks.forEach(t => {
      this.tasksObservable.update(t.$key, {checked: false});
    });
  }

  onAddEvent(task: Task) {
    this.addMode = false;
    if (this.checkList) {
      task.checklist = this.checkList.$key;
      task.checked = false;
      this.tasksObservable.push(task);
    }
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
