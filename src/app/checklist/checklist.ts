import { Task } from 'app/checklist/task/task';

export class Checklist {
    name: string;
    tasks: Task[];

    constructor(name: string) {
        this.name = name;
        this.tasks = [];
    }
}
