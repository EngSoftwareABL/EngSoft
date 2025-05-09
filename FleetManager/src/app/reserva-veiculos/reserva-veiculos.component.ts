import { Component } from '@angular/core';
import { ReservaService } from './reserva.service';

@Component({
  selector: 'app-reserva-veiculo',
  templateUrl: './reserva-veiculos.component.html',
  styleUrls: ['./reserva-veiculos.component.css']
})
export class ReservaVeiculoComponent {
  idVeiculo: string = '';
  idUsuario: string = ''; 
  dataInicio: string = '';
  dataFim: string = '';
  tipoUso: string = '';

  constructor(private reservaService: ReservaService) {}

  fazerReserva(): void {
    const reserva = {
      idVeiculo: this.idVeiculo,
      idUsuario: this.idUsuario,
      dataInicio: new Date(this.dataInicio),
      dataFim: new Date(this.dataFim),
      tipoUso: this.tipoUso //+ implementando tipo de uso, como metodo post
    };

    this.reservaService.criarReserva(reserva).subscribe({
      next: () => {
        alert('Reserva feita com sucesso!');
        this.resetarFormulario();
      },
      error: err => {
        console.error('Erro ao criar reserva:', err);
        alert('Erro ao fazer reserva.');
      }
    });
  }

  resetarFormulario() {
    this.idVeiculo = '';
    this.idUsuario = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.tipoUso = '';
  }
}