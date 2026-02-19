import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroProdutoComponent } from './tela-cadastro-produto.component';

describe('TelaCadastroProdutoComponent', () => {
  let component: TelaCadastroProdutoComponent;
  let fixture: ComponentFixture<TelaCadastroProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
