import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Checklist } from 'app/checklist/checklist';

@Injectable()
export class ChecklistService {

  private selectedChecklist = new Subject<Checklist>();

  selectedChecklist$ = this.selectedChecklist.asObservable();

  selectChecklist(checklist: Checklist) {
    this.selectedChecklist.next(checklist);
  }

  constructor() { }

}
