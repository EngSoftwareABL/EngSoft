import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVeiculoComponent } from './reserva-veiculos.component';

describe('ReservaVeiculosComponent', () => {
  let component: ReservaVeiculoComponent;
  let fixture: ComponentFixture<ReservaVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaVeiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
