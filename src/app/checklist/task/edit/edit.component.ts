import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from "app/checklist/task/task";

@Component({
  selector: 'df-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  taskModel = new Task('');

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addEvent.emit(this.taskModel);
  }

  cancel() {
    this.cancelEvent.emit('canceled');
  }

}
