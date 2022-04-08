import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  listaProdutos = [] as Produtos[]

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtosService.getProdutos().subscribe( (ProdutosRecebidos: Produtos[]) => {
      this.listaProdutos = ProdutosRecebidos;
      console.log(this.listaProdutos);
    } )
  }

}
