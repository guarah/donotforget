import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'df-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
