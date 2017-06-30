export class Task {
  id: number;
  description: string;
  checked: boolean;
  checklistId: number;

  constructor(description: string) {
    this.id = Math.round(Math.random() * 100);
    this.description = description;
    this.checked = Boolean(Math.round(Math.random()));
    this.checklistId = 1;
  }

}
