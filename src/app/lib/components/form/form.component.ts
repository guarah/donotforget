import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-models/question-base';
import { QuestionControlService } from './question-models/question-control.service';

@Component({
  selector: 'df-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ QuestionControlService ]
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Output() submitted = new EventEmitter();
  @Output() cancel = new EventEmitter();

  public form: FormGroup;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.submitted.emit(this.form.value);
  }

  onCancel() {
    this.cancel.emit();
  }

}
