import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'df-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addEvent.emit('added')
  }
  cancel() {
    this.cancelEvent.emit('canceled');
  }

}
