import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { Task } from 'app/checklist/task/task';

@Component({
  selector: 'df-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();
  @Input() model;
  @Input() formEdit: FormEdit;

  submitted: false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addEvent.emit(this.model);
  }

  onCancel() {
    this.cancelEvent.emit('canceled');
  }

}
