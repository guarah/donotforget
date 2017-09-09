import { Task } from 'app/checklist/models/task';

export class Checklist {
    $key: number;
    id: number;
    name: string;
    tasks: any[];

    constructor(id?: number, name?: string, tasks?: Array<Task>) {
      this.id = id || 0;
      this.name = name || '';
      this.tasks = tasks || new Array<Task>();
    }
}
