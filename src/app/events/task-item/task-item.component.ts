import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'app/events/task-list/task-list.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task = new Task('Default');

  constructor() { }

  ngOnInit() {
  }

}
