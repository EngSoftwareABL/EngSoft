import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVeiculosComponent } from './reserva-veiculos.component';

describe('ReservaVeiculosComponent', () => {
  let component: ReservaVeiculosComponent;
  let fixture: ComponentFixture<ReservaVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaVeiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
