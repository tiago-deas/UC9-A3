import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente!: FormGroup;  
  
  public mensagem!: string;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cliente());
    this.mensagem! = "Parabéns! Cadastro Realizado com Sucesso!"
  }
  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      sobrenome: new FormControl(cliente.sobrenome),
      email: new FormControl(cliente.email),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      cep: new FormControl(cliente.cep),
      cidade: new FormControl(cliente.cidade),
      estado: new FormControl(cliente.estado),
      pais: new FormControl(cliente.pais),
      rua: new FormControl(cliente.rua),
      numero: new FormControl(cliente.numero),
      senha: new FormControl(cliente.senha)      
    })
  }
  onSubmit() {      
         

    if (this.formCliente.value.length  === 0){
      window.alert("Por Favor, preencha todos os campos")
      return false;     
    }else{
      window.alert("Cadastro Realizado com Sucesso!")
      document.location.href="login"
      return true;
    }   
    
  
     
    this.createForm(new Cliente());
  } 
  
 

}
