import { Component, OnInit } from '@angular/core';

import { Checklist } from 'app/checklist/checklist';
import { FormEdit } from 'app/lib/components/form-edit/formEdit';
import { ChecklistService } from 'app/checklist/checklist.service';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  fields = [{label: 'Checklist name...', field: 'name', type: 'text'}];
  formEdit = new FormEdit(this.fields, 'Salvar', 'Cancelar');

  addMode = false;

  checklists: Array<Checklist>;
  checklistModel;

  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {
    this.loadChecklists();
  }

  loadChecklists() {
    this.checklists = [];
  }

  selectChecklist(checklist: Checklist) {
    this.checklistService.selectChecklist(checklist);
    // chamar uma funcao do service, que avida item selecionado
  }

  addChecklist() {
    this.addMode = true;
    this.checklistModel = new Checklist('');
  }

  onAddEvent(event) {
    // aqui tera uma funcao pro service, passando a task para ser salva por uma req pro node
    // entao ouvir o on add e dar um feedback, ou usar promessas ou streams

    // pesquisar se os nomes devem ser panel ou checklist-panel
    this.checklists.push(event);
    this.addMode = false;
  }

  onCancelEvent(event) {
    this.addMode = false;
  }

}

// TODO:

// PANEL: esse componente pode ser reusado pra tudo,
// basta ele receber um array, e uma prorpiedade de label,
// e uma funcao para o click deste item

// o edit do task tbm vai ser atomic, tal como o item e o list

// itens atomicos devem ficar em uma pasta atomica,
// nao pode estar dentro de uma pasta de um componente
// especifico

// tasklist e o panel seráo quase os mesmo caras, pucas alteracoes, isso vai ficar mais claro quando
// alterar o design para uma list abrr por cima da outra/
