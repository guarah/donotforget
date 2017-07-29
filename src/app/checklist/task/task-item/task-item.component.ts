import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';

@Component({
  selector: 'df-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task = new Task(0, 'Default', false, 0);

  constructor() { }

  ngOnInit() {
  }

}
