export interface Produto{
  id: number;
  nome: string;
  estoque: number;
  preco: number;
  statusProduto: string;
}
export interface Page<T>{
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface Filtro{
  page: number;
  size: number;
  sort: string;
}
export interface NumeroDto {
  number: number;
}

export interface ProdutosInfos{
  baixoEstoque: NumeroDto;
  emEstoque: NumeroDto;
  total: NumeroDto;
}

export interface ListaDeProdutos{
  produtoInfos: ProdutosInfos;
  produtosListados: Page<Produto>;
}

export interface ProdutoResposnse{
  estoque: number;
  id: number;
  nome: string;
  preco: number;
  statusProduto: string;
}
export interface ProdutoCadastro{
  nome: string;
  preco: number;
  estoque: number;
  statusProduto: string;
}

export interface ProdutoEditado{
  nome: string;
  preco: number;
  statusProduto: string;
  estoque: number;
}

