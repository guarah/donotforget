import { Component, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';


@Component({
  selector: 'df-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  eventName = 'Event name';
  addMode = false;

  constructor() { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = [];
  }

  onAddEvent(event) {
    this.tasks.push(event);
    this.addMode = false;
  }

  onCancelEvent(event) {
    alert('- ' + event);
    this.addMode = false;
  }

}
