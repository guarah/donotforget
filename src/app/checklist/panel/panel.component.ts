import { Component, OnInit } from '@angular/core';

import { Checklist } from 'app/checklist/checklist';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  addMode = false;
  checklists: Array<Checklist>;
  checkList = new Checklist('');

  constructor() { }

  ngOnInit() {
    this.loadChecklists();
  }

  loadChecklists() {
    this.checklists = [];
  }

  selectChecklist(checklist: Checklist) {
    alert(checklist.name);
  }

  onAddEvent(event) {
    this.checklists.push(event);
    this.addMode = false;
  }

  onCancelEvent(event) {
    alert('- ' + event);
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
