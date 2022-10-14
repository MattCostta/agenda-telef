import { Component, OnInit } from '@angular/core';
import { FuncAgendaService } from '../func-agenda.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})
export class ListaContatosPage implements OnInit {

  public todosContato : any
  public modoDeInsercao = false
  constructor(
    private dadosContato: FuncAgendaService

  ) {this.todosContato = this.dadosContato.enviar_vetor() }
  
  inserirDados(){
    this.modoDeInsercao = true
  }

  ngOnInit() { 
    
  }

}
