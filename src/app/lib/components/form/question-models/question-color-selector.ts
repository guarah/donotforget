import { QuestionBase } from './question-base';

export class ColorQuestion extends QuestionBase<string> {
  controlType = 'color';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || 'color';
  }
}

enum ColorType {
  selector = 0,
  picker
}
