import { QuestionBase } from './question-base';

export class ColorQuestion extends QuestionBase<string> {
  controlType = 'color';
  // type: ColorType;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || 'selector';
  }
}

enum ColorType {
  selector = 0,
  picker
}
