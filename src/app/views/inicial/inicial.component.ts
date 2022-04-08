import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  listaUsuarios = [] as User[]

  ngOnInit(): void {
    this.carregarUsuarios()
  }

  carregarUsuarios() {
    this.usuariosService.getUsuarios().subscribe( (usuariosRecebidos: User[]) => {
      this.listaUsuarios = usuariosRecebidos;
      console.log(this.listaUsuarios);
    } )
  }
  

}
