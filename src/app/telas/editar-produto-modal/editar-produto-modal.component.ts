import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../Service/service.service';
import {Produto} from '../Models/entities.model';

@Component({
  selector: 'app-editar-produto-modal',
  templateUrl: './editar-produto-modal.component.html',
  styleUrls: ['./editar-produto-modal.component.css']
})
export class EditarProdutoModalComponent implements OnInit {

  formulario!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Produto, private fb: FormBuilder, private service: ServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    this.formulario = this.fb.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
      preco: [this.data.preco, Validators.required],
      estoque: [this.data.estoque, Validators.required],
      statusProduto: [this.data.statusProduto, Validators.required]
    });
  }

  editar(){
    console.log(this.data);
    this.service.editarProduto(this.formulario.value).subscribe({
      next: (data) => {
        console.log(data);
        this.dialog.closeAll();
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
