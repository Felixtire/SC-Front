import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Filtro, ListaDeProdutos, Page, Produto, ProdutoCadastro, ProdutoResposnse} from '../telas/Models/entities.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }


  cadastrarProduto(produto: ProdutoCadastro): Observable<ProdutoCadastro> {
    return this.http.post<ProdutoCadastro>(`${this.apiUrl}produtos`, produto);
  }

  listarProdutos(filtro: Filtro): Observable<ListaDeProdutos>{

    let params = new HttpParams()
      .set('page', filtro.page.toString())
      .set('size', filtro.size.toString());
    if (filtro.sort){
      params = params.set('sort', filtro.sort);
    }
    return this.http.get<ListaDeProdutos>(`${this.apiUrl}produtos`, { params });
  }


  listarProdutosPorNome(nomeP: string): Observable<ProdutoResposnse> {
    const nome = new HttpParams().set('nome', nomeP);
    return this.http.get<ProdutoResposnse>( `${this.apiUrl}produtos/pesquisar`, {params: nome});
  }

  deletarProduto(id: number): Observable<void>{
    const pathVarId = id;
    return this.http.delete<void>(`${this.apiUrl}produtos/${pathVarId}`);
  }

}



