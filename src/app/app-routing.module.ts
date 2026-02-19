import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TelaInicialComponent} from './telas/tela-inicial/tela-inicial.component';
import {TelaCadastroProdutoComponent} from './telas/tela-cadastro-produto/tela-cadastro-produto.component';
import {TelaCadastroPedidoComponent} from './telas/tela-cadastro-pedido/tela-cadastro-pedido.component';


const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
  },
  {
    path: 'produtos',
    component: TelaCadastroProdutoComponent,
  },
  {
    path: 'pedidos',
    component: TelaCadastroPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
