import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroPedidoComponent } from './tela-cadastro-pedido.component';

describe('TelaCadastroPedidoComponent', () => {
  let component: TelaCadastroPedidoComponent;
  let fixture: ComponentFixture<TelaCadastroPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
