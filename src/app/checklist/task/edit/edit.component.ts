import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'app/checklist/task/task';

@Component({
  selector: 'df-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  taskModel = new Task(0, '', false, 0);
  submitted: false;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.addEvent.emit(this.taskModel);
  }

  onCancel() {
    this.cancelEvent.emit('canceled');
  }

}
