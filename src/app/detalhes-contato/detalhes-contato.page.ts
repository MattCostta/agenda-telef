import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncAgendaService } from '../func-agenda.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.page.html',
  styleUrls: ['./detalhes-contato.page.scss'],
})
export class DetalhesContatoPage implements OnInit {

  public contatoSelecionado: any
  public modoDeEdicao = false
  public escolha : string

  userForm : FormGroup
  agenda: any;

  constructor(
    private route: ActivatedRoute,
    private dadoSelecionado: FuncAgendaService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
    this.contatoSelecionado = this.dadoSelecionado.enviar_id(id)
  } else {
    this.contatoSelecionado = {id, nome: "", sobrenome: "", tipoDeTelefone: "", numero: "", email: ""}
    this.modoDeEdicao = true
  }
  this.userForm = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    escolha: [''],
    numero: ['', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])]
  })
}
iniciarEdicao(){
  this.modoDeEdicao = true
}

encerrarEdicao(){
  const id : number = Number(this.route.snapshot.paramMap.get('id'))
  if (id > 0){
    this.modoDeEdicao = false
  }else{
    this.agenda.recebeDados(this.contatoSelecionado)
    this.modoDeEdicao = false
  }
}

excluirContato(){
  this.agenda.excluiDados(this.contatoSelecionado)
  this.router.navigate(['/lista-contatos/'])
}
}
