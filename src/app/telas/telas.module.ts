import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelaInicialComponent} from './tela-inicial/tela-inicial.component';
import {TelaCadastroProdutoComponent} from './tela-cadastro-produto/tela-cadastro-produto.component';
import {TelaCadastroPedidoComponent} from './tela-cadastro-pedido/tela-cadastro-pedido.component';



@NgModule({
  declarations: [
    TelaInicialComponent,
    TelaCadastroProdutoComponent,
    TelaCadastroPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TelasModule { }
