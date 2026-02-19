import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { TelaCadastroProdutoComponent } from './telas/tela-cadastro-produto/tela-cadastro-produto.component';
import { TelaCadastroPedidoComponent } from './telas/tela-cadastro-pedido/tela-cadastro-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaCadastroProdutoComponent,
    TelaCadastroPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
