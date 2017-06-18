import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
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
    this.tasks = [
      new Task('Task 1'),
      new Task('Task 2'),
      new Task('Task 1'),
      new Task('Task 2'),
      new Task('Task 1'),
      new Task('Task 2'),
    ]
  }

}

export class Task {
  id: number;
  description: string;
  checked: boolean;
  eventId: number;

  constructor(description: string) {
    this.id = Math.round(Math.random() * 100);
    this.description = description;
    this.checked = Boolean(Math.round(Math.random()));
    this.eventId = 1;
  }

}
