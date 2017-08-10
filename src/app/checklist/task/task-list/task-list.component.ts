import { Component, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { ChecklistService } from 'app/checklist/checklist.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Checklist } from "app/checklist/checklist";


@Component({
  selector: 'df-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  taskModel;

  fields = [{label: 'Task...', field: 'description', type: 'text'}];
  formEdit = new FormEdit(this.fields, 'Salvar', 'Cancelar');

  eventName = 'Event name';
  addMode = false;

  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {
    this.checklistService.selectedChecklist$.subscribe((checklist) => {
      this.tasks = (checklist as Checklist).tasks.filter(x => x !== undefined )
      // console.log('from selectedChecklist', checklist);
      // this.loadTasks(checklist);
    });

    this.checklistService.addedChecklist$.subscribe((data) => {
      console.log('from addedChecklist', data);
    });
  }

  // será chamado pelo subscribe de uma req que está no servico
  loadTasks(tasks) {
    this.tasks = tasks;
  }

  selectTask(task: Task) {
    this.checklistService.selectTask(task);
    this.checklistService.checkTask(task);
  }

  addTask() {
    this.addMode = true;
    this.taskModel = new Task();
  }

  // salvar checklists
  // colocar chamadas de firebase no lugar correto
  // fazer funcionar edi;óes de tasks, tal como setado pra done
  // relacionamento das tasks com os checklists

  onAddEvent(event) {
    // aqui tera uma funcao pro service, passando a task para ser salva por uma req pro node
    // entao ouvir o on add e dar um feedback, ou usar promessas ou streams

    // pesquisar se os nomes devem ser panel ou checklist-panel
    this.tasks.push(event);
    this.addMode = false;
    this.checklistService.addTask(event);
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
