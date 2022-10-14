import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncAgendaService {
  public contatoSelecionado : any
  public contatoPadrao = false
  
  
  private todosContatos = [
    {id: 1, nome: "Dona Márcia", telefone: 99913-2437},
    {id: 2, nome: "Zé", telefone: 99264-6020},
    {id: 3, nome: "Alex 24H", telefone: 99856-6956}
  ]

  constructor() { }
  enviar_id(id:number){
    const dados_selecionados = this.todosContatos.filter(todosContatos => todosContatos.id === id )
    console.log(dados_selecionados[0])
    return dados_selecionados[0]
    
  }
  enviar_vetor() {
    return this.todosContatos
  }
}
