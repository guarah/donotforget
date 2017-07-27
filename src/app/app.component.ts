import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }


// TODO:

// definir o prefixo 'app'

// ter um wrap pro content dentro do home como app-view?
// edit deveria ser um cara dentro do item?
// já, e que tbm deveria ser dentro da lista, ou entao passar estes componetnes para geneticos, acho q nao

// toda minha logica de salvar uma nova task para o checklist pode ser feita
// em um service de dentro do checklist block component
// disparos do service
// oncreateTask, ondeletetask ...

// atom components -> sao componetes unicos, responsaveis por fazer apenas uma coisa,
// que podem ser usados por toda aplicacao, serao geralmente usados para compor block components

// block components -> composicao de atom componetnes

// cada componete age individualmente, sem ninguem interferir diretamente nele,
// e ele tbm nao pode interferir em nenhum outro componente, ele apenas faz suas coisas, 
// interage com servios, e fala, dispara seus eventos.

// outro componente com este mesmo comportamento, pode fazer as mesmas coisas, e ouvir o que o 
// componente anteriro falou, emitiu, e vice versa.


