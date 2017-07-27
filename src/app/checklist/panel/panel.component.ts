import { Component, OnInit } from '@angular/core';

import { Checklist } from 'app/checklist/checklist';

@Component({
  selector: 'df-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  checklists: Array<Checklist>;

  constructor() { }

  ngOnInit() {
    this.loadChecklists();
  }

  loadChecklists() {
    this.checklists = [
      new Checklist('CheckList 1'),
      new Checklist('CheckList 2'),
      new Checklist('CheckList 3'),
      new Checklist('CheckList 4'),
      new Checklist('CheckList 5'),
      new Checklist('CheckList 6')
    ]
  }

  selectChecklist(checklist: Checklist) {
    alert(checklist.name);
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
