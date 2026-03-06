import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ServiceService} from '../../Service/service.service';
import {Filtro, ListaDeProdutos, Page, Produto, ProdutoResposnse} from '../Models/entities.model';
import {MatDialog} from '@angular/material/dialog';
import {ModalAdicionarProdutoComponent} from '../modal-adicionar-produto/modal-adicionar-produto.component';


@Component({
  selector: 'app-tela-cadastro-produto',
  templateUrl: './tela-cadastro-produto.component.html',
  styleUrls: ['./tela-cadastro-produto.component.css']
})
export class TelaCadastroProdutoComponent implements OnInit {




  displayedColumns: string[] = ['id', 'nome', 'estoque', 'preco', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Produto>();
  total: number;
  emEstoque: number;
  baixoEstoque: number;
   nome: string;

  constructor(private service: ServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarProdutos();

  }

  editar(element) {
    console.log(element);
  }

   deletar(element) {
    console.log(element);
  }

  listarProdutos() {
   const filtro: Filtro = {
      page: 0,
      size: 10,
      sort: ''
   };
   this.service.listarProdutos(filtro)
     .subscribe((page: ListaDeProdutos) => {
        this.dataSource.data = page.produtosListados.content;

        this.total = page.produtoInfos.total.number;
        this.emEstoque = page.produtoInfos.emEstoque.number;
        this.baixoEstoque = page.produtoInfos.baixoEstoque.number;
        console.log(page);

     });
    }
    listarPorNome() {
    console.log(this.nome);

    if (this.nome === '' || !this.nome) {
      this.listarProdutos();
    }

    this.service.listarProdutosPorNome(this.nome)
      .subscribe({
        next: (next: ProdutoResposnse) => {
          console.log('Produto', next);
          this.dataSource.data = [next];
        },
        error: err => {
          console.log('Erro', err);
        }
      });
    }
    limparPesquisa(){
      this.nome = '';
    }

    abrirModal(){
    this.dialog.open(ModalAdicionarProdutoComponent, {
      width: '600px',
      height: '600px',
      data: {nome: 'we'}
    });
    }

  }


