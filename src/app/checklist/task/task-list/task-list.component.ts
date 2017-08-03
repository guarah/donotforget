import { Component, OnInit } from '@angular/core';
import { Task } from 'app/checklist/task/task';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { ChecklistService } from 'app/checklist/checklist.service';


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
    this.loadTasks();

    // criar o service checklist, colocar os subscribers la para mocks
    // ai, esta parte fica ok só dependendo daquela para a comu comunicacao o server
    this.checklistService.selectedChecklist$.subscribe((data) => {
      console.log('from service', data);
    });

  }

  // será chamado pelo subscribe de uma req que está no servico
  loadTasks() {
    this.tasks = [];
  }

  addTask() {
    this.addMode = true;
    this.taskModel = new Task(0, '', false, 0);
  }

  onAddEvent(event) {
    console.log(event);
    // aqui tera uma funcao pro service, passando a task para ser salva por uma req pro node
    // entao ouvir o on add e dar um feedback, ou usar promessas ou streams

    // pesquisar se os nomes devem ser panel ou checklist-panel
    this.tasks.push(event);
    this.addMode = false;
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}
