import { Component, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';


@Component({
  selector: 'df-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  taskModel;

  fields = [{label: 'Task...', field: 'description', type: 'text'}];
  formEdit = new FormEdit(this.fields, 'Salvar', 'Cancelar');

  eventName = 'Event name';
  addMode = false;

  constructor() { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = [];
  }

  addTask() {
    this.addMode = true;
    this.taskModel = new Task(0, '', false, 0);
  }

  onAddEvent(event) {
    console.log(event);
    this.tasks.push(event);
    this.addMode = false;
  }

  onCancelEvent(event) {
    alert('- ' + event);
    this.addMode = false;
  }

}
