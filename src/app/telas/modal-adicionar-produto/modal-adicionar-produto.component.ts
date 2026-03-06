import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-modal-adicionar-produto',
  templateUrl: './modal-adicionar-produto.component.html',
  styleUrls: ['./modal-adicionar-produto.component.css']
})
export class ModalAdicionarProdutoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private form: FormBuilder, private service: ServiceService
  ) { }

  ngOnInit(): void {

    this.formulario = this.form.group({
      nome: ['', Validators.required],
      preco: [ Validators.required],
      estoque: [ Validators.required],
      statusProduto: ['', Validators.required]
    });
  }

  close(){
    this.service.cadastrarProduto(this.formulario.value).subscribe({
      next: data => {
        this.formulario.reset();
      },
      error: error => {
        console.log(error);
      }
    });
  }





}
