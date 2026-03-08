import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelaCadastroProdutoComponent} from './tela-cadastro-produto/tela-cadastro-produto.component';
import {TelaCadastroPedidoComponent} from './tela-cadastro-pedido/tela-cadastro-pedido.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalAdicionarProdutoComponent } from './modal-adicionar-produto/modal-adicionar-produto.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { EditarProdutoModalComponent } from './editar-produto-modal/editar-produto-modal.component';




@NgModule({
  declarations: [
    TelaCadastroProdutoComponent,
    TelaCadastroPedidoComponent,
    ModalAdicionarProdutoComponent,
    EditarProdutoModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,


    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class TelasModule { }
