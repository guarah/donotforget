import { Task } from 'app/checklist/task/task';

export class Checklist {
    id: number;
    name: string;
    tasks: Task[];

    constructor(name: string) {
        this.name = name;
        this.id = 0;
        this.tasks = [];
    }
}
