import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-adicionar-produto',
  templateUrl: './modal-adicionar-produto.component.html',
  styleUrls: ['./modal-adicionar-produto.component.css']
})
export class ModalAdicionarProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }



}
